"use client"
import React, { FormEvent, useState } from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { doCredentialsLogin } from '@/app/actions';
import { useRouter } from 'next/navigation';

const Login = () => {
    const router=useRouter()
    const [error,setError]=useState('')
   async function handleOnSubmit(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    try{
        const formData=new FormData(event.currentTarget)
        const response=await doCredentialsLogin(formData)
        if(!!response.error){
        setError(response.error.mesaage)
        }else{
            router.push("/dashboard")

        }
    }
    catch(e)
    {
        console.log(e)
        setError("Check your credentials")
    }
      
    }

  return (
    <form onSubmit={handleOnSubmit}
        className="space-y-4"
       
      >
        <div className='text-sm text-red-500'>
            {error}
        </div>
        <Input
          name="email"
          placeholder="Email"
          type="email"
          required
          autoComplete="email"
        />
        <Input
          name="password"
          placeholder="Password"
          type="password"
          required
          autoComplete="current-password"
        />
        <Button  type="submit" className="text-white bg-red-900 w-full hover:bg-red-800">
          Sign In
        </Button>
      </form>
  )
}

export default Login