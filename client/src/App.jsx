import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CurrentProductPage from "./pages/CurrentProductPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import Header from "./components/Header/Header";
import AccountPage from "./pages/AccountPage";
import GlobalModal from "./components/GlobalModal";
import AuthRoute from "./components/AuthRoute";
import { useDispatch } from "react-redux";
import { getSelf } from "./feuters/user/user-thunk";
import AboutPage from "./pages/AboutPage";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSelf());
  }, []);
  return (
    <>
      <div className="max-w-[1420px] mx-auto px-3">
        <Header />
        <main className="pt-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:slug" element={<CurrentProductPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route element={<AuthRoute />}>
              <Route path="/cart" element={<CartPage />} />
            </Route>
            <Route path="/account" element={<AccountPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <footer></footer>
      </div>
      <GlobalModal />
    </>
  );
}
