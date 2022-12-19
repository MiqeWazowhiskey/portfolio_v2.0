import React from 'react'
import { NavLink} from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
  return (
    <nav className='font-bold backdrop-blur-sm'>
      <React.Suspense
          fallback={
            <div className="text-black w-full justify-center items-center text-3xl font-extrabold">
              Loading...
            </div>
        }>
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
        </React.Suspense>
    </nav>
  )
}

export default Navbar