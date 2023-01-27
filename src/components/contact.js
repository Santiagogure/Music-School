import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  let timeoutId;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/send-email", {
        email,
        message,
      });
      setStatus("success");
      timeoutId = setTimeout(() => {
        setStatus();
      }, 5000);
    } catch (error) {
      setStatus("error");
      timeoutId = setTimeout(() => {
        setStatus();
      }, 5000);
    }
  };
  const handleClearTimeout = () => {
    clearTimeout(timeoutId);
  };

  return (
    <section className="py-24 mt-[-130px] ls:mt-[-180px] mb-[-100px]" id="contacto_section">
      <div className="container mx-auto lg:px-0 mt-[30px] ">
        <div className="text-center mt-2 flex flex-col justify-center items-center">
          <p className="text-[20px] lg:w-[600px] mb-[35px] sl:max-w-[500px] sl:text-[16px]">
 
            Puedes contactarte con nosotros para inscribirte en una clase o 
            alquilar una sala escribiendonos tu email y tu mensaje. De otra manera
            podras encontrar todas nuestras redes sociales para lo mismo.
          </p>
        </div>

        <div className="">
          <form
            className="bg-black p-6 rounded-lg shadow-md max-h-[250px] w-3/4 mb-[200px] mx-auto mt-[30px]"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-[#fff] font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full border border-gray-400 p-2 rounded-lg"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-[#fff] font-medium mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <input
                className="textarea overflow-hidden w-full h-32 border border-gray-400 p-2 rounded-lg max-h-[80px]"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center mt-[30px]">
              <button className="transition hover:cursor-pointer space-x-10 flex flex-col items-center justify-center lg:flex-row">
                <div
                  className="btn btn-secondary 
         btn-sm max-w-[140px]
         h-[50px] mx-auto mt-[20px]
         hover:bg-white hover:text-black shadow-xl ls:min-h-[70px]"
                >
                  Enviar
                </div>
              </button>
            </div>
            <div className="flex items-center justify-center mt-[10px] max-w-[300px]">
              {status === "success" && (
                <>
                  <p className="text-green-500">
                    Tu mensaje fue enviado con exito.
                  </p>
                  {timeoutId && handleClearTimeout()}
                </>
              )}
              {status === "error" && (
                <>
                  <p className="text-red-500">
                    Hubo un error al enviar tu mensaje.
                  </p>
                  {timeoutId && handleClearTimeout()}
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
