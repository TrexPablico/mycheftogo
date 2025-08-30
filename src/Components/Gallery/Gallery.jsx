import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../../assets/Gallery/img1.jpg";
import img2 from "../../assets/Gallery/img2.jpg";
import img3 from "../../assets/Gallery/img3.jpg";
import img4 from "../../assets/Gallery/img4.jpg";
import img5 from "../../assets/Gallery/img5.jpg";
import img6 from "../../assets/Gallery/img6.jpg";

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2
        className="text-3xl font-bold text-center mb-8"
        style={{ color: "#8fc178" }}
      >
        Gallery
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="rounded-2xl shadow-lg"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
