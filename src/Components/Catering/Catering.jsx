import React from "react";
import about1 from "../../assets/Catering/p1.jpg";
import about2 from "../../assets/Catering/p2.jpg";
import about3 from "../../assets/Catering/p3.jpg";
import about4 from "../../assets/Catering/p4.jpg";
import about5 from "../../assets/Catering/p5.jpg";
import about6 from "../../assets/Catering/p6.jpg";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Catering = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div
      className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 mt-10"
      id="About"
    >
      <h1 className="text-4xl md:text-5xl font-semibold mb-8 text-center text-mustard">
        ----------------------
      </h1>

      {/* First Set: Slider on Left */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-16">
        <div className="col-span-1">
          <Slider
            {...settings}
            className="w-full rounded-md overflow-hidden shadow-lg"
          >
            {[about1, about2, about3, about4, about5, about6].map(
              (image, index) => (
                <div key={index} className="flex justify-center items-center">
                  <img
                    src={image}
                    alt={`Catering Image ${index + 1}`}
                    className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-md"
                  />
                </div>
              )
            )}
          </Slider>
        </div>
        <div className="col-span-1 flex flex-col justify-between relative">
          <div>
            <div className="space-y-6">
              <div>
                <p className="text-2xl md:text-3xl font-medium text-gray-800">
                  Events Catering
                </p>
                <p className="mt-2 text-base md:text-lg text-gray-600">
                  Elevate your celebrations with our full-service catering,
                  offering a wide array of delicious dishes tailored to suit any
                  occasion.
                </p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-medium text-gray-800">
                  Ready-to-Go Food Trays
                </p>
                <p className="mt-2 text-base md:text-lg text-gray-600">
                  Enjoy convenience with our ready-to-serve food trays, perfect
                  for quick gatherings or hassle-free meals.
                </p>
              </div>
            </div>
            <p className="mt-6 text-base md:text-lg text-gray-600">
              <span className="font-semibold">My Chef To Go</span> offers the
              finest culinary experiences, tailored to your needs. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Architecto deleniti
              unde quia culpa.
            </p>
          </div>
          <div className="flex justify-end">
            <Link
              to="/menu"
              className="mt-4 sm:mt-0 px-3 py-1 md:px-5 md:py-2 bg-mustard text-white rounded hover:bg-darkGreen transition duration-300 ease-in-out text-sm md:text-base"
            >
              View Menu
            </Link>
          </div>
        </div>
      </div>

      {/* Second Set: Slider on Right */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
        <div className="col-span-1 flex flex-col justify-between relative">
          <div>
            <div className="space-y-6">
              <div>
                <p className="text-2xl md:text-3xl font-medium text-gray-800">
                  Consultant & Business Developer
                </p>
                <p className="mt-2 text-base md:text-lg text-gray-600">
                  Ready to bring your restaurant vision to life? As a Restaurant
                  Consultant, I can help you plan, design, and streamline your
                  operations for success. From concept development to menu
                  creation and efficient layouts, I’ll provide the guidance you
                  need to build a restaurant that stands out and runs smoothly.
                  Let’s work together to make your idea a reality!
                </p>
              </div>
            </div>
            <p className="mt-6 text-base md:text-lg text-gray-600">
              <span className="font-semibold">My Chef To Go</span> offers expert
              restaurant consulting services to bring your culinary vision to
              life. From concept development to efficient kitchen design and
              menu creation, we provide tailored solutions to meet your needs.
              Let us help you create a dining experience that stands out and
              thrives in today’s competitive market.
            </p>
          </div>
          <div className="flex justify-end">
            <button className="mt-4 sm:mt-0 px-3 py-1 md:px-5 md:py-2 bg-mustard text-white rounded hover:bg-darkGreen transition duration-300 ease-in-out text-sm md:text-base">
              Learn More
            </button>
          </div>
        </div>
        <div className="col-span-1">
          <Slider
            {...settings}
            className="w-full rounded-md overflow-hidden shadow-lg"
          >
            {[about1, about2, about3, about4, about5, about6].map(
              (image, index) => (
                <div key={index} className="flex justify-center items-center">
                  <img
                    src={image}
                    alt={`Catering Image ${index + 1}`}
                    className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-md"
                  />
                </div>
              )
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Catering;
