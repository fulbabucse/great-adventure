import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceName } = useLoaderData();
  return (
    <div className="max-w-screen-xl mx-auto my-6">
      <h1>{serviceName}</h1>
    </div>
  );
};

export default ServiceDetails;
