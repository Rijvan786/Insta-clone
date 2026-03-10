import React from 'react'
import { useState } from 'react'
import "../style/Form.scss"
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../hook/useAuth.jsx'


const Register = () => {

  const {Loading,handleRegister} =useAuth()
    const [username, setusername] = useState(null)
    const [email, setemail] = useState(null)
    const [password, setpassword] = useState(null)
     const navigate=useNavigate()
const submithandler=async(e)=>{
    e.preventDefault()
    await handleRegister(username,email,password)
    console.log(username,email,password);

    navigate("/")
}
if(Loading && !!handleRegister){
    return (<main><h1>Loading.....</h1></main>)
}
  return (
    <main>
        <div className="form-container">
            <h1>Register</h1>
            <form onSubmit={submithandler} >
                <input 
                onChange={(e)=>{setusername(e.target.value)}}
                type="text" name="username"  />
                <input 
                onChange={(e)=>{setemail(e.target.value)}}
                type="text"
                 name="email"  />
                <input
                onChange={(e)=>{setpassword(e.target.value)}}
                 type="password"
                 name="password"  />
                <button type="submit">Submit</button>
            </form>
            <p>Allready have a account <Link to="/login">Login</Link></p>
        </div>
    </main>
  )
}

export default Register