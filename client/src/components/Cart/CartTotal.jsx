const CartTotal = ({ countProducts, totalPrice, setModalOpen }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md w-full max-w-md sticky top-6">
      <h2 className="text-2xl font-bold mb-4">Оформление заказа</h2>

      <div className="flex justify-between mb-2">
        <span className="text-gray-700">Товаров в корзине:</span>
        <span className="font-medium">{countProducts} шт.</span>
      </div>

      <div className="flex justify-between mb-4">
        <span className="text-gray-700 text-lg">Общая сумма:</span>
        <span className="text-lg font-semibold">{totalPrice} ₽</span>
      </div>

      <button
        onClick={() => setModalOpen(true)}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
        disabled={countProducts === 0}
      >
        Перейти к оформлению
      </button>
    </div>
  );
};

export default CartTotal;
