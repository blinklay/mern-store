import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAxios } from "../../hooks/useAxios";
import { useEffect } from "react";
import { fetchUser } from "../../redux/actions/fetchUser.action";

export default function CartButton({ id }) {
  const isAuth = useSelector((state) => state.user.isAuth);
  const cart = useSelector((state) => state.user?.user?.cart);
  const dispatch = useDispatch();

  const {
    deleteData: removeCart,
    data: removeCartResponse,
    loading: removeCartLoading,
    error: removeCartError,
  } = useAxios();

  const {
    postData: postCart,
    data: addCartResponse,
    loading: addCartLoading,
    error: addCartError,
  } = useAxios();

  function addToCart() {
    postCart(`/cart/${id}`);
  }

  function removeFromCart() {
    removeCart(`/cart/${id}`);
  }

  useEffect(() => {
    dispatch(fetchUser());
  }, [addCartResponse, removeCartResponse]);

  useEffect(() => {
    // .. error listener .. //
  }, [addCartError, removeCartError]);

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
    const inCart = cart.find((item) => item.product.toString() === id);

    if (inCart) {
      return (
        <div
          className={`flex items-center justify-between border rounded-lg px-3 py-2 w-full opacity-[${
            addCartLoading || removeCartLoading ? "0.5" : "1"
          }]`}
        >
          <button
            onClick={removeFromCart}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
          >
            −
          </button>
          <span className="text-lg font-medium">{inCart.quantity}</span>
          <button
            onClick={addToCart}
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
      onClick={addToCart}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
    >
      Добавить в корзину
    </button>
  );
}
