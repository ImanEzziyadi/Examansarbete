import React, { useState } from "react";

import App from '../../image/AppDev.svg'
import IT from '../../image/ITsystem.svg'
import Networking from '../../image/NetworingTech.svg'
import '../../styles/service.css'



const Service = () => {
  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
  return (
      <div className="text">
        {isReadMore ? text.slice(0, 150) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </div>
    );
  };
  return (

    <section  id='service'>
      <div className='container'>
        <div className="row">
          <p className='service-tittle'> Service</p>
          <p className="service-heading ">What We Do</p>
          <div className="space-text">
           <p>There are many variations of passages of Lorem Ipsum available but the</p>
           <p>  majority have suffered alteration, by injected humour</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-6 mb-4">
            <div className="service-card">
              <div className="icon-wrapper">
              <img src={App} alt='App'/>
              </div>
              <h3 className='text1'>App Development</h3>
              <p className='text2'>
              <ReadMore>
               We provide best and solid solution 
                for your impressive business. 
                It provides a variety of services for you to learn, so thrive
                and also have fun! Free Tutorials, Millions of Articles, Live, 
                Online and Classroom Courses ,Frequent Coding Competitions,
                Webinars by Industry Experts, Internship opportunities, and Job
                Opportunities. Knowledge is power!
              </ReadMore>
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-4">
            <div className="service-card">
              <div className="icon-wrapper">
              <img src={IT} alt='IT'/>
              </div>
              <h3 className='text1'>IT System Integration</h3>
              <p className='text2'>
              <ReadMore>
               We provide best and solid solution 
                for your impressive business. 
                It provides a variety of services for you to learn, so thrive
                and also have fun! Free Tutorials, Millions of Articles, Live, 
                Online and Classroom Courses ,Frequent Coding Competitions,
                Webinars by Industry Experts, Internship opportunities, and Job
                Opportunities. Knowledge is power!
              </ReadMore>
              
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-4">
            <div className="service-card">
              <div className="icon-wrapper">
              <img src={Networking} alt='Networking'/>
              </div>
              <h3 className='text1'>Networking</h3>
              <p className='text2'>
              <ReadMore>
               We provide best and solid solution 
                for your impressive business. 
                It provides a variety of services for you to learn, so thrive
                and also have fun! Free Tutorials, Millions of Articles, Live, 
                Online and Classroom Courses ,Frequent Coding Competitions,
                Webinars by Industry Experts. Knowledge is power!
              </ReadMore>
              </p>
            </div>
          </div> 
        </div> 
      </div>  
    </section>





    // <div className="services-wrapper" id='service'>
    // <div className='container svcs-container'>
    //   <div className="row">
    //     <div className="col-sm-4 services-box hoverServices">
    //       <div className="card">
    //         <div className="card-body p-4 ">
    //          <img src={App} alt='App' />
    //           <h3 className="card-title p-2">App Development</h3>
    //           <p className="card-text  p-2">We provide best and solid solution for your impressive business.</p>
              
    //           {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-sm-4 services-box hoverServices">
    //       <div className="card">
    //         <div className="card-body">
    //          <img src={IT} alt='IT' />
    //           <h3 className="card-title p-2">IT System Integration</h3>
    //           <p className="card-text p-2">We provide best and solid solution for your impressive business. </p>
    //         </div>
    //       </div>
    //    </div>
    //    <div className="col-sm-4 services-box hoverServices">
    //       <div className="card">
    //         <div className="card-body">
    //         <img src={Networking} alt='Networking' />
    //           <h3 className="card-title">Networking Technology</h3>
    //           <p className="card-text">We provide best and solid solution for your impressive business.</p>
              
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-sm-4 services-box hoverServices">
    //       <div className="card">
    //         <div className="card-body">
    //           <img src={Finance} alt='Finance' />
    //           <h3 className="card-title">Finance Advisory</h3>
    //           <p className="card-text">We provide best and solid solution for your impressive business.</p>
    //         </div>
    //       </div>
    //     </div>
    //  </div>
    //  </div>
    //  </div>
  )
}

export default Service