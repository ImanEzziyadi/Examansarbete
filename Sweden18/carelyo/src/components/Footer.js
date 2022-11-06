import React from 'react'
import swedcon from '../image/swedcon-blue.svg'
import { Link } from 'react-scroll'
import '../styles/footer.css'

const Footer = () => {
  return (
   
    <div id='footer'>
    <div className="container-footer ">
      {/* <div className='d-flex flex-column   align-items-center justify-content-center bg-danger'> */}
        <div className=" container d-flex mb-3 justify-content-around " > 
          <div className="d-flex flex-column   align-items-center justify-content-center  ">
            <img src={swedcon}  alt="swedcon"  />
            <p>Ther are many variation of </p>
            <p>Lorem ipusum avarilable majority have </p>
            
            <div className="d-flex flex-direction-row ">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x "></i>
                    <i className="fa fab fa-facebook-f fa-stack-1x fa-inverse" aria-hidden="true"></i>
                  </span>
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x bg-twitter"></i>
                    <i className="fa fab fa-twitter fa-stack-1x fa-inverse" aria-hidden="true"></i>
                  </span>

                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fab fa-instagram fa-stack-1x fa-inverse" aria-hidden="true"></i>
                  </span>
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-circle fa-stack-2x bg-linkedin"></i>
                    <i className="fab fa-linkedin-in fa-stack-1x fa-inverse" aria-hidden="true"></i>
                  </span>
              </div>
          </div>


        
          <div className="d-flex flex-column align-items-center justify-content-center p-4  d-none d-md-block" data-aos="zoom-in">
            <p className='foot-title'>Link</p>
            <div className="mt-4">
              <div className='text-secondary'>
               <div className="navbar-nav justify-content-center text-secondary" >
                  {/* <a className="nav-link" >Home</a> */}
                  <Link to="home" className="nav-link">Home</Link>
                  <a className="nav-link" >Download</a>
                  <a className="nav-link" >Pricing</a>
                  {/* <a className="nav-link" >About</a> */}
                  <Link to="about-us" className='nav-link'>About</Link>
                  {/* <a className="nav-link" href="about-us">About</a> */}
                </div>
              </div>
              </div>
          </div> 

          <div className="d-flex flex-column align-items-center justify-content-center p-4 d-none d-md-block" data-aos="zoom-in">
              <p className='foot-title'>Support</p>
              <div className="p-3 ">
                <div className="navbar-nav justify-content-center" >
                  <a className="nav-link" >FAQ</a>
                  <a className="nav-link" >How it</a>
                  <a className="nav-link" >Works</a>
                  <a className="nav-link" >Features</a>
                </div>
              </div>
          </div> 
          <div className=" d-flex flex-column align-items-center justify-content-center p-4 d-none d-md-block" data-aos="zoom-in" >
              <p className='foot-title'>Contact Us</p>
              <div className="p-3">
                <div className="navbar-nav justify-content-center " >
                  <a className="nav-link" >+88012345678</a>
                  <a className="nav-link" >Salem2000@gmail.com</a>
                  <a className="nav-link" >www.sweden18.com</a>
                   <a className="nav-link" >www.sweden18.com</a> 
                </div>
              </div>
            </div>  
        </div>
        <div className='container-copy'>
           <p> &copy; Copyright 2019 SWEDCON18. </p> 
           <p>All Rights Reserved</p> 
        </div>
      {/* </div>   */}
    </div>
    </div> 
        
       
    
    
  )
}

export default Footer