import Head from "next/head";
import Layout from "@/components/Layout";
import HireMe from "@/components/HireMe";
import TransitionEffect from "@/components/TransitionEffect";
import AboutMe from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";

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
          <AboutMe />
          <Experience />
          <Education />
        </Layout>
        <HireMe />
      </main>
    </>
  );
}
