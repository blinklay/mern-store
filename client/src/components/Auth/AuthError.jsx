export default function AuthError({ error }) {
  if (!error) return null;

  return (
    <div className="mb-4 p-2 bg-red-100 text-red-700 text-sm rounded">
      {error}
    </div>
  );
}
