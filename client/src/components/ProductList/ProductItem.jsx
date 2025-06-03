import CartButton from "./CartButton";

const baseUrl = import.meta.env.VITE_BASE_URL;

function truncateText(text, maxLength) {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

export default function ProductCard({
  _id,
  name,
  brand,
  category,
  description,
  price,
  imageUrl,
  inStock,
  rating,
}) {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg p-4 bg-white transition hover:shadow-xl flex flex-col justify-between gap-3">
      <img
        src={baseUrl + imageUrl}
        alt={name}
        className="w-full h-60 object-cover rounded-xl"
      />

      <div>
        <h2 className="text-xl font-semibold text-gray-800">
          {truncateText(name, 20)}
        </h2>
        <p className="text-sm text-gray-500 mb-1">Бренд: {brand}</p>
        {category && (
          <p className="text-sm text-gray-500 mb-1">Категория: {category}</p>
        )}
        <p className="text-base text-gray-800 font-medium mb-2">
          Цена: {price} ₽
        </p>

        <p className="text-sm text-gray-700 mb-2">
          {truncateText(description, 100)}
        </p>

        <div className="flex justify-between items-center mt-2">
          <span
            className={`px-3 py-1 text-sm rounded-full ${
              inStock
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {inStock ? "В наличии" : "Нет в наличии"}
          </span>

          <span className="text-yellow-500 text-sm">
            ⭐ {rating.toFixed(1)} / 5
          </span>
        </div>
      </div>

      <CartButton id={_id} />
    </div>
  );
}
