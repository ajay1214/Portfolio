import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../index.css";
import cyber from "../images/cybers.png";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";

const Project = (props) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="projdiv col-lg-6 col-md-12">
            <h3>
              Apart from this website,
              <br />
              there are few more to see! !
            </h3>
            <table className="project-links">
              <tr>
                <td>Languages Learning</td>
                <td>
                  <a target="blank" href="https://ab-languages.vercel.app/">
                    <LinkIcon /> Website
                  </a>
                </td>
                <td>
                  <a
                    target="blank"
                    href="https://github.com/ajay1214/abLanguages"
                  >
                    <GitHubIcon /> Repo
                  </a>
                </td>
              </tr>
              <tr>
                <td>White Board</td>
                <td>
                  <a target="blank" href="https://ab-white-board.vercel.app/">
                    <LinkIcon /> Website
                  </a>
                </td>
                <td>
                  <a
                    target="blank"
                    href="https://github.com/ajay1214/abWhiteBoard"
                  >
                    <GitHubIcon /> Repo
                  </a>
                </td>
              </tr>
              <tr>
                <td>Images Editor</td>
                <td>
                  <a target="blank" href="https://ab-images.vercel.app/">
                    <LinkIcon /> Website
                  </a>
                </td>
                <td>
                  <a
                    target="blank"
                    href="https://github.com/ajay1214/abImages"
                  >
                    <GitHubIcon /> Repo
                  </a>
                </td>
              </tr>
              <tr>
                {/* NEED TO CHANGE HERE */}
                <td>Instagram UI Clone</td>
                <td>
                  <a
                    target="blank"
                    href="https://ajay-bind.vercel.app/auth"
                  >
                    <LinkIcon /> Website
                  </a>
                </td>
                <td>
                  <a
                    target="blank"
                    href="https://github.com/ajay1214/InstaClone"
                  >
                    <GitHubIcon /> Repo
                  </a>
                </td>
              </tr>
              <tr>
                <td>ChatApp</td>
                <td>
                  <a target="blank" href="https://chatapp-h2h0.onrender.com/">
                    <LinkIcon /> Website
                  </a>
                </td>
                <td>
                  <a target="blank" href="https://github.com/ajay1214/ChatApp">
                    <GitHubIcon /> Repo
                  </a>
                </td>
              </tr>
              <tr>
                <td>Movie Found</td>
                <td>
                  <a target="blank" href="https://movie-found.vercel.app/">
                    <LinkIcon /> Website
                  </a>
                </td>
                <td>
                  <a
                    target="blank"
                    href="https://github.com/ajay1214/movie-found"
                  >
                    <GitHubIcon /> Repo
                  </a>
                </td>
              </tr>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </table>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="anim cam-logo">
              <img src={cyber} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
