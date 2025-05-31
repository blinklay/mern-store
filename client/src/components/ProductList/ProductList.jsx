import ProductItem from "./ProductItem";

export default function ProductList({ items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((item) => (
        <ProductItem key={item._id} {...item} />
      ))}
    </div>
  );
}
