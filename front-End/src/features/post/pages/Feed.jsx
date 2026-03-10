import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { usePost, } from '../hook/usePost'
import Post from '../components/Post'
import "../style/Feed.scss"
import Save from '../components/Save'
import Follower from '../components/Follower'

const Feed = () => {
  const {Loading,Feed,handlefeed,posts,Follow,handlealluser}= usePost()

useEffect(function(){
  handlefeed()
  handlealluser()

},[])

  const navigator=useNavigate()
  const navigato=useNavigate()
if(Loading || !Feed){
  return (<main>
    <h1>Loading.....</h1>
  </main>)
}
  return (
    <main>
   
    
        
        <div className="feed-page">   
            <div className="top"> <h1>@Instagram</h1> </div> 
          <div className="creatpost">
       
        <button
        onClick={()=>{
          navigator("/Createpost")
        }}
        >CreatePost</button>
         <button
        onClick={()=>{
          navigator("/Save")
        }}
        >SavedPost</button>  </div>
          {Feed.map((post,key)=>{
          // console.log(post,"aa gyi")

          return <Post key={key} post={post} 
          user={post.user}
           Loading={Loading}
   
          />         
        })}
           
        </div>
 <Follower Follow={Follow}   Feed={Feed}  posts={posts}/>
     
    </main>
  )
}

export default Feed