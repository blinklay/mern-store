import { useEffect } from "react";
import { useAxios } from "../hooks/useAxios";
import ProductList from "../components/ProductList/ProductList";
import Loader from "../components/Catalog/Loader";
import ErrorMessage from "../components/Catalog/ErrorMessage";
import CatalogSort from "../components/Catalog/CatalogSort/CatalogSort";
import useLocalStorage from "../hooks/useLoadlStorage";
import Sidebar from "../components/Catalog/Sidebar";

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

const defaultFilterSetting = {
  category: null,
  brand: null,
};

export default function CatalogPage() {
  const { data, loading, error, getData } = useAxios(initialData);
  const [sort, setSort] = useLocalStorage("sort", sortOptions[0]);
  const [filterSettings, setFilterSetting] = useLocalStorage(
    "filter",
    defaultFilterSetting
  );
  const categories = data.products.map((item) => item.category);
  const brands = data.products.map((item) => item.brand);

  useEffect(() => {
    getData(
      `/products?sort=${sort}&brand=${filterSettings.brand}&category=${filterSettings.category}`
    );
  }, [sort, filterSettings]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <>
      <div className="mt-5">
        <CatalogSort setSort={setSort} options={sortOptions} sort={sort} />

        <div className="flex gap-4 items-start">
          <Sidebar
            categories={categories}
            brands={brands}
            setFilterSetting={setFilterSetting}
            selectedCategory={filterSettings.category}
            selectedBrand={filterSettings.brand}
          />
          <ProductList items={data.products} />
        </div>
      </div>
    </>
  );
}
