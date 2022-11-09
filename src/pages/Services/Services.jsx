import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Service from "../Shared/Service/Service";

const Services = () => {
  const services = useLoaderData();
  return (
    <div className="max-w-screen-xl mx-auto my-2 lg:my-10 px-3">
      <Helmet>
        <title>Services - Great Adventure with Fahim</title>
      </Helmet>
      <h3 className="text-3xl font-bold text-purple-600 text-center mb-3">
        Here My All Services
        <p className="feature-underline"></p>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services?.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
