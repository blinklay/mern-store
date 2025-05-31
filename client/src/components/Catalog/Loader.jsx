export default function Loader() {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-800" />
      <span className="ml-4 text-gray-600 text-lg">Загрузка...</span>
    </div>
  );
}
