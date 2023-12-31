import AnimatedText from '@/components/AnimatedText'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile/charpin-profile-2023.jpg"
import { useInView, useMotionValue, useSpring } from 'framer-motion'




const AnimatedNumbers = ({value}) => {
    const ref = useRef(null)

    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, {once: true})

    useEffect(() => {
      if(isInView){
        motionValue.set(value)
      }
    }, [isInView, value, motionValue])

    useEffect(() => {
      springValue.on("change", (latest) => {
        if(ref.current && latest.toFixed(0) <= value) {
            ref.current.textContent = latest.toFixed(0)
        }
      })
    }, [springValue, value])
    
    



    return <span ref={ref}></span>
}
 
 const AboutMe = () => {
   return (
    <>
        
        <div className='flex w-full flex-col items-center justify-center dark:text-light'>
            <div className='pt-16'>
                <AnimatedText text="Code Wizard, Design Sorcerer" classname='mb-16  !text-6xl lg:!text-6xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
                <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                    <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light'>About</h2>
                        <p className='font-medium'>
                        I&apos;m Mike Charpin, a web developer with experience in industrial design as a physical product designer. I bring a strong background in usability-focused design having crafted a diverse range of products, from fitness machines and printers to tabletop RPG accessories and helmets. 
                        </p>
                        <p className='my-4 font-medium'>
                        My passion lies in seeing ideas come to life, refining them through user feedback, and ultimately making a positive impact on people&apos;s lives. I&apos;m known for my resourcefulness, tackling challenges head-on, and knowing when to seek expertise. My approach to problem-solving is with research, exploration, rapid prototyping, and a commitment to user-centered solutions.
                        </p>
                        <p className='font-medium'>
                        I aim to be a creative problem solver who delivers results while fostering a collaborative working environment. Whether I&apos;m working on a website, web app, or physical product, I bring my commitment to design excellence and user-centered thinking to every project. I look forward to the opportunity to bring my skills and passion to your next project.
                        </p>
                    </div>
                    
                    <div className='
                            col-span-3 relative h-max rounded-2xl border-2 border-solid border-transparent bg-light p-8
                             dark:bg-dark xl:col-span-4 md:order-1 md:col-span-8
                        '>
                        
                        <Image src={profilePic} alt="Mike Charpin" 
                            className='
                                w-full h-auto rounded-2xl border-2 border-transparent border-solid
                                dark:border-light/90 drop-shadow-xl
                            '
                                priority={true}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>

                    <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row md:order-3'>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={4}/>+
                            </span>
                            <h2 
                            className='
                            text-xl font-medium capitalize text-dark/75 text-right dark:text-light
                            xl:text-center md:text-lg sm:text-base xs:text-sm
                            '>Patents</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={10}/>+
                            </span>
                            <h2 className='
                            text-xl font-medium capitalize text-dark/75 text-right dark:text-light 
                            xl:text-center md:text-lg sm:text-base xs:text-sm
                            '>design awards</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span 
                            className='
                            inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl
                            
                            '>
                                <AnimatedNumbers value={10}/>+
                            </span>
                            <h2 
                            className='
                            text-xl font-medium capitalize text-dark/75 text-right dark:text-light
                            xl:text-center md:text-lg sm:text-base xs:text-sm
                            '>years of experience</h2>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    
    </> 
   )
 }
 
 export default AboutMe