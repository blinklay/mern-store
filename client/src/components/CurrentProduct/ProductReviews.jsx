export default function ProductReviews({ reviews }) {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">Отзывы ({reviews.length})</h2>

      {reviews.length === 0 ? (
        <p className="text-gray-500">Нет отзывов</p>
      ) : (
        <ul className="space-y-4">
          {reviews.map((review) => (
            <li key={review._id} className="border-b pb-3">
              <p className="font-semibold">{review.name}</p>
              <p className="text-yellow-500">Оценка: {review.rating}/5</p>
              <p className="text-gray-700">{review.comment}</p>
              <p className="text-xs text-gray-400">
                {new Date(review.createdAt).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
