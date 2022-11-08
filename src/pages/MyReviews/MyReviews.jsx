import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContexts } from "../../contexts/AuthProvider/AuthProvider";
import { FaEdit, FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContexts);
  useEffect(() => {
    fetch(`http://localhost:5000/customerReview?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error(err));
  }, []);

  const handleReviewDelete = (id) => {
    const agree = window.confirm("Are you sure delete his Review");
    if (agree) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainingReviews = reviews.filter(
              (review) => review._id !== id
            );
            toast.error("Orders cancel successfully");
            setReviews(remainingReviews);
          }
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-3">
      <h1 className="text-center text-2xl font-bold text-gray-700">
        My Reviews {reviews.length}
      </h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-2 py-4 text-left"
                    >
                      No
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-2 py-4 text-left"
                    >
                      Service Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-2 py-4 text-left"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-2 py-4 text-left"
                    >
                      Rating
                    </th>

                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-2 py-4 text-left"
                    >
                      Review
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 py-4 text-left"
                    >
                      Service Image
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-2 py-4 text-left"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {reviews?.map((review, index) => (
                    <tr
                      key={review?._id}
                      className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    >
                      <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {index + 1}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                        {review?.serviceName}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                        ${review?.price}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                        {review?.rating}
                      </td>
                      <td className="text-sm capitalize text-gray-900 font-light px-2 py-4 whitespace-nowrap">
                        {review?.review.slice(0, 50)}
                      </td>
                      <td className="text-sm text-gray-900 font-light py-2 whitespace-nowrap">
                        <img
                          className="w-12 h-12 rounded-md"
                          src={review?.image}
                          alt={review?.serviceName}
                        />
                      </td>
                      <td className="flex gap-3 mt-3">
                        <Link to={`/my-review/${review?._id}`}>
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
                            <FaEdit></FaEdit>
                          </button>
                        </Link>

                        <div>
                          <button
                            type="submit"
                            onClick={() => handleReviewDelete(review?._id)}
                            className="
      w-full
      px-6
      py-2.5
      bg-red-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-red-700 hover:shadow-lg
      focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-red-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
                          >
                            <FaTimes></FaTimes>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
