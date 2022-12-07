import React from "react";
import { AiFillQuestionCircle } from "react-icons/ai";

function FAQS() {
  return (
    <div className="w-full mt-4">
      <div className="flex flex-col text-center  w-full py-4 mb-4 border-b-2">
        <h3 className="text-3xl font-bold text-[#222782]">
          PREGUNTAS FRECUENTES
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 text-center">
        <div>
          <div className="flex flex-row  my-4 justify-center">
          <AiFillQuestionCircle size={25} />
            &nbsp;
            &nbsp;
            <h4 className="text-lg font-bold "> ¿El trapo es de algodón?</h4>
          </div>
          <p>En su mayor porcentaje.</p>
        </div>
        <div>
        <div className="flex flex-row justify-center my-4">
        <AiFillQuestionCircle size={25} />
            &nbsp;
            &nbsp;
          <h4 className="text-lg font-bold ">¿De que tamaño es el tamaño mediano?</h4>
          </div>
          <p>Aprox. de 30cm x 30cm (no se manejan medidas exactas).</p>
        </div>
        <div>
        <div className="flex flex-row justify-center my-4">
        <AiFillQuestionCircle size={25} />
            &nbsp;
            &nbsp;
          <h4 className="text-lg font-bold ">¿Cual es el minimo de venta?</h4>
          </div>
          <p>El minimo de venta son 50Kg (dentro del area metropolitana).</p>
        </div>
        <div>
        <div className="flex flex-row justify-center my-4">
        <AiFillQuestionCircle size={25} />
            &nbsp;
            &nbsp;
          <h4 className="text-lg font-bold ">¿Puedo pasar por el material?</h4>
          </div>
          <p>
            Todas las entregas son a domicilio (50 kg. minimo dentro del area
            metropolitana).
          </p>
        </div>
        <div>
        <div className="flex flex-row justify-center my-4">
        <AiFillQuestionCircle size={25} />
            &nbsp;
            &nbsp;
          <h4 className="text-lg font-bold ">¿Hay garantía?</h4>
          </div>
          <p>100% garantizado, si no te funciona, te lo cambiamos.</p>
        </div>
        <div>
        <div className="flex flex-row justify-center my-4">
        <AiFillQuestionCircle size={25} />
            &nbsp;
            &nbsp;
          <h4 className="text-lg font-bold ">¿Hacen envios?</h4>
          </div>
          <p>Sí, a todo México.</p>
        </div>
        <div>
        <div className="flex flex-row justify-center my-4">
        <AiFillQuestionCircle size={25} />
            &nbsp;
            &nbsp;
          <h4 className="text-lg font-bold ">¿Como funciona el envio para foraneos?</h4>
          </div>
          <p>
            Se necesita previa transferencia, se les envía su factura y ustedes
            escogen la línea de envió, pagan al recibir su material.
          </p>
        </div>
        <div>
        <div className="flex flex-row justify-center my-4">
            <AiFillQuestionCircle size={25} />
            &nbsp;
            &nbsp;
          <h4 className="text-lg font-bold ">¿Trabajan todos los dias?</h4>
          </div>
          <p>Trabajamos los 365 dias, las 24 horas.</p>
        </div>
      </div>
    </div>
  );
}

export default FAQS;
