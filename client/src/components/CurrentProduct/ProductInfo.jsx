import CartButton from "../ProductList/CartButton";

export default function ProductInfo({
  id,
  name,
  brand,
  category,
  description,
  price,
  inStock,
}) {
  return (
    <div className="md:w-1/2">
      <h1 className="text-3xl font-bold mb-2">{name}</h1>
      <p className="text-gray-600 mb-1">Бренд: {brand}</p>
      <p className="text-gray-600 mb-1">Категория: {category}</p>
      <p className="text-lg font-semibold mb-2 text-green-700">
        {inStock ? "В наличии" : "Нет в наличии"}
      </p>
      <p className="text-2xl font-bold mb-4">{price} ₽</p>
      <p className="text-gray-800 mb-6">{description}</p>

      <CartButton id={id} />
    </div>
  );
}
