import React from "react";
import { useLoaderData } from "react-router-dom";
import "../../../assets/style.css";
import { FaStar } from "react-icons/fa";
import { useContext } from "react";
import { AuthContexts } from "../../../contexts/AuthProvider/AuthProvider";
import { useState } from "react";
import toast from "react-hot-toast";
import { useEffect } from "react";

const ServiceDetails = () => {
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContexts);
  const { _id, serviceName, price, image, rating, des } = useLoaderData();

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error(err));
  }, []);

  const handleServiceReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user?.displayName;
    const email = user?.email;
    const id = _id;
    const rating = form.rating.value;
    const review = form.review.value;
    const serviceReview = {
      name,
      email,
      review,
      rating,
      id,
      serviceName,
      price,
      image,
    };

    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(serviceReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Successfully added a Review");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };

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
              <span className="text-gray-700">Rating: </span>
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
      <div className="mt-10">
        <div>
          <h4>Ratings & Reviews of {serviceName}</h4>
          <p>Total Review {reviews.length}</p>
        </div>
        <div>
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
            <form onSubmit={handleServiceReview} className="space-y-2">
              <div className="flex gap-2">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    defaultValue={user?.displayName}
                    className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                    id="exampleInput7"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="rating"
                    className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                    id="exampleInput7"
                    placeholder="Rating"
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="photoLink"
                  defaultValue={user?.photoURL}
                  className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                  id="exampleInput8"
                  placeholder="Photo"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none
      "
                  id="exampleFormControlTextarea13"
                  rows="3"
                  name="review"
                  placeholder="Review"
                ></textarea>
              </div>
              <button
                type="submit"
                className="
      w-full
      px-6
      py-2.5
      bg-purple-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-purple-700 hover:shadow-lg
      focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-purple-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
              >
                Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
