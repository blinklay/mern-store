import React from "react";

export default function Spinner({ color = "white" }) {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`animate-spin rounded-full h-8 w-8 border-4 border-${color} border-t-transparent`}
      ></div>
    </div>
  );
}
