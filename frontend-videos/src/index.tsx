import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import { VideoList } from "./Videos/VideoList";
import VideoForm from "./Videos/VideoForm";
import Navbar from "./Navbar/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className="container-fluid">
        {" "}
        <div className="row justify-content-center mt-4">
          {" "}
          <Routes>
            <Route path="/" element={<VideoList />} />
            <Route path="/new-video" element={<VideoForm />} />
            <Route path="/update/:id" element={<VideoForm />} />
          </Routes>
        </div>
      </div>
      <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
