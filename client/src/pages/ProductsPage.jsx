import React, { useEffect, useState } from "react";
import { ProductService } from "../services/ProductService";
import ProductList from "../components/ProductList/ProductList";
import Spinner from "../components/Spinner";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await ProductService.fetchProducts();
        setProducts(res.data.products);
      } catch (err) {
        setError(err.response.data);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex gap-2 items-center justify-center text-xl">
        <Spinner color={"black"} /> Загрузка...
      </div>
    );
  }

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}
