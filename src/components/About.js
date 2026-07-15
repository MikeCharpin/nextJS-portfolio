import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/charpin-profile-2023.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const AboutMe = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center dark:text-light px-4">
        <AnimatedText
          text={"About me"}
          classname="pt-16 pb-4 !text-5xl md:!text-4xl sm:!text-3xl"
        />
        <div className="flex w-full xs:flex-col sm:flex-col md:flex-col lg:flex-col gap-8 xs:items-center xs:justify-center md:items-center md:justify-center">
          <Image
            src={profilePic}
            alt="Mike Charpin"
            className="
                                w-1/2 lg:w-1/2 mx-auto xs:w-full sm:w-full md:w-full h-auto rounded-2xl border-2 border-transparent border-solid
                                dark:border-light/90 drop-shadow-xl
                            "
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          <div className=" flex flex-col gap-4  items-center justify-center  text-justify">
            <p className="">
              I&apos;m Mike Charpin an industrial designer who ended up writing
              code too, mostly because I got tired of hardware costing money
              every time I wanted to test an idea.
            </p>
            <p className="">
              I&apos;ve designed things that had to survive fairly different
              tests: fitness equipment that needed to hold up to real athletes
              pulling on it, ID card printers that had to work for years of
              daily use, military helmet mounts that had actual ballistic
              requirements, and sci-fi dice vaults that just needed to feel
              satisfying to open. Along the way I&apos;ve machined aluminum,
              snapped more taps than I&apos;d like to admit, cast resin parts in
              a shared studio until the fumes became a problem, and soldered
              LEDs into a 3D printed enclosure to make dice glow.
            </p>
            <p className="">
              Somewhere in there I also picked up web development, first to
              build sites for family businesses, then full apps. I like it for
              the same reason I like CNC and 3D printing: you get to test an
              idea, find out what&apos;s wrong with it, and fix it, without
              waiting on a supplier or a machine shop.
            </p>
            <p className="">
              Most of what&apos;s on this site started as a rough version that
              didn&apos;t work right the first time. That&apos;s usually where
              the real design work happens.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-start w-full max-w-[1200px] py-8 ">
          <div className="flex flex-col items-center justify-center">
            <span className=" text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl align-center">
              <AnimatedNumbers value={10} />+
            </span>
            <h2
              className="
                            text-xl font-medium capitalize text-dark/75 dark:text-light 
                            xl:text-center md:text-lg sm:text-base xs:text-sm text-center
                            "
            >
              Products Launched
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center w-3/4">
            <span className=" text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
              <AnimatedNumbers value={4} />+
            </span>
            <h2
              className="
                            text-xl font-medium capitalize text-dark/75 text-right dark:text-light
                            xl:text-center md:text-lg sm:text-base xs:text-sm
                            "
            >
              Patents
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center">
            <span
              className="
                             text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl
                            align-center
                            "
            >
              <AnimatedNumbers value={10} />+
            </span>
            <h2
              className="
                            text-xl font-medium text-dark dark:text-light
                            xl:text-center md:text-lg sm:text-base xs:text-sm text-center
                            "
            >
              Years of Experience
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
