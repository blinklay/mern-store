import React, { useState } from "react";

export default function ProductGallery({ images }) {
  const [current, setCurrent] = useState(0);

  return (
    images &&
    images.length > 0 && (
      <div className="grid grid-cols-[90px_1fr] gap-4">
        <div className="flex flex-col gap-2">
          {images.map(({ url, alt }, index) => (
            <button
              key={alt}
              onClick={() => setCurrent(index)}
              className={`w-[80px] h-[80px] rounded overflow-hidden ${
                index === current ? "opacity-[1]" : "opacity-[0.5]"
              }`}
            >
              <img
                className="w-full h-full object-cover"
                src={url}
                alt={alt}
                key={alt}
              />
            </button>
          ))}
        </div>
        <div className="relative">
          <img
            key={images[current].url}
            src={images[current].url}
            alt={images[current].alt || "Изображение товара"}
            className="w-full max-h-[520px] object-contain select-none transition-opacity duration-300"
            loading="eager"
          />
        </div>
      </div>
    )
  );
}
