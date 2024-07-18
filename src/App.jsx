import React from 'react'
import './App.css'
import Header from './Components/Header'
import { Outlet } from 'react-router'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>

  )
}

export default App
