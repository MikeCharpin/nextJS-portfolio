import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from "../../public/images/profile/charpin-profile-2023-2.jpg"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import TransitionEffect from '@/components/TransitionEffect'
import AboutMe from '@/components/About'
import Education from '@/components/Education'
import Experience from '@/components/Experience'



export default function Home() {
  return (
    <>
      <Head>
        <title>Mike Charpin Portfolio</title>
        <meta name="description" content="Mike Charpin Portfolio" />
      </Head>
      <TransitionEffect/>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light  mx-auto'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className="flex justify-between w-full items-center lg:flex-col mb-16 mt-24 ">
            <div className='w-1/2 md:w-full lg:w-3/4 '>
              <Image src={ profilePic } alt="Mike Charpin" 
                className='w-full h-auto border-transparent rounded-2xl border-solid border max-w-md mx-auto' 
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full ml-8'>
              <AnimatedText text="Crafting Joy Through Design!" classname='!text-left !text-6xl 
              xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl
              '/>
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
              Web developer with experience bringing products to market as an industrial designer, blending usability expertise with coding to create empathetic digital experiences.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center '>
                <Link href="/Michael Charpin-CV-0624.pdf" target={'_blank'}
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                hover:bg-light hover:text-dark hover:border-dark border-2 border-solid border-transparent
                dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                md:p-2 md:px-4 md:text-base'
                download={true}

                >Resume <LinkArrow className={"w-6 ml-1"}/>

                </Link>
                <Link href="mailto:Michael.Charpin@gmail.com" target={'_blank'}
                className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'
                >Contact</Link>
              </div>
            </div>
          </div>
          <AboutMe/>
          <Experience/>
          <Education/>
        </Layout>
        <HireMe/>
      </main>
    </>
  )
}
