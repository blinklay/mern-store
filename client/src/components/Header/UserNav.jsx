import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";
export default function UserNav() {
  return (
    <ul className="flex space-x-6 text uppercase p-4 text-xl">
      <li>
        <Link to="/cart" className="  hover:text-gray-300 transition-colors">
          <FaShoppingCart />
        </Link>
      </li>
      <li>
        <Link to="/login" className="hover:text-gray-300 transition-colors">
          <FaUser />
        </Link>
      </li>
    </ul>
  );
}
