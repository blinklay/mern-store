import React from "react";
import SubmitButton from "./SubmitButton";

export default function ChangePassword() {
  return (
    <div className="mt-4 bg-gray-200 p-3 max-w-[600px]">
      <p className="text-xl font-bold">Сменить пароль: </p>
      <form className="flex flex-col gap-3 mt-4">
        <label className="flex flex-col gap-2">
          Старый пароль:
          <input
            className="p-2 bg-gray-100"
            type="password"
            name="old_password"
            placeholder="******"
          />
        </label>
        <label className="flex flex-col gap-2">
          Новый пароль:
          <input
            className="p-2 bg-gray-100"
            type="password"
            name="new_password"
            placeholder="******"
          />
        </label>

        <SubmitButton>Сохранить</SubmitButton>
      </form>
    </div>
  );
}
