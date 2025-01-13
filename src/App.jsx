import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Navbar/Hero/Hero";
import Catering from "./Components/Catering/Catering";
import Menu from "./Components/Menu/Menu";
import Contact from "./Components/Contact/Contact";
import MessengerButton from "./Components/MessengerButton/MessengerButton"; // Import the MessengerButton component
import Questions from "./Components/Questions/Questions";

function App() {
  return (
    <Router>
      <div className="overflow-x-hidden bg-white2">
        <MessengerButton />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <Catering />
                <Questions />
                <Contact />
              </>
            }
          />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
