import React from "react";
import { Link } from "react-router-dom";
import bg1 from "../../assets/Services/bg1.png";

const Services = () => {
  return (
    <section className="w-full bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-12" style={{ color: "#8fc178" }}>
          Services
        </h1>

        {/* Buttons in 2x2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/services/events-catering">
            <button className="w-full py-12 px-6 bg-mustard text-white text-xl font-semibold rounded-2xl shadow-lg hover:scale-105 hover:opacity-90 transition-transform duration-300">
              Events Catering
            </button>
          </Link>

          <Link to="/services/food-trays">
            <button className="w-full py-12 px-6 bg-mustard text-white text-xl font-semibold rounded-2xl shadow-lg hover:scale-105 hover:opacity-90 transition-transform duration-300">
              Ready-to-Go Food Trays
            </button>
          </Link>

          <Link to="/services/consulting">
            <button className="w-full py-12 px-6 bg-mustard text-white text-xl font-semibold rounded-2xl shadow-lg hover:scale-105 hover:opacity-90 transition-transform duration-300">
              Consultant &amp; Business Developer
            </button>
          </Link>

          <Link to="/services/popups">
            <button className="w-full py-12 px-6 bg-mustard text-white text-xl font-semibold rounded-2xl shadow-lg hover:scale-105 hover:opacity-90 transition-transform duration-300">
              Pop-up Food Carts
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
