import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContexts } from "../../../contexts/AuthProvider/AuthProvider";

const UpdatesReview = () => {
  const { user } = useContext(AuthContexts);
  const oldReview = useLoaderData();
  const [review, setReview] = useState(oldReview);

  const createAt = new Date().getTime();
  const fullDateAndTime = new Date().toLocaleString();

  const handleUpdateReviewBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newReview = { ...review, createAt, fullDateAndTime };
    newReview[field] = value;
    setReview(newReview);
  };

  const handleServiceReview = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/review/${review?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Review Updates success");
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="flex flex-col items-center mt-10">
      <h3 className="text-2xl font-bold text-gray-700">Update Your Review</h3>
      <div className="p-6 rounded-lg shadow-lg bg-white">
        <form onSubmit={handleServiceReview} className="space-y-2">
          <div className="flex gap-2">
            <div className="form-group">
              <input
                type="text"
                name="name"
                onBlur={handleUpdateReviewBlur}
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
                onBlur={handleUpdateReviewBlur}
                defaultValue={review?.rating}
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
              onBlur={handleUpdateReviewBlur}
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
              onBlur={handleUpdateReviewBlur}
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
              defaultValue={review?.review}
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
  );
};

export default UpdatesReview;
