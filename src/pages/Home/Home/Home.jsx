import React from "react";
import { useContext } from "react";
import { AuthContexts } from "../../../contexts/AuthProvider/AuthProvider";
import AddService from "../../Shared/AddService/AddService";
import Banner from "../Banner/Banner";
import FeatureCountUp from "../FeatureCountUp/FeatureCountUp";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  const { user } = useContext(AuthContexts);
  return (
    <div>
      <Banner></Banner>
      {user?.email && <AddService></AddService>}
      <Services></Services>
      <Testimonials></Testimonials>
      <FeatureCountUp></FeatureCountUp>
    </div>
  );
};

export default Home;
