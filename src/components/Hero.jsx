import React from 'react'

import Foto1 from "../assets/foto1.jpg";

function Hero() {
  return (
    <div className="relative h-screen w-full">
    <div className="flex">
      <img
        src={Foto1}
        alt="fondo"
        className="absolute object-cover w-full h-full top-0"
      />
      <div className="absolute w-full h-full bg-black/60 top-0"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <div className="flex flex-col h-full justify-center items-center">
          <h2 className="text-white text-3xl font-bold w-[400px] text-center">
            LIDERES EN VENTA Y DISTRIBUCIÓN DE TRAPO INDUSTRIAL NUEVO
            TIPO CAMISETA
          </h2>
         
            <button className="bg-red-500 text-white font-bold mt-5 px-10 py-2 text-xl rounded-3xl">
              Cotizar
            </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero