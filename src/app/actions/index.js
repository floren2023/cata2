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

export async function doCredentialsLogin(formData){
  try{
  const response=await signIn("credentials", {
    email:formData.get("email"),
    password:formData.get("password"),
    redirect:false

  }
)
return response

}
catch(error){
  throw new Error(error)
}

}