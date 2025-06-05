import { useEffect, useState } from "react";
import { useAxios } from "../hooks/useAxios";
import ProductList from "../components/ProductList/ProductList";
import Loader from "../components/Catalog/Loader";
import ErrorMessage from "../components/Catalog/ErrorMessage";
import CatalogSort from "../components/Catalog/CatalogSort/CatalogSort";
import useLocalStorage from "../hooks/useLoadlStorage";
import Sidebar from "../components/Catalog/Sidebar";
import useHelmet from "../hooks/useHelmet";
import Pagination from "../components/Pagination";

const initialData = {
  page: 1,
  products: [],
  totalPages: 1,
};

const sortOptions = [
  { value: "price_abs", label: "Цена (возв.)" },
  { value: "price_desc", label: "Цена (убыв.)" },
  { value: "rating_desc", label: "Оценка (убыв.)" },
  { value: "rating_abs", label: "Оценка (возв.)" },
];

const defaultFilterSetting = {
  category: null,
  brand: null,
};

export default function CatalogPage() {
  useHelmet("Каталог");
  const { data, loading, error, getData } = useAxios(initialData);
  const [sort, setSort] = useLocalStorage("sort", sortOptions[0]);
  const [filterSettings, setFilterSetting] = useLocalStorage(
    "filter",
    defaultFilterSetting
  );
  const categories = [...new Set(data.products.map((item) => item.category))];
  const brands = [...new Set(data.products.map((item) => item.brand))];
  const [page, setPage] = useState(1);

  useEffect(() => {
    getData(
      `/products?sort=${sort.value}&brand=${filterSettings.brand}&category=${filterSettings.category}&page=${page}`
    );
  }, [sort, filterSettings, page]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  function onPageChange(page) {
    setPage(page);
  }

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

        <Pagination
          currentPage={page}
          totalPages={data.totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
}
