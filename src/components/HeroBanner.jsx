import React, { useState, useEffect } from "react";

const banners = [
    { id: 1, img: "https://picsum.photos/1200/400?random=1" },
    { id: 2, img: "https://picsum.photos/1200/400?random=2" },
    { id: 3, img: "https://picsum.photos/1200/400?random=3" },
  ];
  

const HeroBanner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % banners.length),
      3000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full overflow-hidden relative">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {banners.map((b) => (
          <div key={b.id} className="w-full flex-shrink-0">
            <img
              src={b.img}
              alt="banner"
              className="w-full h-30 sm:h-56 md:h-58 lg:h-65 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
        {banners.map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === index ? "bg-green-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
