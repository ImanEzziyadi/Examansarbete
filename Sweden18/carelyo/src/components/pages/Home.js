
import React from 'react'
import Group from '../../image/Group.svg'
import About from './About';
import Service from './Service';
import Product from './Product';
import Team from './Team';
 import Testimonials from './Testimonials';
 import NewsUpdate from './NewsUpdate';
import Contact from './Contact';
import { Link } from 'react-scroll'
import ScrollButton from '../ScrollButton'
import  '../../styles/header.css'


const Home = () => {
 
  return (
    
  <div id='home'>
    <div className="container-home">
     <section id="showcase">
        <div className="container">
            <div className="d-flex justify-content-between align-items-center">
                <div className="left-column"  data-aos="fade-right">
                    <p className='show-title'>Your Smartest IT Solution</p>
                   
                    <p className="p-4">we create thoughtful brands from the ground up that align you strategy with your customer's experince</p>
                    <div className="mt-4">
                         <button className="btn-yellow"><Link  to="product" > Our Product</Link> </button> 
                         <button className="btn-yellow"><Link  to="about-us"> About Us</Link> </button>
                        
                    </div>
                </div>
                <div className="right-column d-none d-lg-block " data-aos="fade-left">
                    <img src={Group} alt="Group" />
                </div>
            </div>
        </div>
     </section>
    </div>
    <About  />
    <Service />
    <Product />
    <Team />
    <Testimonials />
    <NewsUpdate />
    <Contact />
    <ScrollButton />
</div>
  )
}

export default Home