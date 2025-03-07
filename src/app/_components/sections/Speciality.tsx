import React from "react";
import Section from "./Section";
import { Baby, Stethoscope } from "lucide-react";

const Speciality = ({
  setActiveSection,
}: {
  setActiveSection: (v: string) => void;
}) => {
  const speciality = [
    {
      title: "Pediatria",
      icon: <Baby />,
    },
    {
      title: "Clínico geral",
      icon: <Stethoscope />,
    },
    {
      title: "Pediatria",
      icon: <Baby />,
    },
    {
      title: "Pediatria",
      icon: <Baby />,
    },
    {
      title: "Pediatria",
      icon: <Baby />,
    },
    {
      title: "Pediatria",
      icon: <Baby />,
    },
    {
      title: "Pediatria",
      icon: <Baby />,
    },
  ];
  return (
    <Section
      id="especialidades"
      setActiveSection={setActiveSection}
      className="mt-[16rem]"
    >
      <div className="container-width">
        <span className="bg-emerald-200 text-emerald-800 block w-fit mx-auto text-[1.4rem] p-[1rem] font-semibold rounded-[1rem] mb-[1.2rem]">
          Especialidades
        </span>
        <h1 className="text-[4rem] font-bold text-emerald-800 text-center">
          Possuimos a especialidade ideal para você
        </h1>
        <div className="grid grid-cols-4 gap-[1rem] mt-[2rem]">
            {speciality.map((s,i)=> <div key={i} className="flex gap-[1rem] items-center border border-zinc-300 rounded-[.6rem] p-[.8rem]">
                <div className="bg-emerald-800 p-[.5rem] rounded-full text-zinc-100 w-fit">
                {s.icon}
                </div>
                <span className="xl:text-[1.6rem] font-semibold text-emerald-800">{s.title}</span>
            </div>)}
        </div>
      </div>
    </Section>
  );
};

export default Speciality;
