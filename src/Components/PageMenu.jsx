import React from 'react'
import { NavLink } from 'react-router-dom'
const PageMenu = () => {
  return (
    <div className='pageMenu'>
      <div className="container">
        <div className='header-item'>
          <NavLink className='header-item-link' active to="/">Lavash</NavLink>
          <NavLink className='header-item-link' active to="/desert">Desert</NavLink>
          <NavLink className='header-item-link' active to="/set">Set</NavLink>
          <NavLink className='header-item-link' active to="/Xaggi">Xaggi</NavLink>
          <NavLink className='header-item-link' active to="/Burger">Burger</NavLink>
          <NavLink className='header-item-link' active to="/pizza">Pizza</NavLink>
          <NavLink className='header-item-link' active to="/Sendvich">Sendvich</NavLink>
          <NavLink className='header-item-link' active to="/Donor">Donor</NavLink>
          <NavLink className='header-item-link' active to="/Xot-dog">Xotdog</NavLink>
          <NavLink className='header-item-link' active to="/free">Free</NavLink>
          {/* <NavLink className='header-item-link' active to="/Drink">Drinik</NavLink> */}
          <NavLink className='header-item-link' active to="/Salat">Salat</NavLink>
          {/* <NavLink className='header-item-link' active to="/Bread">Bread</NavLink> */}
          {/* <NavLink className='header-item-link' active to="/Sauce">Sauce</NavLink> */}
        </div>
      </div>

    </div>
  )
}

export default PageMenu