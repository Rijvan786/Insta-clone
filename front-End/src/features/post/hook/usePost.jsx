import { useContext, useEffect } from "react"
import { PostContex } from "../post.contex"
import { creatpost, followuser, getalluser, getfeed, getPost, likepost,unfollowuser,unlikepost} from "../services/post.api"
import { getme } from "../../auth/services/Auth.api"




export const usePost=()=>{
    const context=useContext(PostContex)
    const {Feed,setFeed,Loading,setLoading,setposts,posts,Follow,setFollow}=context

   const  handlefeed=async()=>{
     setLoading(true)
     const data=await getfeed()
     setFeed(data.post.reverse())

     setLoading(false)
   }
   const handlecreatpost=async(caption,imagefile)=>{
    setLoading(true)
    const data=await creatpost(caption,imagefile)
    setFeed(data.post)
    setLoading(false)
   }

   const handlelikepost=async(postid)=>{
    setLoading(true)
    const data=await likepost(postid)
    handlefeed()
    setLoading(false)
   }
      const handleunlikepost=async(postid)=>{
    setLoading(true)
    const data=await unlikepost(postid)
    handlefeed()
    setLoading(false)
   }

   const  handlealluser=async()=>{
        const data=await getalluser()
        setposts(data.alluser)
    }
   const handlegetpost=async(postid)=>{
    const data=await getPost(postid)
      //  console.log(data);
      setLoading(true)
      setposts((prev)=>[...prev,data.post])

     setLoading(false)
    
   }
   const handlefollow=async(name)=>{
    const data=await followuser(name)
    
      // console.log(data.Followed);
    setposts(((prev)=>[...prev,data.Followed]))
   }
   const handleunfollow=async(name)=>{
    const data=await unfollowuser(name)
      console.log(data.unfollowed);
    setposts(((prev)=>[...prev,data.unfollowed]))
   }


   
   return{Feed,
    Loading,
    handlefeed,
    handlecreatpost,
    handlelikepost,
    handleunlikepost
    ,handlegetpost,
    setposts,
    posts,
    handlefollow,
    handleunfollow,
    Follow,
    handlealluser
    
  }
} 