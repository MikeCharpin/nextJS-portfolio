import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
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
      >
        <h3 className="capitalize font-bold font-2xl">{position}&nbsp; </h3>
        <h3>
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize "
          >
            @&nbsp;{company}
          </a>
        </h3>
        <span className="capitaize font-medium text-dark/75 dark:text-light/50">
          {time} | {address}
        </span>

        <p className="font-medium w-full ">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="pt-8">
      <h2 className="font-bold text-8xl mb-8 w-full text-center  sm:text-6xl xs:text-4xl">
        Experience
      </h2>

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
          <Details
            position={"Lecturer, Industrial Design"}
            company={"Iowa State University"}
            companyLink={
              "https://www.design.iastate.edu/academics/departments/industrial-design/"
            }
            time={"2025 - current"}
            address={"Ames, IA"}
            work={
              "Teaching studio and technical courses from intro through senior capstone, including a course I built from scratch on parametric CAD and rendering. I try to give students the version of that learning curve I wish I'd had."
            }
          />
          <Details
            position={"Production Operations Manager"}
            company={"Funny Face Bakery"}
            companyLink={"https://funnyfacebakery.com/"}
            time={"2024 - 2025"}
            address={"Brooklyn, NY"}
            work={
              "Ran production on a 30-person manufacturing floor, which meant a lot less design and a lot more logistics than I expected; workflow redesign, waste reduction, and standardizing print production so the team wasn't reinventing the process every shift."
            }
          />
          <Details
            position={"Web Developer & Designer"}
            company={"Michael Charpin Design"}
            companyLink={"https://www.MichaelCharpin.com"}
            time={"2022 - 2025"}
            address={"Brooklyn, NY"}
            work={
              "Built and shipped two full products on my own; a 300-page searchable resource site for vintage Datsun parts, and a task-prioritization app I'd wanted to build for three years. Learned full-stack development from scratch to make both happen."
            }
          />

          <Details
            position={"Project Manager & Senior Industrial Designer"}
            company={"Miniature World"}
            companyLink={"https://www.BigMiniWorld.com"}
            time={"2022 - 2023"}
            address={"Staten Island, NY"}
            work={
              "Directed a team of model makers building large-scale exhibit infrastructure and custom display systems, including interactive mechatronic animations. Also set up woodshop safety protocols that hadn't existed before I got there."
            }
          />

          <Details
            position={"General Manager"}
            company={"Union Garage"}
            companyLink={"https://uniongaragenyc.com/"}
            time={"2020 - 2022"}
            address={"Brooklyn, NY"}
            work={
              "Established clear guidelines for customer interactions and inventory management, boosting our sales team's confidence and our reputation as a trusted motorcycle safety gear retailer. I also enhanced order accuracy, synchronized our inventory systems, and managed the relocation of our inventory from Brooklyn to Bridgeport."
            }
          />
          <Details
            position={"Industrial Designer"}
            company={"Dead Channel"}
            companyLink={"https://www.MichaelCharpin.com"}
            time={"2020 - 2022"}
            address={"Brooklyn, NY"}
            work={
              "My own product line, sci-fi inspired dice storage, designed and fabricated in-house on a CNC, laser cutter, and 3D printer I ran myself. Took a product from a lunch-break sketch through aluminum machining, resin casting, and a lot of prototypes that didn't work before the ones that did."
            }
          />
          <Details
            position={"Senior Industrial Designer"}
            company={"Proteus Motion"}
            companyLink={"https://proteusmotion.com/"}
            time={"2017 - 2020"}
            address={"Long Island City, NY"}
            work={
              "Designed and fabricated the prototype systems used to demonstrate a resistance-training platform to early investors, including the aluminum and polymer handles that had to work well enough to convince people to fund the company. Learned CNC machining and CAM workflows largely on my own, cutting prototype turnaround from weeks to days."
            }
          />

          <Details
            position={"Junior Industrial Desginer"}
            company={"Zebra Technologies"}
            companyLink={"https://www.Zebra.com"}
            time={"2015 - 2017"}
            address={"Holtsville, NY"}
            work={
              "Worked on award-winning enterprise hardware, including the ZC350 ID card printer, and redesigned scanner iconography that measurably cut customer-service issues; a rare case of a small design change having an obvious, countable effect."
            }
          />

          <Details
            position={"Mechanical Drafter"}
            company={"Gentex Corp."}
            companyLink={"https://www.GentexCorp.com"}
            time={"2013 - 2015"}
            address={"Boston, MA"}
            work={
              "Built engineering-change-order systems and worked on military helmet mounting systems that had to meet ballistic requirements; my first real exposure to designing for a hard, non-negotiable spec."
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
