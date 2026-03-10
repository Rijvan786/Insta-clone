import { useState } from "react"
import { createContext } from "react"

export const DataContext=createContext()

export  const  AuthDataProvider=({children})=>{
    const [user, setuser] = useState(null) 
    const [Loading, setLoading] = useState(false)   
    return(<DataContext.Provider value={{user,setuser,Loading,setLoading}}>
         {children}
     </DataContext.Provider>)
}