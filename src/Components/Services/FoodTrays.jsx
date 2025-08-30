import React from "react";
import Navbar from "../Navbar/Navbar";

const FoodTrays = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-white2 px-6">
        <h1 className="text-4xl font-bold text-mustard mb-6">
          Ready-to-Go Food Trays
        </h1>
        <p className="max-w-2xl text-lg text-center text-gray-700">
          Perfect for family gatherings, office lunches, or celebrations. Our
          ready-to-go food trays are freshly prepared and delivered right to
          you, making hosting simple and stress-free.
        </p>
      </div>
    </>
  );
};

export default FoodTrays;
