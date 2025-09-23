import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../feuters/cart/cart-thunk";
import { Link } from "react-router-dom";

export default function CartRow({ product, count, variant }) {
  const { images, title, price, slug, variants } = product;
  const { stock } = variants.find((v) => v.size === variant);

  const { url } = images.find((i) => i.isPrimary);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ slug, variant, count: 1 }));
  };

  const handleRemoveFromCart = (count) => {
    dispatch(removeFromCart({ slug, variant, count }));
  };

  return (
    <tr className="border-b">
      <td className="py-4 px-4">
        <div className="flex items-center gap-4">
          <Link to={`/products/${slug}`}>
            <img
              src={url}
              alt="DAZE x AA - Night Ride Purple Hoodie"
              className="w-16 h-16 object-contain border rounded"
            />
          </Link>
          <div className="leading-tight">
            <Link to={`/products/${slug}`} className="font-medium">
              {title}
            </Link>
            <div className="text-gray-500 mt-1">Размер: {variant}</div>
          </div>
        </div>
      </td>
      <td className="py-4 px-4 whitespace-nowrap">₽&nbsp;{price}</td>
      <td className="py-4 px-4">
        <div className="inline-flex items-center border rounded">
          <button
            disabled={count === 1}
            className="px-3 py-2 hover:bg-gray-100 disabled:opacity-[0.5] disabled:bg-gray-200"
            aria-label="Уменьшить"
            onClick={() => handleRemoveFromCart(1)}
          >
            −
          </button>
          <span className="px-4 select-none">{count}</span>
          <button
            disabled={count === stock}
            className="px-3 py-2 hover:bg-gray-100 disabled:opacity-[0.5] disabled:bg-gray-200"
            aria-label="Увеличить"
            onClick={() => handleAddToCart(slug, variant)}
          >
            +
          </button>
        </div>
      </td>
      <td className="py-4 px-4 whitespace-nowrap font-medium">
        ₽&nbsp;{price * count}
      </td>
      <td className="py-4 px-4 text-center">
        <button
          onClick={() => handleRemoveFromCart(count)}
          className="text-gray-500 hover:text-black"
          aria-label="Удалить"
        >
          ×
        </button>
      </td>
    </tr>
  );
}
