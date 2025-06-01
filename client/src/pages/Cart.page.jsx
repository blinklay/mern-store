import { useSelector } from "react-redux";
import ProductList from "../components/ProductList/ProductList";

export default function CartPage() {
  const cart = useSelector((state) => state.user.cart);

  if (!cart || cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto mt-10 text-center text-gray-600">
        <h2 className="text-2xl font-semibold mb-4">Корзина пуста</h2>
        <p>Добавьте товары, чтобы увидеть их здесь.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold mb-6">Ваша корзина</h2>
      <ProductList items={cart} />
    </div>
  );
}
