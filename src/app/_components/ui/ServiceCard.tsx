import { Service } from '@/types/general'
import React from 'react'
import {motion} from "framer-motion"
const ServiceCard = ({icon, text, title, delay}:Service & {delay:number}) => {
  return (
    <motion.div initial={{opacity:0, scale:.9,}} whileInView={{opacity:1, scale:1,}}  transition={{delay: delay * .1}} className='text-center p-[2rem] border border-zinc-300 rounded-[1rem] hover:border-emerald-800 duration-200'>
      <div className='flex justify-center mb-[1rem] text-emerald-800 bg-emerald-200 p-[1rem] rounded-full w-fit mx-auto'>
      {icon}
      </div>
      <span className='text-[2.4rem] text-emerald-800 font-bold mb-[.8rem] block'>{title}</span>
      <p className='text-[1.6rem] leading-[1.3]'>{text}</p>
    </motion.div>
  )
}

export default ServiceCard
