import { NavLink } from 'react-router-dom'
import { BsFillPersonFill, BsFillHouseFill } from 'react-icons/bs'
import { AiOutlineLink } from 'react-icons/ai'
import './Navbar.css'


const Navbar = () => {

  return (
    <div className="navbar">
        <NavLink to="/" 
          className={({ isActive }) =>
          isActive ? "navbar-link navbar-active" : "navbar-link"}>
             {({ isActive }) => (
              <>
                <p className={isActive ? 'navbar-title' : 'hide-navbar-title'}>
                  Home
                </p>
                <BsFillHouseFill className={isActive ? 'move-icon' : 'icon' } size={'2rem'} /> 
              </>
            )}
        </NavLink>

        <NavLink to="/about" 
          className={({ isActive }) =>
          isActive ? "navbar-link navbar-active" : "navbar-link"}>
             {({ isActive }) => (
              <>
                <p className={isActive ? 'navbar-title' : 'hide-navbar-title'}>
                  About
                </p>
                <BsFillPersonFill className={isActive ? 'move-icon' : 'icon' } size={'2rem'} /> 
              </>
            )}
        </NavLink>

        <NavLink to="/links" 
          className={({ isActive }) =>
          isActive ? "navbar-link navbar-active" : "navbar-link"}>
             {({ isActive }) => (
              <>
                <p className={isActive ? 'navbar-title' : 'hide-navbar-title'}>
                  Links
                </p>
                <AiOutlineLink className={isActive ? 'move-icon' : 'icon' } size={'2rem'} /> 
              </>
            )}
        </NavLink>
      </div>
  )
}

export default Navbar