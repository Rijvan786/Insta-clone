import React from 'react'
import { useEffect } from 'react'
import { usePost } from '../hook/usePost'
import Follower from './Follower'
// import { useState } from 'react'

const Post = ({post,user}) => {
const {handlelikepost,handleunlikepost,handlegetpost, setposts,Loading,posts,handlefollow,handleunfollow,Follow}=usePost()
    


  if(Loading ||!post){
    return (<main className='Loading'>
      <h1>Loading...</h1>
    </main>)
  }
  return (
  
    <div className="posts">
        <div className="user">
            
               <div className="profileimg"> <img src={user.profileImg} alt="not found" /></div>
                <p>{user.username}</p>
            </div>
        <div className="post">
       
            
           <img src={post.imgurl} alt="Not found" />
        
          
          
             </div>   
       <div className="icons">
           
               <div className="left">
              
                <button onClick={()=>{post.islike?handleunlikepost(post._id):handlelikepost(post._id)}}

                ><svg className={post.islike?"like":"unlike"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path></svg></button>
                <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 14H11C7.54202 14 4.53953 15.9502 3.03239 18.8107C3.01093 18.5433 3 18.2729 3 18C3 12.4772 7.47715 8 13 8V3L23 11L13 19V14Z"></path></svg></button>
                <button
                onClick={()=>{
                  !Follow?handlefollow(user.username):handleunfollow(user.username)
                   
                }}
                ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14 14.252V16.3414C13.3744 16.1203 12.7013 16 12 16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM17.7929 19.9142L21.3284 16.3787L22.7426 17.7929L17.7929 22.7426L14.2574 19.2071L15.6716 17.7929L17.7929 19.9142Z"></path></svg></button>
            </div>
            <div className="right">
                <button
                onClick={()=>{
                 
                   handlegetpost(post._id)
                  
                }}
                ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z"></path></svg></button>
            </div>
           
           </div><p>{post.caption}</p>
    </div>

  )
}

export default Post