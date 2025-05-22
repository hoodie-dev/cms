import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CreatePost from "./components/CreatePost.jsx"
import Posts from "./components/Posts.jsx"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SinglePost from './components/SinglePost.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"createpost",
        element:<CreatePost/>
      },
      {
        path:"posts",
        element:<Posts />
      },
      {
        path:"posts/:id",
        element:<SinglePost/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
