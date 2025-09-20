import { useState } from "react";
import LoginForm from "../components/LoginFrom/LoginForm";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <h1 className="text-2xl font-medium text-center">Авторизация</h1>
      <LoginForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
      />
    </>
  );
}
