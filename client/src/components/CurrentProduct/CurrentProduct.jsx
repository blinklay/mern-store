import React, { useState } from "react";
import Variants from "./Variants";
import SubmitButton from "../SubmitButton";
import Tabs from "./Tabs";
import ProductGallery from "./ProductGallery";
import { useDispatch, useSelector } from "react-redux";
import { userSelect } from "../../feuters/user/user-select";
import { MODAL_TYPES, openModal } from "../../feuters/modal/modal-slice";
import { cartSelect } from "../../feuters/cart/cart-select";
import { addToCart } from "../../feuters/cart/cart-thunk";

export default function CurrentProduct({ product }) {
  const { title, price, currency, variants, tabs, images, isActive } = product;
  const [currentVariant, setCurrentVariant] = useState(null);
  const { isAuth } = useSelector(userSelect);
  const dispatch = useDispatch();
  const { loading } = useSelector(cartSelect);

  const handleCart = () => {
    if (!isAuth) {
      dispatch(
        openModal({ content: "Войдите в аккаунт!", type: MODAL_TYPES.DANGER })
      );
      return;
    }

    if (!currentVariant) {
      dispatch(
        openModal({ content: "Выберете размер!", type: MODAL_TYPES.DANGER })
      );
      return;
    }

    dispatch(
      addToCart({ slug: product.slug, variant: currentVariant, count: 1 })
    );
  };

  return (
    <div className="flex gap-2 justify-between">
      <ProductGallery images={images} />
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="font-light">
          {price} {currency}
        </p>
        <Variants
          variants={variants}
          currentVariant={currentVariant}
          setCurrentVariant={setCurrentVariant}
        />
        <div className="max-w-[300px]">
          <SubmitButton
            onClick={handleCart}
            disabled={!isActive}
            loading={loading}
          >
            {isActive ? "В корзину" : "Недоступно"}
          </SubmitButton>
        </div>
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}
