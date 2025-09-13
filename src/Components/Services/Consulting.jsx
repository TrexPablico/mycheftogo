import React from "react";
import Navbar from "../Navbar/Navbar";
import placeholder from "../../assets/Services/placeholder.png";

const Consulting = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white2 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-mustard mb-6 text-left">
            Consultant & Business Developer
          </h1>

          {/* Intro */}
          <p className="max-w-3xl text-lg text-gray-700 mb-12 leading-relaxed">
            We provide expert consulting services tailored for food businesses
            and entrepreneurs. Whether you are starting a new venture or
            improving an existing one, we guide you with strategies and systems
            designed for long-term success.
          </p>

          {/* Services Sections */}
          <div className="space-y-16">
            {/* Menu Development (image left, fade right) */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Image with gradient */}
              <div className="relative w-full md:w-1/2">
                <img
                  src={placeholder}
                  alt="Menu Development"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-white via-white/70 to-transparent rounded-lg" />
              </div>
              {/* Text */}
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-semibold text-darkGreen mb-3">
                  Menu Development
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Craft menus that balance creativity, customer appeal, and
                  profitability. We help design dishes that highlight your
                  concept, match your brand identity, and keep your customers
                  coming back for more.
                </p>
              </div>
            </div>

            {/* Processes & Systems (image right, fade left) */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              {/* Image with gradient */}
              <div className="relative w-full md:w-1/2">
                <img
                  src={placeholder}
                  alt="Processes and Systems"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent rounded-lg" />
              </div>
              {/* Text */}
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-semibold text-darkGreen mb-3">
                  Restaurant & Commissary Processes and Systems
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Build efficient workflows that save time, reduce waste, and
                  increase consistency. From standard operating procedures to
                  staff training, we streamline your operations for smooth
                  day-to-day performance.
                </p>
              </div>
            </div>

            {/* Kitchen Concepts (image left, fade right) */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Image with gradient */}
              <div className="relative w-full md:w-1/2">
                <img
                  src={placeholder}
                  alt="Kitchen Concepts"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-white via-white/70 to-transparent rounded-lg" />
              </div>
              {/* Text */}
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-semibold text-darkGreen mb-3">
                  Restaurant & Commissary Kitchen Concepts
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Plan and design functional kitchen layouts that maximize
                  productivity and safety. We provide guidance on equipment
                  selection, space planning, and workflow integration to ensure
                  your kitchen supports your business goals.
                </p>
              </div>
            </div>
          </div>

          {/* Learn More Button */}
          <div className="mt-16 flex justify-center">
            <button className="px-6 py-3 border-2 border-mustard text-mustard font-medium rounded-lg hover:bg-mustard hover:text-white transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Consulting;
