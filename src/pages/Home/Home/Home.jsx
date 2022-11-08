import React from "react";
import { useContext } from "react";
import { AuthContexts } from "../../../contexts/AuthProvider/AuthProvider";
import Banner from "../Banner/Banner";
import FeatureCountUp from "../FeatureCountUp/FeatureCountUp";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Testimonials></Testimonials>
      <FeatureCountUp></FeatureCountUp>
    </div>
  );
};

export default Home;
