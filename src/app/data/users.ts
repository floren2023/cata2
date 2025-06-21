export const users=[
    {
        email:"alex@alex.com",
        password:"password"
    },
      {
        email:"maria@maria.com",
        password:"password"
    },
      {
        email:"bob@bob.com",
        password:"password"
    },
]
 export const getUserByEmail=(email:any)=>{
    const found=users.find(user=>user.email===email)
    return found

}