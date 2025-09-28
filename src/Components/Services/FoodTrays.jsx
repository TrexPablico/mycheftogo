import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import tray1 from "../../assets/Services/tray1.jpg";
import packed1 from "../../assets/Services/packed1.jpg";
import dimsum1 from "../../assets/Services/dimsum1.jpg";
import ready1 from "../../assets/Services/ready1.png";
import ready2 from "../../assets/Services/ready2.png";
import ready3 from "../../assets/Services/ready3.png";
import ready4 from "../../assets/Services/ready4.png";
import ready5 from "../../assets/Services/ready5.png";
import ready6 from "../../assets/Services/ready6.png";
import ready7 from "../../assets/Services/ready7.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FoodTrays = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const trays = [
    { img: tray1, title: "Party Trays" },
    { img: packed1, title: "Ready to Eat" },
    { img: dimsum1, title: "Ready to Cook" },
  ];

  const readyImages = [ready1, ready2, ready3, ready4, ready5, ready6, ready7];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white2 px-6 py-12">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-mustard mb-10 text-left">
          Ready-to-Go Food
        </h1>

        {/* Intro Paragraph */}
        <p className="max-w-3xl text-lg text-gray-700 mb-12">
          Perfect for family gatherings, office lunches, or celebrations. Our
          ready-to-go food trays are freshly prepared and delivered right to
          you, making hosting simple and stress-free.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {trays.map((tray, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
              onClick={() => {
                if (tray.title === "Ready to Eat") setIsModalOpen(true);
              }}
            >
              {/* Image */}
              <img
                src={tray.img}
                alt={tray.title}
                className="w-full h-[350px] object-cover opacity-80 transition duration-500 group-hover:blur-sm"
              />

              {/* Title Overlay */}
              <div className="absolute bottom-4 left-4 text-white text-2xl font-semibold drop-shadow-lg">
                {tray.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={() => setIsModalOpen(false)} // close when clicking overlay
        >
          <div
            className="relative bg-white rounded-2xl shadow-lg w-full max-w-4xl p-4"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-700 text-2xl font-bold hover:text-red-500"
            >
              ✕
            </button>

            {/* Carousel */}
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="rounded-lg"
            >
              {readyImages.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt={`Ready ${idx + 1}`}
                    className="w-full h-[500px] object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default FoodTrays;
