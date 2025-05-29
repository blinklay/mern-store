export default function AuthHeader({ mode }) {
  return (
    <h2 className="text-2xl font-semibold mb-4 text-center">
      {mode === "login" ? "Вход" : "Регистрация"}
    </h2>
  );
}
