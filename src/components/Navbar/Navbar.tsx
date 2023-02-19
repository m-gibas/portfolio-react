import { useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom'
import { BsFillPersonFill, BsFillHouseFill } from 'react-icons/bs'
import { AiOutlineLink } from 'react-icons/ai'
import { CSSTransition } from 'react-transition-group'
import './Navbar.css'



const Navbar = () => {
  const location = useLocation()
  const nodeRef = useRef(null);

  return (
    <div className="navbar">
      {/* <CSSTransition 
              timeout={300}
              classNames={"navbar-transition"}
              unmountOnExit
              nodeRef={nodeRef}
              > */}

        <NavLink ref={nodeRef} to="/" 
          className={({ isActive }) =>
          isActive ? "navbar-link navbar-active" : "navbar-link"}>
             {({ isActive }) => (
              <>
                <p className={isActive ? 'navbar-title' : 'hide-element'}>
                  Home
                </p>
                <BsFillHouseFill className={isActive ? 'hide-element' : 'icon' } size={'2rem'} /> 
              </>
            )}
        </NavLink>
      {/* </CSSTransition> */}

        <NavLink to="/about" 
          className={({ isActive }) =>
          isActive ? "navbar-link navbar-active" : "navbar-link"}>
             {({ isActive }) => (
              <>
                <p className={isActive ? 'navbar-title' : 'hide-element'}>
                  About
                </p>
                <BsFillPersonFill className={isActive ? 'hide-element' : 'icon' } size={'2rem'} /> 
              </>
            )}
        </NavLink>
        <NavLink to="/links" 
          className={({ isActive }) =>
          isActive ? "navbar-link navbar-active" : "navbar-link"}>
             {({ isActive }) => (
              <>
                <p className={isActive ? 'navbar-title' : 'hide-element'}>
                  Links
                </p>
                <AiOutlineLink className={isActive ? 'hide-element' : 'icon' } size={'2rem'} /> 
              </>
            )}
        </NavLink>


      </div>
  )
}

export default Navbar