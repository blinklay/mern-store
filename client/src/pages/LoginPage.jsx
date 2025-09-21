import { useEffect, useState } from "react";
import LoginForm from "../components/LoginFrom/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { userSelect } from "../feuters/user/user-select";
import { login } from "../feuters/user/user-thunk";
import { useNavigate } from "react-router-dom";
import { MODAL_TYPES, openModal } from "../feuters/modal/modal-slice";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { loading, error, isAuth } = useSelector(userSelect);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/");
      dispatch(
        openModal({
          content: "Успешная авторизация!",
          type: MODAL_TYPES.SUCCESS,
        })
      );
    }
  }, [isAuth]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  return (
    <>
      <h1 className="text-2xl font-medium text-center">Авторизация</h1>
      <LoginForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
        error={error}
        loading={loading}
      />
    </>
  );
}
