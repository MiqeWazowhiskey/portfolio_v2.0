import React from 'react'
import { NavLink} from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
  return (
    <nav className='font-bold backdrop-blur-sm'>
        
        <NavLink to="/">
         <a>Anasayfa</a>
        </NavLink>
        <NavLink to="/Projeler">
         <a>Projeler</a>  
        </NavLink>    
        <NavLink to="/Wall">
         <a>Duvar</a>
        </NavLink>
        <NavLink to="/Contact">
         <a>Contact</a>
        </NavLink>
    </nav>
  )
}

export default Navbar