import React, { useContext } from "react";

import foto1 from "../assets/foto1.jpg";
import foto2 from "../assets/foto2.jpg";
import foto3 from "../assets/foto3.jpg";
import ProfessorCard from "./professorCard";

const Profesores = () => {
  const professorData = [
    {
      id: "01",
      name: "Clase de Musica 1",
      image: foto1,
    },

    {
      id: "02",
      name: "Clase de Musica 2",
      image: foto2,
    },

    {
      id: "03",
      name: "Clase de Musica 3",
      image: foto3,
    },
  ];

  return (
    <section className="py-24 ls:mt-[-270px]  mt-[-100px] "  id="profes_section">
      <div className="container mx-auto lg:px-0 mt-[30px]">
        <div className="text-center mt-2 flex flex-col justify-center items-center">
          <div
            className="font-primary text-[42px] mb-8 sl:text-[36px]"

          >
            PROFESORES
          </div>
          <div className="text-center mt-2 flex flex-col justify-center items-center ls:w-[380px] sl:max-w-[280px] ">
            <p className="text-[20px] lg:w-[600px] mb-[35px] sl:max-w-[300px] sl:text-[16px]">
              ¿Quieres aprender a mezclar como un pro? ¿O quizás quieres
              aprender a producir tus propios DJ sets? Todas las clases que
              ofrecemos son abiertas tanto para alumnos principiantes. Aqui
              puedes conocer a los profesores.
            </p>
          </div>
        </div>

        <div
          className="grid grid-cols-1 max-w-sm mx-auto gap-x-[30px]
        lg:grid-cols-3 lg:max-w-none lg:mx-0 mt-[50px]"
        >
          {professorData.map((item) => {
            return <ProfessorCard key={item.id} item={item} />;
          })}
        </div>
      </div>
      <div
                    onClick={() => {
                      const section =
                        document.getElementById("contacto_section");
                      const sectionTop =
                        section.getBoundingClientRect().top +
                        window.pageYOffset;
                      const duration = 1000; // Duración de la animación en milisegundos
                      const start = window.pageYOffset;
                      const distance = sectionTop - start;
                      let currentTime = 0;

                      const easeInOutQuad = (t, b, c, d) => {
                        t /= d / 2;
                        if (t < 1) return (c / 2) * t * t + b;
                        t--;
                        return (-c / 2) * (t * (t - 2) - 1) + b;
                      };

                      const animateScroll = () => {
                        currentTime += 15;
                        window.scrollTo(
                          0,
                          easeInOutQuad(currentTime, start, distance, duration)
                        );
                        if (currentTime < duration) {
                          setTimeout(animateScroll, 15);
                        }
                      };

                      animateScroll();
                    }}
                    className="transition hover:cursor-pointer space-x-10 flex flex-col items-center justify-center lg:flex-row"
                  >
                    <div className="btn btn-secondary btn-sm max-w-[200px] h-[70px] mx-auto hover:bg-white hover:text-black shadow-xl ls:min-h-[70px]">
                      ¡Anotarme!
                    </div>
                  </div>
    </section>
  );
};

export default Profesores;
