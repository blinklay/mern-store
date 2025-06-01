import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/Home.page";
import AuthPage from "./pages/Auth.page";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "./redux/actions/fetchUser.action";
import CatalogPage from "./pages/Catalog.page";
import UserPage from "./pages/User.page";
import PrivateRoute from "./utils/PrivateRoute";
import CartPage from "./pages/Cart.page";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route
          path="/user"
          element={
            <PrivateRoute>
              <UserPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}
