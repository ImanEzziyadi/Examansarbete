import React from 'react'
import { useForm } from "react-hook-form"
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import local from '../../image/location-ny.png'

import "../../styles/contact.css";

const Contact = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  
  const onSubmit = (data, e )=>{
    e.preventDefault();
    console.log(data);
    sendEmail(data)
  } 
 
  // info@swedcon18.com 
  function sendEmail () {
    emailjs.sendForm("service_c0ds6pr", "template_wszl9yf", "#myForm",'9KSVofdVoTnCzxswL')
    .then( (res)=> {
      console.log(res.text);
      console.log('you message send');
      swal('Thank you!','Well be in touch soon.');
    }, (error)=>{
      console.log(error.text);
    
    });

 }
  return (
    <section  id='contact'>
      <div>
          <div className="row">
              <p className='contact-title'> Contact</p>
              <p className="contact-heading ">Get in touch</p>
              <div className="contact-text">
                 <p>There are many variations of passages of Lorem Ipsum available but the</p>
                 <p>  majority have suffered alteration, by injected humour</p>
              </div>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div className="container-fluid ">
                  <p className='send-text'>Send Message</p>
                  {/* hooks form */}
                  <form  className='contact-form' id='myForm' onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className="row mt-4 ">
                      {/*name */}
                      <div className="col-md-6 mb-3">
                          
                          <input {...register("name", {  required: true, maxLength: 20 })} placeholder="Name" />
                         {errors.name?.type === 'required' && " name is required"}
                      </div>
                         {/* email */}
                      <div className="col-md-6 mb-3">
                          
                          <input {...register("email", { required: true })} placeholder="Email" />
                             {errors.email && "email is required"}
                      </div>
                   </div>
                
                   {/* subjuct */}
                   <div>
                       <input {...register("subjuct", { required: true })}   placeholder="subjuct" />
                       {errors.subjuct && "subjuct is required"}
                    </div>
                    {/* message */}
                    <div className="col-md-6 mb-3">
                       <textarea {...register("message", { required: true })}  placeholder="Message" />
                        {errors.message && "message is required"}
                    </div>

                    {/* <input type="submit" className=''/> */}
                    <button className="btn-yellow mt-4 " type="submit">Send Message</button>
              </form>
                  
                  
                  
            </div>
            <div className=" d-none d-lg-block" data-aos="fade-left">
              <img src={local} alt='local' />
            </div>
        </div>
     </div>
   </section>
  )
}

export default Contact