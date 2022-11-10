import { createBrowserRouter } from "react-router-dom";
import Root from "../../layouts/Root";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home/Home";
import MyReviews from "../../pages/MyReviews/MyReviews";
import UpdatesReview from "../../pages/MyReviews/UpdatesReview/UpdatesReview";
import Services from "../../pages/Services/Services";
import AddService from "../../pages/Shared/AddService/AddService";
import Error from "../../pages/Shared/Error/Error";
import ServiceDetails from "../../pages/Shared/ServiceDetails/ServiceDetails";
import Login from "../../pages/User/Login/Login";
import Profile from "../../pages/User/Profile/Profile";
import Register from "../../pages/User/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "services",
        element: <Services></Services>,
      },
      { path: "blog", element: <Blog></Blog> },
      { path: "login", element: <Login></Login> },
      { path: "register", element: <Register></Register> },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "my-reviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/service/:id",
        errorElement: <Error></Error>,
        loader: ({ params }) =>
          fetch(
            `https://greate-adventure-with-fahim-server.vercel.app/services/${params.id}`
          ),
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/my-review/:id",
        errorElement: <Error></Error>,
        loader: ({ params }) =>
          fetch(
            `https://greate-adventure-with-fahim-server.vercel.app/review/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <UpdatesReview></UpdatesReview>
          </PrivateRoute>
        ),
      },
      {
        path: "add-service",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      { path: "*", element: <Error></Error> },
    ],
  },
]);
