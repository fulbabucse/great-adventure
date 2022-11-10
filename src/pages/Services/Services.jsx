import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Service from "../Shared/Service/Service";
import { BounceLoader } from "react-spinners";

const Services = () => {
  const [services, setServices] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(6);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    fetch(
      `https://greate-adventure-with-fahim-server.vercel.app/services?page=${page}&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => {
        setServices(data.services);
        setCount(data.count);
      });
  }, [page, size]);

  const handlePrevious = () => {
    setPage(page - 1);
  };
  const handleNext = () => {
    setPage(page + 1);
  };

  const pages = Math.ceil(count / size);
  return (
    <div className="max-w-screen-xl mx-auto my-2 lg:my-10 px-3">
      <Helmet>
        <title>Services - Great Adventure with Fahim</title>
      </Helmet>
      {loading ? (
        <div className="flex justify-center min-h-screen mt-6 lg:mt-48">
          <BounceLoader
            color={"#36d7b7"}
            loading={loading}
            aria-label="Loading Spinner"
            data-testId="loader"
          />
        </div>
      ) : (
        <>
          <h3 className="text-3xl font-bold text-purple-600 text-center mb-3">
            Here My All Services
            <p className="feature-underline"></p>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services?.map((service) => (
              <Service key={service._id} service={service}></Service>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <nav aria-label="Page navigation example">
              <ul className="flex gap-2 items-center list-style-none">
                <li className="page-item">
                  <button
                    onClick={() => handlePrevious()}
                    disabled={page === 0}
                    className="page-link relative block cursor-pointer py-1.5 px-3 border-0 bg-gray-200 outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-300 focus:shadow-none"
                    tabIndex="-1"
                  >
                    Previous
                  </button>
                </li>
                {[...Array(pages).keys()].map((number) => (
                  <li key={number}>
                    <button
                      onClick={() => setPage(number)}
                      className={`${
                        page === number && "bg-blue-400 text-white"
                      } page-link cursor-pointer relative block py-1 px-3 border-0 outline-none transition-all duration-300 rounded hover:bg-blue-500 focus:shadow-none hover:text-white`}
                    >
                      {number + 1}
                      <span className="visually-hidden">(current)</span>
                    </button>
                  </li>
                ))}
                <li className="page-item">
                  <select
                    onChange={(e) => setSize(e.target.value)}
                    className="form-select appearance-none
      block
      w-14
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example"
                  >
                    <option value="3">3</option>
                    <option selected value="6">
                      6
                    </option>
                  </select>
                </li>
                <li className="page-item">
                  <button
                    onClick={() => handleNext()}
                    disabled={page + 2 > pages}
                    className="page-link relative block py-1.5 px-3 border-0 bg-gray-200 outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-300 focus:shadow-none"
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </div>
  );
};

export default Services;
