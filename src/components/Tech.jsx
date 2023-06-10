import React from "react";
import { BallCanvas } from "./canvas";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className=" w-28 h-28 " key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
      <div
        className="  mt-10  sm:bottom-2 
       flex justify-center items-center"
      >
        <a href="#project">
          <p className="text-white font-black animate-bounce  text-[48px] ">
            ↓
          </p>
        </a>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
