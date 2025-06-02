import { useEffect } from "react";
import { useAxios } from "../hooks/useAxios";
import ProductList from "../components/ProductList/ProductList";
import Loader from "../components/Catalog/Loader";
import ErrorMessage from "../components/Catalog/ErrorMessage";
import CatalogSort from "../components/Catalog/CatalogSort/CatalogSort";
import useLocalStorage from "../hooks/useLoadlStorage";

const initialData = {
  page: 1,
  products: [],
  totalPages: 1,
};

const sortOptions = [
  { value: "price_abs", label: "Цена (возв.)" },
  { value: "price_desc", label: "Цена (убыв.)" },
  { value: "rate_desc", label: "Оценка (убыв.)" },
  { value: "rate_abs", label: "Оценка (возв.)" },
];

export default function CatalogPage() {
  const { data, loading, error, getData } = useAxios(initialData);
  const [sort, setSort] = useLocalStorage("sort", sortOptions[0]);

  useEffect(() => {
    getData(`/products?sort=${sort}`);
  }, [sort]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <>
      <div className="mt-5">
        <CatalogSort setSort={setSort} options={sortOptions} sort={sort} />
        <ProductList items={data.products} />
      </div>
    </>
  );
}
