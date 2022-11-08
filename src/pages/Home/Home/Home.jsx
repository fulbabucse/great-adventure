import React from "react";
import { useContext } from "react";
import { AuthContexts } from "../../../contexts/AuthProvider/AuthProvider";
import AddService from "../../Shared/AddService/AddService";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
  const { user } = useContext(AuthContexts);
  return (
    <div>
      <Banner></Banner>
      {user?.email && <AddService></AddService>}
      <Services></Services>
    </div>
  );
};

export default Home;
