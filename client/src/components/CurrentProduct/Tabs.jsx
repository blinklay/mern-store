import React, { useState } from "react";

export default function Tabs({ tabs = [] }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    tabs &&
    tabs.length > 0 && (
      <div className="mt-2">
        <div className="flex gap-4 ">
          {tabs.map((t, index) => (
            <button
              className={`${
                index === activeTab ? "text-gray-300" : ""
              } hover:text-gray-300 transition`}
              onClick={() => setActiveTab(index)}
              key={t.key}
            >
              {t.title}
            </button>
          ))}
        </div>
        <div className="max-w-[650px] mt-4">{tabs[activeTab].content}</div>
      </div>
    )
  );
}
