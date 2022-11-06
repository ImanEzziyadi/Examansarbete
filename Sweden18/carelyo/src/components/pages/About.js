import React from 'react'
import ImageAbout from '../../image/aboutP.jpg'
import quality from '../../image/quality.png'
import Faq from '../../components/faq'
import '../../styles/about.css'

const About = () => {

   
  return (
      <>
    <section id="about-us">
        <div className='container'>
            <div className="d-flex justify-content-between align-items-center">
                <div className="left-column d-none d-lg-block   " data-aos="zoom-in">
                 {/* <div className='container-carousel'> */}
                    <img src={ImageAbout} alt="People" className='img-about' />
                     <img src={quality} alt="quality" className='myAnimation ' /> 

                {/* </div> */}
                </div>
                <div className="right-column " data-aos="fade-left">
                    <div className='about-title'>About Us</div>
                    <p className='about-title1'>Powerful and reliable tools for the SEO analysis.</p>
                    {/* <p className='about-question'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently</p> */}
                    {/* <Faq data={data} styles={styles}/> */}
                    <Faq />

                    <div>

                    </div>
                </div>
            </div>
        </div>
     </section>
    </>
  )
}

export default About