import React from 'react'
import Section from './Section'
import ServiceCard from '../ui/ServiceCard'
import { ShieldPlus } from 'lucide-react'
import { Service } from '@/types/general'
const services: Service[] = [
    {
        title: "Consultas Médicas",
        text: "Consultas com médicos especialistas em diversas áreas da saúde.",
        icon: <ShieldPlus />
    },
    {
        title: "Consultas Médicas",
        text: "Consultas com médicos especialistas em diversas áreas da saúde.",
        icon: <ShieldPlus />
    },
    {
        title: "Consultas Médicas",
        text: "Consultas com médicos especialistas em diversas áreas da saúde.",
        icon: <ShieldPlus />
    },
    {
        title: "Consultas Médicas",
        text: "Consultas com médicos especialistas em diversas áreas da saúde.",
        icon: <ShieldPlus />
    },
    {
        title: "Consultas Médicas",
        text: "Consultas com médicos especialistas em diversas áreas da saúde.",
        icon: <ShieldPlus />
    },
    {
        title: "Consultas Médicas",
        text: "Consultas com médicos especialistas em diversas áreas da saúde.",
        icon: <ShieldPlus />
    },
]
const Services = ({setActiveSection}: {setActiveSection:(v:string)=> void}) => {
    return (
        <Section id="servicos" setActiveSection={setActiveSection} className='mt-[10rem]'>
            <div className="container-width">
                <span className='bg-emerald-200 text-emerald-800 block w-fit mx-auto text-[1.4rem] p-[1rem] font-semibold rounded-[1rem] mb-[1.2rem]'>Nossos Serviços</span>
                <h1 className='text-[4rem] font-bold text-emerald-800 text-center'>Cuidados completos para sua saúde</h1>
                <div className='grid grid-cols-3 gap-[1rem] mt-[2rem]'>
                    {services.map((s, i) => <ServiceCard {...s} key={i} delay={i} />)}
                </div>
            </div>
        </Section>
    )
}

export default Services
