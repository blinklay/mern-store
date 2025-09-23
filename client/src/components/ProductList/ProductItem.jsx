import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userSelect } from "../../feuters/user/user-select";
import { MODAL_TYPES, openModal } from "../../feuters/modal/modal-slice";
import { addToCart } from "../../feuters/cart/cart-thunk";
import { cartSelect } from "../../feuters/cart/cart-select";

export default function ProductItem({ product }) {
  const { title, brand, price, currency, images, slug, variants } = product;
  const primaryImage = images.find((i) => i.isPrimary);
  const { isAuth } = useSelector(userSelect);
  const { loading: addCartLoading } = useSelector(cartSelect);
  const dispatch = useDispatch();
  const defaultVariant = variants.filter((v) => v.stock > 0)[0].size;

  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleCart = () => {
    if (!isAuth) {
      dispatch(
        openModal({ content: "Войдите в аккаунт!", type: MODAL_TYPES.DANGER })
      );
    }
    dispatch(addToCart({ slug, variant: defaultVariant, count: 1 }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="w-full h-48 flex items-center justify-center bg-white">
        {!loaded && !error && (
          <div className="animate-pulse bg-gray-300 w-full h-full" />
        )}
        {!error ? (
          <img
            loading="lazy"
            src={primaryImage?.url}
            alt={primaryImage?.alt || title}
            className={`w-full h-48 object-contain transition-opacity duration-500 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setLoaded(true)}
            onError={() => {
              setError(true);
              setLoaded(true);
            }}
          />
        ) : (
          <img
            src="/placeholder.png"
            alt="Нет изображения"
            className="w-full h-48 object-contain"
          />
        )}
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <Link to={`/products/${slug}`}>
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
        </Link>
        <p className="text-sm text-gray-500 mb-2">{brand}</p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-gray-500 font-bold text-lg">
            {price} {currency}
          </span>
          <button
            disabled={addCartLoading}
            onClick={handleCart}
            className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800 transition disabled:opacity-[0.5]"
          >
            {addCartLoading ? "Загрузка..." : "В корзину"}
          </button>
        </div>
      </div>
    </div>
  );
}
