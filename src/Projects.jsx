import React from "react";
import Assignment from "./components/Assignment";
import Navbar2 from "./components/Navbar2";
import { Contact, StarsCanvas } from "./components";

const Projects = () => {
  return (
    <div className="   bg-primary ">
      <div className="  bg-cover bg-no-repeat bg-center  ">
        <Navbar2 />
        <Assignment />
      </div>
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default Projects;
