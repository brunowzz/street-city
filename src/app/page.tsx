"use client";

import { useEffect } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { GiSmartphone } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <main className="flex h-screen flex-col items-center justify-start gap-11 p-10 md:p-24">
      <section>
        <figure
          data-aos="fade-down"
          data-aos-duration="500"
          className="w-[150px] relative h-[150px] md:w-[250px] md:h-[250px] "
        >
          <Image
            src="/logo.png"
            fill
            className="object-cover"
            alt="Logo Street City"
            priority
          />
        </figure>
        <h1
          data-aos="fade-down"
          data-aos-duration="500"
          className="text-white font-bold text-2xl text-center mt-2"
        >
          @streetcity7
        </h1>
      </section>

      <section className="flex flex-col gap-5">
        <a
          href="https://chat.whatsapp.com/Jf3EJnyQP53DGW3rUM7W8z"
          target="_blank"
        >
          <button
            data-aos="fade-up"
            data-aos-duration="500"
            className="bg-transparent border relative h-14 p-3 w-72 border-solid justify-center text-white border-white rounded-3xl flex md:w-96 items-center transition-all hover:bg-purple-700 hover:border-purple-300 hover:border-2 shadow-lg "
          >
            <FaWhatsapp size={30} color="#FFF" className="absolute left-4" />
            Grupo VIP
          </button>
        </a>

        <a
          href="https://wa.me/5562985289503?text=Street%20city7%20?%20"
          target="_blank"
        >
          <button
            data-aos="fade-up"
            data-aos-duration="500"
            className="bg-transparent border relative h-14 p-3 w-72 border-solid justify-center text-white border-white rounded-3xl flex md:w-96 items-center transition-all hover:bg-purple-700 hover:border-purple-300 hover:border-2 shadow-lg "
          >
            <GiSmartphone size={30} color="#FFF" className="absolute left-4" />
            Fale com o vendedor
          </button>
        </a>
      </section>
    </main>
  );
}
