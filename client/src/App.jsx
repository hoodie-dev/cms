import React, { useEffect, useState } from 'react'
import './style.css'
import SideNav from './components/Sidenav'
import { Outlet } from 'react-router-dom'

export const posts = [
  {
    title:"blog1",
    content:"hello i'm blog 1. nice to meet you :)"
  },
  {
    title:"blog2",
    content:"mehraba, ben blog 2. memnun oldun :)"
  }
]

function App() {
  return (
    <div id='main'>
      <SideNav/>
      <Outlet/>
    </div>    
  )
}

export default App
