import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import foto3 from "../../assets/foto3.jpg";

const CarouselSection = () => {
  return (
    <Carousel className="flex flex-col ls:max-w-[300px] lg:max-w-[480px] sl:w-[220px] items-center justify-center">
      <div>
        <img src={foto3} className="cursor-pointer" alt="" />
        <p className="ls:hidden legend">Lorem ispum lorem</p>
      </div>
      <div>
        <img src={foto3} alt="" className="cursor-pointer" />
        <p className=" ls:hidden legend">Lorem ispum lorem</p>
      </div>
      <div>
        <img src={foto3} alt="" className="cursor-pointer" />
        <p className=" ls:hidden legend">Lorem ispum lorem</p>
      </div>
      <div>
        <img src={foto3} alt="" className="cursor-pointer" />
        <p className=" ls:hidden legend">Lorem ispum lorem</p>
      </div>
      <div>
        <img src={foto3} alt="" className="cursor-pointer" />
        <p className=" ls:hidden legend">Lorem ispum lorem</p>
      </div>
    </Carousel>
  );
};

export default CarouselSection;
