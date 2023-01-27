import React from "react";
import CarouselFadeExample from "./carousel/carousel";

export const Media = () => {
  return (
    <section className="py-24 mt-[-220px] ls:mt-[-220px]">
      <div className="container mx-auto lg:px-0 mt-[30px]">
        <div className="text-center mt-2 flex flex-col justify-center items-center">
          <p className="text-[20px] lg:w-[600px] mb-[35px] sl:max-w-[300px] sl:text-[16px]">
            Dale un vistazo a nuestra escuela en acción! Aquí podrás ver fotos y
            videos de nuestros estudiantes y profesores, que muestran el trabajo
            de la escuela.
          </p>
        </div>

        <div className="flex items-center justify-center mt-[20px]">
          <CarouselFadeExample />
        </div>
      </div>
    </section>
  );
};
