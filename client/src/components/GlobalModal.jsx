import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, MODAL_TYPES } from "../feuters/modal/modal-slice";
import { createPortal } from "react-dom";

export default function GlobalModal() {
  const dispatch = useDispatch();
  const { isOpen, content, type } = useSelector((state) => state.modal);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => dispatch(closeModal()), 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, dispatch]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed top-4 right-4 z-50">
      <div
        className={`${
          type === MODAL_TYPES.DANGER && "bg-red-300 border border-red-500"
        } ${
          type === MODAL_TYPES.SUCCESS && "bg-green-300 border border-green-500"
        } text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 animate-in fade-in slide-in-from-bottom-4`}
      >
        {content}
        <button
          className="ml-2 text-sm opacity-70 hover:opacity-100"
          onClick={() => dispatch(closeModal())}
        >
          ✕
        </button>
      </div>
    </div>,
    document.body
  );
}
