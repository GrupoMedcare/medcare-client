import { Activity, Smile, Stethoscope } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Choose = () => {
    return (
        <section className='mt-[16rem]'>
            <div className="container-width grid lg:grid-cols-[.7fr_1fr] gap-[2rem]">
                <div className=''>
                    <Image className=' w-full h-[30rem] lg:h-[50rem] object-cover rounded-[1rem]' src={"https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt='Médica apontando para a direita' width={1000} height={1000} />
                </div>
                <div className='w-fit '>
                    <div className="flex text-emerald-800/50 items-center gap-[1rem] mb-[.8rem]">
                        <Activity />
                        <span className='text-[1.8rem] font-semibold'>
                            Por que escolher a clínica Medcare?
                        </span>
                    </div>
                    <h1 className='text-emerald-800 text-[3rem] font-bold leading-[1.15] mb-[.4rem]'>Possuímos mais de 10 anos de experiência em serviços de saúde.</h1>
                    <p className='leading-[1.3] text-zinc-800 text-[1.6rem]'>Temos uma equipe de profissionais capacitados, que oferecem um atendimento humanizado desde a acolhida até a realização do seu exame.
                        <br />
                        <br />
                        Temos diversos exames disponíveis além de uma infraestrutura confortável e salas climatizadas. Além disso, temos preços acessíveis e facilidades de pagamento.</p>
                    <div className='flex flex-wrap gap-[.5rem] mt-[1.2rem]'>
                        <div className='p-[1.4rem] bg-emerald-800 text-zinc-100 rounded-[.6rem] flex flex-col items-center flex-1'>
                            <Smile className='size-[4rem] mb-[.8rem]' />
                            <p className='text-[1.8rem] font-semibold mb-[.4rem] text-center leading-[1.15] max-w-[90%]'>10000+ <br />Pacientes mensalmente</p>
                        </div>
                        <div className='p-[1.4rem] bg-emerald-800 text-zinc-100 rounded-[.6rem] flex flex-col items-center flex-1'>
                            <Stethoscope className='size-[4rem] mb-[.8rem]' />
                            <p className='text-[1.8rem] font-semibold mb-[.4rem] text-center leading-[1.15] max-w-[90%]'>50+ <br />Médicos especializados</p>
                        </div>
                        <div className='p-[1.4rem] bg-emerald-800 text-zinc-100 rounded-[.6rem] flex flex-col items-center flex-1'>
                            <Smile className='size-[4rem] mb-[.8rem]' />
                            <p className='text-[1.8rem] font-semibold mb-[.4rem] text-center leading-[1.15] max-w-[90%]'>30+ <br />Especialidades disponíveis</p>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Choose
