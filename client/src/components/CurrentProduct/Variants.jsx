export default function Variants({
  variants = [],
  setCurrentVariant,
  currentVariant,
}) {
  return (
    <div>
      <p>Размер {currentVariant ? currentVariant : ""}</p>
      <div className="flex gap-2 mt-2">
        {variants.map((v) => {
          const isInactive = Number(v.stock) === 0;
          return (
            <button
              disabled={isInactive}
              onClick={() => setCurrentVariant(v.size)}
              className={` w-10 h-10 flex items-center justify-center text-sm border-2 disabled:opacity-[0.5] ${
                v.size === currentVariant
                  ? "border-blue-300 bg-gray-200"
                  : "border-transparent bg-gray-300"
              }`}
              key={v.sku}
            >
              {v.size}
            </button>
          );
        })}
      </div>
    </div>
  );
}
