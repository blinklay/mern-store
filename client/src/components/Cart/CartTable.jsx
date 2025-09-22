import React from "react";
import CartRow from "./CartRow";

export default function CartTable({ cart, handleAddToCart }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b">
            <th className="py-3 px-4 text-left font-semibold">Название</th>
            <th className="py-3 px-4 text-left font-semibold w-32">Цена</th>
            <th className="py-3 px-4 text-left font-semibold w-48">
              Количество
            </th>
            <th className="py-3 px-4 text-left font-semibold w-32">Итого</th>
            <th className="py-3 px-4 w-10"></th>
          </tr>
        </thead>

        <tbody className="align-middle">
          {cart.map((p) => (
            <CartRow key={p.variant} {...p} handleAddToCart={handleAddToCart} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
