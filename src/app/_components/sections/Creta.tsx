import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Creta = () => {
  return (
    <section id='creta' className='mt-[16rem] relative'>
        <div className='absolute left-0 top-0 h-full w-full bg-zinc-950/70'>
            <div className="container-width my-[4rem] grid grid-cols-2 gap-[4rem]">
                <div>
                <h1 className='text-[3rem] font-bold text-zinc-100 leading-[1.15] mb-[.8rem]'>
                    Nós também somos o <span>CRETA</span> (Centro de Referência no Tratamento do Autismo e outros transtornos)
                </h1>
                <p className='text-zinc-100 text-[1.4rem] leading-[1.4]'>Fundado em 2018 e desde então oferece atendimento interdisciplinar de qualidade baseado nos princípios da Análise do Comportamento a pessoas com Transtorno do Espectro Autista (TEA) ou dificuldades em âmbito gerais. Os profissionais realizam trabalhos individualizado tendo em vista protocolos com evidências de eficácia para cada caso.</p>
                <Link href={""} className='bg-emerald-300 text-emerald-900 p-[1rem] rounded-[.6rem] block w-fit text-[1.4rem] font-semibold mt-[1.2rem]'>Conheça o CRETA</Link>
                </div>
                <Image src={"/banner-creta.jpg"} alt='d' width={500} height={500} className='object-cover w-full h-full rounded-[2rem] shadow-lg'/>
            </div>
        </div>
    </section>
  )
}

export default Creta