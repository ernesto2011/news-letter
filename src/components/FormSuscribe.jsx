import bgImage from "../assets/pattern_food-min.png";
import takiruMail from "../assets/Takiru-mail.png";
import bellIcon from "../assets/campana.png";
import bubbleImage from "../assets/globo_texto-min.png";
import logoImage from "../assets/Fondita_Logo_blanco_full.png";
import { useState } from "react";
import { sendSuscriber } from "../services/Suscriptions";
import { toast, ToastContainer } from "react-toastify";

export const FormSuscribe = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendSuscriber(fullname, email);

      toast.success("Se ha suscrito a nuestro Newsletter");
      setFullname("");
      setEmail("");
    } catch (error) {
      toast.error("Error al enviar los datos!");
    }
  };
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-between relative bg-cyprus-900 sm:bg-cover sm:w-full sm:h-full"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Nav */}
      <nav className="absolute top-12 left-10 flex justify-center">
        <img src={logoImage} alt="Logo Fondita" className="w-48 sm" />
      </nav>

      {/* Contenido principal */}
      <main className="flex flex-col justify-center items-center w-full max-w-7xl mx-auto relative py-20 px-8 mt-16">
        {/* Globo (bubble) */}
        <div className="relative w-full flex justify-center mb-2">
          <div className="relative w-auto">
            <img
              src={bubbleImage}
              alt="Globito con mensaje"
              className="max-w-lg"
            />
            <div className="absolute inset-0 flex justify-center items-center pl-12 pb-8">
              <div className="text-perejil text-2xl text-left font-roboto-thin leading-tight">
                <p>
                  <span className="font-bold text-perejil">
                    Hola! Suscríbete
                  </span>{" "}
                  a nuestro Newsletter
                </p>
                <p>
                  y recibe nuestras{" "}
                  <span className="font-bold text-perejil">promociones</span> y{" "}
                  <span className="font-bold text-perejil">contenidos</span>{" "}
                  para{" "}
                  <span className="font-bold text-perejil">
                    impulsar tu negocio.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulario e imagen */}
        <div className="flex flex-wrap w-full justify-between items-center relative">
          {/* Imagen TakiruMail */}
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-start mb-8 md:mb-0 relative -ml-32">
            <img
              src={takiruMail}
              alt="Taco y correo"
              className="w-auto h-auto max-h-[700px] object-cover"
            />
          </div>

          {/* Formulario */}
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-start ml-8">
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-lg flex flex-col space-y-6"
            >
              {/* Contenedor de los inputs */}
              <div className="flex flex-col space-y-6 w-3/4">
                {" "}
                {/* Inputs ocupan el 75% */}
                <input
                  type="text"
                  placeholder="Nombre"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  className="w-full py-3 placeholder-white font-light text-white text-2xl bg-transparent border-b border-white focus:outline-none"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Correo Electrónico"
                  className="w-full py-3 placeholder-white text-white font-light text-2xl border-b border-white bg-transparent focus:outline-none"
                />
              </div>

              {/* Botón debajo de los inputs, alineado a la derecha */}
              <div className="flex justify-end w-full">
                <button
                  type="submit"
                  className="flex justify-center items-center gap-4 w-2/4 bg-tertiary hover:bg-lemon-ginger-600 text-white font-bold text-2xl px-6 py-4 rounded-full shadow-lg"
                >
                  Suscribirme
                  <img src={bellIcon} alt="Campana" className="w-6 h-6" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-4 right-8 flex items-center gap-4 text-white text-md font-roboto-thin">
        <p>Derechos Reservados Fondita 2024 ©</p>
        <a href="#" className="underline">
          Aviso de Privacidad
        </a>
      </footer>
      <ToastContainer />
    </div>
  );
};
