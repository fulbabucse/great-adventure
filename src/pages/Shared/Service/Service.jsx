import React from "react";
import "../../../assets/style.css";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Service = ({ service }) => {
  const { _id, serviceName, price, image, rating, des } = service;
  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-lg bg-white">
        <a data-mdb-ripple="true" data-mdb-ripple-color="purple">
          <PhotoProvider>
            <PhotoView src={image}>
              <img
                className="service__img rounded-t-md"
                style={{ objectFit: "cover" }}
                src={image}
                alt=""
              />
            </PhotoView>
          </PhotoProvider>
        </a>
        <div className="p-4 space-y-1">
          <h5 className="text-xl uppercase font-bold text-purple-600">
            {serviceName}
          </h5>
          <p className="text-gray-700 font-medium text-base text-justify">
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
                className=" inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
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
