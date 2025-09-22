import React from "react";
import { useSelector } from "react-redux";
import { userSelect } from "../feuters/user/user-select";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthRoute() {
  const { user, isAuth } = useSelector(userSelect);
  return user && isAuth ? <Outlet /> : <Navigate to="/login" />;
}
