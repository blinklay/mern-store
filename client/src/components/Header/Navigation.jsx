import { Link } from "react-router-dom";

export default function Navigation({ user }) {
  return (
    <nav className="flex gap-6 items-center text-sm font-medium">
      <Link to="/" className="hover:text-gray-700 transition">
        Главная
      </Link>
      <Link to="/catalog" className="hover:text-gray-700 transition">
        Каталог
      </Link>
      <Link to="/cart" className="hover:text-gray-700 transition">
        Корзина
      </Link>

      {/* User Section */}
      {user ? (
        <Link
          to="/profile"
          className="text-black font-semibold hover:underline"
        >
          {user.email}
        </Link>
      ) : (
        <Link
          to="/auth"
          className="px-3 py-1 border rounded text-sm hover:bg-gray-100 transition"
        >
          Войти
        </Link>
      )}
    </nav>
  );
}
