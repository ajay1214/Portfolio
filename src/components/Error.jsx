import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../index.css";
import err from "../images/404.png";
const Error = () => {
  return (
    <>
      <div className="err anim" >
        <img src={err} alt="error"/>
        <div className="clear"></div>
      </div>
    </>
  );
};

export default Error;
