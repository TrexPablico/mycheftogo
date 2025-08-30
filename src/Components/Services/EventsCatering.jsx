import React from "react";
import Navbar from "../Navbar/Navbar";

const EventsCatering = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-white2 px-6">
        <h1 className="text-4xl font-bold text-mustard mb-6">
          Events Catering
        </h1>
        <p className="max-w-2xl text-lg text-center text-gray-700">
          We provide full-service catering for weddings, birthdays, corporate
          events, and more. Our team ensures that your event is unforgettable
          with customized menus, professional staff, and high-quality food.
        </p>
      </div>
    </>
  );
};

export default EventsCatering;
