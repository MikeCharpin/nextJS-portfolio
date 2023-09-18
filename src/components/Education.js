import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import LiIcon from './LiIcon'


const Details = ({type, time, place, info}) => {
    const ref = useRef(null)
    return (
        
        <li ref={ref}
            className='
            my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between
            border-2 border-dark/60 py-10 px-16 rounded-xl
            dark:border-2 dark:border-solid dark:border-light/90 xs:w-full sm:w-full'>
            {/* <LiIcon reference={ref}/> */}
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration: 1, type:"spring"}}
            >
                <h3 className='font-bold font-2xl py-2' >{type}</h3>
                <span className='capitaize font-medium text-dark/75 dark:text-light/50 py-2'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full py-2 '>
                    {info}
                </p>
            </motion.div>
        </li>
    )
}

const Education = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

  return (
    <div className='mt-32 '>
        <h2 className="font-bold text-8xl mb-16 w-full text-center  sm:text-6xl xs:text-4xl ">
            Education
        </h2>

        <div ref={ref} className='w-[75%]  mx-auto relative xs:w-full sm:w-full md:w-full lg:w-full'>

            {/* <motion.div 
                style={{scaleY: scrollYProgress}}
                className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-primaryDark origin-top '
            />
            <motion.div 
                style={{scaleY: scrollYProgress}}
                className='absolute left-9 top-2 w-[4px] h-full bg-transparent dark:bg-primaryDark blur dark:opacity-50 origin-top '
            /> */}

            <ul className='w-full flex flex-col  justify-center items-center '>

               <Details
                    type={"Bachelor's of Science in Industrial Design"}
                    time={"2009 - 2013"}
                    place={"Wentworth Institute of Technology"}
                    info={"Physical Product Design, User Experience Research, Design Thinking, Model Making, Visual Communication"}
               />

                <Details
                    type={"Online Coursework"}
                    time={"2020 - present"}
                    place={"LearnJavascript.online & The Odin Project"}
                    info={"HTML, CSS & Javascript Fundamentals"}
               />

            </ul>
        </div>
    </div>
  )
}

export default Education


