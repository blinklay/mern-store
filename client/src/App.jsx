import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/Home.page";
import AuthPage from "./pages/Auth.page";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "./redux/actions/fetchUser.action";

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
      </Route>
    </Routes>
  );
}
