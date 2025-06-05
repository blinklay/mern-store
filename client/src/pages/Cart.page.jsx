import { useSelector } from "react-redux";
import CartList from "../components/Cart/CartList";
import CartTotal from "../components/Cart/CartTotal";
import useHelmet from "../hooks/useHelmet";
import OrderModal from "../components/OrderModal/OrderModal";
import { useState } from "react";

function calculatePrice(cart) {
  return cart.reduce((sum, item) => {
    return sum + item.product.price * item.quantity;
  }, 0);
}

export default function CartPage() {
  useHelmet("Корзина");
  const [modalOpen, setModalOpen] = useState(false);
  const cart = useSelector((state) => state.user.user.cart);

  if (!cart || cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto mt-10 text-center text-gray-600">
        <h2 className="text-2xl font-semibold mb-4">Корзина пуста</h2>
        <p>Добавьте товары, чтобы увидеть их здесь.</p>
      </div>
    );
  }

  return (
    <div className="mt-10">
      <OrderModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <h2 className="text-2xl font-bold mb-6">Ваша корзина</h2>

      <div className="flex gap-4 w-full justify-between items-start">
        <CartList items={cart} />
        <CartTotal
          countProducts={cart.length}
          totalPrice={calculatePrice(cart)}
          setModalOpen={setModalOpen}
        />
      </div>
    </div>
  );
}
