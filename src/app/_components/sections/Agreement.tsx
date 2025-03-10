"use client"
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import {motion} from "framer-motion"
const Agreement = () => {
    const [isAnimated, setIsAnimated] = useState(false)
    const timeOut = useRef<NodeJS.Timeout>(null)
    const convenios = ["iasep.webp", "unimed.webp", "hapvida.webp", "geap.webp", "sintrebel.webp", "pasa.webp", "trt-8.webp", "tre-pa.webp", "sepaco.webp", "iasb.webp", "aspeb.webp", "sul-america.webp", "e-vida.webp", "cassi.webp", "bradesco.webp"];
    
    return (
        <section className='mt-[16rem]'>
            <div className="container-width">
                    <span className='bg-emerald-200 text-emerald-800 block w-fit mx-auto text-[1.4rem] p-[1rem] font-semibold rounded-[1rem] mb-[1.2rem]'>Convênios</span>
                    <h1 className='text-[3rem] lg:text-[4rem] font-bold text-emerald-800 text-center mb-[.8rem]'>Aceitamos os principais convênios </h1>
                    <div className='grid grid-cols-3 lg:grid-cols-5 gap-[1rem] mt-[2rem]'>
                    {convenios.map((a,i)=> <motion.div onViewportEnter={()=> {
                        // clearTimeout(timeOut.current as NodeJS.Timeout)
                        timeOut.current = setTimeout(()=> {
                            setIsAnimated(true)
                        }, 300)
                    }} initial={!isAnimated ? {opacity:0, scale:.9}: {opacity:1, scale:1}} whileInView={!isAnimated ? {opacity:0, scale:.9}: {opacity:1, scale:1}} transition={{delay: i* .15}} key={i}>
                        <Image  src={`/${a}`} alt={`Imagem do plano de saúde ${a.split(".")[0]}`} width={500} height={500} className='size-[12rem] w-full object-contain'/>
                    </motion.div>)}
                    </div>
                {/* </div> */}
            </div>
        </section>
    )
}

export default Agreement
