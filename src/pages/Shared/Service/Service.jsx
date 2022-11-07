import React from "react";
import "../../../assets/style.css";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, serviceName, price, image, rating, des } = service;
  console.log(service);
  return (
    <div class="flex justify-center">
      <div class="rounded-lg shadow-lg bg-white">
        <a data-mdb-ripple="true" data-mdb-ripple-color="purple">
          <img
            class="rounded-t-lg service__img"
            src={image}
            alt={serviceName}
          />
        </a>
        <div class="p-4 space-y-1">
          <h5 class="text-xl uppercase font-bold text-purple-600">
            {serviceName}
          </h5>
          <p class="text-gray-700 font-medium text-base text-justify">
            {des.slice(0, 100)} &#8230;
          </p>
          <div className="flex justify-between">
            <p className="text-xl font-bold text-gray-700">Price: ${price}</p>
            <p className="text-orange-400 flex items-center gap-2">
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
          <div>
            <Link to={`/service/${_id}`}>
              <button
                type="button"
                class=" inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
