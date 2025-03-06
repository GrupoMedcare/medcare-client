import { Metadata } from "next";
import Main from "./_components/sections/Main";

export const metadata:Metadata = {
  title: "Grupo Medcare - Agende a sua consulta online!",
  description: "Realizamos consultas e exames de imagens com equipamentos de últimas geração, nossas instalações são confortáveis e modernas.",
  keywords: "clinica médica belem, consultas, exames, cardiologia, ultrassonografia, exames de imagem"
}

export default function Home() {
  return (
    <>
      <Main/>
    </>
  );
}
