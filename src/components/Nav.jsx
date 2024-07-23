import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import {NavLink} from "react-router-dom";
import "../index.css";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import Goback from "./Goback";
import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const handleClick = ()=>{
    setOpen(!open);
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand main-li" id="nav-li">
            Ajay Bind 
          </NavLink>
          <Goback/>

          <button
            className="navbar-toggler toggle"
            type="button"
          
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleClick}
         
          >
            <DragHandleIcon id="toggle-icon" />
          </button>
          <div className={"collapse navbar-collapse"+ (open?" show":"")}  id="navbarNav">
            <ul className="ms-auto me-4 navbar-nav">
              <li className="me-4 nav-item">
                <NavLink to="/" className="nav-li" onClick={handleClick} >
                  {
                    ({isActive})=>(
                    <span className={isActive?"active-link":""}>
                      Home
                    </span>)
                  }
                </NavLink>
              </li>
              <li className="me-4 nav-item">
                <NavLink to="/about" className="nav-li" onClick={handleClick}>
                {
                    ({isActive})=>(
                    <span className={isActive?"active-link":""}>
                    About
                    </span>)
                  }
                </NavLink>
              </li>
              <li className="me-4 nav-item">
                <NavLink to="/contact" className="nav-li" onClick={handleClick}>
                {
                    ({isActive})=>(
                    <span className={isActive?"active-link":""}>
                     Contact
                    </span>)
                  }
                </NavLink>
              </li>
              <li className="me-4 nav-item">
              <NavLink to="/code" onClick={handleClick}>
        
              {
                    ({isActive})=>(
                    <span className={isActive?"active-link":""}>
                      Coding-Stats
                    </span>)
                  }
                </NavLink>
              </li>
              {/* <li className="me-4 nav-item">
              <NavLink to="/gallery" onClick={handleClick}>
        
              {
                    ({isActive})=>(
                    <span className={isActive?"active-link":""}>
                     Gallery
                    </span>)
                  }
                  
                </NavLink>
              </li> */}
              {/* <li className="me-4 nav-item">
              <NavLink to="/poetry" onClick={handleClick}>
        
                {
                    ({isActive})=>(
                    <span className={isActive?"active-link":""}>
                     Poetry
                    </span>)
                  }
                  
                </NavLink>
              </li> */}
              <li className="me-4 nav-item">
              <NavLink to="/projects" onClick={handleClick}>
        
                {
                    ({isActive})=>(
                    <span className={isActive?"active-link":""}>
                     Projects
                    </span>)
                  }  
                </NavLink>
              </li>
              
             
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
