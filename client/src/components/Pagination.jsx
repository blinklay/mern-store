import React from "react";

function getPaginationRange(current, total, delta = 1) {
  const range = [];
  const left = Math.max(2, current - delta);
  const right = Math.min(total - 1, current + delta);

  range.push(1);

  if (left > 2) range.push("...");

  for (let i = left; i <= right; i++) {
    range.push(i);
  }

  if (right < total - 1) range.push("...");

  if (total > 1) range.push(total);

  return range;
}

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = getPaginationRange(currentPage, totalPages);

  return (
    <div className="flex gap-2 justify-center mt-8">
      {pages.map((page, idx) =>
        page === "..." ? (
          <span key={idx} className="px-2 text-gray-500">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded ${
              page === currentPage
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        )
      )}
    </div>
  );
}
