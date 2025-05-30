import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/Home.page";
import AuthPage from "./pages/Auth.page";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./redux/actions/fetchUser.action";
import CatalogPage from "./pages/Catalog.page";
import UserPage from "./pages/User.page";
import PrivateRoute from "./utils/PrivateRoute";

export default function App() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route
          path="/user"
          element={
            <PrivateRoute>
              <UserPage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}
