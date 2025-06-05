import Select from "react-select";
import Loader from "../Catalog/Loader";

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

export default function PointSelector({ data, loading }) {
  if (loading) return <Loader />;
  const options = data.map((item) => ({
    value: item._id,
    label: item.address,
  }));
  return (
    <div className="mt-4">
      <h2 className="mb-2 font-medium">Выберете пункт доставки:</h2>
      <Select
        defaultValue={options[0]}
        styles={customStyles}
        options={options}
      />
    </div>
  );
}
