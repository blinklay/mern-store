import { useSelector } from "react-redux";

export default function UserPage() {
  const user = useSelector((state) => state.user.user);
  console.log(user);

  return <div>User.page</div>;
}
