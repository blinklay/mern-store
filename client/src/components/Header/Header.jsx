import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { useSelector } from "react-redux";

export default function Header() {
  const user = useSelector((state) => state.user.user);

  return (
    <header className="bg-white shadow-sm px-4 py-3 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold text-black">
        <img src="/logo.png" alt="Logo" className="max-w-[100px]" />
      </Link>

      <Navigation user={user} />
    </header>
  );
}
