import React from "react";

export const Nav = () => {
  return (
    <form className="hidden lg:flex w-full h-[300px] lg:h-[70px]">
      <div className="flex flex-col w-full h-full lg:flex-row">
        <div className="flex-1 border-r cursor-pointer ">
          <div className="relative flex items-center justify-center h-full ">
            <div className="absolute z-10 pr-8 bg-white">
              <div
                className="flex gap-x-4  tracking-[1px] text-[14px] lg:text-[16px]
            uppercase font-black lg:gap-x-8"
              >
                <h1>Sobre</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 border-r cursor-pointer ">
          <div className="relative flex items-center justify-center h-full ">
            <div className="absolute z-10 pr-8 bg-white">
              <div
                className="flex gap-x-4  tracking-[1px] text-[14px] lg:text-[16px]
            uppercase font-black lg:gap-x-8"
              >
                <h1>Clases</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 border-r cursor-pointer ">
          <div className="relative flex items-center justify-center h-full ">
            <div className="absolute z-10 pr-8 bg-white">
              <div
                className="flex gap-x-4  tracking-[1px] text-[14px] lg:text-[16px]
            uppercase font-black lg:gap-x-8"
              >
                <h1>Alquiler</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 border-r cursor-pointer ">
          <div className="relative flex items-center justify-center h-full ">
            <div className="absolute z-10 pr-8 bg-white">
              <div
                className="flex gap-x-4  tracking-[1px] text-[14px] lg:text-[16px]
            uppercase font-black lg:gap-x-8"
              >
                <h1>Medios</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 border-r cursor-pointer ">
          <div className="relative flex items-center justify-center h-full ">
            <div className="absolute z-10 pr-8 bg-white">
              <div
                className="flex gap-x-4  tracking-[1px] text-[14px] lg:text-[16px]
            uppercase font-black lg:gap-x-8"
              >
                <h1>Contacto</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
