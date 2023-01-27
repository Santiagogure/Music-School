import React from "react";
import creadores from "../assets/creadores.png";
import Media from "react-media";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export const About = () => {
  return (
    <section
      className=" ls:container h-[800px] ls:h-auto ls:w-full pt-[60px] py-0 w-[100%] bg-white ls:mx-auto flex items-center justify-center"
      id="sobre_section"
    >
      <Media query="(min-width: 1200px)">
        {(matches) => {
          if (matches) {
            return (
              <div className="w-[1290px] max-w-[120%] sl:max-w-[100%] ls:max-w-[180%] mx-auto flex flex-wrap items-center justify-around lg:items-center">
                <img
                  className="lg:w-[640px] mn:w-[1000px] max-w-[100%] h-auto py-0 px-10 ls:mb-[35px] ls:text-[15px]"
                  src={creadores}
                  alt=""
                ></img>
                <div className="w-[600px] max-w-[100%] ls:max-w-[400px] py-0 px-0 ls:flex ls:flex-col ls:items-center ls:justify-center ls:text-center ls:mt-[80px]">
                  <h4 className="text-[20px] text-[#777777] font-semibold mb-[10px]">
                    ¿Quienes Somos?
                  </h4>

                  <h1 className="text-[50px] text-[#111111] font-bold mb-[20px] sl:text-[28px]  ls:text-[50px]">
                    Somos Musica
                  </h1>
                  <h1 className="text-[50px] text-[#111111] font-bold mb-[20px] sl:text-[28px]  ls:text-[50px]">
                    Somos Comunidad.
                  </h1>

                  <div className=" mt-2 flex flex-col justify-center items-center ls:w-[380px] sl:max-w-[280px]">
                    <p className="text-[20px] w-[600px] mb-[35px] sl:max-w-[300px] sl:text-[16px]">
                      ¡Bienvenidos a nuestra escuela de música electronica
                      Tres4Veinte! Somos una comunidad de amantes de la música
                      electrónica que comparten su pasión con otros. Mas abajo
                      podrás ver las novedades y eventos que tenemos
                      planificados.
                    </p>
                  </div>

                  <div className="bg-white py-5  text-[16px] font-bold border-none outline-none mt-[-35px] ls:mt-[0px]">
                    <button
                      onClick={() => {
                        const section =
                          document.getElementById("contacto_section");
                        const sectionTop =
                          section.getBoundingClientRect().top +
                          window.pageYOffset;
                        const duration = 500; // Duración de la animación en milisegundos
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
                          currentTime += 5;
                          window.scrollTo(
                            0,
                            easeInOutQuad(
                              currentTime,
                              start,
                              distance,
                              duration
                            )
                          );
                          if (currentTime < duration) {
                            setTimeout(animateScroll, 5);
                          }
                        };

                        animateScroll();
                      }}
                      className="transition hover:cursor-pointer space-x-10 flex flex-col items-center justify-center lg:flex-row"
                    >
                      <div className="btn btn-secondary btn-sm max-w-[200px] h-[70px] mx-auto hover:bg-white hover:text-black shadow-xl ls:min-h-[70px]">
                        ¡Anotarme!
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div className="container ls:max-w-[200px]  flex flex-col items-center justify-center mb-[50px]">
                <div className="min-w-[400px] sl:min-w-[280px] mr-[30px]">
                  <img className="" src={creadores} alt=""></img>
                </div>
                <div className="sl:w-[250px] w-[400px] mt-[30px] container flex flex-col items-center justify-center ls:text-center">
                  <div>
                    <h4 className="text-[20px] text-[#777777] font-semibold mb-[10px]">
                      ¿Quienes Somos?
                    </h4>
                    <div>
                      <h1 className="text-[30px] sl:text-[20px]">
                        Somos Musica
                      </h1>
                      <h1 className="text-[30px] sl:text-[20px]">
                        Somos Comunidad.
                      </h1>
                    </div>
                    <p className="text-[18px] lg:w-[600px] mb-[35px] sl:max-w-[300px] sl:text-[16px] ">
                      ¡Bienvenidos a nuestra escuela de música techno
                      Tres4Veinte! Somos una comunidad de amantes de la música
                      electrónica que comparten su pasión con otros. Mas abajo
                      podrás ver las novedades y eventos que tenemos
                      planificados.
                    </p>
                  </div>
                  <div className="bg-white py-5  text-[16px] font-bold border-none outline-none mt-[-35px] ls:mt-[0px]">
                    <button
                      onClick={() => {
                        const section =
                          document.getElementById("contacto_section");
                        const sectionTop =
                          section.getBoundingClientRect().top +
                          window.pageYOffset;
                        const duration = 500; // Duración de la animación en milisegundos
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
                          currentTime += 5;
                          window.scrollTo(
                            0,
                            easeInOutQuad(
                              currentTime,
                              start,
                              distance,
                              duration
                            )
                          );
                          if (currentTime < duration) {
                            setTimeout(animateScroll, 5);
                          }
                        };

                        animateScroll();
                      }}
                      className="transition hover:cursor-pointer space-x-10 flex flex-col items-center justify-center lg:flex-row"
                    >
                      <div className="btn btn-secondary btn-sm max-w-[200px] h-[70px] mx-auto hover:bg-white hover:text-black shadow-xl ls:min-h-[70px]">
                        ¡Anotarme!
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </Media>
    </section>
  );
};

export default About;
