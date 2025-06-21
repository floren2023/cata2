"use server"
import { signIn,signOut } from "@/lib/auth"
export async function doSocialLogin(formData){
  const action=formData.get('action')
  console.log(action)
  await signIn(action,{redirectTo:"/dashboard"})
  
}
export async function doLogout(){
  await signOut({redirectTo:"/"})
}
