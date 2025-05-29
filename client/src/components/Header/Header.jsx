import { Link } from "react-router-dom";
import Navigation from "./Navigation";

export default function Header({ user }) {
  return (
    <header className="bg-white shadow-sm px-4 py-3 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold text-black">
        GuitarShop
      </Link>

      <Navigation user={user} />
    </header>
  );
}
