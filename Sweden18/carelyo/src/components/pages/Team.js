import React from 'react'
import Team1 from '../../image/team1.jpg'
 import Team2 from '../../image/team2.jpg'
  import Team3 from '../../image/team3.svg'
 import Team4 from '../../image/team4.jpg'
import '../../styles/team.css'


const Team = () => {
  return (
    <div  id='team'>
      <div className='container-team '>
          <div className="row">
            <p className='team-title'> Team</p>
            <p className="team-heading ">Meet our professionals </p>
            <div className='team-text'>
              <p>There are many variations of passages of Lorem Ipsum available, but the </p>
              <p>majority have suffered alteration, by injected humour</p>
            </div>
          </div>
        <div className='row-team'>
        <div className="column">
            <div className='profile-card'>
              <div className='img'>
                <img src={Team1} alt="team1" />
              </div> 
              <div className='caption'>
                <h3>Jane Doe</h3>
                  <p className="title">CEO Founder</p>
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
                          <i className="fa fa-circle fa-stack-2x bg-linkedin"></i>
                          <i className="fab fa-linkedin-in fa-stack-1x fa-inverse" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>
            </div>
          </div>
          {/* team2 */}
          <div className="column">
            <div className='profile-card'>
              <div className='img'>
              <img src={Team2} alt="Mike" />
              </div> 
              <div className='caption'>
                <h3>Elon</h3>
                  <p className="title">CEO Founder</p>
                  <div className="d-flex flex-direction-row">
                        <span className="fa-stack fa-lg">
                          <i className="fa fa-circle fa-stack-2x "></i>
                          <i className="fa fab fa-facebook-f fa-stack-1x fa-inverse" aria-hidden="true"></i>
                        </span>
                        <span className="fa-stack fa-lg">
                          <i className="fa fa-circle fa-stack-2x bg-twitter"></i>
                          <i className="fa fab fa-twitter fa-stack-1x fa-inverse" aria-hidden="true"></i>
                        </span>
                        <span className="fa-stack fa-lg">
                          <i className="fa fa-circle fa-stack-2x bg-linkedin"></i>
                          <i className="fab fa-linkedin-in fa-stack-1x fa-inverse" aria-hidden="true"></i>
                        </span>
                    </div>
                  </div>
              </div>
          </div>

          {/* Team3 */}
          <div className="column">
            <div className='profile-card'>
              <div className='img'>
                <img src={Team3} alt="team3" />
              </div> 
              <div className='caption'>
                <h3> Alexander</h3>
                  <p className="title">Marketing </p>
                  <div className="d-flex flex-direction-row">
                        <span className="fa-stack fa-lg">
                          <i className="fa fa-circle fa-stack-2x "></i>
                          <i className="fa fab fa-facebook-f fa-stack-1x fa-inverse" aria-hidden="true"></i>
                        </span>
                        <span className="fa-stack fa-lg">
                          <i className="fa fa-circle fa-stack-2x bg-twitter"></i>
                          <i className="fa fab fa-twitter fa-stack-1x fa-inverse" aria-hidden="true"></i>
                        </span>
                        <span className="fa-stack fa-lg">
                          <i className="fa fa-circle fa-stack-2x bg-linkedin"></i>
                          <i className="fab fa-linkedin-in fa-stack-1x fa-inverse" aria-hidden="true"></i>
                        </span>
                    </div>
                  </div>
              </div>
            </div>
          {/* team4 */}
          <div className="column">
            <div className='profile-card'>
              <div className='img'>
                <img src={Team4} alt="team4" />
              </div> 
              <div className='caption'>
                <h3>Jane Doe</h3>
                  <p className="title">CEO Founder</p>
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
                          <i className="fa fa-circle fa-stack-2x bg-linkedin"></i>
                          <i className="fab fa-linkedin-in fa-stack-1x fa-inverse" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>
            </div>
          </div>
        </div>

      
          {/* <div className="row">
          <div className="column">
            <div className="card">
              <img src={Team1} alt="team1" />
              <div className="container">
                <h2>Jane Doe</h2>
                <p className="title">CEO Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>example@example.com</p>
                <p><button className="button">Contact</button></p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src={Team2} alt="Mike" />
              <div className="container">
                <h2>Mike Ross</h2>
                <p className="title">Art Director</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>example@example.com</p>
                <p><button className="button">Contact</button></p>
              </div>
            </div>
          </div>
          
          <div className="column">
            <div className="card">
              <img src={Team5} alt="John" />
              <div className="container">
                <h2>John Doe</h2>
                <p className="title">Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>example@example.com</p>
                <p><button className="button">Contact</button></p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img src={Team4} alt="Mike" />
              <div className="container">
                <h2>Mike Ross</h2>
                <p className="title">Art Director</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>example@example.com</p>
                <p><button className="button">Contact</button></p>
              </div>
            </div>
          </div>
         </div>
         */}
      </div>
    </div>
  )
}

export default Team