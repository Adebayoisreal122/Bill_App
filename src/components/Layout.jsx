import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navibar from './Navibar'

function Layout() {
  return (
    <>
      <Navibar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
