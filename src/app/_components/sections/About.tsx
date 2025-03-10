import Image from "next/image";
import Section from "./Section";
import React from "react";

const About = ({
  setActiveSection,
}: {
  setActiveSection: (v: string) => void;
}) => {
  return (
    <Section
      id="sobre"
      setActiveSection={setActiveSection}
      className="mt-[16rem]"
    >
      <div className="container-width grid lg:grid-cols-2 lg:gap-x-[2rem]">
        <div className="col-span-full mb-[2rem]">
          <span className="bg-emerald-200 text-emerald-800 block w-fit mx-auto text-[1.4rem] p-[1rem] font-semibold rounded-[1rem] mb-[1.2rem]">
            Sobre nós
          </span>
          <h1 className="text-[3rem] lg:text-[4rem] font-bold text-emerald-800 text-center mb-[.8rem]">
            Conheça nossa história
          </h1>
        </div>
        <div className="max-lg:order-2">
          <h2 className="text-emerald-800 text-[3rem] font-bold mb-[1.2rem]">
            Nossa história
          </h2>
          <p className="text-[1.6rem] leading-[1.3]">
            Fundado em 2008, o Grupo MedCare nasceu com o propósito de oferecer
            atendimento médico de qualidade, acessível e humanizado. Começamos
            com uma pequena clínica e, graças à confiança de nossos pacientes,
            expandimos nossas instalações e serviços, tornando-nos referência em
            cuidados médicos na região.
            <br />
            <br />
            Ao longo desses anos, investimos constantemente em tecnologia,
            infraestrutura e capacitação profissional, sempre com o objetivo de
            proporcionar o melhor atendimento possível aos nossos pacientes.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-[1rem] h-fit max-lg:mb-[2rem]">
          <Image
            src={
              "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2791&auto=format&fit=crop"
            }
            alt="equipe médica"
            width={500}
            height={500}
            className="bg-emerald-800 col-span-full w-full  h-[24rem] lg:h-[30rem] object-cover rounded-[1rem] row-start-1"
          />
          <Image
            src={
              "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2791&auto=format&fit=crop"
            }
            alt="equipe médica"
            width={500}
            height={500}
            className="bg-emerald-800 col-start-1 w-full h-[14rem] lg:h-[20rem] object-cover rounded-[1rem] row-start-2"
          />{" "}
          <Image
            src={
              "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2791&auto=format&fit=crop"
            }
            alt="equipe médica"
            width={500}
            height={500}
            className="bg-emerald-800 col-start-2 w-full h-[14rem] lg:h-[20rem] object-cover rounded-[1rem] row-start-2"
          />
        </div>
      </div>
    </Section>
  );
};

export default About;
