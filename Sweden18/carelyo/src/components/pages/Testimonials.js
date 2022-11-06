import React from 'react'
import customer1 from '../../image/customer1.svg'
import customer2 from '../../image/customer2.svg'
import customer3 from '../../image/customer3.svg'
import '../../styles/testimonials.css'

const Testimonials = () => {
  return (
    <div className='section-testimonials' id='testimonials'>
        <div className="row">
          <p className='testimonials-tittle'> CUSTOMER</p>
          <p className="testimonials-heading ">Testimonials</p>
          <div className="testimonials-text">
           <p>There are many variations of passages of Lorem Ipsum available but the</p>
           <p>  majority have suffered alteration, by injected humour</p>
          </div>
        </div>
        <div className="wrapper">
    <div className="box">
      {/* <i class="fas fa-quote-left quote"></i> */}
      <div className="image">
          <img src={customer1} alt="customer1" />
        </div>
      <p className='mt-4'>Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos repellendus repudiandae deleniti ideas fuga molestiae, alias.</p>
      <p className='customer-line'></p>
      <div className="content ">
        <div className="info">
          <div className="name">Alex Smith</div>
          <div className="space">
             <div className="job">Designer | Developer</div>
             <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
             </div>
           </div>
        </div>
        
      </div>
    </div>
    <div className="box">
      {/* <i className="fas fa-quote-left quote"></i> */}
      <div className="image">
          <img src={customer2} alt="customer2" />
        </div>
      <p className='mt-4'>Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos repellendus repudiandae deleniti ideas fuga molestiae, alias.</p>
      <p className='customer-line'></p>
      <div className="content">
        <div className="info">
          <div className="name">Steven Chris</div>
          <div className="space">
            <div className="job">YouTuber | Blogger</div>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    <div className="box">
      {/* <i class="fas fa-quote-left  quote"></i> */}
      <div className="image">
          <img src={customer3} alt="customer3" />
        </div>
      <p className='mt-4'>Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos repellendus repudiandae deleniti ideas fuga molestiae, alias.</p>
      <p className='customer-line'></p>
      <div className="content">
        <div className="info">
          <div className="name">Kristina Bellis</div>
          <div className="space">
            <div className="job">Freelancer | Advertiser</div>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    </div>
  )
}

export default Testimonials