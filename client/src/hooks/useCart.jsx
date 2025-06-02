import { useDispatch, useSelector } from "react-redux";
import { useAxios } from "./useAxios";
import { useEffect, useState } from "react";
import { fetchUser } from "../redux/actions/fetchUser.action";

export default function useCart() {
  const cart = useSelector((state) => state.user?.user?.cart);
  const [cartLoading, setCartLoading] = useState(false);
  const [cartError, setCartError] = useState(null);
  const dispatch = useDispatch();

  const {
    postData: increaseCart,
    data: increaseCartResponse,
    error: increaseCartError,
    loading: increaseCartLoading,
  } = useAxios();

  const {
    deleteData: removeCart,
    data: removeCartResponse,
    error: removeCartError,
    loading: removeCartLoading,
  } = useAxios();

  useEffect(() => {
    dispatch(fetchUser());
  }, [increaseCartResponse, removeCartResponse]);

  useEffect(() => {
    if (removeCartError || increaseCartError)
      setCartError(removeCartError || increaseCartError);
    else setCartError(null);
  }, [removeCartError, increaseCartError]);

  useEffect(() => {
    if (increaseCartLoading || removeCartLoading) setCartLoading(true);
    else setCartLoading(false);
  }, [removeCartLoading, increaseCartLoading]);

  function decreaseFromCart(productId) {
    removeCart(`/cart/${productId}`);
  }

  function increaseToCart(productId) {
    increaseCart(`/cart/${productId}`);
  }

  function removeFromCart(productId) {
    removeCart(`/cart/${productId}?force=true`);
  }

  return {
    decreaseFromCart,
    increaseToCart,
    removeFromCart,
    cart,
    cartLoading,
    cartError,
  };
}
