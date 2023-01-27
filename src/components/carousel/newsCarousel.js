import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import foto1 from "../../assets/foto1.jpg";
import foto2 from "../../assets/foto2.jpg";
import foto3 from "../../assets/foto3.jpg";
import media1 from "../../assets/media2.mp4";

const NewsCarousel = () => {
  return (
    <Carousel className="flex flex-col ls:max-w-[300px] lg:max-w-[480px] sl:w-[220px] items-center justify-center">
      <div>
        <img src={foto1} className="cursor-pointer" alt="" />
        <p className="ls legend sl:hidden">22 de Enero. Lorem Lorem Lorem</p>
      </div>
      <div>
        <img src={foto3} alt="" className="cursor-pointer" />
        <p className="ls legend sl:hidden">22 de Enero. Lorem Lorem Lorem</p>
      </div>
      <div>
        <img src={foto3} alt="" className="cursor-pointer" />
        <p className="ls legend sl:hidden">22 de Enero. Lorem Lorem Lorem</p>
      </div>
    </Carousel>
  );
};

export default NewsCarousel;
