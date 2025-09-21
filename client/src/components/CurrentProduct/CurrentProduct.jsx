import React, { useState } from "react";
import Variants from "./Variants";
import SubmitButton from "../SubmitButton";
import Tabs from "./Tabs";
import ProductGallery from "./ProductGallery";

export default function CurrentProduct({ product }) {
  const { title, price, currency, variants, tabs, images, isActive } = product;
  const [currentVariant, setCurrentVariant] = useState(null);
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
          <SubmitButton disabled={!isActive}>
            {isActive ? "В корзину" : "Недоступно"}
          </SubmitButton>
        </div>
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}
