import React from "react";
import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";

const Root = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Great Adventure with Fahim</title>
      </Helmet>
      <Header></Header>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
