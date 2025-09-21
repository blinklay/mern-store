import { useEffect, useState } from "react";
import RegisterForm from "../components/RegisterFrom/RegisterFrom";
import { useDispatch, useSelector } from "react-redux";
import { userSelect } from "../feuters/user/user-select";
import { register } from "../feuters/user/user-thunk";
import { useNavigate } from "react-router-dom";
import { MODAL_TYPES, openModal } from "../feuters/modal/modal-slice";

const initialformData = { email: "", password: "" };

export default function RegisterPage() {
  const [formData, setFormData] = useState(initialformData);
  const dispatch = useDispatch();
  const { error, loading, isAuth } = useSelector(userSelect);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/");
      dispatch(
        openModal({
          content: "Успешная регистрация!",
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
    dispatch(register(formData));
    setFormData(initialformData);
  };

  return (
    <>
      <h1 className="text-2xl font-medium text-center">Регистрация</h1>
      <RegisterForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
        error={error}
        loading={loading}
      />
    </>
  );
}
