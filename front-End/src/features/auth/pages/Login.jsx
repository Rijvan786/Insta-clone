import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../hook/useAuth.jsx'
const Login = () => {
  const{Loading,handleLogin}=  useAuth()
  const [username, setusername] = useState(null)
     const [password, setpassword] = useState(null)
     const navigate= useNavigate()
 
 const submithandler=async(e)=>{
     e.preventDefault()
     try{
        await handleLogin(username,password)
         if(Loading){
    return (<main className='Loading'>
        <h1>Loading.....</h1>
    </main>)
 }
        alert("Logged In succeessfully")
        navigate("/Feed")
     }
     catch(err){
           alert("User is Enter Invalid Cretials",err)
            navigate("/login")
    
     }
  
      
     

 }

   return (
     <main>
         <div className="form-container">
             <h1>Login</h1>
             <form onSubmit={submithandler} >
                 <input 
                 onChange={(e)=>{setusername(e.target.value)}}
                 type="text" name="username"  />
                 <input
                 onChange={(e)=>{setpassword(e.target.value)}}
                  type="password"
                  name="password"  />
                 <button type="submit">Submit</button>
             </form>
             <p>don't have a account <Link to="/Register">Register</Link></p>
         </div>
     </main>
  )
}

export default Login