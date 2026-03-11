import axios from "axios"
const api=axios.create({
    baseURL:"https://insta-clone-2wag.onrender.com",
    withCredentials:true
})

export const Register=async(username,email,password)=>{
    const response=await api.post("/register",{
        username,
        email,
        password
    })
    return response.data
}

export const Login=async(username,password)=>{
    const response=await api.post("/login",{
        username,
        password
    })
    return response.data
}
export const getme=async()=>{
    const response=await api.get("/getme")
    return response.data
}