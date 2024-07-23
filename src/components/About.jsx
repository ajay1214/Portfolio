import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../index.css";
import tech from "../images/tech.png";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {Link} from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="container-fluid" id="cf">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <p>
              <h3>Me:</h3>
              <p>
                <ul className="about-info">
                  <li>
                    I am Ajay Bind, a B.tech undergraduate at NIT Warangal.
                  </li>
                  <li>I am currently pursuing Mechanical Engineering.</li>
                  <li>
                    I belong to Jaunpur, a city in Uttar Pradesh province of
                    India.
                  </li>
                </ul>
              </p>
              <h3>Education:</h3>
              <p>
                <ul className="about-info">
                  <li>
                    I completed my senior secondary examination in 2021 with
                    72.4% score.
                  </li>
                  <li>Secondary examination in 2019 with 87.6% score.</li>
                  <li>I cleared JEE Mains in 2021 with AIR 21325.</li>
                </ul>
              </p>
              <h3>Skills:</h3>
              <p>
                <ul className="about-info">
                  <li>Data Structures And Algorithms</li>
                  <li>C++, C Lang</li>
                  <li>HTML, CSS and JavaScript</li>
                  <li>ReactJS, Node.js, Express, MongoDB</li>
                  <li>DBMS, MYSQL, Operating System, Computer Networks</li>
                </ul>
              </p>
              <h3>Hobbies:</h3>
              <p>
                <ul className="about-info">
                  <li> My interest lies in cricket, coding</li>
                  <li>I love to travel also.</li>
                </ul>
              </p>
            </p>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="anim about-logo">
              <img src={tech} alt="logo" />
            </div>
           
            <div className="text-center">
                <Link to="/code">
                  <button id="codestat" className="btn btn-primary">
                    My Coding Stats
                  </button>
                </Link>
          </div>
          </div>
        </div>
      </div>
      <div class="clear"></div>
    </>
  );
};

export default About;
