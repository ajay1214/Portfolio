import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../index.css";
// import cam from "../images/cam.png";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import { BrowserRouter, Link, Route ,Routes} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
const Goback = (props) => {
    const navigate = useNavigate();
  return (
    <>
        <div className="goback">
          <button className="go-button" onClick={()=>{navigate(-1)}}><ArrowBackOutlinedIcon sx={{  fontSize: "30px" }}/></button>
          <button className="go-button" onClick={()=>{navigate(1)}}><ArrowForwardOutlinedIcon sx={{  fontSize: "30px" }}/></button>
        </div>
    </>
  );
};

export default Goback;
