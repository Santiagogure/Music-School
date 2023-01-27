import React, { useEffect, useState } from "react";

const Header = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });

  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const sections = {
      sobre: document.getElementById("sobre_section"),
      profes: document.getElementById("profes_section"),
      alquiler: document.getElementById("alquiler_section"),
      contacto: document.getElementById("contacto_section"),
    };

    window.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
        setActiveLink("");
      } else {
        const scrollPos = window.scrollY + window.innerHeight;
        Object.entries(sections).forEach(([sectionName, section]) => {
          if (section.offsetTop <= scrollPos) {
            setActiveLink(sectionName);
          }
        });
      }
    });
  }, []);

  const [header, setHeader] = useState(false);
  return (
    <header
      className={`${
        header ? "bg-white py-6 shadow-lg" : "bg-transparent py-8"
      } fixed z-50 w-full transition-all duration-300`}
    >
      <div
        className="container mx-auto flex flex-col items-center gap-y-7
       lg:flex-row lg:justify-between lg:gap-y-0"
      >
        {header ? (
          <h1 className="text-3xl  text-black font-bebas tracking-widest cursor-pointer">
            TRES<span className="text-[#17bf9e]">4</span>VEINTE
          </h1>
        ) : (
          <h1 className="text-3xl  text-white font-bebas tracking-widest cursor-pointer">
            TRES<span className="text-[#17bf9e]">4</span>VEINTE
          </h1>
        )}

        <nav
          className={`${
            header ? "text-primary" : "text-white"
          } flex gap-x-4  tracking-[1px] text-[14px]  sl:text-[12px] lg:text-[20px] ls:gap-x-4
          uppercase font-black lg:gap-x-8 sn:hidden `}
        >
          <a
            className={`transition ${
              activeLink === "sobre" ? " border-b-2 border-[#17bf9e]" : ""
            }`}
            href="#sobre_section"
            onClick={() => setActiveLink("sobre")}
          >
            Sobre
          </a>
          <a
            className={`transition ${
              activeLink === "profes" ? " border-b-2 border-[#17bf9e]" : ""
            }`}
            href="#profes_section"
            onClick={() => setActiveLink("profes")}
          >
            Profesores
          </a>
          <a
            className={`transition ${
              activeLink === "alquiler" ? " border-b-2 border-[#17bf9e]" : ""
            }`}
            href="#alquiler_section"
            onClick={() => setActiveLink("alquiler")}
          >
            Alquiler
          </a>
          <a
            className={`transition ${
              activeLink === "contacto" ? " border-b-2 border-[#17bf9e]" : ""
            }`}
            href="#contacto_section"
            onClick={() => setActiveLink("contacto")}
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
