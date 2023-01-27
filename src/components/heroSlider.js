import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

import { EffectFade, Autoplay } from "swiper";

import Img1 from "../assets/294634871_376568401214054_6343039339964394223_n.jfif";
import Img2 from "../assets/325973551_557679722928232_5303989141441405460_n.jfif";
import Img3 from "../assets/316224534_544005367581890_6402930216339166034_n.jfif";

const slides = [
  {
    bg: Img1,
  },
  {
    bg: Img2,
  },
  {
    bg: Img3,
  },
];

const HeroSlider = () => {
  const [sliderHeight, setSliderHeight] = useState(0);

  useEffect(() => {
    setSliderHeight(window.innerHeight);
    window.addEventListener("resize", () =>
      setSliderHeight(window.innerHeight)
    );
    return () =>
      window.removeEventListener("resize", () =>
        setSliderHeight(window.innerHeight)
      );
  }, []);

  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect={"fade"}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="heroSlider lg:h-[860px]"
      style={{ height: `${sliderHeight}px` }}
      id="menu_section"
    >
      {slides.map((slide, index) => {
        return (
          <SwiperSlide
            className="h-full bg-black 
          flex justify-center items-center"
            key={index}
          >
            <div className="z-20 text-white text-center">
              <div className="uppercase font-tertiary tracking-[6px] mb-10">
                Somos música, somos comunidad
              </div>
            </div>
            <div className="absolute top-0 w-full h-full">
              <img
                className="object-cover h-full w-full"
                src={slide.bg}
                alt=""
              />
            </div>
            <div className="absolute w-full h-full bg-black/70"></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;
