import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductService } from "../services/ProductService";
import CurrentProduct from "../components/CurrentProduct/CurrentProduct";
import PageLoader from "../components/PageLoader";
import { useDispatch } from "react-redux";
import { MODAL_TYPES, openModal } from "../feuters/modal/modal-slice";

export default function CurrentProductPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await ProductService.fetchCurrentProduct(slug);
        setProduct(res.data);
      } catch (err) {
        setError(err.response?.data);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  useEffect(() => {
    if (error) {
      dispatch(openModal({ content: error.message, type: MODAL_TYPES.DANGER }));
    }
  }, [error]);

  if (loading) {
    return <PageLoader />;
  }

  if (Object.keys(product).length === 0) {
    return <div className="text-center text-xl">Контента нет...</div>;
  }

  return (
    <div>
      <CurrentProduct product={product} />
    </div>
  );
}
