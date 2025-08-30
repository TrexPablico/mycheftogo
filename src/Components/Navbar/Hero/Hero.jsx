import React from "react";
import hero2 from "../../../assets/Hero/hero2.png";

const Hero = () => {
  return (
    <div className="relative w-full h-[60vw] sm:h-[50vh] md:h-[60vw] lg:h-[34vw] rounded-md overflow-hidden mt-0 mb-8">
      {/* Background Image */}
      <img
        src={hero2}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex items-center h-full px-6 sm:px-12 md:px-20">
        <div className="max-w-md md:max-w-xl lg:max-w-2xl">
          {/* Headline split into two lines */}
          <h2 className="text-[20px] text-white sm:text-2xl md:text-5xl lg:text-6xl font-semibold leading-snug">
            Catering, Food Trays,
          </h2>
          <h2 className="text-[20px] text-white sm:text-2xl md:text-5xl lg:text-6xl mb-4 font-semibold leading-snug">
            and Restaurant Solutions
          </h2>

          {/* Paragraph - hidden on mobile */}
          <p className="hidden sm:block text-base md:text-lg lg:text-xl text-gray-200 mb-5">
            Whether you're planning a special event or dreaming of opening your
            own restaurant, we provide top-notch catering services, delicious
            food trays, and expert guidance to help you every step of the way.
            Let us bring your culinary vision to life and ensure your success.
          </p>

          {/* Button */}
          <button className="px-4 py-2 bg-white text-mustard font-medium rounded-lg shadow-md hover:bg-darkGreen hover:text-white transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
