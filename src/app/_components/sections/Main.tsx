"use client"
import React, { useState } from 'react'
import Header from '../ui/Header'
import Section from './Section'
import Image from 'next/image'
import Link from 'next/link'
import Services from './Services'
import About from './About'
import Choose from './Choose'
import Agreement from './Agreement'

const Main = () => {
    const [activeSection, setActiveSection] = useState("")
    return (
        <>
            <Header activeSection={activeSection} setActiveSection={setActiveSection} />
            <Section id="main" setActiveSection={setActiveSection} className=' py-[10rem] bg-emerald-50 '>
                <div className='grid grid-cols-2 container-width gap-[2rem]'>
                    <div>
                        <h1 className='text-emerald-800 text-[5rem] font-extrabold leading-[1.15] mb-[.8rem]'>Cuidamos da sua saúde com excelência e paixão</h1>
                        <p className='text-[2rem] text-zinc-700 leading-[1.3]'>O Grupo MedCare oferece atendimento médico de qualidade com profissionais especializados e tecnologia avançada.</p>
                        <div className="flex gap-[1rem] mt-[2rem] text-[1.6rem]">
                            <Link href={"/"} className='p-[1.2rem] rounded-[1rem] border border-transparent bg-emerald-800 text-zinc-100'>Agendar consulta</Link>
                            <Link href={"/"} className='p-[1.2rem] rounded-[1rem] border border-emerald-700 text-emerald-800'>Nossos serviços</Link>
                        </div>
                    </div>
                    <Image src={"https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2791&auto=format&fit=crop"} alt='Equipe médica' height={800} width={800} className='rounded-[2rem]' />
                </div>
            </Section>
            <Services setActiveSection={setActiveSection}/>
            <Choose/>
           <About setActiveSection={setActiveSection}/>
           <Agreement/>
           </>
    )
}

export default Main
