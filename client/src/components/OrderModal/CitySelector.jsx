import { useEffect, useState } from "react";
import Loader from "../Catalog/Loader";
import Select from "react-select";
import axios from "axios";
import PointSelector from "./PointSelector";
const VITE_DELIVERY_API_URL = import.meta.env.VITE_DELIVERY_API_URL;
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

export default function CitySelector({ cities, loading }) {
  const [data, setData] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);

  const options = cities.map((item) => ({
    value: item.code,
    label: item.name,
  }));

  useEffect(() => {
    onChange(options[0].value);
  }, []);

  function onChange(selectCode) {
    setDataLoading(true);

    axios
      .get(
        VITE_DELIVERY_API_URL + "/delivery-points" + "?cityCode=" + selectCode
      )
      .then((res) => setData(res.data.points))
      .finally(() => setDataLoading(false));
  }

  if (loading) return <Loader />;
  return (
    <div>
      <h2 className="mb-2 font-medium">Город</h2>
      <Select
        defaultValue={options[0]}
        styles={customStyles}
        options={options}
        onChange={(select) => onChange(select.value)}
      />

      {data && <PointSelector data={data} loading={dataLoading} />}
    </div>
  );
}
