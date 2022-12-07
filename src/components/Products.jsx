import React from 'react'
import Trapo1 from '../assets/trapo1.jpg'
import Trapo2 from '../assets/trapo2.jpg'
import Trapo3 from '../assets/trapo3.jpg'
import Trapo4 from '../assets/trapo4.jpg'

function Products() {
  return (
    <div className=' grid grid-cols-1 lg:grid-cols-2 ml-4 mr-4 mt-4'>
        <div className='grid grid-cols-2 gap-4'>
            <img src={Trapo1} alt="Trapo1" className='rounded-2xl'/>
            <img src={Trapo2} alt="Trapo2" className='rounded-2xl'/>
            <img src={Trapo3} alt="Trapo3" className='rounded-2xl'/>
            <img src={Trapo4} alt="Trapo4" className='rounded-2xl'/>
        </div>
        <div className='flex flex-col justify-center text-center lg:ml-4'>
            <h3 className='text-2xl font-bold text-[#222782] mt-4'>Productos:</h3>
            <ul className='flex flex-col justify-center text-center'>
                <li className=' py-4 border-b-2'>TRAPO INDUSTRIAL NUEVO TIPO CAMISETA UNIDO BLANCO</li>
                <li className=' py-4 border-b-2'>TRAPO INDUSTRIAL NUEVO TIPO CAMISETA UNIDO GRIS</li>
                <li className=' py-4 border-b-2'>TRAPO INDUSTRIAL NUEVO TIPO CAMISETA UNIDO COLOR</li>
                <li className=' py-4 border-b-2'>TRAPO INDUSTRIAL NUEVO TIPO CAMISETA PUNTA BLANCA</li>
                <li className=' py-4 border-b-2'>TRAPO INDUSTRIAL NUEVO TIPO CAMISETA PUNTA DE COLOR (MULTICOLORES)</li>
                <li className=' py-4 border-b-2'>TRAPO INDUSTRIAL NUEVO TIPO CAMISETA PUNTA DE COLOR (COLORES CLAROS)</li>
                <li className=' py-4 border-b-2'>TRAPO INDUSTRIAL NUEVO TIPO CAMISETA CRUDO</li>
                <li className=' py-4 border-b-2'>TRAPO INDUSTRIAL TIPO SABANA</li>
            </ul>
        </div>

    </div>
  )
}

export default Products