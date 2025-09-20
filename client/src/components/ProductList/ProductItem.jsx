import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductItem({ product }) {
  const { title, brand, price, currency, images, slug } = product;
  const primaryImage = images.find((i) => i.isPrimary);

  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="w-full h-48 flex items-center justify-center bg-white">
        {!loaded && !error && (
          <div className="animate-pulse bg-gray-300 w-full h-full" />
        )}
        {!error ? (
          <img
            loading="lazy"
            src={primaryImage?.url}
            alt={primaryImage?.alt || title}
            className={`w-full h-48 object-contain transition-opacity duration-500 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setLoaded(true)}
            onError={() => {
              setError(true);
              setLoaded(true);
            }}
          />
        ) : (
          <img
            src="/placeholder.png"
            alt="Нет изображения"
            className="w-full h-48 object-contain"
          />
        )}
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <Link to={`/products/${slug}`}>
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
        </Link>
        <p className="text-sm text-gray-500 mb-2">{brand}</p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-gray-500 font-bold text-lg">
            {price} {currency}
          </span>
          <button className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800 transition">
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
}
