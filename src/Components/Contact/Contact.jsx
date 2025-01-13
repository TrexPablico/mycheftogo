import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { IoMail, IoCall, IoLocationSharp } from "react-icons/io5";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Submit form
      console.log("Form submitted", form);
    }
  };

  return (
    <div className="overflow-x-hidden bg-white2 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12">
        <h1 className="text-4xl md:text-5xl font-semibold mb-8 text-center text-mustard">
          ---------------------
        </h1>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2 bg-white2 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-mustard flex items-center">
              <IoMail className="mr-2" /> Send us a Message
            </h2>
            <p className="mb-4 text-gray-600">
              Transform your special events into unforgettable experiences with
              our full-service catering. We offer an extensive selection of
              delicious dishes, meticulously crafted to suit any occasion.
              Whether you're hosting an intimate gathering or a grand
              celebration, our expert team is here to provide top-notch catering
              services that will leave your guests delighted.
            </p>
            <p className="text-gray-600 mb-4">
              At My Chef To Go, we offer expert restaurant consulting services
              to bring your culinary vision to life. From concept development to
              efficient kitchen design and menu creation, we provide tailored
              solutions to meet your needs. Let us help you create a dining
              experience that stands out and thrives in today’s competitive
              market.
            </p>
            <p className="text-gray-600 flex items-center mb-2">
              <IoMail className="mr-2" /> mycheftogo2016@gmail.com
            </p>
            <p className="text-gray-600 flex items-center mb-2">
              <IoCall className="mr-2" /> +63 966-2805352/ +63 9616282501
            </p>
            <p className="text-gray-600 flex items-center">
              <IoLocationSharp className="mr-2" /> Batasan Hills, Quezon City,
              Philippines
            </p>
          </div>
          <div className="md:w-1/2 bg-white2 p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-lg font-medium text-mustard"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-mustard"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.name}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-lg font-medium text-mustard"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-mustard"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.email}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="phone"
                  className="text-lg font-medium text-mustard"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="mt-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-mustard"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="text-lg font-medium text-mustard"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="5"
                  className="mt-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-mustard"
                />
                {errors.message && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.message}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-mustard text-white py-2 rounded hover:bg-darkGreen transition duration-300 ease-in-out"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
