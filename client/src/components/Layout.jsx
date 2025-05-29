import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

export default function Layout() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Header />

      <Outlet />
    </div>
  );
}
