import React from 'react'
import { RouterProvider } from 'react-router'
import  { router } from './routes'
import "./features/auth/shared/global.scss"
import { AuthDataProvider } from './features/auth/auth.Contex'
import { PostProvider } from './features/post/post.contex'



const App = () => {
  return (
<AuthDataProvider>
  <PostProvider>
    <RouterProvider router={router}/>
  </PostProvider>
</AuthDataProvider>
  )
}

export default App