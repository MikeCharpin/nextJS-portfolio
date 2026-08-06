import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import TransitionEffect from "@/components/TransitionEffect";
import IndexProjects from "@/components/IndexProjects";
import Services from "@/components/Services";

import profilePic from "../../public/images/profile/charpin-profile-2023.jpg";

const proofPoints = [
  "iF Design Award",
  "Red Dot Design Award",
  "A' Design Award",
  "3 Patents Issued",
];

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

      <main className="min-h-screen w-full text-dark dark:text-light">
        <Layout>
          {/* ---------- HERO ---------- */}
          <section className="flex items-center justify-between gap-16
    py-16
    lg:flex-col lg:gap-10">
            {/* Image */}
            <div className="w-[42%] lg:w-full">
              <div className="relative mx-auto max-w-md">
                <div
                  className="absolute -inset-3 rounded-3xl bg-gradient-to-br
                  from-dark/5 to-dark/0 dark:from-light/10 dark:to-light/0
                  -z-10"
                />
                <Image
                  src={profilePic}
                  alt="Black and white photo of Mike Charpin smiling."
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-auto w-full rounded-2xl object-cover shadow-lg shadow-dark/10 dark:shadow-black/40"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-[58%] lg:w-full">
              <span
                className="mb-4 inline-flex w-fit items-center rounded-full
                border border-dark/15 bg-dark/[0.03] px-3 py-1 text-xs font-semibold
                uppercase tracking-wider text-dark/60
                dark:border-light/15 dark:bg-light/[0.05] dark:text-light/60"
              >
                Product Design Services
              </span>

              <AnimatedText
                text="Industrial design for hardware startups that need to move fast."
                className="
                  !text-left
                  !text-5xl
                  !leading-[1.05]
                  xl:!text-5xl
                  lg:!text-4xl
                  md:!text-3xl
                  sm:!text-2xl
                "
              />

              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
                Concept sketch to investor-ready prototype. Mechanical design,
                fabrication, and the software or e-commerce layer around it —
                from one person who does all three.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="mailto:Michael.Charpin@gmail.com"
                  target="_blank"
                  className="
                    group inline-flex items-center gap-2
                    rounded-lg
                    border border-transparent
                    bg-dark
                    px-5 py-2.5
                    text-base font-semibold text-light
                    shadow-sm
                    transition-all duration-200
                    hover:-translate-y-0.5 hover:border-dark hover:bg-light hover:text-dark hover:shadow-md
                    dark:bg-light dark:text-dark
                    dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                  "
                >
                  Tell me about your product
                  <LinkArrow className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>

                <Link
                  href="/Mike Charpin - 052026 - CV.pdf"
                  target="_blank"
                  download
                  className="
                    text-lg font-medium underline underline-offset-4
                    decoration-dark/30 transition-colors
                    hover:decoration-dark
                    dark:decoration-light/30 dark:hover:decoration-light
                  "
                >
                  Resume
                </Link>
              </div>

              {/* Proof strip */}
              <div
                className="mt-10 flex w-full flex-wrap items-center gap-x-6 gap-y-2
                border-t border-dark/10 pt-6 dark:border-light/10"
              >
                {proofPoints.map((item) => (
                  <span
                    key={item}
                    className="text-sm font-semibold tracking-wide text-dark/50 dark:text-light/50"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <div className="h-px w-full bg-dark/10 dark:bg-light/10" />

          <Services />

          <div className="h-px w-full bg-dark/10 dark:bg-light/10" />

          <div className="py-20">
            <IndexProjects />
          </div>
        </Layout>

        <HireMe />
      </main>
    </>
  );
}