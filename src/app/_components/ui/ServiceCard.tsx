import { Service } from '@/types/general'
import React, { useRef, useState } from 'react'
import {motion} from "framer-motion"
const ServiceCard = ({icon, text, title, delay}:Service & {delay:number}) => {
  const [isAnimated, setIsAnimated] = useState(false)
  const timeOut = useRef<NodeJS.Timeout>(null)
  return (
    <motion.div onViewportEnter={()=> {
      timeOut.current = setTimeout(()=> {
        setIsAnimated(true)
      }, 300)
      // clearTimeout(timeOut.current as NodeJS.Timeout)
    }} initial={!isAnimated ? {opacity:0, scale:.9,}: {opacity:1, scale:1}} whileInView={!isAnimated ? {opacity:1, scale:1,}: {}}  transition={{delay: delay * .1}} className='text-center p-[2rem] border border-zinc-300 rounded-[1rem] hover:border-emerald-700 hover:shadow-green-1 duration-200'>
      <div className='flex justify-center mb-[1rem] text-emerald-800 bg-emerald-200 p-[1rem] rounded-full w-fit mx-auto'>
      {icon}
      </div>
      <span className='text-[1.8rem] xl:text-[2rem] 2xl:text-[2.4rem] text-emerald-800 font-bold mb-[.8rem] block'>{title}</span>
      <p className='text-[1.4rem] xl:text-[1.4rem] 2xl:text-[1.6rem] leading-[1.3]'>{text}</p>
    </motion.div>
  )
}

export default ServiceCard
