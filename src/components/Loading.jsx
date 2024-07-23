import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../index.css";
// import icon from "../images/icon.png";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const Loading = () => {
  return (
    <>
      <div className="loading">
        Loading....
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Loading;
