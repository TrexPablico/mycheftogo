import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Slider from "react-slick";
import Modal from "react-modal";
import m1 from "../../assets/Menu/m1.jpg";
import m2 from "../../assets/Menu/m2.jpg";
import m3 from "../../assets/Menu/m3.jpg";
import m4 from "../../assets/Menu/m4.jpg";
import m5 from "../../assets/Menu/m5.jpg";
import m6 from "../../assets/Menu/m6.jpg";
import m7 from "../../assets/Menu/m7.jpg";
import m8 from "../../assets/Menu/m8.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Menu.css"; // Custom CSS for modal styling
import Contact from "../Contact/Contact";

const Menu = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [m1, m2, m3, m4, m5, m6, m7, m8];

  const openModal = (image) => {
    setModalImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalImage(null);
  };

  return (
    <div className="overflow-x-hidden bg-white2">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12">
        <h1 className="text-4xl md:text-5xl font-semibold mb-8 text-center text-mustard">
          Our Menu
        </h1>
        <Slider {...settings} className="w-full">
          {images.map((image, index) => (
            <div key={index} className="px-4" onClick={() => openModal(image)}>
              <img
                src={image}
                alt={`Menu Image ${index + 1}`}
                className="w-full h-64 sm:h-80 lg:h-96 object-contain rounded-lg shadow-md cursor-pointer"
              />
            </div>
          ))}
        </Slider>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <button className="modal-close" onClick={closeModal}>
          ×
        </button>
        {modalImage && (
          <img src={modalImage} alt="Modal" className="modal-content" />
        )}
      </Modal>
      <Contact />
    </div>
  );
};

export default Menu;
