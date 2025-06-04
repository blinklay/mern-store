import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Catalog/Loader";
import ErrorMessage from "../components/Catalog/ErrorMessage";
import { useAxios } from "../hooks/useAxios";
import ProductInfo from "../components/CurrentProduct/ProductInfo";
import ProductImage from "../components/CurrentProduct/ProductImage";
import ProductReviews from "../components/CurrentProduct/ProductReviews";
const baseUrl = import.meta.env.VITE_BASE_URL;

export default function CurrentProductPage() {
  const { productId } = useParams();
  const { data: product, loading, error, getData } = useAxios(null);

  useEffect(() => {
    getData(`/products/${productId}`);
  }, [productId]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  if (!product) return <p>Товар не найден.</p>;

  const {
    name,
    brand,
    category,
    description,
    price,
    imageUrl,
    inStock,
    // rating,
    reviews,
  } = product.product;
  return (
    <div className="container mx-auto mt-8 px-4">
      <div className="flex flex-col md:flex-row gap-6">
        <ProductImage src={`${baseUrl}${imageUrl}`} alt={name} />
        <ProductInfo
          id={productId}
          name={name}
          brand={brand}
          category={category}
          description={description}
          price={price}
          inStock={inStock}
        />
      </div>

      <ProductReviews reviews={reviews} />
    </div>
  );
}
