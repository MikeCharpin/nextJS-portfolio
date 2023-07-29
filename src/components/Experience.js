import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import LiIcon from './LiIcon'


const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>

            <LiIcon reference={ref}/>
            <motion.div 
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration: 1, type:"spring"}}
            >
                <h3 className='capitalize font-bold font-2xl' >{position}&nbsp; <a href={companyLink} target='_blank' className='text-primary capitalize'>@&nbsp;{company}</a></h3>
                <span className='capitaize font-medium text-dark/75'>
                    {time} | {address}
                </span>

                <p className='font-medium w-full '>
                    {work}
                </p>

            </motion.div>
        </li>
    )
}

const Experience = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

  return (
    <div className='my-64'>
        <h2 className="font-bold text-8xl mb-32 w-full text-center">
            Experience
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative'>

            <motion.div 
                style={{scaleY: scrollYProgress}}
                className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top '
            />

            <ul className='w-full flex flex-col items-start justify-between ml-4'>
               <Details
                    position={"Project Manager"}
                    company={"Miniature World"}
                    companyLink={"https://www.BigMiniWorld.com"}
                    time={"2022-Present"}
                    address={"Staten Island, NY"}
                    work={"Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."}
               />

                <Details
                    position={"Team Lead"}
                    company={"Union Garage"}
                    companyLink={"https://uniongaragenyc.com/"}
                    time={"2020-2022"}
                    address={"Brooklyn, NY"}
                    work={"Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."}
               />

                <Details
                    position={"Senior Industrial Designer"}
                    company={"Proteus Motion"}
                    companyLink={"https://proteusmotion.com/"}
                    time={"2017-2020"}
                    address={"Long Island City, NY"}
                    work={"Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."}
               />

                <Details
                    position={"Junior Industrial Desginer"}
                    company={"Zebra Technologies"}
                    companyLink={"https://www.Zebra.com"}
                    time={"2015-2017"}
                    address={"Holtsville, NY"}
                    work={"Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."}
               />

                <Details
                    position={"Draftsman"}
                    company={"Gentex"}
                    companyLink={"https://www.GentexCorp.com"}
                    time={"2013-2015"}
                    address={"MBoston, MA"}
                    work={"Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."}
               />

                
            </ul>
        </div>
    </div>
  )
}

export default Experience