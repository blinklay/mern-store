export default function Sidebar({
  categories,
  brands,
  setFilterSetting,
  selectedCategory,
  selectedBrand,
}) {
  function onFilter(type, value) {
    setFilterSetting((prev) => ({
      ...prev,
      [type]: value,
    }));
  }

  return (
    <aside className="w-full sm:w-80 p-4 bg-white rounded-lg shadow-md">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Категории</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onFilter("category", null)}
            className={`text-left text-sm border px-3 py-2 rounded-md transition ${
              selectedCategory === null
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            Все категории
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onFilter("category", category)}
              className={`text-left text-sm border px-3 py-2 rounded-md transition ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Бренды</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onFilter("brand", null)}
            className={`text-left text-sm px-3 py-2 rounded-md transition border ${
              selectedBrand === null
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            Все бренды
          </button>
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => onFilter("brand", brand)}
              className={`text-left px-3 py-2 rounded-md transition text-sm border ${
                selectedBrand === brand
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {brand}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
