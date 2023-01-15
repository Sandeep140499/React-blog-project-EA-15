import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="navagator">
        <NavLink className="linkNav" to="/"><li>Home</li></NavLink>
        <NavLink className="linkNav" to="/bollywood"><li>Bollywood</li></NavLink>
        <NavLink className="linkNav" to="technology"><li>Technology</li></NavLink>
        <NavLink className="linkNav" to="fitness"><li>Fitness</li></NavLink>
        <NavLink className="linkNav" to="hollywood"><li>Hollywood</li></NavLink>
        <NavLink className="linkNav" to="food"><li>Food</li></NavLink>
    </div>
  )
}

export default Nav