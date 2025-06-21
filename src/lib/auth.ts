import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import { getUserByEmail } from "@/app/data/users" 

export const { handlers, signIn, signOut, auth } = NextAuth({
  
  session:  {
      strategy:"jwt"
    },
  providers: [
    CredentialsProvider({
       credentials: {
        email: {},
        password: {},
      },
        authorize:async(credentials)=>{

        if(credentials===null) return null
         const {email,password}=credentials   

          const user=await getUserByEmail(email)
           if (!user) {
          // No user found, so this is their first attempt to login
          // Optionally, this is also the place you could do a user registration
          throw new Error("User not found. Please sign uo")
        }
 else{
  const isMatch=user?.password===credentials?.password
   if(isMatch)
  // return user object with their profile data
        return user
        else
         throw new Error("Invalid credentials.")

 }
       


       }

    }), 


    GoogleProvider({
    clientId:process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    authorization:{
        params:{
            prompt:"consent",
            access_type:"offline",
            response_type:"code",

        }
    }

  }),
  GitHubProvider({
    clientId:process.env.GITHUB_CLIENT_ID,
    clientSecret:process.env.GITHUB_CLIENT_SECRET, 

  }),

],
})


