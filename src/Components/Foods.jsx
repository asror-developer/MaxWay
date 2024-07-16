import React from 'react'
import PageMenu from './PageMenu'
import { Outlet } from 'react-router'
import Home from './Home'
import Xotdog from './Xotdog'
const Foods = () => {
  return (
    <div>
      <Home/>
      <PageMenu/>
      <Outlet/>
       {/* <Xotdog/> */}
    </div>
  )
}

export default Foods