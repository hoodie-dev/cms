import React, { useEffect, useState } from 'react'
import './style.css'
import SideNav from './components/Sidenav'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div id='main'>
      <SideNav/>
      <Outlet/>
    </div>    
  )
}

export default App
