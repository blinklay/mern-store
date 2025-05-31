import { useEffect } from "react";
import { useAxios } from "../hooks/useAxios";
import ProductList from "../components/ProductList/ProductList";
import Loader from "../components/Catalog/Loader";
import ErrorMessage from "../components/Catalog/ErrorMessage";

const initialData = {
  page: 1,
  products: [],
  totalPages: 1,
};

export default function CatalogPage() {
  const { data, loading, error, getData } = useAxios(initialData);

  useEffect(() => {
    getData("/products");
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <>
      <div className="mt-5">
        <ProductList items={data.products} />
      </div>
    </>
  );
}
