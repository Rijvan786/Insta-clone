import axios from "axios";

const api=axios.create({
    baseURL:"http://localhost:3000/api/",
    withCredentials:true
})

export const getfeed=async()=>{
         
         const response=await api.get("/post/getfeed")
   
         return response.data

}
export const creatpost=async(caption,imagefile)=>{

    const file=new FormData()

    file.append("caption",caption)
    file.append("image",imagefile)
    const response=await api.post("/post/",file)
    return response.data
}

export const likepost=async(postid)=>{
       const response=await api.post("/post/like/"+postid)
       return response.data
}
export const unlikepost=async(postid)=>{
    
       const response=await api.post("/post/unlike/"+postid)
       return response.data
}

export const getPost=async(postid)=>{
    let response=await api.get("/post/anypost/"+postid)
    
   
    return response.data
}

export const followuser=async(name)=>{
    const response=await api.post("/user/Follow/"+name)
    return response.data
}


export const unfollowuser=async(postid)=>{
    const response=await api.post("/user/unFollow/"+postid)
    return response.data
}
export const getalluser=async()=>{
    const response=await api.get("/post/alluser")
    return response.data
}