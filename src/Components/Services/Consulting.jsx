import React from "react";
import Navbar from "../Navbar/Navbar";

const Consulting = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-white2 px-6">
        <h1 className="text-4xl font-bold text-mustard mb-6">
          Consultant & Business Developer
        </h1>
        <p className="max-w-2xl text-lg text-center text-gray-700">
          We offer consulting services for food businesses and aspiring
          entrepreneurs. From menu development to scaling operations, we guide
          you toward sustainable growth and success.
        </p>
      </div>
    </>
  );
};

export default Consulting;
