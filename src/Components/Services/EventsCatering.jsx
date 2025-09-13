import React from "react";
import Navbar from "../Navbar/Navbar";
import service1 from "../../assets/Services/service1.jpg";
import service2 from "../../assets/Services/service2.jpg";
import service3 from "../../assets/Services/service3.jpg";

const EventsCatering = () => {
  const services = [
    { img: service1, title: "Intimate Events" },
    { img: service2, title: "Corporate Events" },
    { img: service3, title: "Kiddie Parties" },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white2 px-6 py-12">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-mustard mb-10 text-left">
          Events Catering
        </h1>

        {/* Intro Paragraph */}
        <p className="max-w-3xl text-lg text-gray-700 mb-12">
          We provide full-service catering for weddings, birthdays, corporate
          events, and more. Our team ensures that your event is unforgettable
          with customized menus, professional staff, and high-quality food.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg"
            >
              {/* Image */}
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-[350px] object-cover opacity-80 transition duration-500 group-hover:blur-sm"
              />

              {/* Title Overlay */}
              <div className="absolute bottom-4 left-4 text-white text-2xl font-semibold drop-shadow-lg">
                {service.title}
              </div>
            </div>
          ))}
        </div>

        {/* Customization CTA */}
        <div className="bg-mustard/10 rounded-xl p-8 text-center max-w-3xl mx-auto shadow-md">
          <h2
            className="text-2xl font-semibold mb-4"
            style={{ color: "#064e3b" }}
          >
            Do you want to customize your event?
          </h2>
          <p className="text-gray-700 mb-6">
            Tailor your party trays or catering sets to perfectly match your
            celebration. We’ll work with you to create a menu that suits your
            taste, style, and budget.
          </p>
          <button className="px-6 py-3 bg-mustard text-white font-medium rounded-lg shadow-md hover:bg-[#064e3b] transition duration-300">
            Click Here
          </button>
        </div>
      </div>
    </>
  );
};

export default EventsCatering;
