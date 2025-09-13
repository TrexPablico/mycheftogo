import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo2 from "../../assets/Navbar/logo2.png";
import { IoCall, IoMenu, IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const navMenu = [
  { id: 1, title: "Home", path: "/", delay: 0.1 },
  { id: 2, title: "About", path: "/about", delay: 0.2 },
  { id: 3, title: "Gallery", path: "/menu", delay: 0.3 },
  { id: 4, title: "Services", path: "/services", delay: 0.4 },
  { id: 5, title: "Contact", path: "/contact", delay: 0.5 },
];

const SlideDown = (delay) => ({
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5, delay: delay },
});

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="overflow-hidden bg-white2 relative mt-[-18px]">
      <div className="container flex justify-between items-center font-leagueGothic">
        {/* Logo section */}
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          src={logo2}
          alt="Logo"
          className="w-[100px] mb-5 relative top-5"
        />

        {/* Menu section for larger screens */}
        <div className="hidden md:block mt-5">
          <ul className="flex gap-6">
            {navMenu.map((menu) => (
              <motion.li
                key={menu.id}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: menu.delay }}
                className="nav-menu"
              >
                <Link
                  to={menu.path}
                  className="inline-block px-2 py-2 text-2xl hover:text-mustard"
                >
                  {menu.title}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Hamburger menu for small screens */}
        <div className="block md:hidden mt-5">
          <button
            className="h-[40px] w-[40px] grid place-items-center rounded-full text-white bg-dark hover:bg-darkGreen"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>

        {/* Button section */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }} // Delay is after the last menu item's delay
          className="mt-5 hidden md:block"
        >
          <button className="h-[40px] w-[40px] grid place-items-center rounded-full text-white bg-dark hover:bg-darkGreen">
            <IoCall />
          </button>
        </motion.div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-white2 bg-opacity-95 z-50 flex flex-col items-center justify-center"
          onClick={closeMenu}
        >
          <ul className="flex flex-col items-center gap-6">
            {navMenu.map((menu) => (
              <motion.li
                key={menu.id}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: menu.delay }}
                className="nav-menu"
                onClick={closeMenu}
              >
                <Link
                  to={menu.path}
                  className="inline-block px-2 py-2 text-2xl hover:text-mustard"
                >
                  {menu.title}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
