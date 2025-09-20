import React from "react";
import { Link } from "react-router-dom";

export default function LoginForm({ formData, handleSubmit, handleChange }) {
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-10 p-6 bg-white rounded shadow"
    >
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">
          Почта:
          <input
            onChange={handleChange}
            value={formData.email}
            placeholder="exaple@mail.org"
            type="email"
            name="email"
            className="mt-1 block w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </label>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">
          Пароль:
          <input
            value={formData.password}
            onChange={handleChange}
            placeholder="********"
            type="password"
            name="password"
            className="mt-1 block w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </label>
      </div>
      <button
        type="submit"
        className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-500 focus:bg-gray-500 transition"
      >
        Войти
      </button>
      <div className="flex text-sm mt-4 gap-2 ">
        Нет аккаунта?
        <Link to="/register" className="text-blue-400 underline">
          Регистрация!
        </Link>
      </div>
    </form>
  );
}
