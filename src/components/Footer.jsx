import React from 'react'
import Logo from "../assets/marshall-logo.png";

function Footer() {
  return (
    <div className='w-full h-[100px] bg-white flex flex-row justify-between'>
        <div>
            <img className="h-[100px] ml-3" src={Logo} alt="Logo2" />
        </div>
        <div>
            <button className='bg-red-500 text-white font-bold mt-5 px-10 py-2 text-xl rounded-3xl mr-2'>Cotizar</button>
            <button className='rounded-3xl bg-[#222782] text-white font-bold mt-5 px-10 py-2 text-xl'>Llamar</button>
        </div>
    </div>
  )
}

export default Footer