import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <>
    <BrowserRouter>
      <ToastContainer
        // toastClassName={css({ fontFamily: "Vazir" })}
        style={{ fontFamily: "Vazir" }}
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={true}
        theme="colored"
        draggable
        pauseOnHover
      />
      <App />
    </BrowserRouter>
  </>
);
