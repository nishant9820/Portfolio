import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { blogs } from "../constants";

const BlogCard = ({ index, blog, name, blog_url, image }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px] ">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{blog}</p>

      <div className="mt-7 flex justify-between items-center ">
        <div className=" flex flex-col">
          <p className="text-white font-medium text-[16px]">Read more</p>
          <p className="text-white font-black animate-pulse  text-[48px] ">→</p>
        </div>
        <div
          onClick={() => window.open(source_code_link, "_blank")}
          className="bg-purple-800 hover:rotate-[20deg]  transition duration-300 ease-in-out  w-20 h-20 rounded-full flex justify-center items-center cursor-pointer shadow-lg border-2  shadow-purple-400 hover:shadow-red-400"
        >
          <img
            src={image}
            alt={`feedback_by-${name}`}
            className="w-1/2 h-1/2 object-contain 

            "
            onClick={() => window.open(blog_url, "_blank")}
          />
        </div>
      </div>
    </div>
  </motion.div>
);

const Blogs = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>SOMETHING TO LEARN </p>
          <h2 className={styles.sectionHeadText}>Blogs.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {blogs.map((blog, index) => (
          <BlogCard key={blog.name} index={index} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Blogs, "");
