import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TulipTasksHeroImage from "../../public/images/tulipTasks/tulipTasks-hero-image-01.webp";
import TransitionEffect from "@/components/TransitionEffect";
import { motion } from "framer-motion";
const FramerImage = motion(Image);
import Timeline from "@/components/Timeline";
import {
  ContactIcon,
  DatabaseZapIcon,
  LayoutTemplateIcon,
  RocketIcon,
  TelescopeIcon,
} from "lucide-react";
import TulipTasksInsights from "@/components/tulipTasksPortfolio/TulipTasksInsights";
import TulipTasksAppImages from "@/components/tulipTasksPortfolio/TulipTasksAppImages";
import TulipTasksWireFrame from "../../public/images/tulipTasks/TulipTasks-WireFrame.png";
import AnimatedCaption from "@/components/AnimatedCaption";
import VisitTulipTasksLink from "@/components/tulipTasksPortfolio/visitTulipTaskLink";

const MotionLink = motion(Link);

const slideInRight = {
  hidden: { x: 10, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const TulipTasks = () => {
  return (
    <>
      <Head>
        <title>Tulip Tasks</title>
        <meta name="description" content="Tulip Task Project Portfolio" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light mx-auto">
        <Layout className="pt-16">
          <div class="flex flex-col items-center justify-center ">
            <AnimatedText
              text={"Tulip Tasks"}
              className="mb-8 sm:mb-2 !text-8xl md:!text-6xl sm:!text-4xl"
            />
            <AnimatedCaption
              text={
                "Tulip Tasks is designed to help users overcome decision paralysis and prioritize tasks effectively by providing a structured and intuitive interface for goal, project, and task management."
              }
              className="mb-4 sm:mb-4 !text-lg md:!text-md sm:!text-md"
            />
            <FramerImage
              src={TulipTasksHeroImage}
              alt={
                "Half the image is a messy desk covered in post it notes. The other half of the image is a laptop on a clean desk open to Tulip Tasks."
              }
              className="w-full h-auto rounded-2xl"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            />
            {/* <AnimatedCaption
              text={
                "Tulip Tasks is a solo dev project, using Vite with React and TypeScript for the front-end, Supabase for real-time data and auth, local storage integration for account-free use, plus TailwindCSS with Shadcn for ui components."
              }
              className="mb-4 sm:mb-8  !text-sm md:!text-sm sm:!text-sm"
            /> */}
            <div class="flex items-end justify-center pt-4">
              <ul className="text-sm">
                <li className="text-dark dark:text-light">
                  <span className=" text-primary dark:text-primaryDark">
                    &#x2022; &nbsp;
                  </span>
                  Built using Vite with React & Typescript.
                </li>
                <li className="text-dark dark:text-light">
                  <span className=" text-primary dark:text-primaryDark">
                    &#x2022; &nbsp;
                  </span>
                  Supabase for real-time data and auth.
                </li>
                <li className="text-dark dark:text-light">
                  <span className=" text-primary dark:text-primaryDark">
                    &#x2022; &nbsp;
                  </span>
                  Local storage utilized for account-free use.
                </li>
                <li className="text-dark dark:text-light">
                  <span className=" text-primary dark:text-primaryDark">
                    &#x2022; &nbsp;
                  </span>
                  Tailwind CSS with Shadcn-ui for UI components.
                </li>
              </ul>
            </div>
            <Timeline
              timelineTitle={"Project Timeline"}
              timelineEvents={[
                {
                  month: "October 2023",
                  title: "User Interviews | UI/UX Design",
                  description:
                    "Started discovery with user interviews utilizing insights to drive the initial UI/UX for Tulip Tasks.",
                  icon: (
                    <ContactIcon className="text-primary dark:text-primaryDark" />
                  ),
                },
                {
                  month: "November - December 2023",
                  title: "Technical Discovery Phase",
                  description:
                    "Learned React & Typescipt. Selected a tech stack. Built a practice React project (Resume Builder) to solidify understanding.",
                  icon: (
                    <TelescopeIcon className="text-primary dark:text-primaryDark" />
                  ),
                },
                {
                  month: "January 2024",
                  title: "Front-End Development",
                  description:
                    "Began front-end development using React, TailwindCSS, and Shadcn. Continued refining the UI/UX.",
                  icon: (
                    <LayoutTemplateIcon className="text-primary dark:text-primaryDark" />
                  ),
                },
                {
                  month: "February 2024",
                  title: "Back-End Development",
                  description:
                    "Started building the back-end with Supabase and SQL for live data and authentication.",
                  icon: (
                    <DatabaseZapIcon className="text-primary dark:text-primaryDark" />
                  ),
                },
                {
                  month: "March 2024",
                  title: "Launch & Feedback",
                  description:
                    "Launched the app, collected feedback, and fixed bugs.",
                  icon: (
                    <RocketIcon className="text-primary dark:text-primaryDark" />
                  ),
                },
              ]}
            />
            <TulipTasksInsights />
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, type: "spring" }}
            >
              <AnimatedText
                text={"UX Wireframing"}
                className=" pb-2 !text-6xl md:!text-5xl sm:!text-3xl"
              />
              <FramerImage
                src={TulipTasksWireFrame}
                alt={
                  "Screen grab of wireframing diagrams using Excalidraw in dark mode."
                }
                className="w-full h-auto pb-16"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <TulipTasksAppImages />
            <div className="flex items-center justify-center mt-8">
              <MotionLink
                href="https://task-priority.vercel.app/"
                target="_blank"
                className="
            w-64 h-24 bg-blue-400 text-light flex items-center justify-center rounded-2xl border-4 border-blue-300 shadow-md text-2xl font-bold
                    "
                whileHover={{
                  backgroundColor: [
                    "rgb(96, 165, 250)",
                    "rgb(245, 158, 11)",
                    "rgba(252,176,69,1)",
                    "rgb(132, 204, 22)",
                    "rgb(34, 197, 94)",
                    "rgb(52, 211, 153)",
                    "rgb(45, 212, 191)",
                    "rgb(34, 211, 238)",
                    "rgb(96, 165, 250)",
                    "rgb(192, 132, 252)",
                    "rgb(96, 165, 250)",
                  ],
                  transition: { duration: 1, repeat: Infinity },
                }}
              >
                Visit Tulip Tasks
              </MotionLink>
            </div>
          </div>
        </Layout>
        <VisitTulipTasksLink />
      </main>
    </>
  );
};

export default TulipTasks;
