const baseUrl = import.meta.env.VITE_BASE_URL;

function truncateText(text, maxLength) {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

export default function ProductCard({
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
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg p-4 bg-white transition hover:shadow-xl">
      <img
        src={baseUrl + imageUrl}
        alt={name}
        className="w-full h-60 object-cover rounded-xl"
      />

      <div className="mt-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500 mb-1">Бренд: {brand}</p>
        {category?.name && (
          <p className="text-sm text-gray-500 mb-1">
            Категория: {category.name}
          </p>
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
    </div>
  );
}
