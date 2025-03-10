"use client"
import Image from "next/image";
import React, { useRef } from "react";
import { Swiper, SwiperSlide,} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";
import DayJs from "@/utils/dayjs";
import type { Swiper as SwiperT, SwiperOptions } from "swiper/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { A11y, Navigation, Pagination } from "swiper/modules";
const News = () => {
  const swiperRef = useRef<SwiperT>(null)
  const news = [
    {
      title: "Inauguração do Espaço Reviver na medcare",
      text: `Na manhã desta terça-feira (7), foi inaugurado o Espaço Reviver, um novo centro cultural no coração da cidade. O local, com arquitetura moderna e sustentável, oferece salas de exposições, auditórios, uma praça ao ar livre e uma biblioteca interativa. O objetivo é promover a convivência, a arte e o bem-estar, com uma programação que inclui oficinas, apresentações culturais e atividades para todas as idades.

Durante a cerimônia de abertura, o prefeito destacou a importância do espaço para a comunidade, enfatizando a revitalização cultural e o fortalecimento dos laços sociais. "O Espaço Reviver é um local para renovar a cidade e proporcionar novas experiências para todos", afirmou.

O espaço estará aberto diariamente e contará com entrada gratuita para as diversas atividades, com o compromisso de se tornar um importante polo cultural na cidade.`,
      banner:
        "https://images.unsplash.com/photo-1585016031966-dc5e6798f266?q=80&w=1626&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Inauguração do Espaço Reviver na medcare",
      text: `Na manhã desta terça-feira (7), foi inaugurado o Espaço Reviver, um novo centro cultural no coração da cidade. O local, com arquitetura moderna e sustentável, oferece salas de exposições, auditórios, uma praça ao ar livre e uma biblioteca interativa. O objetivo é promover a convivência, a arte e o bem-estar, com uma programação que inclui oficinas, apresentações culturais e atividades para todas as idades.

Durante a cerimônia de abertura, o prefeito destacou a importância do espaço para a comunidade, enfatizando a revitalização cultural e o fortalecimento dos laços sociais. "O Espaço Reviver é um local para renovar a cidade e proporcionar novas experiências para todos", afirmou.

O espaço estará aberto diariamente e contará com entrada gratuita para as diversas atividades, com o compromisso de se tornar um importante polo cultural na cidade.`,
      banner:
        "https://images.unsplash.com/photo-1585016031966-dc5e6798f266?q=80&w=1626&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Inauguração do Espaço Reviver na medcare",
      text: `Na manhã desta terça-feira (7), foi inaugurado o Espaço Reviver, um novo centro cultural no coração da cidade. O local, com arquitetura moderna e sustentável, oferece salas de exposições, auditórios, uma praça ao ar livre e uma biblioteca interativa. O objetivo é promover a convivência, a arte e o bem-estar, com uma programação que inclui oficinas, apresentações culturais e atividades para todas as idades.

Durante a cerimônia de abertura, o prefeito destacou a importância do espaço para a comunidade, enfatizando a revitalização cultural e o fortalecimento dos laços sociais. "O Espaço Reviver é um local para renovar a cidade e proporcionar novas experiências para todos", afirmou.

O espaço estará aberto diariamente e contará com entrada gratuita para as diversas atividades, com o compromisso de se tornar um importante polo cultural na cidade.`,
      banner:
        "https://images.unsplash.com/photo-1585016031966-dc5e6798f266?q=80&w=1626&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Inauguração do Espaço Reviver na medcare",
      text: `Na manhã desta terça-feira (7), foi inaugurado o Espaço Reviver, um novo centro cultural no coração da cidade. O local, com arquitetura moderna e sustentável, oferece salas de exposições, auditórios, uma praça ao ar livre e uma biblioteca interativa. O objetivo é promover a convivência, a arte e o bem-estar, com uma programação que inclui oficinas, apresentações culturais e atividades para todas as idades.

Durante a cerimônia de abertura, o prefeito destacou a importância do espaço para a comunidade, enfatizando a revitalização cultural e o fortalecimento dos laços sociais. "O Espaço Reviver é um local para renovar a cidade e proporcionar novas experiências para todos", afirmou.

O espaço estará aberto diariamente e contará com entrada gratuita para as diversas atividades, com o compromisso de se tornar um importante polo cultural na cidade.`,
      banner:
        "https://images.unsplash.com/photo-1585016031966-dc5e6798f266?q=80&w=1626&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Inauguração do Espaço Reviver na medcare",
      text: `Na manhã desta terça-feira (7), foi inaugurado o Espaço Reviver, um novo centro cultural no coração da cidade. O local, com arquitetura moderna e sustentável, oferece salas de exposições, auditórios, uma praça ao ar livre e uma biblioteca interativa. O objetivo é promover a convivência, a arte e o bem-estar, com uma programação que inclui oficinas, apresentações culturais e atividades para todas as idades.

Durante a cerimônia de abertura, o prefeito destacou a importância do espaço para a comunidade, enfatizando a revitalização cultural e o fortalecimento dos laços sociais. "O Espaço Reviver é um local para renovar a cidade e proporcionar novas experiências para todos", afirmou.

O espaço estará aberto diariamente e contará com entrada gratuita para as diversas atividades, com o compromisso de se tornar um importante polo cultural na cidade.`,
      banner:
        "https://images.unsplash.com/photo-1585016031966-dc5e6798f266?q=80&w=1626&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Inauguração do Espaço Reviver na medcare",
      text: `Na manhã desta terça-feira (7), foi inaugurado o Espaço Reviver, um novo centro cultural no coração da cidade. O local, com arquitetura moderna e sustentável, oferece salas de exposições, auditórios, uma praça ao ar livre e uma biblioteca interativa. O objetivo é promover a convivência, a arte e o bem-estar, com uma programação que inclui oficinas, apresentações culturais e atividades para todas as idades.

Durante a cerimônia de abertura, o prefeito destacou a importância do espaço para a comunidade, enfatizando a revitalização cultural e o fortalecimento dos laços sociais. "O Espaço Reviver é um local para renovar a cidade e proporcionar novas experiências para todos", afirmou.

O espaço estará aberto diariamente e contará com entrada gratuita para as diversas atividades, com o compromisso de se tornar um importante polo cultural na cidade.`,
      banner:
        "https://images.unsplash.com/photo-1585016031966-dc5e6798f266?q=80&w=1626&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const breakpoints:SwiperOptions["breakpoints"] = {
    0: {
      slidesPerView: 1
    },
    728: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }, 
    1300: {
      slidesPerView: 4
    }
  }

  return (
    <section className="mt-[16rem]">
      <div className="container-width">
        <h1 className="text-[3rem] lg:text-[4rem] font-bold text-emerald-700 mb-[1.4rem]">
          Últimas notícias
        </h1>
        <Swiper onSwiper={(swiper)=> {
          swiperRef.current = swiper
        }} modules={[Pagination, Navigation, A11y]} breakpoints={breakpoints} spaceBetween={20} direction="horizontal" className="relative">
          {news.map((n, i) => (
            <SwiperSlide key={i} >
              {/* <div> */}
              <Link href={`/noticia/${i}`} className="relative">
              <Image
                src={n.banner}
                alt={n.title}
                width={200}
                height={200}
                className="mb-[.4rem] w-full rounded-[1rem]  "
                />
              <span className="text-[1.6rem] font-medium leading-[1.15] mb-[.8rem] block">
                {n.title}
              </span>
              <p className="text-zinc-700 text-[1.4rem] leading-[1.3]">{n.text.slice(0,60) + "..."}</p>
              <span className="text-zinc-50 text-[1.3rem] leading-[1.3] absolute right-4 top-4 bg-emerald-800 font-semibold p-[.6rem] rounded-[1rem]">{DayJs(new Date).format("DD/MM/YYYY")}</span>
                </Link>
              {/* </div> */}
            </SwiperSlide>
          ))}
          {/* <div className="flex items-center left-0 top-2/4 -translate-y-[120%] z-[2] justify-between"> */}
          <button className="bg-zinc-950/50 text-zinc-100 p-[.8rem] rounded-full absolute left-0 top-2/4 -translate-y-[120%] z-[3]" onClick={()=> swiperRef.current?.slidePrev()}>
            <ChevronLeft/>
          </button>
          <button className="bg-zinc-950/50 text-zinc-100 p-[.8rem] rounded-full absolute right-0 top-2/4 -translate-y-[120%] z-[3]" onClick={()=> swiperRef.current?.slideNext()}>
            <ChevronRight/>
          </button>
          {/* </div> */}
        </Swiper>
      </div>
    </section>
  );
};

export default News;
