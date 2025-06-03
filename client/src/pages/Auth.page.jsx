import { useState } from "react";
import AuthForm from "../components/Auth/Authform";
import AuthError from "../components/Auth/AuthError";
import AuthHeader from "../components/Auth/AuthHeader";
import axiosInstance from "../axios";
import { useDispatch } from "react-redux";
import { fetchUser } from "../redux/actions/fetchUser.action";
import { handleAxiosError } from "../utils/handleAxiosError";
import useHelmet from "../hooks/useHelmet";

const initialFormData = {
  email: "",
  password: "",
  confirmPassword: "",
};

export default function AuthPage() {
  useHelmet("Авторизация");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState(initialFormData);

  function clearForm() {
    setForm(initialFormData);
  }

  const onSubmit = async (formData, mode) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await axiosInstance.post(`/auth/${mode}`, formData);
      if (!res.data.user) {
        dispatch(fetchUser());
      } else {
        setMode("login");
      }
      clearForm();
    } catch (err) {
      setError(handleAxiosError(err));
    } finally {
      setIsLoading(false);
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
