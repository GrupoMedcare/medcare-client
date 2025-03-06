import Image from 'next/image'
import React from 'react'

const Agreement = () => {
    return (
        <section className='mt-[16rem]'>
            <div className="container-width">
                {/* <div className="col-span-full mb-[2rem]"> */}
                    <span className='bg-emerald-200 text-emerald-800 block w-fit mx-auto text-[1.4rem] p-[1rem] font-semibold rounded-[1rem] mb-[1.2rem]'>Convênios</span>
                    <h1 className='text-[4rem] font-bold text-emerald-800 text-center mb-[.8rem]'>Aceitamos os principais convênios </h1>
                    {/* <p className='text-[1.6rem] leading-[1.3] text-zinc-700 text-center max-w-[60ch] mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis repudiandae voluptates repellat cumque laboriosam at sed, reprehenderit dolorum incidunt iste officiis.</p> */}
                    <div className='grid grid-cols-5 gap-[1rem] mt-[2rem]'>
                    {Array.from({length:15}).map((a,i)=> <Image key={i} src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='asd' width={500} height={500} className='size-[16rem] w-full object-cover'/>)}
                    </div>
                {/* </div> */}
            </div>
        </section>
    )
}

export default Agreement
