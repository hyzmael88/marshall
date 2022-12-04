import React, {useState} from "react";
import {
  AiFillFacebook,
  AiFillMail,
  AiFillPhone,
  AiOutlineWhatsApp,
  AiOutlineMenu
} from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import Logo from "../assets/marshall-logo.png";

function Navbar() {
  const [menu, setMenu] = useState(false)
  return (
    <>
    <div className={`flex flex-row w-full justify-between mb-5 h-16 ${menu == true && "hidden"}`}>
      <div className="">
        <img src={Logo} alt="logo" className="h-[100px] ml-3" />
      </div>
      <div className="mr-5 mt-8 text-3xl" onClick={() =>setMenu(true)}>
        <AiOutlineMenu />
      </div>
    </div>
    
    <div className={`w-full   bg-white hide-scroll ${menu == false && "hidden"}`}>
      <div className="w-full flex flex-col  ">
        <div className="flex flex-row justify-between mb-5 ">
          <div className="h-20">
            <img src={Logo} alt="logo" className=" h-[100px] ml-3" />
          </div>
          <div className="mt-8 mr-5 text-3xl" onClick={() =>setMenu(false)}>
            <RxCross2 />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <div className=" flex flex-row w-full hover:bg-red-500 border-b-2 border-gray-200 justify-center items-center cursor-pointer">
            <p className="text-2xl mt-5 mb-5  ">Inicio</p>
          </div>
          <div className=" flex flex-row w-full hover:bg-red-500 border-b-2 border-gray-200 justify-center items-center cursor-pointer">
            <p className="text-2xl mt-5 mb-5 ">Nosotros</p>
          </div>
          <div className=" flex flex-row w-full hover:bg-red-500 border-b-2 border-gray-200 justify-center items-center cursor-pointer">
            <p className="text-2xl mt-5 mb-5 ">Productos</p>
          </div>
          <div className=" flex flex-row w-full hover:bg-red-500 border-b-2 border-gray-200 justify-center items-center cursor-pointer">
            <p className="text-2xl mt-5 mb-5 ">Preguntas Frecuentes</p>
          </div>
          <div className=" flex flex-row w-full hover:bg-red-500 border-b-2 border-gray-200 justify-center items-center cursor-pointer">
            <p className="text-2xl mt-5 mb-5 ">Contacto</p>
          </div>
          <div className=" flex flex-row w-full hover:bg-red-500 border-b-2 border-gray-200 justify-center items-center cursor-pointer">
            <p className="text-2xl mt-5 mb-5 ">Contacto</p>
          </div>
        </div>
        <div className="w-full flex flex-row justify-between  mt-10 mb-5">
          
          <div className="flex flex-col justify-center items-center ml-4 cursor-pointer text-[#222782]">
            <AiFillMail size={60} />
            <p className="text-xl">Mail</p>
          </div>
          <div className="flex flex-col justify-center items-center  cursor-pointer text-[#222782]">
            <AiFillPhone size={60} />
            <p className="text-xl">Telefono</p>
          </div>
          <div className="flex flex-col justify-center items-center mr-4  cursor-pointer text-[#222782]">
            <AiOutlineWhatsApp size={60} />
            <p className="text-xl">WhatsApp</p>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default Navbar;
