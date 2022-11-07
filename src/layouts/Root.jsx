import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <div className="max-w-screen-xl mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
