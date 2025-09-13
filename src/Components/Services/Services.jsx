import React from "react";
import { Link } from "react-router-dom";
import servicelist1 from "../../assets/Services/servicelist1.jpg";
import servicelist2 from "../../assets/Services/servicelist2.jpg";
import servicelist3 from "../../assets/Services/servicelist3.jpg";
import servicelist4 from "../../assets/Services/servicelist4.jpg";

const Services = () => {
  const services = [
    {
      img: servicelist1,
      title: "Events Catering",
      link: "/services/events-catering",
    },
    {
      img: servicelist2,
      title: "Ready-To-Go-Food",
      link: "/services/food-trays",
    },
    { img: servicelist3, title: "Consultation", link: "/services/consulting" },
    {
      img: servicelist4,
      title: "Pop-up Food Carts",
      link: "/services/pop-up-carts",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1
          className="text-4xl font-bold mb-12 text-left"
          style={{ color: "#8fc178" }}
        >
          Services
        </h1>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <Link to={service.link} key={index}>
              <div className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer">
                {/* Image */}
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-[450px] object-cover opacity-80 transition duration-500 group-hover:blur-sm"
                />

                {/* Title Overlay */}
                <div className="absolute bottom-4 left-4 text-white text-xl font-semibold drop-shadow-lg">
                  {service.title}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
