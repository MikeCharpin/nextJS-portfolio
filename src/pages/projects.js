import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import portfolioImage from "../../public/images/projects/Portfolio-Edited-01.jpeg";
import rockPaperScissorsImage from "../../public/images/projects/RockPaperScissors-edited.jpeg";
import proteusSingleHandAttachmentImage from "../../public/images/projects/proteusSingleHandAttachment.jpeg";
import TC75MobileImage from "../../public/images/projects/TC75MobileImage.jpeg";
import TC51HolsterImage from "../../public/images/projects/TC51HolsterImage.jpeg";
import DeadChannelLogoImage from "../../public/images/projects/DeadChannelLogoImage.jpeg";
import TulipTasksImage from "../../public/images/projects/TulipTasks.webp";
import DatsunResourceImage from "../../public/images/projects/DatsunResource-Edited.webp";
import DiceCapsuleImage from "../../public/images/projects/DiceCapsule-Edited.webp";
import ZebraZC300 from "../../public/images/projects/Zebra-ZC300-02.jpg"
import proteusEnclosure from "../../public/images/projects/Proteus-Enclosure.jpg"
import TransitionEffect from "@/components/TransitionEffect";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  target,
}) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl rounded-br-2xl border-2 border-solid border-slate-200 bg-slate-100 dark:bg-zinc-800 dark:border-zinc-900 shadow-xl p-12 relative lg:flex-col lg:p-8 xs:rounded-2xl xs:p-4 ">
      <Link
        href={link}
        target={target}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full drop-shadow-md"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target={target}
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-xl dark:text-light">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
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
            {" "}
            <GithubIcon />{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const FeaturedIDProject = ({ type, title, summary, img, link }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl rounded-br-2xl border-2 border-solid border-slate-200 bg-slate-100 dark:bg-zinc-800 dark:border-zinc-900 shadow-xl p-12 relative lg:flex-col lg:p-8 xs:rounded-2xl xs:p-4 ">
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full drop-shadow-md"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-xl dark:text-light">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link
            href={link}
            target="_blank"
            className="mr-4 rounded-lg border-2 border-solid border-slate-500 hover:bg-primary/90 drop-shadow-md hover:text-light hover:border-primary dark:text-light dark:hover:text-dark  dark:border-light dark:hover:bg-primaryDark/70 dark:hover:border-primaryDark/70 p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const MinorProject = ({ title, type, img, link, github }) => {
  return (
    <article
      className="
        w-full h-full flex flex-col justify-between rounded-3xl 
        border-2 border-solid border-slate-200 bg-slate-100 dark:bg-zinc-800 dark:border-zinc-900  shadow-xl p-12 relative lg:p-8 xs:p-4"
    >
      <div>
        <Link
          href={link}
          target="_blank"
          className="w-full h-auto cursor-pointer overflow-hidden rounded-lg drop-shadow-md"
        >
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </Link>
        <div className="w-full  flex flex-col items-start justify-between pt-2">
          <span className="text-primary dark:text-primaryDark font-medium text-xl sm:text-base">
            {type}
          </span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2 h-full"
          >
            <h2 className="w-full h-full my-2 text-left text-3xl font-bold dark:text-light sm:text-xl ">
              {title}
            </h2>
          </Link>
        </div>
      </div>
      <div className="w-full mt-2 flex items-end justify-start">
        <Link
          href={link}
          target="_blank"
          className="mr-4 rounded-lg border-2 border-solid border-slate-500 hover:bg-primary/90 drop-shadow-md hover:text-light hover:border-primary dark:text-light dark:hover:text-dark  dark:border-light dark:hover:bg-primaryDark/70 dark:hover:border-primaryDark/70 p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
        >
          Visit
        </Link>
        <Link
          href={github}
          target="_blank"
          className="w-10 rounded-full  fill-dark  dark:fill-light"
        >
          {" "}
          <GithubIcon />{" "}
        </Link>
      </div>
    </article>
  );
};

const MinorIDProject = ({ title, type, img, link }) => {
  return (
    <article
      className="
        w-full h-full flex flex-col justify-between rounded-3xl 
        border-2 border-solid border-slate-200 bg-slate-100 dark:bg-zinc-800 dark:border-zinc-900  shadow-xl p-12 relative lg:p-8 xs:p-4"
    >
      <div>
        <Link
          href={link}
          target="_blank"
          className="w-full h-auto cursor-pointer overflow-hidden rounded-lg drop-shadow-md"
        >
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </Link>
        <div className="w-full  flex flex-col items-start justify-between pt-2">
          <span className="text-primary dark:text-primaryDark font-medium text-xl sm:text-base">
            {type}
          </span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2 h-full"
          >
            <h2 className="w-full h-full my-2 text-left text-3xl font-bold dark:text-light sm:text-xl ">
              {title}
            </h2>
          </Link>
        </div>
      </div>
      <div className="w-full mt-2 flex items-end justify-start">
        <Link
          href={link}
          target="_blank"
          className="mr-4 rounded-lg border-2 border-solid border-slate-500 hover:bg-primary/90 drop-shadow-md hover:text-light hover:border-primary dark:text-light dark:hover:text-dark  dark:border-light dark:hover:bg-primaryDark/70 dark:hover:border-primaryDark/70 p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
        >
          Visit
        </Link>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Mike Charpin Portfolio</title>
        <meta name="description" content="Mike Charpin Portfolio" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
           <AnimatedText
            text={"Industrial Design"}
            className="mb-4 mt-8 !text-6xl md:!text-5xl sm:!text-3xl"
          />
          <div className="grid grid-cols-2 gap-16 gap-y-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-y-8 ">
            <div className="col-span-2">
              <FeaturedIDProject
                title={"Fitness Machine Handle"}
                summary={
                  "A single-hand interface designed to translate human movement into precise interaction with a robotic fitness platform."
                }
                link={
                  "https://www.behance.net/gallery/177955717/Proteus-Single-Hand-Attachment"
                }
                img={proteusSingleHandAttachmentImage}
                type={"Proteus Motion"}
              />
            </div>

             <div className="col-span-2">
              <FeaturedIDProject
                title={"Proteus Enclosure"}
                summary={
                  "A complete hardware enclosure solution developed from concept through fabrication, assembly, and production-ready refinement for a robotic fitness system."
                }
                link={
                  "https://www.behance.net/gallery/204164011/Sheet-Metal-Enclosure"
                }
                img={proteusEnclosure}
                type={"Proteus Motion"}
              />
            </div>

            <div className="col-span-2">
              <FeaturedIDProject
                title={"ZC300 Printer Cartridge"}
                summary={
                  "A cartridge experience that transforms an overlooked component into a simple, intuitive, and visually integrated interaction."
                }
                link={
                  "https://www.behance.net/gallery/203712017/ID-Card-Printer-Ribbon-Carrier"
                }
                img={ZebraZC300}
                type={"Zebra Technologies"}
              />
            </div>
            <div className="col-span-2">
              <FeaturedIDProject
                title={"Dead Channel Dice Capsule"}
                summary={
                 " An interactive sci-fi inspired artifact that transforms dice storage into a captivating display experience."
                }
                link={
                  "https://www.behance.net/gallery/178339557/Dead-Channel-Dice-Capsule"
                }
                img={DiceCapsuleImage}
                type={"Dead Channel"}
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <MinorIDProject
                title={"Smart Device Accessory"}
                link={
                  "https://www.behance.net/gallery/124182657/TC75-Mobile-Dimensioning-Attachment"
                }
                img={TC75MobileImage}
                type={"Zebra Technologies"}
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <MinorIDProject
                title={"Smart Device Accessory"}
                link={
                  "https://www.behance.net/gallery/124176483/TC51TC56-Holster-for-Zebra-Technologies"
                }
                img={TC51HolsterImage}
                type={"Zebra Technologies"}
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <MinorIDProject
                title={"Brand Logo"}
                link={
                  "https://www.behance.net/gallery/177960873/Dead-Channel-Logo"
                }
                img={DeadChannelLogoImage}
                type={"Dead Channel"}
              />
            </div>
          </div>

          <AnimatedText
            text={"Web Development"}
            className="mt-24 mb-8 sm:mb-4 !text-6xl md:!text-5xl sm:!text-3xl"
          />

          <div
            className="grid grid-cols-2 gap-16 gap-y-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-y-8 
                "
          >
            <div className="col-span-2">
              <FeaturedProject
                title={"Tulip Tasks Prioritization App"}
                summary={
                  "A personal productivity system designed to make managing goals and responsibilities feel more approachable, visual, and engaging."
                }
                link={"/tulip-tasks"}
                target={""}
                img={TulipTasksImage}
                type={"Featured Project"}
                github={"https://github.com/MikeCharpin/taskPriority"}
              />
            </div>
            <div className="col-span-2">
              <FeaturedProject
                title={"Datsun Resource Website"}
                summary={
                  "A comprehensive and searchable collection of Datsun Fairlady-Z part diagrams."
                }
                link={"https://www.datsunresource.com/"}
                target={"_blank"}
                img={DatsunResourceImage}
                type={"Featured Project"}
                github={"https://github.com/MikeCharpin"}
              />
            </div>
            <div className="col-span-2">
              <FeaturedProject
                title={"Personal Portfolio Website"}
                summary={
                  "This website you are on right now! Built with React, NextJS, Framer Motion and TailwindCSS"
                }
                link={"/"}
                img={portfolioImage}
                type={"Featured Project"}
                github={"https://github.com/MikeCharpin/nextJS-portfolio"}
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <MinorProject
                title={"Rock Paper Scissors"}
                link={"https://MikeCharpin.github.io/RPS/"}
                target={"_blank"}
                img={rockPaperScissorsImage}
                type={"Portfolio Website"}
                github={"https://github.com/MikeCharpin/RPS"}
              />
            </div>
            
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
