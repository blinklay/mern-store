import CartItem from "./CartItem";

export default function CartList({ items }) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <CartItem item={item} key={item._id} />
      ))}
    </div>
  );
}
