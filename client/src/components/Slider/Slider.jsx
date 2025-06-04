import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";

const baseUrl = import.meta.env.VITE_BASE_URL;

export default function Slider({ items }) {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={3}
      slidesPerGroup={1}
      loop={true}
      grabCursor={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {items.map((item) => (
        <SwiperSlide key={item._id}>
          <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
            <Link to={`/catalog/${item._id}`}>
              <img
                src={`${baseUrl}${item.imageUrl}`}
                alt={item.name}
                className="w-full h-48 object-contain rounded-md mb-3"
              />
            </Link>
            <div className="bg-gray-100 rounded-md p-2">
              <Link
                to={`/catalog/${item._id}`}
                className="text-lg font-semibold truncate"
              >
                {item.name}
              </Link>
              <p className="text-sm text-gray-500 mb-1">{item.brand}</p>
              <p className="text-blue-600 font-bold">{item.price} ₽</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
