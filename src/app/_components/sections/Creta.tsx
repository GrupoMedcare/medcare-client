import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Creta = () => {
  return (
    <section id='creta' className='mt-[16rem] relative '>
        <div className='absolute left-0 top-0 w-full bg-zinc-950/70 my-auto flex items-center h-full'>
            <div className="container-width grid lg:grid-cols-2 gap-[4rem]">
                <div>
                <h1 className='text-[3rem] font-bold text-zinc-100 leading-[1.15] mb-[.8rem]'>
                    Nós também somos o <span>CRETA</span> (Centro de Referência no Tratamento do Autismo e outros transtornos)
                </h1>
                <p className='text-zinc-100 text-[1.4rem] leading-[1.4]'>Fundado em 2018 e desde então oferece atendimento interdisciplinar de qualidade baseado nos princípios da Análise do Comportamento a pessoas com Transtorno do Espectro Autista (TEA) ou dificuldades em âmbito gerais. Os profissionais realizam trabalhos individualizado tendo em vista protocolos com evidências de eficácia para cada caso.</p>
                <Link href={"https://creta.grupomedcare.com.br/"} target='_blank' className='bg-emerald-300 text-emerald-900 p-[1rem] rounded-[.6rem] block w-fit text-[1.4rem] font-semibold mt-[1.2rem]'>Conheça o CRETA</Link>
                </div>
                <Image src={"/espaco-creta.png"} alt='d' width={500} height={500} className='object-cover h-[40rem] rounded-[2rem] shadow-lg max-lg:hidden'/>
            </div>
        </div>
    </section>
  )
}

export default Creta