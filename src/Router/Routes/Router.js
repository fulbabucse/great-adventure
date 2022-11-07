import { createBrowserRouter } from "react-router-dom";
import Root from "../../layouts/Root";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home/Home";
import Services from "../../pages/Services/Services";
import AddService from "../../pages/Shared/AddService/AddService";
import Login from "../../pages/User/Login/Login";
import Profile from "../../pages/User/Profile/Profile";
import Register from "../../pages/User/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "services",
        loader: () => fetch("http://localhost:5000/services"),
        element: <Services></Services>,
      },
      { path: "blog", element: <Blog></Blog> },
      { path: "login", element: <Login></Login> },
      { path: "register", element: <Register></Register> },
      { path: "profile", element: <Profile></Profile> },
      { path: "add-service", element: <AddService></AddService> },
    ],
  },
]);
