import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "../../../assets/style.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { HiOutlineStar } from "react-icons/hi2";
import { useContext } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { AuthContexts } from "../../../contexts/AuthProvider/AuthProvider";
import { useState } from "react";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const ServiceDetails = () => {
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContexts);
  const { serviceId, serviceName, price, image, rating, des } = useLoaderData();

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?serviceId=${serviceId}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error(err));
  }, [serviceId]);

  const createAt = new Date().getTime();
  const fullDateAndTime = new Date().toLocaleString();

  const handleServiceReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user?.displayName;
    const email = user?.email;
    const reviewerImage = user?.photoURL;
    const rating = form.rating.value;
    const review = form.review.value;

    const serviceReview = {
      name,
      email,
      review,
      rating,
      serviceId,
      serviceName,
      price,
      image,
      reviewerImage,
      fullDateAndTime,
      createAt,
    };

    if (rating > 5) {
      toast.error("Service rating are out of 5");
      return;
    }

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
    <div className="max-w-screen-xl mx-auto my-6 px-3">
      <Helmet>
        <title>Service Details - Great Adventure with Fahim</title>
      </Helmet>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <PhotoProvider>
          <PhotoView src={image}>
            <img style={{ objectFit: "cover" }} src={image} alt="" />
          </PhotoView>
        </PhotoProvider>
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
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <div className="space-y-1 mb-3 text-center lg:text-start">
            <h4 className="text-xlt font-bold text-gray-700">
              Ratings & Reviews of {serviceName}
            </h4>
            <p>Total Review {reviews.length}</p>
          </div>
          <div>
            {reviews.map((review) => (
              <div
                key={review._id}
                className="mb-3 border-2 border-gray-200/70 py-2 px-3 w-full rounded-md"
              >
                <div>
                  <div className="flex gap-2 items-center">
                    <img
                      className="w-10 h-10 text-xs rounded-full"
                      src={review?.reviewerImage}
                      alt={review?.name}
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-700">
                        {review?.name}
                      </h4>
                      <p>Reviewed on {review?.fullDateAndTime}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-orange-400 font-medium flex items-center gap-2">
                    <span className="text-gray-700">Rating: </span>
                    {(review.rating >= 4.5 && (
                      <span className="flex">
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                      </span>
                    )) ||
                      (review.rating >= 4 && (
                        <span className="flex">
                          <FaStar></FaStar>
                          <FaStar></FaStar>
                          <FaStar></FaStar>
                          <FaStar></FaStar>
                          <FaStarHalfAlt></FaStarHalfAlt>
                        </span>
                      )) ||
                      (review.rating >= 3.5 && (
                        <span className="flex text-lg">
                          <FaStar></FaStar>
                          <FaStar></FaStar>
                          <FaStar></FaStar>
                          <FaStarHalfAlt></FaStarHalfAlt>
                          <HiOutlineStar className="text-xl"></HiOutlineStar>
                        </span>
                      )) ||
                      (review.rating >= 3 && (
                        <span className="flex text-lg">
                          <FaStar></FaStar>
                          <FaStar></FaStar>
                          <FaStar></FaStar>
                          <HiOutlineStar className="text-xl"></HiOutlineStar>
                          <HiOutlineStar className="text-xl"></HiOutlineStar>
                        </span>
                      )) ||
                      (review.rating >= 2 && (
                        <span className="flex text-lg">
                          <FaStar></FaStar>
                          <FaStar></FaStar>
                          <HiOutlineStar className="text-xl"></HiOutlineStar>
                          <HiOutlineStar className="text-xl"></HiOutlineStar>
                          <HiOutlineStar className="text-xl"></HiOutlineStar>
                        </span>
                      ))}
                    ({review.rating} of 5)
                  </p>
                  <p className="capitalize text-sm">{review?.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col h-full">
          <div className="space-y-1 mb-3 text-center lg:text-start">
            <h4 className="text-xl font-bold text-gray-700">
              Review this Service
            </h4>
            <p>Share your thoughts with other customers</p>
          </div>

          {user?.email ? (
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
                      required
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
                    required
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
          ) : (
            <div>
              <Link to="/login">
                <button
                  type="submit"
                  className="
    w-40
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
                  Write a Review
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
