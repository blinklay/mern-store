import { useState } from "react";
import AuthForm from "../components/Auth/Authform";
import AuthError from "../components/Auth/AuthError";
import AuthHeader from "../components/Auth/AuthHeader";

const isLoading = false;
const error = null;

export default function AuthPage() {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onSubmit = (formData, mode) => {
    if (mode === "login") {
      console.log("login requset:", formData);
    } else {
      console.log("register request:", formData);
    }
  };

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mode === "register" && form.password !== form.confirmPassword) {
      alert("Пароли не совпадают");
      return;
    }

    onSubmit(form, mode);
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 border rounded shadow">
      <AuthHeader mode={mode} />

      <AuthError error={error} />

      <AuthForm
        mode={mode}
        form={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />

      <p className="text-center mt-4 text-sm">
        {mode === "login" ? "Нет аккаунта?" : "Уже есть аккаунт?"}{" "}
        <button
          type="button"
          onClick={() => setMode(mode === "login" ? "register" : "login")}
          className="text-blue-600 hover:underline"
        >
          {mode === "login" ? "Зарегистрируйтесь" : "Войдите"}
        </button>
      </p>
    </div>
  );
}
