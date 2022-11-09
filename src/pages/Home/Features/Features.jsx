import React from "react";
import "../../../assets/style.css";
import { FaSearchDollar } from "react-icons/fa";
import { HiGlobeAlt } from "react-icons/hi";

const Features = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-3 lg:my-10">
      <h2 className="text-center text-xl lg:text-3xl font-bold text-purple-600">
        Why Choose
        <p className="feature-underline"></p>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-3 lg:mt-5">
        <div className="flex flex-col items-center text-gray-700">
          <FaSearchDollar className="text-4xl lg:text-6xl"></FaSearchDollar>
          <h2 className="text-xl font-bold">Competitive Pricing</h2>
          <h4 className="text-center font-semibold">
            With 5+ Sponsor and the purchasing power of 2k members,
            Grate-Adventure can save you more!
          </h4>
        </div>
        <div className="flex flex-col items-center text-gray-700">
          <img
            className="w-16 h-16"
            src="https://camo.githubusercontent.com/48daaa310894c801a3d9396a53cb68f978db169c1f10ea59d82c75527d441446/68747470733a2f2f63646e322e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f6d65646963696e652d352d312f3531322f73657274696669636174655f7365616c2d3531322e706e67"
            alt=""
          />
          <h2 className="text-xl font-bold">Award-Winning Service</h2>
          <h4 className="text-center font-semibold">
            Travel worry-free knowing that we're here if you needus, 24 hours a
            day
          </h4>
        </div>
        <div className="flex flex-col items-center text-gray-700">
          <HiGlobeAlt className="text-4xl lg:text-6xl"></HiGlobeAlt>
          <h2 className="text-xl font-bold">Worldwide Coverage</h2>
          <h4 className="text-center font-semibold">
            Over 1,200,000 hotels in more than 200 countries and regions &
            flights to over 5,000 cities
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Features;
