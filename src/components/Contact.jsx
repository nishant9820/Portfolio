import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { socials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const SocialCard = ({ index, icon, image, social_url }) => {
  return (
    <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)}>
      <div className=" flex  card-img_hover">
        <div
          onClick={() => window.open(social_url, "_blank")}
          className="bg-black-100 hover:rotate-[20deg]  transition duration-300 ease-in-out w-12 h-12 rounded-full flex justify-center items-center cursor-pointer "
        >
          <img
            src={icon}
            alt="source code"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_tuvc8va",
        "template_qiyjdcm",
        form.current,
        "XYQLylQ4jw23ivZDq"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  return (
    <div>
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="user_name"
                placeholder="What's your good name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="user_email"
                placeholder="What's your web address?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                placeholder="What you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              value="Send"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
      <div className="flex flex-row items-center mt-5 gap-5">
        {socials.map((social, index) => (
          <SocialCard key={social.title} index={index} {...social} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
