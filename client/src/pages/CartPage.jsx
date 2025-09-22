import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartSelect } from "../feuters/cart/cart-select";
import { addToCart, fetchCart } from "../feuters/cart/cart-thunk";
import PageLoader from "../components/PageLoader";
import { MODAL_TYPES, openModal } from "../feuters/modal/modal-slice";
import CartTable from "../components/Cart/CartTable";

export default function CartPage() {
  const { products, loading, error } = useSelector(cartSelect);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  useEffect(() => {
    if (error) {
      dispatch(openModal({ content: error.message, type: MODAL_TYPES.DANGER }));
    }
  }, [error]);

  const handleAddToCart = (slug, variant) => {
    dispatch(addToCart({ slug, variant, count: 1 }));
  };

  if (loading) return <PageLoader />;
  if (products.length === 0 || !products) {
    return (
      <div className="text-center text-xl font-medium">Корзина пуста...</div>
    );
  }
  return (
    <div>
      <CartTable cart={products} handleAddToCart={handleAddToCart} />
    </div>
  );
}
