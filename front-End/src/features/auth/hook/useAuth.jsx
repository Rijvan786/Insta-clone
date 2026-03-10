import { useContext } from "react";
import {  DataContext } from "../auth.Contex.jsx";
import { getme, Login, Register } from "../services/Auth.api.jsx";


export const useAuth=()=>{
    const context=useContext(DataContext)
    const{user,setuser,Loading,setLoading}=context

   const handleRegister=async(username,email,password)=>{
        setLoading(true)
         const data=await Register(username,email,password)
         setuser(data.user)
         console.log(data);
         setLoading(false)

   }
    const handleLogin=async(username,password)=>{
        setLoading(true)
        const data=await Login(username,password)
         setuser(data.user)
         setLoading(false)
    }

        
    return {user,setuser,Loading,handleLogin,handleRegister}
}