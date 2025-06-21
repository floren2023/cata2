import Link from 'next/link'
import React from 'react'
import {  Bricolage_Grotesque} from "next/font/google";


const bricolageGrotesque = Bricolage_Grotesque({
  
  subsets: ["latin"],
  weight:"600"
});


const Menu = () => {
  return (
    <ul className={`${bricolageGrotesque.className} flex gap-6 text-capitalize text-center text-neutral-600 `}>
        <li className='rounded-full shadow1 border-1 border-red-800 py-1 px-3 hover:text-red-800'> <Link href="/">Home</Link></li>
         <li className='rounded-full shadow1 border-1 border-red-800 py-1 px-3 hover:text-red-800'> <Link href="/sobre">Sobre nosotros</Link></li>
          <li className='rounded-full shadow1 border-1 border-red-800 py-1 px-3 hover:text-red-800'> <Link href="/productos">Productos</Link></li>
          <li className='rounded-full shadow1 border-1 border-red-800 py-1 px-3 hover:text-red-800'> <Link href="/eventos">Eventos</Link></li>
             
         </ul>
  )
}

export default Menu