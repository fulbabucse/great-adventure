import React from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

const AddService = () => {
  const handleAddService = (e) => {
    e.preventDefault();
    const serviceId =
      Math.ceil(Math.random(1000) * 10000000000000) + "fahimislam";
    const form = e.target;
    const serviceName = form.serviceName.value;
    const price = form.price.value;
    const image = form.image.value;
    const rating = form.rating.value;
    const des = form.des.value;
    const service = { serviceName, price, image, rating, des, serviceId };

    fetch("http://localhost:5000/service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Successfully added a Service");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex flex-col items-center my-5 lg:my-10">
      <Helmet>
        <title>Add New Service - Great Adventure with Fahim</title>
      </Helmet>
      <h3 className="text-xl lg:text-3xl font-bold text-purple-600 text-center uppercase mb-3">
        Add New Service
      </h3>
      <div className="p-6 rounded-lg shadow-lg bg-white max-w-2xl">
        <form onSubmit={handleAddService} className="space-y-3">
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group">
              <input
                type="text"
                name="serviceName"
                className="form-control
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
          focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                id="exampleInput123"
                aria-describedby="emailHelp123"
                placeholder="Service Name"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="price"
                className="form-control
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
          focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                id="exampleInput124"
                aria-describedby="emailHelp124"
                placeholder="Price"
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="image"
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
              id="exampleInput125"
              placeholder="Image"
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
              id="exampleInput126"
              placeholder="Rating"
            />
          </div>
          <div className="mb-3">
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
              id="exampleFormControlTextarea1"
              rows="3"
              name="des"
              placeholder="Descriptions"
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
            Add Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
