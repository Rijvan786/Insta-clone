import {createBrowserRouter, RouterProvider} from "react-router"
import Register from "./features/auth/pages/Register"
import Login from "./features/auth/pages/login"
import Feed from "./features/post/pages/Feed"
import CreatePost from "./features/post/pages/CreatePost"
import Home from "./features/auth/components/Home"
import Save from "./features/post/components/Save"


export const router=createBrowserRouter([
    {
      path:"/",
      element:<Feed/>
    },
    
    
    {
        path:"/register",
        element:<Register/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
      path:"/Createpost",
      element:<CreatePost/>
    },
    {
      path:"/Home",
      element:<Home/>
    },
  {
    path:"/Save",
    element:<Save/>

  }

])
const routes = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default routes