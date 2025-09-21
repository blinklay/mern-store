import React from "react";
import Spinner from "./Spinner";

export default function PageLoader() {
  return (
    <div className="flex gap-2 items-center justify-center text-xl">
      <Spinner color={"black"} /> Загрузка...
    </div>
  );
}
