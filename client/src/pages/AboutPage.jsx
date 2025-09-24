import React from "react";
import Accordion from "../components/Accordion";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold text-xl">Ответы на вопросы:</p>
      <Accordion />
    </div>
  );
}
