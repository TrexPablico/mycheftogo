import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Navbar/Hero/Hero";
import Menu from "./Components/Menu/Menu";
import Contact from "./Components/Contact/Contact";
import MessengerButton from "./Components/MessengerButton/MessengerButton";
import Questions from "./Components/Questions/Questions";
import About from "./Components/About";
import Services from "./Components/Services/Services";
import EventsCatering from "./Components/Services/EventsCatering";
import FoodTrays from "./Components/Services/FoodTrays";
import Consulting from "./Components/Services/Consulting";
import PopUpCarts from "./Components/Services/PopUpCarts";
import Gallery from "./Components/Gallery/Gallery";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="overflow-x-hidden bg-white2">
        <MessengerButton />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <About />
                <Services />
                <Questions />
                <Contact />
                <Footer />
              </>
            }
          />

          {/* About Page */}
          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <About />
                <Contact />
              </>
            }
          />

          {/* Services Page */}
          <Route
            path="/services"
            element={
              <>
                <Navbar />
                <Services />
                <Contact />
              </>
            }
          />

          {/* Service Subpages */}
          <Route
            path="/services/events-catering"
            element={
              <>
                <EventsCatering />
                <Contact />
              </>
            }
          />
          <Route
            path="/services/food-trays"
            element={
              <>
                <FoodTrays />
                <Contact />
              </>
            }
          />
          <Route
            path="/services/consulting"
            element={
              <>
                <Consulting />
                <Contact />
              </>
            }
          />
          <Route
            path="/services/pop-up-carts"
            element={
              <>
                <Navbar />
                <PopUpCarts />
                <Contact />
              </>
            }
          />

          {/* Menu Page */}
          <Route
            path="/menu"
            element={
              <>
                <Navbar />
                <Menu />
                <Contact />
              </>
            }
          />

          {/* Contact Page */}
          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <Contact />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
