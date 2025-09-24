import React, { useEffect, useState } from "react";
import { ProductService } from "../services/ProductService";
import ProductList from "../components/ProductList/ProductList";
import PageLoader from "../components/PageLoader";
import { useDispatch } from "react-redux";
import { MODAL_TYPES, openModal } from "../feuters/modal/modal-slice";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await ProductService.fetchProducts();
        setProducts(res.data.products);
      } catch (err) {
        if (err.code === "ERR_NETWORK") {
          return setError(err);
        }
        setError(err.response?.data || "Ошибка при получении товаров!");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (error) {
      dispatch(openModal({ content: error.message, type: MODAL_TYPES.DANGER }));
    }
  }, [error]);

  if (loading) {
    return <PageLoader />;
  }

  if (products.length === 0) {
    return <div className="text-center text-3xl">Контента нет...</div>;
  }

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}
