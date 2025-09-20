import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { userSelect } from "../../feuters/user/user-select";
export default function UserNav() {
  const { isAuth } = useSelector(userSelect);

  return (
    <ul className="flex space-x-6 text uppercase p-4 text-xl">
      <li>
        <Link to="/cart" className="  hover:text-gray-300 transition-colors">
          <FaShoppingCart />
        </Link>
      </li>
      <li>
        <Link
          to={isAuth ? `/account` : "/login"}
          className="hover:text-gray-300 transition-colors"
        >
          <FaUser />
        </Link>
      </li>
    </ul>
  );
}
