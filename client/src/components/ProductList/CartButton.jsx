import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import useCart from "../../hooks/useCart";

export default function CartButton({ id }) {
  const isAuth = useSelector((state) => state.user.isAuth);
  const { cart, cartError, cartLoading, increaseToCart, decreaseFromCart } =
    useCart();

  useEffect(() => {
    // .. error listener .. //
  }, [cartError]);

  if (!isAuth) {
    return (
      <Link
        to="/auth"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
      >
        Добавить в корзину
      </Link>
    );
  }

  if (cart) {
    const inCart = cart.find((item) => item.product._id === id);

    if (inCart) {
      return (
        <div
          className={`flex items-center justify-between border rounded-lg px-3 py-2 w-full opacity-[${
            cartLoading ? "0.5" : 1
          }]`}
        >
          <button
            onClick={() => decreaseFromCart(id)}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            disabled={cartLoading}
          >
            −
          </button>
          <span className="text-lg font-medium">{inCart.quantity}</span>
          <button
            disabled={cartLoading}
            onClick={() => increaseToCart(id)}
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
          >
            +
          </button>
        </div>
      );
    }
  }

  return (
    <button
      onClick={() => increaseToCart(id)}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
    >
      Добавить в корзину
    </button>
  );
}
