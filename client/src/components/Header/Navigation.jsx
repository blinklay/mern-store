import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="p-4">
      <ul className="flex space-x-6 text uppercase">
        <li>
          <Link to="/" className="   hover:text-gray-300 transition-colors">
            Главная
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className=" hover:text-gray-300 transition-colors"
          >
            Товары
          </Link>
        </li>
        <li>
          <Link to="/about" className=" hover:text-gray-300 transition-colors">
            FAQ
          </Link>
        </li>
        <li>
          <Link
            to="/contacts"
            className=" hover:text-gray-300 transition-colors"
          >
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
}
