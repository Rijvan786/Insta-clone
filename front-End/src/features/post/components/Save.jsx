import React from 'react'
import { usePost } from '../hook/usePost'
import { useNavigate } from 'react-router'

const Save = () => {
 const navigator=useNavigate()
  const {Loading,Feed,handlefeed,posts,Follow}= usePost()
  

  if(Loading ){
    return (<main>
      <h1>Loading...</h1>
    </main>)
  }
    return (
     <main>
         
        <div className="save-container">
           <button
        onClick={()=>{
          navigator("/")
        }}
        >↩️Back</button>
 
            <h1>Saved Post</h1>
         <div className='img' >  {posts.reverse().map((post,key)=>{
            console.log(post.imgurl);
             return (
             <div>{ post?.imgurl && <img key={key} src={post.imgurl} alt="" />} </div>  
          )
           })}     </div> 
        </div>
     </main>
  )
}

export default Save