import React from "react";
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

export default function App() {
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
            <Route path="/cart" element={<CartPage />} />
            <Route path="/account" element={<AccountPage />} />
          </Routes>
        </main>
        <footer></footer>
      </div>
      <GlobalModal />
    </>
  );
}
