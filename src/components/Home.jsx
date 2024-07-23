import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../index.css";
import profile from "../images/prof.png";
import icon from "../images/icon.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <>
    <div className="cen">
      <div className="container-fluid" id="contain">
    
        <div className="row" id="rw">
          <div className="col-lg-3 col-md-6 col-sm-12 item1">
            <img src={profile} alt="profile" />
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12 item2">
            <p>
              <ul className="main">
                <li className="main-li"><h2>Hola! Visitor</h2></li>
                <li className="main-li">Ajay here!</li>
                <li className="main-li">
                  Thank you for the visit!
                </li>
                <li className="main-li">
                <Link to="/about">
                  <button className="btn btn-primary know">
                    About Me <ArrowForwardIosIcon />
                  </button>
                  </Link>
                </li>
                <li className="main-li">
                <Link to="/contact">
                  <button className="btn btn-primary know">
                    Let's Connect <ArrowForwardIosIcon />
                  </button>
                  </Link>
                </li>
                {/* <li className="main-li">
                <Link to="/arts">
                  <button className="btn btn-primary know">
                    My Arts <ArrowForwardIosIcon />
                  </button>
                  </Link>
                </li> */}
                <li className="main-li">
                <Link to="/code">
                  <button className="btn btn-primary know">
                    Me at Coding<ArrowForwardIosIcon />
                  </button>
                  </Link>
                </li>
                <li className="main-li">
                <Link to="/projects">
                  <button className="btn btn-primary know">
                    Few Projects!<ArrowForwardIosIcon />
                  </button>
                  </Link>
                </li>
              </ul>
            </p>
          </div>

          <div className="col-lg-4 col-md-12 item3">
            <img className="anim" src={icon} alt="icon" />
          </div>
        </div>
        </div>
        </div>
    </>
  );
};

export default Home;
