import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useAxios } from "../hooks/useAxios";
import { UserAddress } from "../components/User/UserAddress";
import { LogoutButton } from "../components/User/LogoutButton";
import { UserAvatar } from "../components/User/UserAvatar";

export default function UserPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const { postData, data } = useAxios();

  useEffect(() => {
    if (data?.message) {
      dispatch({ type: "LOGOUT" });
    }
  }, [data]);

  if (!user) return <p>Пользователь не найден</p>;

  const handleLogout = () => {
    postData("/auth/logout");
  };

  const { name, email, avatarUrl, address, isVerified } = user;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-4">
      <UserAvatar
        name={name}
        email={email}
        avatarUrl={avatarUrl}
        isVerified={isVerified}
      />
      <UserAddress address={address} />
      <LogoutButton onLogout={handleLogout} />
    </div>
  );
}
