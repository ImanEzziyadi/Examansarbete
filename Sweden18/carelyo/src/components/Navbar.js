
import React, { useState } from 'react'
 import { FaBars, FaTimes } from 'react-icons/fa'
 import { Link } from 'react-scroll'
import swedcon from '../image/logo.svg'
import  '../styles/navbar.css'


const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

   const closeMenu = () => setClick(false)

  
  
  return (
    <div className='header'>
       <nav className='navbar'>          
                <img src={swedcon} alt='logo' />  
                <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={30} style={{ color: '#33333' }} />)
                : (<FaBars size={30} style={{ color: '#33333' }} />)}
                </div>

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="about-us" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>About</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="service" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Service</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="product" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Product</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="team" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Team</Link>
                    </li>      
                    <li className='nav-item'>
                    <Link to="testimonials" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Testimonials</Link>
                    </li> 
                      <li className='nav-item'>
                    <Link to="NewsUpdate" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Newa and Update</Link>
                    </li>  
                                             
                     <li className='nav-item-btn'>
                    <button className="btn-yellow "><Link to="contact"  spy={true} smooth={true} offset={-100} duration={500}  onClick={closeMenu} data-bs-toggle="button"  className='text-light'> Contact</Link></button>
                    </li> 
                    <li className='nav-item'>
                     <i className="fa fa-user fa-lg p-2" aria-hidden="true"></i>
                       <a href="registerForm">Register</a>
                     </li>
                    
                </ul>
                <a href="#top" className="to-top">
                  <i className="fas fa-chevron-up"></i>
                </a>
                
            </nav> 
   </div>

      
  )
}

export default Navbar