import React from "react";
import logo2 from "../../assets/Navbar/logo2.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoCall, IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <img src={logo2} alt="My Chef To Go Logo" className="h-20 md:h-24" />
      </div>

      {/* Info Section */}
      <div className="text-center space-y-4">
        {/* Phone */}
        <p className="flex items-center justify-center gap-2 text-lg">
          <IoCall className="text-mustard text-xl" />
          0966-2805352 / 0961-6282501
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="https://www.facebook.com/profile.php?id=61569514018973"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-mustard transition-colors"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com/mycheftogoph"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8fc178] transition-colors"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Location */}
        <p className="flex items-center justify-center gap-2 text-lg">
          <IoLocationSharp className="text-mustard text-xl" />
          Batasan Hills, Quezon City
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 mb-6 w-4/5 mx-auto"></div>

      {/* Copyright */}
      <div className="text-center text-sm">
        <p>
          Copyright © 2025{" "}
          <span className="text-mustard font-semibold">My Chef To Go</span> All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
