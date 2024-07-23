import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Code from "./components/Code";
import Error from "./components/Error";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Charts from "./components/Charts";
import Contact from "./components/Contact";
// import Gallery from "./components/Gallery";
// import Photos from "./components/Photos";
// import Art from "./components/Art";
// import Poetry from "./components/Poetry";
import Project from "./components/Project";

const App = () => {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/code" element={<Code/>}/>
          <Route exact path ="/contact" element={<Contact/>}/>
          {/* <Route exact path="/gallery" element={<Photos/>}/> */}
          {/* <Route exact path="/arts" element={<Art/>}/> */}
          {/* <Route exact path="/poetry" element={<Poetry/>}/> */}
          <Route exact path="/projects" element={<Project/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
