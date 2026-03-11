import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
 let navigate= useNavigate()
  return (
    <div className='Home'>
       <div className="Navbar">
        <button
        onClick={()=>{
          navigate("/Login")
        }}
        >
           Login
        </button>
        <button
        onClick={()=>{
          navigate("/Register")
        }}
        >Register</button>
       </div>
           <div className="img">
            <h1> Welcome To  @Instagram </h1>
            
          
           </div>

    </div>
  )
}

export default Home