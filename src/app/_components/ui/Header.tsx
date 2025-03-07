"use client";
import { Cross } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = ({
  activeSection,
}: {
  activeSection: string;
  setActiveSection?: (v: string) => void;
}) => {
  const scrollToElement = (value: string) => {
    const section = document.getElementById(value) as HTMLElement;
      section.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
  };

  return (
    <header className="bg-emerald-800 sticky top-0 z-[3] shadow-xl">
      <div className="container-width py-[3rem] flex items-center justify-between">
        <Link
          href={"/"}
          className="text-zinc-50 text-[2.6rem] font-semibold flex items-center gap-[.6rem]"
        >
          <Cross />
          Medcare
        </Link>
        <nav className="text-zinc-100 flex justify-center items-center w-full">
          <ul className="flex gap-[1rem] text-[1.7rem] font-medium mx-auto">
            <li className={"p-[1rem]"}>
              <Link
                onClick={(e) =>{
                    //  scrollToElement("#")
                    //  e.preventDefault()
                }}
                data-active={activeSection === "main"}
                href={"/#"}
              >
                Início
              </Link>
            </li>
            <li className={"p-[1rem]"}>
              <Link
                onClick={(e) =>{
                     scrollToElement("servicos")
                     e.preventDefault()
                }}
                data-active={activeSection === "servicos"}
                href={"#servicos"}
              >
                Serviços
              </Link>
            </li>
            <li className={"p-[1rem]"}>
              <Link
                onClick={(e) =>{
                     scrollToElement("sobre")
                     e.preventDefault()
                }}
                data-active={activeSection === "sobre"}
                href={"/"}
              >
                Sobre nós
              </Link>
            </li>
            <li className={"p-[1rem]"}>
              <Link
                onClick={(e) =>{
                     scrollToElement("especialidades")
                     e.preventDefault()
                }}
                data-active={activeSection === "especialidades"}
                href={"/"}
              >
                Especialidades
              </Link>
            </li>
            <li className={"p-[1rem]"}>
              <Link
                onClick={(e) =>{
                     scrollToElement("contato")
                     e.preventDefault()
                }}
                data-active={activeSection === "contato"}
                href={"/"}
              >
                Contato
              </Link>
            </li>
          </ul>
          <Link
            className="bg-zinc-100 text-emerald-800 text-[1.6rem] p-[1rem] px-[1.4rem] rounded-[.4rem] font-semibold"
            href={"/"}
          >
            Agendar consulta
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
