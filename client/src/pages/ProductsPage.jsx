import React, { useEffect, useState } from "react";
import { ProductService } from "../services/ProductService";
import ProductList from "../components/ProductList/ProductList";
import Spinner from "../components/Spinner";
import PageLoader from "../components/PageLoader";

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
      <PageLoader/>
    );
  }

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}
