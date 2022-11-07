import React from "react";
import { useLoaderData } from "react-router-dom";
import "../../../assets/style.css";
import { FaStar } from "react-icons/fa";

const ServiceDetails = () => {
  const { _id, serviceName, price, image, rating, des } = useLoaderData();
  return (
    <div className="max-w-screen-xl mx-auto my-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="w-full">
          <img src={image} className="rounded-md" alt={serviceName} />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-xl lg:text-3xl font-bold text-gray-700">
            {serviceName}
          </h3>
          <div className="">
            <p className="text-xl font-bold text-gray-700">
              Price: <span className="text-2xl text-orange-600">${price}</span>
            </p>
            <p className="text-orange-400 font-medium flex items-center gap-2">
              <p className="text-gray-700">Rating: </p>
              <span className="flex">
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
              </span>
              ({rating})
            </p>
          </div>
          <p className="text-justify">
            <span className="text-xl font-semibold text-gray-700">
              Descriptions:
            </span>{" "}
            {des}
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ServiceDetails;
