import React from 'react'
import Header from './common/Header.jsx'
import Footer from './common/Footer.jsx'
import { Outlet } from 'react-router-dom'
const BaseComponent = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default BaseComponent