import React from "react";
import Cargador from "../assets/cargador.jpg";
import Material2 from '../assets/material2.jpg'
import Material3 from '../assets/material3.jpg'
import Material4 from '../assets/material4.jpg'
import Material6 from '../assets/material6.jpg'
import {FiTarget} from 'react-icons/fi'
import {HiLightBulb} from 'react-icons/hi'
import {MdGroup} from 'react-icons/md'

function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-5 ml-4 mr-4">
      <div className="flex flex-col justify-center items-center mr-4 sm:mt-4 sm:order-last lg:order-first">
      <div className="flex flex-row justify-center" >
            <MdGroup size={43} className="text-red-500"/>
            &nbsp;
            <h3 className="text-3xl  font-bold mb-3 text-[#222782]">¿Quiénes somos?</h3>
            </div>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2   gap-4">
          <div>
            
            <p className="text-center">
              {" "}
              SOMOS UNA EMPRESA LIDER EN VENTA Y DISTRIBUCIÓN DE TRAPO
              INDUSTRIAL NUEVO TIPO CAMISETA. CONTAMOS CON 24 AÑOS EN EL MERCADO
              MEXICANO, DANDO SIEMPRE NUESTRO MEJOR ESFUERZO Y DEDICACIÓN A CADA
              UNO DE NUESTROS CLIENTES
            </p>
          </div>
          <div>
            <p className="text-center">
              NUESTROS
              PRODUCTOS SON DE UTILIDAD PARA DIVERSOS PROCESOS, TALES COMO EL
              MANTENIMIENTO DE AVIONES Y HELICÓPTEROS, ASÍ COMO EN LA
              FABRICACIÓN Y ACABADO DE MUEBLES, IMPRENTAS, TALLERES
              AUTOMOTRICES, ETC.{" "}
            </p>
          </div>
          <div>
            <div className="flex flex-row justify-center">

          <FiTarget  size={35} className="text-red-500"/>
          &nbsp;
          <h3 className="text-3xl  font-bold mb-3 text-[#222782]">Misión</h3>
            </div>
            <p className="text-center">
              OFRECER SOLUCIONES INTEGRALES Y MANTENER NUESTRO
              NIVEL DE CALIDAD EN EL MERCADO
            </p>
          </div>
          <div>
            <div className="flex flex-row justify-center ">
            <HiLightBulb size={35} className="text-red-500"/>
            <h3 className="text-3xl  font-bold mb-3 text-[#222782]">Visión</h3>
            </div>
            <p className="text-center">
              AMPLIAR EL LIDERAZGO, NO SÓLO EN LA CIUDAD DE MÉXICO SINO EN LA
              REPÚBLICA MEXICANA, CON EL COMPROMISO Y RESPONSABILIDAD QUE NOS
              CARACTERIZA, 
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col overflow-hidden">
        <img src={Cargador} alt="cargandor" className="rounded-lg object-cover mb-5" />
        <div className="flex flex-row justify-center">
            <img src={Material2} alt="Material2" className="w-36 h-72 rounded-xl object-cover mr-2" />
            <img src={Material3} alt="Material3" className="w-36 h-72 rounded-xl object-cover mr-2" />
            <img src={Material4} alt="Material4" className="w-36 h-72 rounded-xl object-cover mr-2" />
            <img src={Material6} alt="Material6" className="w-36 h-72 rounded-xl object-cover mr-2" />
        </div>
      </div>
    </div>
  );
}

export default About;
