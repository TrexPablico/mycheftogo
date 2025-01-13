import React from "react";
import hero from "../../../assets/Hero/hero.png";

const Hero = () => {
  return (
    <div
      className="relative h-[60vw] sm:h-[50vh] md:h-[60vw] lg:h-[34vw] bg-cover bg-no-repeat rounded-md overflow-hidden mt-[-0px]"
      style={{
        backgroundImage: `url(${hero})`,
        margin: "30px auto",
      }}
    >
      <div
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-left text-white pl-10 lg:ml-[160px] md:ml-[100px] sm:ml-[50px]"
        style={{
          width: "50%", // Adjusted for medium to large screens
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="text-[20px] sm:text-2xl md:text-5xl lg:text-7xl mb-4 lg:mt-1 md:mt-1 sm:mt-1 mt-9 font-semibold">
          Catering, Food Trays, and Restaurant Solutions
        </h2>
        <p className="text-[9px] text-gray-200 sm:text-base md:text-lg lg:text-xl mb-5">
          Whether you're planning a special event or dreaming of opening your
          own restaurant, we provide top-notch catering services, delicious food
          trays, and expert guidance to help you every step of the way. Let us
          bring your culinary vision to life and ensure your success.
        </p>
        <button className="px-5 py-2 bg-white text-mustard rounded hover:bg-darkGreen">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Hero;
