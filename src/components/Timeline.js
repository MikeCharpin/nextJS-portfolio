import React, { useRef } from "react";
import AnimatedText from "@/components/AnimatedText";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ month, title, description, icon }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between xs:w-[70%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="pl-2"
      >
        <div className="flex sm:flex-col xl:flex-row gap-2">
          <span className="capitaize font-medium text-dark/75 dark:text-light/50">
            {icon}
          </span>
          <h3 className="capitalize font-bold font-2xl dark:text-light">
            {title}
          </h3>
        </div>
        <span className="capitaize font-medium text-dark/75 dark:text-light/50">
          {month}
        </span>

        <p className="font-normal w-full dark:text-light ">{description}</p>
      </motion.div>
    </li>
  );
};

const Timeline = ({ timelineTitle, timelineEvents }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="mt-8">
      <AnimatedText
        text={timelineTitle}
        className="mb-8 sm:mb-8 !text-6xl md:!text-5xl sm:!text-3xl"
      />

      <div ref={ref} className="w-[75%] mx-auto relative xs:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-primaryDark origin-top "
        />
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-2 w-[4px] h-full bg-transparent dark:bg-primaryDark blur dark:opacity-50 origin-top rounded-3xl "
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          {timelineEvents.map((event, index) => (
            <Details
              key={index}
              month={event.month}
              title={event.title}
              description={event.description}
              icon={event.icon}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
