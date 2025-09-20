import React from "react";
import Spinner from "./Spinner";

export default function SubmitButton({ children, loading }) {
  return (
    <button
      disabled={loading}
      type="submit"
      className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-500 focus:bg-gray-500 transition disabled:opacity-[0.5]"
    >
      {loading ? (
        <div className="flex items-center gap-2 justify-center">
          <Spinner />
          Загрузка...
        </div>
      ) : (
        <p>{children}</p>
      )}
    </button>
  );
}
