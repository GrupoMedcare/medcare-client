import Image from 'next/image'
import Section from './Section'
import React from 'react'

const About = ({ setActiveSection }: { setActiveSection: (v: string) => void }) => {
    return (
        <Section id="sobre" setActiveSection={setActiveSection} className='mt-[16rem]'>
            <div className="container-width grid grid-cols-2 gap-x-[2rem]">
                <div className="col-span-full mb-[2rem]">
                    <span className='bg-emerald-200 text-emerald-800 block w-fit mx-auto text-[1.4rem] p-[1rem] font-semibold rounded-[1rem] mb-[1.2rem]'>Sobre nós</span>
                    <h1 className='text-[4rem] font-bold text-emerald-800 text-center mb-[.8rem]'>Conheça nossa história</h1>
                    <p className='text-[1.6rem] leading-[1.3] text-zinc-700 text-center max-w-[60ch] mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis repudiandae voluptates repellat cumque laboriosam at sed, reprehenderit dolorum incidunt iste officiis.</p>
                </div>
                <div className=''>
                    <h2 className='text-emerald-800 text-[3rem] font-bold mb-[1.2rem]'>Nossa história</h2>
                    <p className='text-[1.6rem] leading-[1.3]'>Fundado em 2008, o Grupo MedCare nasceu com o propósito de oferecer atendimento médico de qualidade, acessível e humanizado. Começamos com uma pequena clínica e, graças à confiança de nossos pacientes, expandimos nossas instalações e serviços, tornando-nos referência em cuidados médicos na região.
                        <br />
                        <br />
                        Ao longo desses anos, investimos constantemente em tecnologia, infraestrutura e capacitação profissional, sempre com o objetivo de proporcionar o melhor atendimento possível aos nossos pacientes.</p>
                    {/* <div className='mt-[2rem]'>
                        <h3 className='text-[2rem] text-emerald-800 font-bold'>Missão, visão e valores</h3>
                        <div className='flex flex-wrap gap-[.5rem] mt-[1.2rem]'>
                            <div className='p-[1.4rem] border border-zinc-300 rounded-[.6rem] flex-1'>
                                <span className='text-emerald-800 font-semibold text-[1.8rem] mb-[.6rem] block'>Missão</span>
                                <p className='text-[1.4rem] text-zinc-700 max-w-[90%] leading-[1.3]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt unde </p>
                            </div>
                            <div className='p-[1.4rem] border border-zinc-300 rounded-[.6rem] flex-1'>
                                <span className='text-emerald-800 font-semibold text-[1.8rem] mb-[.6rem] block'>Visão</span>
                                <p className='text-[1.4rem] text-zinc-700 max-w-[90%] leading-[1.3]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt unde </p>
                            </div>
                            <div className='p-[1.4rem] border border-zinc-300 rounded-[.6rem] flex-1'>
                                <span className='text-emerald-800 font-semibold text-[1.8rem] mb-[.6rem] block'>Valores</span>
                                <p className='text-[1.4rem] text-zinc-700 max-w-[90%] leading-[1.3]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt unde </p>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-[1rem]">
                    <Image src={"https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2791&auto=format&fit=crop"} alt='equipe médica' width={500} height={500} className='bg-emerald-800 col-span-full w-full h-[30rem] object-cover rounded-[1rem] row-start-1' />
                    <Image src={"https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2791&auto=format&fit=crop"} alt='equipe médica' width={500} height={500} className='bg-emerald-800 col-start-1 w-full h-[20rem] object-cover rounded-[1rem] row-start-2' /> <Image src={"https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2791&auto=format&fit=crop"} alt='equipe médica' width={500} height={500} className='bg-emerald-800 col-start-2 w-full h-[20rem] object-cover rounded-[1rem] row-start-2' />
                </div>
            </div>
        </Section>
    )
}

export default About
