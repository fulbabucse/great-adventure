import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "tw-elements";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <HelmetProvider>
      <App />
      <Toaster />
    </HelmetProvider>
  </AuthProvider>
);

reportWebVitals();
