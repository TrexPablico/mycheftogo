import React from "react";
import { FaFacebookMessenger } from "react-icons/fa";

const MessengerButton = () => {
  const messengerId = "your-page-id-or-username"; // Your Messenger ID or username

  // Messenger link for phone or PC
  const messengerUrl = `https://m.me/${messengerId}`;

  return (
    <a
      href={messengerUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-blue-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 transition duration-300"
      style={{ zIndex: 1000 }} // Ensures it stays on top
    >
      <FaFacebookMessenger className="w-8 h-8" />
    </a>
  );
};

export default MessengerButton;
