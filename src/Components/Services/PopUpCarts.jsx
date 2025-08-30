import React from "react";
import Navbar from "../Navbar/Navbar";

const PopUpCarts = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-white2 px-6">
        <h1 className="text-4xl font-bold text-mustard mb-6">
          Pop-up Food Carts
        </h1>
        <p className="max-w-2xl text-lg text-center text-gray-700">
          Our pop-up food carts bring delicious experiences to festivals,
          corporate events, and private gatherings. Portable, customizable, and
          always a crowd favorite!
        </p>
      </div>
    </>
  );
};

export default PopUpCarts;
