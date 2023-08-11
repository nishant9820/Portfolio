import React from "react";
import Assignment from "./components/Assignment";
import Navbar2 from "./components/Navbar2";
import { Contact, StarsCanvas } from "./components";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const Projects = () => {
  const Location = useLocation();
  const [active, setActive] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
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
