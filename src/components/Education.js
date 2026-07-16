import React, { useRef } from "react";
import { motion } from "framer-motion";

const Details = ({ type, time, place, info, variant = "primary" }) => {
  const ref = useRef(null);
  const isSecondary = variant === "secondary";

  return (
    <li
      ref={ref}
      className={`
            my-8 first:mt-0 last:mb-0 mx-auto flex flex-col items-start justify-between
            rounded-xl xs:w-full sm:w-full
            ${
              isSecondary
                ? "w-[50%] py-6 px-10 border border-dark/30 dark:border-light/40"
                : "w-[60%] py-10 px-16 border-2 border-dark/60 dark:border-2 dark:border-solid dark:border-light/90"
            }`}
    >
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <h3
          className={`font-bold py-2 ${isSecondary ? "text-lg" : "text-2xl"}`}
        >
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/50 py-2">
          {time} {place}
        </span>
        <p
          className={`w-full py-2 ${isSecondary ? "font-normal text-sm text-dark/70 dark:text-light/60" : "font-medium"}`}
        >
          {info}
        </p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);

  return (
    <div className="mt-32 ">
      <h2 className="font-bold text-8xl mb-16 w-full text-center  sm:text-6xl xs:text-4xl ">
        Education
      </h2>

      <div
        ref={ref}
        className="w-[75%]  mx-auto relative xs:w-full sm:w-full md:w-full lg:w-full"
      >
        <ul className="w-full flex flex-col  justify-center items-center ">
          <Details
            type={"Bachelor's of Science in Industrial Design"}
            place={"Wentworth Institute of Technology"}
            info={
              "Physical Product Design, User Experience Research, Design Thinking, Model Making, Visual Communication"
            }
          />

          <Details
            type={"JavaScript Certificate"}
            time={"2022"}
            place={"LearnJavascript.online"}
            info={
              "Self-taught, formalized with a certificate. Projects: Form Validation, Instant Search, Todo App API, GitHub API, Currency Conversion API, Food Tracker"
            }
            variant="secondary"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
