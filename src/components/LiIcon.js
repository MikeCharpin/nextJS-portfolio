import React from 'react'
import { motion, useScroll } from 'framer-motion'

const LiIcon = ({reference}) => {


    const {scrollYProgress} = useScroll(
        {
            target: reference,
            offset: ["center end", "center center"]
        }
    )



  return (
    <figure className='absolute left-0 stroke-dark dark:stroke-light'>
        <svg className='-rotate-90' width="75" height="75" viewBox='0 0 100 100'>
            <circle cx="76" cy="50" r="22" className='stroke-primary dark:stroke-light stroke-1 fill-none' />
            <motion.circle cx="76" cy="50" r="21.5" className=' stroke-[5px] fill-light dark:fill-dark'
            style={{pathLength : scrollYProgress}} />
            <circle cx="76" cy="50" r="10" className=' stroke-1 fill-primary dark:fill-primaryDark animate-pulse' />
        </svg>
    </figure>
  )
}

export default LiIcon