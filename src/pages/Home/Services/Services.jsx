import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Service from "../../Shared/Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/home-services`)
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto mb-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services?.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
