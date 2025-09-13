import React from "react";
import chef from "../assets/About/chef.png";
import bg1 from "../assets/About/bg1.png";

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-cover bg-center bg-no-repeat py-16 px-6"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center bg-white/80 p-6 rounded-2xl">
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <img
            src={chef}
            alt="Our Chefs"
            className="rounded-2xl w-full max-w-sm md:max-w-md"
          />
        </div>

        {/* Right Side - Content */}
        <div className="text-left md:text-justify">
          <h2 className="text-4xl font-bold text-mustard mb-6">
            From Chefs to Entrepreneurs and Consultants!
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Founded in <span className="font-semibold">February 2016</span>, our
            story began as Professional Chefs in well-known establishments,
            specializing in all kinds of cuisine. Veterans in Restaurant and
            Catering Management, our chefs are pioneers in the industry of
            Chinese Restaurants, Steak Houses, Commissaries, and
            Concessionaires.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            As demand for restaurant development, catering, and event
            coordination soared after the pandemic,
            <span className="font-semibold"> My Chef to Go </span> was
            conceptualized by our two renowned chefs. Evolving from professional
            chefs to entrepreneurs, we opened our own kitchen commissary.
          </p>

          <button className="px-6 py-3 bg-mustard text-white font-medium rounded-lg shadow-md hover:opacity-90 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
