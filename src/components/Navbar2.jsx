import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { logo, menu, close } from "../assets";
const Navbar2 = () => {
  const [active, setActive] = useState("");

  return (
    <nav
      className={`${styles.paddingX} w-full items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div
          className="flex items-center gap 2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain mr-3 " />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Nishant&nbsp;
            <span
            // className="sm:block hidden"
            >
              Desai
            </span>
          </p>
        </div>
        <Link
          to="/"
          className="flex items-center gap 2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white font-black animate-pulse  ml-2 text-[35px] ">
            ←
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar2;
