import React from "react";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Features></Features>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
