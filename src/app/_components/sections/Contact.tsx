import React, { useState } from "react";
import Section from "./Section";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Clock, Loader2, MapPin, Phone } from "lucide-react";
interface ContactForm {
  name: string;
  number: number;
  email: string;
  message: string;
}

const contactSchema = z.object({
  name: z.string().min(1, { message: "O nome não pode ficar em branco." }),
  email: z
    .string()
    .min(1, { message: "O email não pode ficar em branco" })
    .email({ message: "Insira um email válido" }),
  number: z
    .string()
    .min(1, { message: "O número não pode ficar em branco" })
    .min(9, { message: "O número deve ter no mínimo 9 dígitos" })
    .max(11)
    .transform((v) => parseInt(v)),
  message: z
    .string()
    .min(1, { message: "A mensagem não pode ficar em branco." })
    .max(800),
});

const Contact = ({
  setActiveSection,
}: {
  setActiveSection: (v: string) => void;
}) => {
  const [textLength, setTextLength] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    register,
    watch,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  function handleNumber(e: React.ChangeEvent<HTMLInputElement>) {
    const {
      target: { value },
    } = e;
    const regex = /\D+/g;
    setValue("number", Number(value.replace(regex, "").slice(0, 11)));
  }

  async function sendMessage() {
    setIsLoading(true);
    try {
      setTimeout(async () => {
        setIsLoading(false);
      }, 5000);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Section
      id="contato"
      setActiveSection={setActiveSection}
      className="mt-[20rem]"
    >
      <div className="container-width grid grid-cols-2">
        <div>
          <h1 className="text-[4rem] font-bold text-emerald-800 mb-[.8rem]">
            Entre em Contato Conosco
          </h1>
          <p className="text-[1.6rem] leading-[1.3]">
            Estamos à disposição para atender você e sua família. Entre em
            contato para agendar uma consulta ou obter mais informações sobre
            nossos serviços.
          </p>
          <div className="flex flex-col mt-[2rem] gap-[2rem]">
            <div className="flex gap-[1rem]  text-[1.6rem] font-medium">
              <div className="bg-emerald-200 text-emerald-800 p-[.8rem] rounded-full h-fit">
                <MapPin  className="size-[2rem]"/>
              </div>
              <div className="flex flex-col gap-[.6rem] ">
                <span className="text-[1.8rem] font-semibold text-zinc-800">
                  Endereço
                </span>
                <p className="text-zinc-600">
                  Avenida Almirante Barroso, Edifício Belém Health Center nº 728
                </p>
              </div>
            </div>
            <div className="flex gap-[1rem]  text-[1.6rem] font-medium">
              <div className="bg-emerald-200 text-emerald-800 p-[.8rem] rounded-full h-fit">
                <Phone  className="size-[2rem]"/>
              </div>
              <div className="flex flex-col gap-[.6rem] ">
                <span className="text-[1.8rem] font-semibold text-zinc-800">
                  Telefone
                </span>
                <p className="text-zinc-600">3119-7706</p>
              </div>
            </div>
            <div className="flex gap-[1rem]  text-[1.6rem] font-medium">
              <div className="bg-emerald-200 text-emerald-800 p-[.8rem] rounded-full h-fit">
                <Clock  className="size-[2rem]"/>
              </div>
              <div className="flex flex-col gap-[.6rem] ">
                <span className="text-[1.8rem] font-semibold text-zinc-800">
                  Horário de funcionamento
                </span>
                <p className="text-zinc-600">
                  Segunda a sexta: 08:00 às 18:00
                </p>
                <p className="text-zinc-600">
                  Sábado: 08:00 às 12:00
                </p>
              </div>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(sendMessage)}
          className="border border-zinc-200 shadow-lg rounded-[1rem] p-[2rem] grid grid-cols-2 gap-[1rem]"
        >
          <div>
            <label
              htmlFor="nome"
              className="text-[1.6rem] font-semibold text-zinc-800 mb-[.6rem] block"
            >
              Nome
            </label>
            <input type="text" {...register("name")} id="nome" />
            {errors.name && (
              <p className="text-red-500 text-[1.3rem] font-medium mt-[.6rem]">
                {errors.name.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="number"
              className="text-[1.6rem] font-semibold text-zinc-800 mb-[.6rem] block"
            >
              Número
            </label>
            <input
              type="text"
              {...register("number", { onChange: handleNumber })}
              id="number"
            />
            {errors.number && (
              <p className="text-red-500 text-[1.3rem] font-medium mt-[.6rem]">
                {errors.number.message}
              </p>
            )}
          </div>
          <div className="col-span-full">
            <label
              htmlFor="email"
              className="text-[1.6rem] font-semibold text-zinc-800 mb-[.6rem] block"
            >
              Email
            </label>
            <input type="email" {...register("email")} id="email" />
            {errors.email && (
              <p className="text-red-500 text-[1.3rem] font-medium mt-[.6rem]">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="col-span-full relative">
            <label
              htmlFor="mensagem"
              className="text-[1.6rem] font-semibold text-zinc-800 mb-[.6rem] block"
            >
              Mensagem
            </label>
            <div className="relative">
              <textarea
                id="mensagem"
                rows={10}
                {...register("message", {
                  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
                    const {
                      target: { value },
                    } = e;
                    if (value.length >= 800) {
                      setValue("message", value.slice(0, 799));
                    }
                    setTextLength(value.slice(0, 800).length);
                  },
                })}
              ></textarea>
              <span className="absolute right-4 bottom-4 text-[1.4rem] text-zinc-700 font-medium">
                {textLength}/800
              </span>
            </div>
            {errors.message && (
              <p className="text-red-500 text-[1.3rem] font-medium mt-[.6rem]">
                {errors.message.message}
              </p>
            )}
          </div>
          <button
            disabled={isLoading}
            className="bg-emerald-800 p-[1.2rem] text-[1.4rem] font-semibold col-span-full w-fit rounded-[.6rem] text-zinc-100 flex items-center gap-[.6rem] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading && <Loader2 className="animate-spin size-[1.4rem]" />}{" "}
            Enviar mensagem
          </button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
