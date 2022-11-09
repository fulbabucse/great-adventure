import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Service from "../../Shared/Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`https://greate-adventure-with-fahim-server.vercel.app/home-services`)
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto mb-5 px-3">
      <div className="flex flex-col w-full lg:w-1/2 mx-auto mb-6">
        <h3 className="text-xl lg:text-3xl font-bold text-purple-600 text-center">
          Services
          <p className="feature-underline"></p>
        </h3>
        <p className="text-center text-gray-700 font-semibold">
          Listen to a tour guide on a shuttle bus from the airport to the
          resort. You can listen first, and then read. After that, test your
          understanding with the quick check.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services?.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <div className="flex justify-center mt-3">
        <Link to="/services">
          <button
            type="button"
            className=" inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
