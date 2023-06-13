import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, web } from "../assets";
import { arrowVariant, slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useNavigate } from "react-router-dom";
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  main_link,
}) => {
  return (
    <>
      <div
        className={`xl:mt-5 sm:mb-0 flex xl:flex-row flex-col-reverse gap-10 `}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75]  p-8 rounded-2xl"
        >
          <div className="flex flex-row justify-between">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
          </div>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
          <div className="mt-4 flex flex-wrap  gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.div variants={slideIn("right", "tween", 0.2, 1)}>
          <>
            <div className="bg-purple-700 rounded-t-2xl h-full pt-4  transform-gpu hover:scale-95 ease-in-out sm:w-[730px] w-full">
              <div className="flex ml-5  flex-row gap-5">
                <div className=" flex flex-end  card-img_hover">
                  <div
                    onClick={() => window.open(source_code_link, "_blank")}
                    className="black-gradient  w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                  >
                    <img
                      src={github}
                      alt="source code"
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                </div>
                <div className=" flex flex-end   card-img_hover">
                  <div
                    onClick={() => window.open(main_link, "_blank")}
                    className="black-gradient  w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                  >
                    <img
                      src={web}
                      alt="source code"
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="relative w-full mt-4 ">
                <img
                  src={image}
                  alt="project_image"
                  className="w-full h-full  object-cover "
                />
              </div>
            </div>
          </>
        </motion.div>
      </div>
    </>
  );
};
const Assignment = () => {
  return (
    <div className="mt-[90px]">
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>
          Techfolio<span className="text-[#915eff]"> Showcase </span>
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        A compilation of diverse software projects, encompassing websites and
        applications, showcasing innovation and functionality in the digital
        realm.
      </motion.p>

      <div className="mt-20 flex flex-col gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Assignment, "");
