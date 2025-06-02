const baseUrl = import.meta.env.VITE_BASE_URL;

export default function CartItem({ item }) {
  const { product, quantity } = item;
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow mb-4">
      <div className="flex items-center space-x-4">
        <img
          src={baseUrl + product.imageUrl}
          alt={product.name}
          className="w-20 h-20 object-cover rounded-lg"
        />
        <div>
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.brand}</p>
          <p className="text-sm text-gray-700 mt-1">
            Цена: <span className="font-medium">{product.price} ₽</span>
          </p>

          <div className="flex items-center gap-2 mt-2">
            <button
              className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300 text-lg font-semibold"
              // onClick={() => handleDecrease(product._id)}
            >
              −
            </button>
            <span className="text-base font-medium">{quantity}</span>
            <button
              className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300 text-lg font-semibold"
              // onClick={() => handleIncrease(product._id)}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="text-right">
          <p className="text-gray-800 font-semibold">
            {product.price * quantity} ₽
          </p>
        </div>
        <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
          Удалить
        </button>
      </div>
    </div>
  );
}
