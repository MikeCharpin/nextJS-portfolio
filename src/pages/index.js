import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
// import profilePic from "../../public/images/profile/charpin-profile-2024-01.webp";
import profilePic from "../../public/images/profile/charpin-profile-2023.jpg";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import TransitionEffect from "@/components/TransitionEffect";
import IndexProjects from "@/components/IndexProjects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mike Charpin — Industrial Design Consultancy</title>
        <meta
          name="description"
          content="Industrial design for hardware startups — concept through investor-ready prototype. Mechanical design, fabrication, and the software layer around it."
        />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light  mx-auto">
        <Layout className="">
          <div className="flex justify-start w-full items-center lg:flex-col mb-8">
            <div className="w-1/2 md:w-full lg:w-3/4 pb-4">
              <Image
                src={profilePic}
                alt="Mike Charpin smiling in a charcoal shirt with a black hat and thick frames black glasses in from of the Rocky Mountains. 2024"
                className="w-full h-auto border-transparent rounded-2xl border-solid border max-w-md mx-auto"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full">
              <AnimatedText
                text="Industrial design for hardware startups that need to move fast."
                classname="!text-left !text-6xl 
              xl:!text-4xl lg:!text-center lg:!text-4xl md:!text-5xl sm:!text-2xl
              "
              />
              <p className="py-4 px-2 text-base font-medium md:text-sm sm:text-xs">
                Concept sketch to investor-ready prototype. Mechanical
                design, fabrication, and the software or e-commerce layer
                around it — from one person who does all three. iF, Red Dot,
                and A&apos;Design award-winning work, and three patents on
                products shipped from sketch to production.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center ">
                <Link
                  href="mailto:Michael.Charpin@gmail.com"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                hover:bg-light hover:text-dark hover:border-dark border-2 border-solid border-transparent
                dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                md:p-2 md:px-4 md:text-base"
                >
                  Tell me about your product <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="/Mike Charpin - 052026 - CV.pdf"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                  download={true}
                >
                  Resume
                </Link>
              </div>
            </div>
          </div>
          <Services />
          <IndexProjects />
        </Layout>
        <HireMe />
      </main>
    </>
  );
}
