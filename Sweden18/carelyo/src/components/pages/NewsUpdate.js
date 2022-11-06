import React, { useState } from 'react'
// import { Link } from 'react-scroll'
import  News0 from "../../image/News and Update/News.png"
import  News1 from "../../image/News and Update/News-1.png"
import  News2 from "../../image/News and Update/News-2.png"

import  Event from "../../image/News and Update/Event.png"
import  Event1 from "../../image/News and Update/Event-1.png"
import  Event2 from "../../image/News and Update/Event-2.png"


import  Blog0 from "../../image/News and Update/Blog.png"
import  Blog1 from "../../image/News and Update/Blog-1.png"
import  Blog2 from "../../image/News and Update/Blog-2.png"

import "../../styles/news.css"

const NewsUpdate = () => {

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
      <div id='NewsUpdate' className='NewsUpdate'>
          <div className="row">
                <p className='NewaUpdate-tittle'>ALL LATEST </p>
                <p className="NewaUpdate-heading ">News and Update</p>
                <div className="NewaUpdate-text">
                <p>There are many variations of passages of Lorem Ipsum available but the</p>
                <p>  majority have suffered alteration, by injected humour</p>
          </div>
                  
          
         <div id="carouselExampleIndicators" className="carousel  carousel-dark slide p-4 " data-bs-ride="carousel">
                <div className="carousel-indicators ">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div> 
             <div className="carousel-inner">
                 <div className="carousel-item active">  
                     <div className='wrapper-news'>
                            {/* card-1 */}
                                <div className="box-news">
                                    <div className="image-news">
                                    <img src={News0} alt="News" />
                                    </div>
                                    <div className="card-body">
                                        <div className='NewaUpdate-date'>27 September</div>
                                        <h5 className="card-title">Escape, night, box white the said exerted myself </h5>
                                        <div className="card-text">
                                        <ReadMore>
                                            Some quick example text to build on the card title and make up the bulk of the card's content. 
                                            It provides a variety of services for you to learn, so thrive
                                            and also have fun! Free Tutorials, Millions of Articles, Live, 
                                            Online and Classroom Courses ,Frequent Coding Competitions,
                                            Webinars 
                                        </ReadMore>
                                        </div>

                                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                </div>
                        
                            {/* card-2 */}
                            
                                <div className="box-news">
                                <div className="image-news">
                                    <img src={News1}  alt="News1" />
                                    </div>
                                    <div className="card-body">
                                    <div className='NewaUpdate-date'>27 September</div>
                                        <h5 className="card-title">Escape, night, box white the said exerted myself </h5>
                                        <div className="card-text">
                                        <ReadMore>
                                            Some quick example text to build on the card title and make up the bulk of the card's content. 
                                            It provides a variety of services for you to learn, so thrive
                                            and also have fun! Free Tutorials, Millions of Articles, Live, 
                                            Online and Classroom Courses ,Frequent Coding Competitions,
                                            Webinars 
                                        </ReadMore>
                                        </div>
                                    </div>
                                </div>
                            
                            {/* card-3 */}
                            
                                <div className="box-news">
                                <div className="image-news">
                                    <img src={News2}  alt="News2" />
                                </div>
                                    <div className="card-body">
                                     <div className='NewaUpdate-date'>27 September</div>
                                        <h5 className="card-title">Escape, night, box white the said exerted myself </h5>
                                        <div className="card-text">
                                        <ReadMore>
                                            Some quick example text to build on the card title and make up the bulk of the card's content. 
                                            It provides a variety of services for you to learn, so thrive
                                            and also have fun! Free Tutorials, Millions of Articles, Live, 
                                            Online and Classroom Courses ,Frequent Coding Competitions,
                                            Webinars 
                                        </ReadMore>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                
                  <div className="carousel-item">
                     <div className='wrapper-news'>
                            {/* card-1 */}
                            
                                <div className="box-news">
                                <div className='image-news'>
                                    <img src={Event}  alt="Event" />
                                    </div>
                                        <div className="card-body">
                                         <div className='NewaUpdate-date'>10 October, 2022</div>
                                            <h5 className="card-title">Poverty steps phase were a the office still ago </h5>
                                            <div className="card-text">
                                        <ReadMore>
                                            Some quick example text to build on the card title and make up the bulk of the card's content. 
                                            It provides a variety of services for you to learn, so thrive
                                            and also have fun! Free Tutorials, Millions of Articles, Live, 
                                            Online and Classroom Courses ,Frequent Coding Competitions,
                                            Webinars 
                                        </ReadMore>
                                        </div>
                                        </div>
                                </div>
                            
                            {/* card-2 */}
                            
                                <div className="box-news">
                                <div className='image-news'>
                                    <img src={Event1}  alt="Event-1" />
                                </div> 
                                <div className="card-body">
                                 <div className='NewaUpdate-date'>10 October, 2022</div>
                                        <h5 className="card-title">Poverty steps phase were a the office still ago </h5>
                                        <div className="card-text">
                                        <ReadMore>
                                            Some quick example text to build on the card title and make up the bulk of the card's content. 
                                            It provides a variety of services for you to learn, so thrive
                                            and also have fun! Free Tutorials, Millions of Articles, Live, 
                                            Online and Classroom Courses ,Frequent Coding Competitions,
                                            Webinars 
                                        </ReadMore>
                                        </div>
                                    </div>
                                </div>
                            
                            {/* card-3 */}
                            
                                <div className="box-news">
                                  <div className='image-news'>
                                        <img src={Event2}  alt="Event-2" />
                                    </div>
                                    <div className="card-body">
                                     <div className='NewaUpdate-date'>10 October, 2022</div>
                                            <h5 className="card-title">Poverty steps phase were a the office still ago </h5>
                                            <div className="card-text">
                                        <ReadMore>
                                            Some quick example text to build on the card title and make up the bulk of the card's content. 
                                            It provides a variety of services for you to learn, so thrive
                                            and also have fun! Free Tutorials, Millions of Articles, Live, 
                                            Online and Classroom Courses ,Frequent Coding Competitions,
                                            Webinars 
                                        </ReadMore>
                                        </div>
                                    </div>
                                </div>
                         </div> {/*wrapper   */} 
                    </div>{/*item   */}



                    {/* Blog */}
                    <div className="carousel-item">
                     <div className='wrapper-news'>
                            {/* card-1 */}
                            
                                <div className="box-news">
                                <div className='image-news'>
                                    <img src={Blog0}  alt="Blog0" />
                                    </div>
                                        <div className="card-body">
                                         <div className='NewaUpdate-date'>10 October, 2022</div>
                                            <h5 className="card-title">Poverty steps phase were a the office still ago </h5>
                                            <div className="card-text">
                                        <ReadMore>
                                            Some quick example text to build on the card title and make up the bulk of the card's content. 
                                            It provides a variety of services for you to learn, so thrive
                                            and also have fun! Free Tutorials, Millions of Articles, Live, 
                                            Online and Classroom Courses ,Frequent Coding Competitions,
                                            Webinars 
                                        </ReadMore>
                                        </div>
                                        </div>
                                </div>
                            
                            {/* card-2 */}
                            
                                <div className="box-news">
                                <div className='image-news'>
                                    <img src={Blog1}  alt="Blog-1" />
                                </div> 
                                <div className="card-body">
                                 <div className='NewaUpdate-date'>10 October, 2022</div>
                                        <h5 className="card-title">Poverty steps phase were a the office still ago </h5>
                                        <div className="card-text">
                                        <ReadMore>
                                            Some quick example text to build on the card title and make up the bulk of the card's content. 
                                            It provides a variety of services for you to learn, so thrive
                                            and also have fun! Free Tutorials, Millions of Articles, Live, 
                                            Online and Classroom Courses ,Frequent Coding Competitions,
                                            Webinars 
                                        </ReadMore>
                                        </div>
                                    </div>
                                </div>
                            
                            {/* card-3 */}
                            
                                <div className="box-news">
                                  <div className='image-news'>
                                        <img src={Blog2}  alt="Blog-2" />
                                    </div>
                                    <div className="card-body">
                                     <div className='NewaUpdate-date'>10 October, 2022</div>
                                            <h5 className="card-title">Poverty steps phase were a the office still ago </h5>
                                            <div className="card-text">
                                        <ReadMore>
                                            Some quick example text to build on the card title and make up the bulk of the card's content. 
                                            It provides a variety of services for you to learn, so thrive
                                            and also have fun! Free Tutorials, Millions of Articles, Live, 
                                            Online and Classroom Courses ,Frequent Coding Competitions,
                                            Webinars 
                                        </ReadMore>
                                        </div>
                                    </div>
                                </div>
                         </div> {/*wrapper   */} 
                    </div>{/*item   */}
                      {/* Blog */}




                </div >   {/*carousel-inner   */}
                <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden text-dark">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
            </div>
      </div>
    </div>
  
  )
}

export default NewsUpdate