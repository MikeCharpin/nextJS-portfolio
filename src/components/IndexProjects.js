import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import proteusSingleHandAttachmentImage from "../../public/images/projects/proteusSingleHandAttachment.jpeg";
import TC75MobileImage from "../../public/images/projects/TC75MobileImage.jpeg";
import TC51HolsterImage from "../../public/images/projects/TC51HolsterImage.jpeg";
import DeadChannelLogoImage from "../../public/images/projects/DeadChannelLogoImage.jpeg";
import ResumeBuilderImage from "../../public/images/projects/ResumeBuilder-Edited.jpeg";
import TulipTasksImage from "../../public/images/projects/TulipTasks.webp";
import DatsunResourceImage from "../../public/images/projects/DatsunResource-Edited.webp";
import DiceCapsuleImage from "../../public/images/projects/DiceCapsule-Edited.webp";
import ZebraZC300 from "../../public/images/projects/Zebra-ZC300-02.jpg"
import { motion } from "framer-motion";
import { StickerIcon } from "lucide-react";

const FramerImage = motion(Image);

const FeaturedProject = ({ title, summary, client, img, link, github, target }) => {
  return (
    <article className="w-full h-full flex flex-col items-center justify-between rounded-3xl  dark:bg-zinc-800 dark:border-zinc-900 shadow-lg p-4">
      <div>
        <Link
          href={link}
          target={target}
          className=" w-full cursor-pointer overflow-hidden rounded-xl drop-shadow-md pb-4"
        >
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-auto rounded-xl"
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </Link>
        <div className=" flex flex-col justify-start items-start pt-4">
          <span className="text-primary dark:text-primaryDark font-medium text-lg xs:text-base">
            {client}
          </span>
          <Link
            href={link}
            target={target}
            className="hover:underline underline-offset-2"
          >
            <h2 className=" w-full text-2xl font-bold sm:text-xl md:text-xl dark:text-light">
              {title}
            </h2>
          </Link>
          <p className="py-2  text-dark dark:text-light">{summary}</p>
          
        </div>
      </div>
      <div className="pt-2 flex items-center justify-start w-full">
        <Link
          href={link}
          target={target}
          className="mr-4 rounded-lg border-2 border-solid border-slate-500 hover:bg-primary/90 drop-shadow-md hover:text-light hover:border-primary dark:text-light dark:hover:text-dark  dark:border-light dark:hover:bg-primaryDark/70 dark:hover:border-primaryDark/70 p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base "
        >
          Visit Project
        </Link>
        <Link
          href={github}
          target={target}
          className="w-10 rounded-full  fill-dark  dark:fill-light"
        >
          <GithubIcon />
        </Link>
        
      </div>
    </article>
  );
};

const FeaturedIDProject = ({ title, summary, client, img, link, target }) => {
  return (
    <article className="w-full h-full flex flex-col items-center justify-between rounded-3xl  dark:bg-zinc-800 dark:border-zinc-900 shadow-lg p-4">
      <div>
        <Link
          href={link}
          target={target}
          className=" w-full cursor-pointer overflow-hidden rounded-xl drop-shadow-md pb-4"
        >
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-auto rounded-xl"
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </Link>
        <div className=" flex flex-col justify-start items-start pt-4">
          <span className="text-primary dark:text-primaryDark font-medium text-lg xs:text-base">
            {client}
          </span>
          <Link
            href={link}
            target={target}
            className="hover:underline underline-offset-2"
          >
            <h2 className=" w-full text-2xl font-bold sm:text-xl md:text-xl dark:text-light">
              {title}
            </h2>
          </Link>
          <p className="py-2  text-dark dark:text-light">{summary}</p>
        </div>
      </div>
      <div className="pt-2 flex items-center justify-start w-full">
        <Link
          href={link}
          target={target}
          className="mr-4 rounded-lg border-2 border-solid border-slate-500 hover:bg-primary/90 drop-shadow-md hover:text-light hover:border-primary dark:text-light dark:hover:text-dark  dark:border-light dark:hover:bg-primaryDark/70 dark:hover:border-primaryDark/70 p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base "
        >
          Visit Project
        </Link>
      </div>
    </article>
  );
};



const IndexProjects = () => {
  return (
    <div className="px-4">
      <AnimatedText
        text={"Featured Projects"}
        className="pb-4 pt-16 !text-5xl md:!text-4xl sm:!text-3xl"
      />

      <div className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-8">

        <div className="">
          <FeaturedIDProject
            title={"Fitness Machine Attachment"}
            summary={
              "A refined single-hand interface designed to translate human movement into precise interaction with a robotic fitness platform."
            }
            link={
              "https://www.behance.net/gallery/177955717/Proteus-Single-Hand-Attachment"
            }
            img={proteusSingleHandAttachmentImage}
            client={"Proteus Motion"}
            target={"_blank"}
          />
        </div>

        <div className="">
          <FeaturedIDProject
            title={"ZC300 Printer Cartridge"}
            summary={
              "A cartridge experience that transforms an overlooked component into a simple, intuitive, and visually integrated interaction."
            }
            link={"https://www.behance.net/gallery/203712017/ID-Card-Printer-Ribbon-Carrier"}
            img={ZebraZC300}
            client={"Zebra Technologies"}
            target={"_blank"}
          />
        </div>

        <div className="">
          <FeaturedIDProject
            title={"Dead Channel Dice Capsule"}
            summary={
              "An interactive sci-fi inspired artifact that transforms dice storage into a captivating display experience."
            }
            link={
              "https://www.behance.net/gallery/178339557/Dead-Channel-Dice-Capsule"
            }
            img={DiceCapsuleImage}
            client={"Dead Channel"}
            target={"_blank"}
          />
        </div>
        

        <div className="">
          <FeaturedProject
            title={"Tulip Tasks Prioritization App"}
            summary={
              "A personal productivity system designed to make managing goals and responsibilities feel more approachable, visual, and engaging."
            }
            link={"/tulip-tasks"}
            img={TulipTasksImage}
            client={"Self-Initiated"}
            github={"https://github.com/MikeCharpin/taskPriority"}
            target={""}
          />
        </div>
      </div>
      <div className=" pt-8">
        <Link
          href={"/projects"}
          className=" flex items-center justify-center rounded-lg border-2 border-solid border-slate-500 hover:bg-primary/90 drop-shadow-md hover:text-light hover:border-primary dark:text-light dark:hover:text-dark  dark:border-light dark:hover:bg-primaryDark/70 dark:hover:border-primaryDark/70 p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base "
        >
          <StickerIcon /> &nbsp; Full projects page
        </Link>
      </div>
    </div>
  );
};

export default IndexProjects;
