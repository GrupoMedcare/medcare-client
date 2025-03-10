"use client";
import React, { useState } from "react";
import Header from "../ui/Header";
import Section from "./Section";
import Image from "next/image";
import Link from "next/link";
import Services from "./Services";
import About from "./About";
import Choose from "./Choose";
import Agreement from "./Agreement";
import Speciality from "./Speciality";
import Creta from "./Creta";
import News from "./News";
import Contact from "./Contact";
import Footer from "./Footer";

const Main = () => {
  const [activeSection, setActiveSection] = useState("");
  return (
    <>
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Section
        id="inicio"
        setActiveSection={setActiveSection}
        className=" py-[10rem] bg-emerald-50 "
      >
        <div className="lg:grid grid-cols-2 container-width gap-[2rem]">
          <div>
            <h1 className="text-emerald-800 text-[3.4rem] xl:text-[4rem] 2xl:text-[5rem] font-extrabold leading-[1.15] mb-[.8rem]">
              Cuidamos da sua saúde com excelência e paixão
            </h1>
            <p className="text-[1.4rem] xl:text-[1.6rem] 2xl:text-[2rem] text-zinc-700 leading-[1.3]">
              O Grupo MedCare oferece atendimento médico de qualidade com
              profissionais especializados e tecnologia avançada.
            </p>
            <div className="flex items-center gap-[1rem] mt-[2rem] text-[1.6rem] xl:text-[1.4rem] 2xl:text-[1.6rem]">
              <Link
                href={"/"}
                className="p-[1.2rem] font-semibold rounded-[1rem] border border-transparent bg-emerald-800 text-zinc-100"
              >
                Agendar consulta
              </Link>
              <Link
                href={"#servicos"}
                className="p-[1.2rem] font-semibold rounded-[1rem] border border-emerald-700 text-emerald-800"
              >
                Nossos serviços
              </Link>
            </div>
          </div>
          <Image
            src={
              "/banner-home-3.jpg"
            }
            alt="Equipe médica"
            height={800}
            width={800}
            className="rounded-[2rem] h-[35rem] object-cover max-lg:hidden"
          />
        </div>
      </Section>
      <Services setActiveSection={setActiveSection} />
      <Choose />
      <About setActiveSection={setActiveSection} />
      <Agreement />
      <Speciality setActiveSection={setActiveSection}/>
      <News/>
      <Creta/>
      <Contact setActiveSection={setActiveSection}/>
      <Footer/>
    </>
  );
};

export default Main;
