import { createContext, useState } from "react";

export const PostContex=createContext()

export const PostProvider=({children})=>{
    const [Feed, setFeed] = useState(null)
    const [Loading, setLoading] = useState(null)
    const [posts, setposts] = useState(null)
    const [Follow, setFollow] = useState(null)





    return(<PostContex.Provider value={{Feed,setFeed,Loading,setLoading,posts,setposts,Follow,setFollow}}>
        {children}
    </PostContex.Provider>)
}