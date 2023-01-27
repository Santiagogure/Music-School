import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineYoutube,
} from "react-icons/ai";

export const Footer = () => {
  function redirect(url) {
    window.location = url;
  }

  return (
    <footer className="m-auto p-10 w-full bg-black" id="footer">
      <div className="md:flex gap justify-center items-center my-0" id="footer">
        <div className="space-y-5 py-5 border-b  mb-5">
          <h1 className=" flex items-center justify-center text-3xl font-bold text-white">
            TRES<span className="text-green-600 font-bold">4</span>VEINTE
          </h1>
          <div className="flex space-x-5 items-center justify-center text-white">
            <AiOutlineInstagram
              className="cursor-pointer"
              onClick={() => redirect("https://www.instagram.com/tres4veinte/")}
              size={"1.5rem"}
            />
            <AiOutlineMail
              className="cursor-pointer"
              onClick={() => redirect("")}
              size={"1.5rem"}
            />
            <AiOutlineWhatsApp
              className="cursor-pointer"
              onClick={() => redirect("")}
              size={"1.5rem"}
            />
            <AiOutlineYoutube
              className="cursor-pointer"
              onClick={() =>
                redirect("https://www.youtube.com/@tres4veinte956")
              }
              size={"1.5rem"}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
