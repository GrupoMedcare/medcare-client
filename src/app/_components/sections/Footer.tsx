import { Cross, Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-emerald-800 py-[4rem] mt-[16rem]">
      <div className="container-width grid grid-cols-4 items-start">
        <Link
          href={"/"}
          className="text-zinc-100 flex items-center gap-[1rem] text-[2.6rem] font-bold"
        >
          <Cross />
          Medcare
        </Link>
        <div>
          <span className="text-zinc-100 text-[1.8rem] font-semibold">
            Horário de funcionamento
          </span>
          <div className="text-[1.4rem] text-zinc-200 mt-[.8rem] grid gap-[.6rem]">
          <p className="">Segunda à sexta: 08:00 às 18:00</p>
          <p className="">Sábado: 08:00 às 12:00</p>
          </div>
        </div>
        <div>
          <span className="text-zinc-100 text-[1.8rem] font-semibold">
            Contato
          </span>
          <div className="text-[1.4rem] text-zinc-200 mt-[.8rem] grid gap-[.6rem]">
          <a className="" href="tel:3119-7706">Telefone: 3119-7706</a>
          <a className="" href="https://api.whatsapp.com/send/?phone=5591991242509&text=+&type=phone_number&app_absent=0">Whatsapp: (91) 991242509</a>
          </div>
        </div>
        <div>
          <span className="text-zinc-100 text-[1.8rem] font-semibold">
            Redes sociais
          </span>
          <div className="text-[1.4rem] text-zinc-200 mt-[.8rem] flex gap-[1rem]">
          <a href="" className="border-[1.2px] h-fit w-fit border-zinc-100 text-emerald-100 hover:bg-zinc-100 hover:text-emerald-800 p-[.65rem] rounded-full duration-200">
          <Facebook className="size-[2rem]"/>
          </a>
          <a href="" className="border-[1.2px] h-fit w-fit border-zinc-100 text-emerald-100 hover:bg-zinc-100 hover:text-emerald-800 p-[.65rem] rounded-full duration-200">
          <Instagram className="size-[2rem]"/>
          </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
