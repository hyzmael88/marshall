import React from "react";
import {
  AiFillFacebook,
  AiFillMail,
  AiFillPhone,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import Logo from "../assets/marshall-logo.png";

function Navbar() {
  return (
    <>
    <div className="w-full h-screen md:h-15 bg-white md:hidden">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <div className="h-20">
            <img src={Logo} alt="logo" className=" h-[100px] ml-5" />
          </div>
          <div className="mt-8 mr-5 text-3xl">
            <RxCross2 />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <div className=" flex flex-row w-full border-b-2 border-gray-200 justify-center items-center cursor-pointer">
            <p className="text-3xl mt-10 mb-10 ">Inicio</p>
          </div>
          <div className=" flex flex-row w-full border-b-2 border-gray-200 justify-center items-center cursor-pointer">
            <p className="text-3xl mt-10 mb-10 ">Nosotros</p>
          </div>
          <div className=" flex flex-row w-full border-b-2 border-gray-200 justify-center items-center cursor-pointer">
            <p className="text-3xl mt-10 mb-10 ">Productos</p>
          </div>
          <div className=" flex flex-row w-full border-b-2 border-gray-200 justify-center items-center cursor-pointer">
            <p className="text-3xl mt-10 mb-10 ">Preguntas Frecuentes</p>
          </div>
          <div className=" flex flex-row w-full border-b-2 border-gray-200 justify-center items-center cursor-pointer">
            <p className="text-3xl mt-10 mb-10 ">Contacto</p>
          </div>
        </div>
        <div className="flex flex-row justify-between  mt-16">
          <div className="flex flex-col justify-center items-center ml-5 mr-16 cursor-pointer text-[#222782]">
            <AiFillFacebook size={60} />
            <p>Facebook</p>
          </div>
          <div className="flex flex-col justify-center items-center mr-16 cursor-pointer text-[#222782]">
            <AiFillMail size={60} />
            <p>Mail</p>
          </div>
          <div className="flex flex-col justify-center items-center mr-16 cursor-pointer text-[#222782]">
            <AiFillPhone size={60} />
            <p>Telefono</p>
          </div>
          <div className="flex flex-col justify-center items-center mr-5  cursor-pointer text-[#222782]">
            <AiOutlineWhatsApp size={60} />
            <p>WhatsApp</p>
          </div>
        </div>
      </div>
    </div>
    <div className="sm:hidden flex flex-row h-10 bg-red-500 ">
       

    </div>
    </>
  );
}

export default Navbar;
