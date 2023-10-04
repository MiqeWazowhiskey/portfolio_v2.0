import React from 'react'
import { NavLink} from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
  return (
    <nav className='font-bold backdrop-blur-sm'>
        
        <NavLink to="/">
         <a className={"underline"}>Anasayfa</a>
        </NavLink>
        <NavLink to="/Projeler">
         <a className={"underline"}>Projeler</a>
        </NavLink>    
        <NavLink to="/Wall">
         <a className={"underline"}>Duvar</a>
        </NavLink>
        <NavLink to="/Contact">
         <a className={"underline"}>Contact</a>
        </NavLink>
    </nav>
  )
}

export default Navbar
