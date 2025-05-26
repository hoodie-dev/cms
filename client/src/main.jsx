import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CreatePost from "./components/CreatePost.jsx"
import Posts from "./components/Posts.jsx"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SinglePost from './components/SinglePost.jsx'
import EditPost from './components/EditPost.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        id:"index",
        path:"/",
        element:<Posts />
      },
      {
        path:"posts",
        element:<Posts />
      },
      {
        path:"createpost",
        element:<CreatePost/>
      },
      {
        path:"posts/:id",
        element:<SinglePost/>
      },
      {
        path:"posts/:id/edit",
        element:<EditPost />
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
