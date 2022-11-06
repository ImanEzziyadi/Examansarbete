import React, { useState } from "react"
import Wisebpp from '../../image/Wisebpp.png'
 import Faitthys from '../../image/Faitthys.png'
 import Enhanced from '../../image/Enhanced.png'
 import "../../styles/product.css"


const Product = () => {
   
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
    <section  id='product'>
      <div className="container"> 
        <div className="row">
            <p className='product-title'> Product</p>
            <p className="product-heading">Our Product offering </p>
            <div className='product-text'>
              <p>There are many variations of passages of Lorem Ipsum available, but the </p>
              <p>majority have suffered alteration, by injected humour</p>
            </div>
          </div>
      
        <div className="row">
          <div className="col-md-4 col-sm-6 mb-4 Wiseboo-color">
            <div className="card p-2">
             <div className="Wiseboo-color">
              <img className="card-img-top" src={Wisebpp} alt="Wisebpp" />
              <h3>Wisebpp</h3>
            <div className='card-text'>
              <ReadMore>
              Franchise based real estate crowdfunding platform for investors and developers
              programming articles and quizzes. 
                It provides a variety of services for you to learn, so thrive
                and also have fun! Free Tutorials, Millions of Articles, Live, 
                Online and Classroom Courses ,Frequent Coding Competitions,
                Webinars 
              </ReadMore>
           </div>
          </div>
          </div>
         </div>
         <div className="col-md-4 col-sm-6 mb-4">
            <div className="card p-2">
            <div className="Faitthys-color">
              <img className="card-img-top" src={Faitthys} alt="Faitthys" />
              <h3>Faitthys</h3>
              <div className='card-text'>
                <ReadMore>
                  Video consultation medical application that comes with Administration and Management for hospitals,
                  clinics, lab centers, and pharmacies
                  It provides a variety of services for you to learn, so thrive
                  and also have fun! Free Tutorials, Millions of Articles, Live, 
                  Online and Classroom Courses .
                </ReadMore>
              </div>
            </div>
            </div>
         </div>
         <div className="col-md-4 col-sm-6 mb-4">
            <div className="card p-2 ">
            <div className="Enhanced-color">
                <img className="card-img-top" src={Enhanced} alt="Enhanced" />
                <h3>Enhanced</h3>
                <div className='card-text'>
                <ReadMore>
                 lab centers, and pharmacies
                  It provides a variety of services for you to learn, so thrive
                  and also have fun! Free Tutorials, Millions of Articles, Live, 
                  Online and Classroom Courses ,Frequent Coding Competitions,
                  Webinars .
                </ReadMore>
               </div>
              </div>
         </div>
     </div> 

  </div>
  </div>
</section>
  )
}

export default Product
