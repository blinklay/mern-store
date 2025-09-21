import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductService } from "../services/ProductService";
import CurrentProduct from "../components/CurrentProduct/CurrentProduct";
import PageLoader from "../components/PageLoader";

export default function CurrentProductPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await ProductService.fetchCurrentProduct(slug);
        setProduct(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div>
      <CurrentProduct product={product} />
    </div>
  );
}
