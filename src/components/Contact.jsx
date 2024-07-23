import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../index.css";
// import icon from "../images/icon.png";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import contact from "../images/contact.png";
import InstagramIcon from "@mui/icons-material/Instagram";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
// import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

// const myFunction = (e)=> {
//     let phone = e.target.innerText;
//     navigator.clipboard.writeText(phone);
//     alert("Phone number copied: " + phone);
//     // console.log(e.target.innerText);
//   }

const Contact = () => {
  return (
    <>
      <div className="cen">
        <div className="container-fluid" id="contain">
          <div className="row" id="rw">
            <div className="col-lg-4 col-md-6 col-sm-12 item2">
              <p>
                <ul className="main-contact">
                  <li className="main-li1">
                    <h2>Connect with Me on:</h2>
                  </li>
                  <li className="main-li">
                    <LinkedInIcon
                      sx={{ color: "darkblue", fontSize: "40px" }}
                    />
                    <a
                      style={{ textDecoration: "none", marginLeft: "20px" }}
                      href="https://www.linkedin.com/in/ajaybind/"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li className="main-li">
                    <EmailIcon sx={{ color: "green", fontSize: "40px" }} />
                    <a
                      style={{ textDecoration: "none", marginLeft: "20px" }}
                      href="mailto:adarshbind61@gmail.com"
                    >
                      adarshbind61@gmail.com
                    </a>
                  </li>

                  <li className="main-li">
                    <GitHubIcon sx={{ color: "black", fontSize: "40px" }} />
                    <a
                      style={{ textDecoration: "none", marginLeft: "20px" }}
                      href="https://github.com/ajay1214"
                    >
                      {" "}
                      Github
                    </a>
                  </li>
                  <li className="main-li">
                    <InstagramIcon
                      sx={{ color: "#d33b84", fontSize: "40px" }}
                    />
                    <a
                      style={{ textDecoration: "none", marginLeft: "20px" }}
                      href="https://www.instagram.com/ajay_bind786/"
                    >
                      @ajay_bind786
                    </a>
                  </li>
                </ul>
              </p>
            </div>

            <div className="col-lg-4 col-md-12 item3">
              <img className="anim" src={contact} alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
