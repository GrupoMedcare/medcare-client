"use client";
import { Cross, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import useGlobalStore from "@/store/global";
import {motion} from "framer-motion"
const Header = ({
  activeSection,
}: {
  activeSection: string;
  setActiveSection?: (v: string) => void;
}) => {
  const [isActiveMenu, setIsActiveMenu] = useState(false)
  const {isMobile} = useGlobalStore()

  const scrollToElement = (value: string) => {
    const section = document.getElementById(value) as HTMLElement;
    section.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  const pathname = usePathname();

  return (
    <header className="bg-emerald-800 sticky top-0 z-[3] shadow-xl">
      <div className="container-width py-[1.6rem] lg:py-[3rem] flex items-center justify-between">
        <Link
          href={"/"}
          className="text-zinc-50 text-[2.6rem] font-semibold flex items-center gap-[1rem]"
        >
          <Image src={"/logo.png"} alt="logo" width={28} height={28}/>
          Medcare
        </Link>
        {isMobile && <button onClick={()=> setIsActiveMenu(v=> !v)} className="text-zinc-100 p-[1rem] lg:hidden">
          {isActiveMenu ? <X className="size-[3rem]"/>: <Menu className="size-[3rem]"/>}
        </button>}
        {(isActiveMenu || !isMobile) &&  <motion.nav initial={!isActiveMenu && isMobile ?  {right: "-100%", opacity:0}: {}} animate={isActiveMenu && isMobile ?{right: "0%", opacity:1}: {}} className="text-zinc-100 flex justify-center lg:items-center w-full max-lg:absolute max-lg:flex-col max-lg:bg-emerald-800 max-lg:h-dvh max-lg:top-0 max-lg:w-[70%] z-[2] max-lg:p-[3rem] lg:relative max-lg:right-[-100%] ">
          {isActiveMenu && isMobile && <button onClick={()=> setIsActiveMenu(false)} className="p-[.8rem] text-zinc-100 absolute left-4 top-4 border border-zinc-100 rounded-2">
            <X className="size-[3rem] "/>
          </button>}
          <ul className="flex gap-[1rem] text-[1.7rem] font-medium lg:mx-auto max-lg:flex-col">
            <li className={"py-[1rem] lg:p-[1rem]"}>
              <Link
                onClick={(e) => {
                  if (pathname === "/") {
                    scrollToElement("inicio");
                    e.preventDefault();
                  }
                }}
                data-active={activeSection === "inicio"}
                href={pathname === "/" ? "#inicio" : "/#"}
              >
                Início
              </Link>
            </li>
            <li className={"py-[1rem] lg:p-[1rem]"}>
              <Link
                onClick={(e) => {
                  scrollToElement("servicos");
                  e.preventDefault();
                }}
                data-active={activeSection === "servicos"}
                href={"#servicos"}
              >
                Serviços
              </Link>
            </li>
            <li className={"py-[1rem] lg:p-[1rem]"}>
              <Link
                onClick={(e) => {
                  scrollToElement("sobre");
                  e.preventDefault();
                }}
                data-active={activeSection === "sobre"}
                href={"/"}
              >
                Sobre nós
              </Link>
            </li>
            <li className={"py-[1rem] lg:p-[1rem]"}>
              <Link
                onClick={(e) => {
                  scrollToElement("especialidades");
                  e.preventDefault();
                }}
                data-active={activeSection === "especialidades"}
                href={"/"}
              >
                Especialidades
              </Link>
            </li>
            <li className={"py-[1rem] lg:p-[1rem]"}>
              <Link
                onClick={(e) => {
                  scrollToElement("contato");
                  e.preventDefault();
                }}
                data-active={activeSection === "contato"}
                href={"/"}
              >
                Contato
              </Link>
            </li>
          </ul>
          <Link
            className="bg-zinc-100 text-emerald-800 text-[1.6rem] p-[1rem] px-[1.4rem] rounded-1 font-semibold max-lg:mt-[.8rem]"
            href={"/"}
            onClick={(e)=> {
              e.preventDefault()
              window.open("https://api.whatsapp.com/send/?phone=5591991242509&text=+&type=phone_number&app_absent=0")
            }}
          >
            Agendar consulta
          </Link>
        </motion.nav>}
      </div>
    </header>
  );
};

export default Header;
