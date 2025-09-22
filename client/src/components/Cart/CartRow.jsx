import React from "react";

export default function CartRow({ product, count, variant, handleAddToCart }) {
  const { images, title, price, slug } = product;
  const { url } = images.find((i) => i.isPrimary);

  return (
    <tr className="border-b">
      <td className="py-4 px-4">
        <div className="flex items-center gap-4">
          <img
            src={url}
            alt="DAZE x AA - Night Ride Purple Hoodie"
            className="w-16 h-16 object-contain border rounded"
          />
          <div className="leading-tight">
            <div className="font-medium">{title}</div>
            <div className="text-gray-500 mt-1">Размер: {variant}</div>
          </div>
        </div>
      </td>
      <td className="py-4 px-4 whitespace-nowrap">₽&nbsp;{price}</td>
      <td className="py-4 px-4">
        <div className="inline-flex items-center border rounded">
          <button
            className="px-3 py-2 hover:bg-gray-100 disabled:opacity-[0.5  ]"
            aria-label="Уменьшить"
          >
            −
          </button>
          <span className="px-4 select-none">{count}</span>
          <button
            className="px-3 py-2 hover:bg-gray-100 disabled:opacity-[0.5  ]"
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
        <button className="text-gray-500 hover:text-black" aria-label="Удалить">
          ×
        </button>
      </td>
    </tr>
  );
}
