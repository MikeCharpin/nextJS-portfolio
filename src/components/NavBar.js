import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  GithubIcon,
  LinkedInIcon,
  BehanceIcon,
  ThreadsIcon,
  TumblrIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, classname = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${classname} relative group`}>
      {title}

      <span
        className={`
                    h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5
                    group-hover:w-full transition-[width] ease duration-300
                    ${router.asPath === href ? "w-full" : "w-0"} 
                    dark:bg-light
                `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, classname = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${classname} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}

      <span
        className={`
                    h-[1px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5
                    group-hover:w-full transition-[width] ease duration-300
                    ${router.asPath === href ? "w-full" : "w-0"} 
                    
                `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setisOpen] = useState(false);

  const handleClick = () => {
    setisOpen(!isOpen);
  };

  return (
    <header className="w-full max-w-[1200px] mx-auto px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`
                    bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
                    ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}
                `}
        ></span>
        <span
          className={`
                    bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm m-0.5 
                    ${isOpen ? "opacity-0" : "opacity-100"}
                `}
        ></span>
        <span
          className={`
                    bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
                    ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}
                `}
        ></span>
      </button>

      {/* -- Desktop Nav -- */}
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href={"/"} title="Home" classname="mr-4" />
          <CustomLink href={"/projects"} title="Projects" classname="mx-4" />
          {/* <CustomLink href={"/articles"} title="Articles" classname='ml-4'/> */}
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href={"https://github.com/MikeCharpin"}
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 rounded-full  fill-dark  dark:fill-light"
          >
            <GithubIcon />
          </motion.a>

          <motion.a
            href={"https://www.linkedin.com/in/michael-charpin/"}
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedInIcon />
          </motion.a>

          <motion.a
            href={"https://www.behance.net/MichaelCharpin"}
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 "
          >
            <BehanceIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1
                ${
                  mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
                }`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {/* -- Mobile Nav -- */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="
                        min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32
                    "
        >
          <button
            className=" absolute top-8 left-6 flex-col justify-center items-center hidden lg:flex"
            onClick={handleClick}
          >
            <span
              className={`
                    bg-light dark:bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
                    ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}
                `}
            ></span>
            <span
              className={`
                    bg-light dark:bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm m-0.5 
                    ${isOpen ? "opacity-0" : "opacity-100"}
                `}
            ></span>
            <span
              className={`
                    bg-light dark:bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
                    ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}
                `}
            ></span>
          </button>
          <div>
            <nav className="flex items-center flex-col justify-center">
              <CustomMobileLink
                href={"/"}
                title="Home"
                classname=""
                toggle={handleClick}
              />
              <CustomMobileLink
                href={"/projects"}
                title="Projects"
                classname=""
                toggle={handleClick}
              />
              {/* <CustomMobileLink href={"/articles"} title="Articles" classname='' toggle={handleClick} /> */}
            </nav>
            <nav className="flex items-center justify-center flex-wrap my-2">
              <motion.a
                href={"https://github.com/MikeCharpin"}
                target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-3 rounded-full  fill-light  dark:fill-dark sm:mx-1 "
              >
                <GithubIcon />
              </motion.a>
              <motion.a
                href={"https://www.linkedin.com/in/michael-charpin/"}
                target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-3 bg-light rounded-full sm:mx-1"
              >
                <LinkedInIcon />
              </motion.a>
              <motion.a
                href={"https://www.behance.net/MichaelCharpin"}
                target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-3  rounded-full sm:mx-1 "
              >
                <BehanceIcon />
              </motion.a>

              <button
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className={`ml-3 flex items-center justify-center rounded-full p-1
                            ${
                              mode === "light"
                                ? "bg-dark text-light"
                                : "bg-light text-dark"
                            }`}
              >
                {mode === "dark" ? (
                  <SunIcon className={"fill-dark"} />
                ) : (
                  <MoonIcon className={"fill-dark"} />
                )}
              </button>
            </nav>
          </div>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
