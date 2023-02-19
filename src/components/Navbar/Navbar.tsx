import { Link } from 'react-router-dom'
import { BsFillPersonFill, BsFillHouseFill } from 'react-icons/bs'
import { AiOutlineLink } from 'react-icons/ai'
import './Navbar.css'

export interface navbarProps {
  activeNavbar: boolean
}

const Navbar = ({ activeNavbar }: navbarProps) => {
  return (
    <div className="navbar">
        <Link to="/" className="navbar-link">{ {activeNavbar} ? <BsFillHouseFill className='icon' size={'2rem'} /> : 'Main'}</Link>
        <Link to="/about" className="navbar-link">{ {activeNavbar} ? <BsFillPersonFill className='icon' size={'2rem'} /> : 'About'}</Link>
        <Link to="/links" className="navbar-link">{ {activeNavbar} ? <AiOutlineLink className='icon' size={'2rem'} /> : 'Links'}</Link>
      </div>
  )
}

export default Navbar