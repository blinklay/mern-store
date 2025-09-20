import { useState } from "react";
import RegisterForm from "../components/RegisterFrom/RegisterFrom";

const initialformData = { email: "", password: "" };

export default function RegisterPage() {
  const [formData, setFormData] = useState(initialformData);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialformData);
  };

  return (
    <>
      <h1 className="text-2xl font-medium text-center">Регистрация</h1>
      <RegisterForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
      />
    </>
  );
}
