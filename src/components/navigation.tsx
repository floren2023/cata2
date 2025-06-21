import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Menu from './menu'
import Image from 'next/image'

const NavBar = () => {
  return (
    <nav className="flex  top-0 sticky bg-gray-100 gap-10 items-center justify-between  pl-10 pr-10 p-3 " >
        <Link href="/" className='text-red-800 text-3xl'>
        <Image src="/cata.png" width={150} height={70} alt="logo" 
        className='p-2  ml-4 rounded-full border-1 border-red-800 shadow1'/></Link>
        <Menu/>
        <div className='rounded-full bg-red-900 text-sm text-white py-1 px-3 shadow1'>
            <Link href="/sign-in">Sign In</Link>
        </div>
        </nav>
  )
}

export default NavBar