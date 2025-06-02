import Select from "react-select";

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#f9fafb",
    borderRadius: "0.5rem",
    padding: "0.25rem",
    borderColor: "#d1d5db",
    boxShadow: "none",
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 10,
  }),
};

export default function CatalogSort({ sort, setSort, options }) {
  return (
    <div className="flex items-center gap-3">
      <p>Сортировать по:</p>
      <Select
        defaultValue={sort}
        styles={customStyles}
        options={options}
        onChange={(selected) => setSort(selected)}
      />
    </div>
  );
}
