export default function ProductImage({ src, alt }) {
  return (
    <div className="md:w-1/2">
      <img src={src} alt={alt} className="w-full max-w-[320px] rounded-lg" />
    </div>
  );
}
