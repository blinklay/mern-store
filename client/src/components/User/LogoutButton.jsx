export function LogoutButton({ onLogout }) {
  return (
    <button
      onClick={onLogout}
      className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition"
    >
      Выйти
    </button>
  );
}
