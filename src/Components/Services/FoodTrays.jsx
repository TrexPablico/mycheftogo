import React from "react";
import Navbar from "../Navbar/Navbar";
import tray1 from "../../assets/Services/tray1.jpg";
import packed1 from "../../assets/Services/packed1.jpg";
import dimsum1 from "../../assets/Services/dimsum1.jpg";

const FoodTrays = () => {
  const trays = [
    { img: tray1, title: "Party Trays" },
    { img: packed1, title: "Ready to Eat" },
    { img: dimsum1, title: "Ready to Cook" },
  ];

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
              className="relative group overflow-hidden rounded-xl shadow-lg"
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
    </>
  );
};

export default FoodTrays;
