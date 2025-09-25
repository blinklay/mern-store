import React from "react";
import { useSelector } from "react-redux";
import { userSelect } from "../feuters/user/user-select";
import ChangePassword from "../components/ChangePassword";
import { IoMdExit } from "react-icons/io";
import UserOrders from "../components/UserOrders/UserOrders";

export default function AccountPage() {
  const { user } = useSelector(userSelect);
  return (
    <div>
      <div className="flex items-center gap-2 justify-between">
        <h1 className="text-xl font-medium">Пользователь - {user.email}</h1>
        <button className="bg-red-300 p-2 rounded-sm text-white border border-red-600 hover:bg-red-500 transition flex items-center gap-2">
          <IoMdExit />
          Выйти
        </button>
      </div>
      <ChangePassword />
      <UserOrders />
    </div>
  );
}
