import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Menu from './menu'

const NavBar = () => {
  return (
    <nav className="flex  top-0 sticky bg-neutral-50 gap-10 items-center justify-between py-4 pl-10 pr-10" >
        <Link href="/" className='text-red-800 text-3xl'>Logo</Link>
        <Menu/>
        <div>
            <Link href="/sign-in">Sign In</Link>
        </div>
        </nav>
  )
}

export default NavBar