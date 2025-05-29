export default function AuthForm({
  form,
  mode,
  onChange,
  onSubmit,
  isLoading,
}) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="border rounded px-4 py-2"
        value={form.email}
        onChange={onChange}
        required
        disabled={isLoading}
      />
      <input
        type="password"
        name="password"
        placeholder="Пароль"
        className="border rounded px-4 py-2"
        value={form.password}
        onChange={onChange}
        required
        disabled={isLoading}
      />
      {mode === "register" && (
        <input
          type="password"
          name="confirmPassword"
          placeholder="Повторите пароль"
          className="border rounded px-4 py-2"
          value={form.confirmPassword}
          onChange={onChange}
          required
          disabled={isLoading}
        />
      )}
      <button
        type="submit"
        className="bg-black text-white py-2 rounded hover:bg-gray-800 transition"
        disabled={isLoading}
      >
        {isLoading
          ? "Загрузка..."
          : mode === "login"
          ? "Войти"
          : "Зарегистрироваться"}
      </button>
    </form>
  );
}
