import { createBrowserRouter } from "react-router-dom";
import Root from "../../layouts/Root";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home/Home";
import Services from "../../pages/Services/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "services", element: <Services></Services> },
      { path: "blog", element: <Blog></Blog> },
    ],
  },
]);
