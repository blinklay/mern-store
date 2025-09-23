import ProductItem from "./ProductItem";

export default function ProductList({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((p) => (
        <ProductItem product={p} key={p._id} />
      ))}
    </div>
  );
}
