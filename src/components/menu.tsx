import Link from 'next/link'
import React from 'react'

const Menu = () => {
  return (
    <ul className='flex gap-4 text-capitalize text-center text-neutral-800 font-medium'>
        <li> <Link href="/">Home</Link></li>
         <li> <Link href="/sobre">Sobre nosotros</Link></li>
          <li> <Link href="/productos">Productos</Link></li>
          <li> <Link href="/eventos">Eventos</Link></li>
             
         </ul>
  )
}

export default Menu