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
    <div className="lg:hidden z-10">
    <div className={`flex flex-row w-full justify-between  h-fit shadow-lg rounded-xl  ${menu == true && "hidden"}`}>
      <div className="">
        <img src={Logo} alt="logo" className="h-[100px] ml-3" />
      </div>
      <div className="mr-5 mt-8 text-3xl" onClick={() =>setMenu(true)}>
        <AiOutlineMenu />
      </div>
    </div>
    
    <div className={`w-full   bg-white hide-scroll h-fit shadow-lg rounded-xl ${menu == false && "hidden"}`}>
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
    </div>

    <div className="sm:hidden lg:block z-10 ">
    <div className={`flex flex-row w-full justify-between mb-5 h-fit shadow-lg rounded-xl  ${menu == true && "hidden"}`}>
      <div className="">
        <img src={Logo} alt="logo" className="h-[100px] ml-3" />
      </div>
      <div className="mr-5 mt-8 text-lg font-bold" >
        <ul className="flex flex-row justify-around">
          <li className="mr-5 hover:bg-red-500 p-2 rounded-2xl cursor-pointer hover:text-white">Inicio</li>
          <li className="mr-5 hover:bg-red-500 p-2 rounded-2xl cursor-pointer hover:text-white">Nosotros</li>
          <li className="mr-5 hover:bg-red-500 p-2 rounded-2xl cursor-pointer hover:text-white">Productos</li>
          <li className="mr-5 hover:bg-red-500 p-2 rounded-2xl cursor-pointer hover:text-white">Preguntas Frecuentes</li>
          <li className="mr-5 hover:bg-red-500 p-2 rounded-2xl cursor-pointer hover:text-white">Contacto</li>
          <li className="mr-5 bg-[#222782] p-2 rounded-2xl cursor-pointer text-white">Ingresar</li>
        </ul>
      </div>
    </div>
    </div>
    
    </>
  );
}

export default Navbar;
