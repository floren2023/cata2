import React from 'react'
import {auth} from "@/lib/auth"
import { redirect } from 'next/navigation'
import SignOut from '@/components/sign-out'
import Image from 'next/image'

const Dashboard = async() => {
  const session =await auth()
  if(!session?.user)
    redirect ("/")

  return (
    <div className='mx-10'>
      <nav className="flex justify-between p-4 bg-gray-200  text-xl">
        <div className='flex gap-4 font-thin justify-center text-center'>
          Bienvenido:
          <span className='text-red-900 capitalize font-medium'>


            {session?.user?.name ? session?.user?.name:session?.user?.email}</span>
         {(session.user.image&&session.user.name)&&
             <div>
               <Image src={session?.user?.image}  alt={session?.user?.name} width={30} height={30} className='rounded-full'/></div>
         } 
         </div>
       <div className='justify-end text-end'><SignOut/></div>
      

    </nav>
    </div>
  )
}

export default Dashboard