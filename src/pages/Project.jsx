import React from 'react'
import Card from 'react-bootstrap/Card';
import travel from '../assets/TravelWebsite.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import calculator from '../assets/calculator.png'
import weather from '../assets/weather.png'
import bmi from '../assets/BMI.png'
import simple from '../assets/interest.png'
import clock from '../assets/clock.png'
import parking from '../assets/parking.png'
import health from '../assets/health.png'
import cart from '../assets/cart.png'
import flower from '../assets/flower.png'
import Header from '../components/Header';

function Project() {
  return (
    <>


      <div>
        <div className="row">
          <div className="col-3" style={{ backgroundColor: 'rgb(34, 34, 34)' }} >
            <Header />
          </div>
          <div className="col-9 ps-4 p-3" style={{ backgroundColor: 'black' }}  >
            <div className="container mt-md-4 ">
              <h5 className='text-warning fs-3 fw-bolder'>MY PROJECTS</h5>
              <div className='container border border-secondary rounded p-2'>
                <div className="row p-2">

                <div className="col-md-4 mt-4">
                    <div style={{ backgroundColor: ' rgb(25, 24, 24)',height:'440px' }} className='p-3'>
                      <img src={health} alt="" style={{ height: '100px' }} className='w-100' />
                      <h4 className='mt-2 text-light'>Healthcare Appointment Scheduling</h4>
                      <p className='text-white mt-3'>Developed an Healthcare Appointment Scheduling using MERN</p>
                      <div className='d-flex flex-wrap align-items-center justify-content-between mt-3'>
                        <p className='bg-dark rounded p-2 text-white'>React</p>
                        <p className='bg-dark rounded p-2 text-white'>MongoDB</p>
                        <p className='bg-dark rounded p-2 text-white'>Node.js</p>
                        <p className='bg-dark rounded p-2 text-white'>Express.js</p>
                      </div>
                      <div className='d-flex align-items-center'>
                        <a href="https://github.com/keerthymohan/healthcare-frontend" target='_blank'><FontAwesomeIcon icon={faGithub} className='fa-xl text-warning' /></a>
                        <a href="https://healthcare-two-eta.vercel.app/" target='_blank'><FontAwesomeIcon icon={faGlobe} className='ms-5 fa-xl text-warning' /></a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mt-4">
                    <div style={{ backgroundColor: ' rgb(25, 24, 24)',height:'440px' }} className='p-3'>
                      <img src={travel} alt="" style={{ height: '100px' }} className='w-100' />
                      <h4 className='mt-2 text-light'>Travel Website</h4>
                      <p className='text-white mt-3'>Travel Website designed using HTML, CSS and Bootstrap.</p>
                      <div className='d-flex flex-wrap align-items-center justify-content-between mt-3'>
                        <p className='bg-dark rounded p-2 text-white'>HTML</p>
                        <p className='bg-dark rounded p-2 text-white'>Bootstrap</p>
                        <p className='bg-dark rounded p-2 text-white'>CSS</p>
                      </div>
                      <div className='d-flex align-items-center'>
                        <a href="https://github.com/keerthymohan/Travelwebsite" target='_blank'><FontAwesomeIcon icon={faGithub} className='fa-xl text-warning'/></a>
                        <a href="https://keerthymohan.github.io/Travelwebsite/" target='_blank'><FontAwesomeIcon icon={faGlobe} className='ms-5 fa-xl text-warning' /></a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mt-4">
                    <div style={{ backgroundColor: ' rgb(25, 24, 24)',height:'440px' }} className='p-3'>
                      <img src={calculator} alt="" style={{ height: '100px' }} className='w-100' />
                      <h4 className='mt-2 text-light'>Simple calculator</h4>
                      <p className='text-white mt-3'>Simple calculator designed using HTML, CSS and Javascript.</p>
                      <div className='d-flex flex-wrap align-items-center justify-content-between mt-3'>
                      <p className='bg-dark rounded p-2 text-white'>JavaScript</p>
                        <p className='bg-dark rounded p-2 text-white'>HTML</p>
                        <p className='bg-dark rounded p-2 text-white'>Bootstrap</p>
                        <p className='bg-dark rounded p-2 text-white'>CSS</p>
                      </div>
                      <div className='d-flex align-items-center'>
                        <a href="https://github.com/keerthymohan/simple-calculator" target='_blank'><FontAwesomeIcon icon={faGithub} className='fa-xl text-warning' /></a>
                        <a href="https://keerthymohan.github.io/simple-calculator/" target='_blank'><FontAwesomeIcon icon={faGlobe} className='ms-5 fa-xl text-warning'  /></a>
                      </div>
                    </div>
                  </div>

                

                  <div className="col-md-4 mt-4">
                    <div style={{ backgroundColor: ' rgb(25, 24, 24)',height:'440px'  }} className='p-3'>
                      <img src={weather} alt="" style={{ height: '100px' }} className='w-100' />
                      <h4 className='mt-2 text-light'>Weather Application</h4>
                      <p className='text-white mt-3'>Weather aplication developed using HTML, CSS and Javascript.</p>
                      <div className='d-flex flex-wrap align-items-center justify-content-between mt-3'>
                      <p className='bg-dark rounded p-2 text-white'>JavaScript</p>
                        <p className='bg-dark rounded p-2 text-white'>HTML</p>
                        <p className='bg-dark rounded p-2 text-white'>Bootstrap</p>
                        <p className='bg-dark rounded p-2 text-white'>CSS</p>
                      </div>
                      <div className='d-flex align-items-center'>
                        <a href="https://github.com/keerthymohan/weather-search" target='_blank'><FontAwesomeIcon icon={faGithub} className='fa-xl text-warning' /></a>
                        <a href="https://keerthymohan.github.io/weather-search/" target='_blank'><FontAwesomeIcon icon={faGlobe} className='ms-5 fa-xl text-warning'  /></a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mt-4">
                    <div style={{ backgroundColor: ' rgb(25, 24, 24)',height:'440px' }} className='p-3'>
                      <img src={bmi} alt="" style={{ height: '100px' }} className='w-100' />
                      <h4 className='mt-2 text-light'>BMI Calculator</h4>
                      <p className='text-white mt-3'>BMI Calculator using HTML,CSS, Bootstrap and React</p>
                      <div className='d-flex flex-wrap align-items-center justify-content-between mt-3'>
                      <p className='bg-dark rounded p-2 text-white'>React</p>
                        <p className='bg-dark rounded p-2 text-white'>HTML</p>
                        <p className='bg-dark rounded p-2 text-white'>Bootstrap</p>
                        <p className='bg-dark rounded p-2 text-white'>CSS</p>
                      </div>
                      <div className='d-flex align-items-center'>
                        <a href="https://github.com/keerthymohan/bmi_calculator" target='_blank'><FontAwesomeIcon icon={faGithub} className='fa-xl text-warning' /></a>
                        <a href="https://bmical-five.vercel.app/" target='_blank'><FontAwesomeIcon icon={faGlobe} className='ms-5 fa-xl text-warning'  /></a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mt-4">
                    <div style={{ backgroundColor: ' rgb(25, 24, 24)',height:'440px' }} className='p-3'>
                      <img src={flower} alt="" style={{ height: '100px' }} className='w-100' />
                      <h4 className='mt-2 text-light'>Flower Shop</h4>
                      <p className='text-white mt-3'>Designed a flower shop website designed using HTML and Tailwind CSS.</p>
                      <div className='d-flex flex-wrap align-items-center justify-content-between mt-3'>
                        <p className='bg-dark rounded p-2 text-white'>HTML</p>
                        <p className='bg-dark rounded p-2 text-white'>Tailwind CSS</p>
                      </div>
                      <div className='d-flex align-items-center'>
                        <a href="https://github.com/keerthymohan/tailwind-project" target='_blank'><FontAwesomeIcon icon={faGithub} className='fa-xl text-warning'/></a>
                        <a  href="https://keerthymohan.github.io/tailwind-project/" target='_blank'><FontAwesomeIcon icon={faGlobe} className='ms-5 fa-xl text-warning' /></a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mt-4">
                    <div style={{ backgroundColor: ' rgb(25, 24, 24)',height:'440px' }} className='p-3'>
                      <img src={simple} alt="" style={{ height: '100px' }} className='w-100' />
                      <h4 className='mt-2 text-light'>Simple Interest Calculator</h4>
                      <p className='text-white mt-3'>Responsive simple interest calculator designed using HTML, CSS and React</p>
                      <div className='d-flex flex-wrap align-items-center justify-content-between mt-3'>
                      <p className='bg-dark rounded p-2 text-white'>JavaScript</p>
                        <p className='bg-dark rounded p-2 text-white'>HTML</p>
                        <p className='bg-dark rounded p-2 text-white'>Bootstrap</p>
                        <p className='bg-dark rounded p-2 text-white'>CSS</p>
                      </div>
                      <div className='d-flex align-items-center'>
                        <a href="https://github.com/keerthymohan/simpleInterest" target='_blank'><FontAwesomeIcon icon={faGithub}  className='fa-xl text-warning' /></a>
                        <a href="https://simple-interest-pink.vercel.app/" target='_blank'><FontAwesomeIcon icon={faGlobe} className='ms-5 fa-xl text-warning' /></a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mt-4">
                    <div style={{ backgroundColor: ' rgb(25, 24, 24)',height:'440px' }} className='p-3'>
                      <img src={cart} alt="" style={{ height: '100px' }} className='w-100' />
                      <h4 className='mt-2 text-light'>ECART</h4>
                      <p className='text-white mt-3'>Responsive E-cart designed using Redux and react</p>
                      <div className='d-flex flex-wrap align-items-center justify-content-between mt-3'>
                      <p className='bg-dark rounded p-2 text-white'>Redux</p>
                        <p className='bg-dark rounded p-2 text-white'>HTML</p>
                        <p className='bg-dark rounded p-2 text-white'>Bootstrap</p>
                        <p className='bg-dark rounded p-2 text-white'>CSS</p>
                        <p className='bg-dark rounded p-2 text-white'>React</p>
                      </div>
                      <div className='d-flex align-items-center'>
                        <a href="https://github.com/keerthymohan/e-cart-redux" target='_blank'><FontAwesomeIcon icon={faGithub} className='fa-xl text-warning'  /></a>
                        <a href="https://e-cart-redux-weld.vercel.app/" target='_blank'><FontAwesomeIcon icon={faGlobe} className='ms-5 fa-xl text-warning' /></a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mt-4">
                    <div style={{ backgroundColor: ' rgb(25, 24, 24)',height:'440px' }} className='p-3'>
                      <img src={clock} alt="" style={{ height: '100px' }} className='w-100' />
                      <h4 className='mt-2 text-light'>Simple Clock</h4>
                      <p className='text-white mt-3'>Designed a simple clock using HTML,CSS and JavaScript</p>
                      <div className='d-flex flex-wrap align-items-center justify-content-between mt-3'>
                      <p className='bg-dark rounded p-2 text-white'>JavaScript</p>
                        <p className='bg-dark rounded p-2 text-white'>HTML</p>
                        <p className='bg-dark rounded p-2 text-white'>Bootstrap</p>
                        <p className='bg-dark rounded p-2 text-white'>CSS</p>
                      </div>
                      <div className='d-flex align-items-center'>
                        <a href="https://github.com/keerthymohan/simpleclock" target='_blank'><FontAwesomeIcon icon={faGithub} className='fa-xl text-warning' /></a>
                        <a href="https://keerthymohan.github.io/simpleclock/" target='_blank'><FontAwesomeIcon icon={faGlobe} className='ms-5 fa-xl text-warning' style={{ color: 'white' }} /></a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mt-4">
                    <div style={{ backgroundColor: ' rgb(25, 24, 24)',height:'440px' }} className='p-3'>
                      <img src={parking} alt="" style={{ height: '100px' }} className='w-100' />
                      <h4 className='mt-2 text-light'>Parking Slot Booking</h4>
                      <p className='text-white mt-3'>Developed a parking slot booking using React</p>
                      <div className='d-flex flex-wrap align-items-center justify-content-between mt-3'>
                        <p className='bg-dark rounded p-2 text-white'>React</p>
                        <p className='bg-dark rounded p-2 text-white'>HTML</p>
                        <p className='bg-dark rounded p-2 text-white'>Bootstrap</p>
                        <p className='bg-dark rounded p-2 text-white'>CSS</p>
                        <p className='bg-dark rounded p-2 text-white'>Axios</p>
                      </div>
                      <div className='d-flex align-items-center'>
                        <a href="https://github.com/keerthymohan/parkingslotfrontend" target='_blank'><FontAwesomeIcon icon={faGithub} className='fa-xl text-warning'  /></a>
                        <a href="https://parkingslot.vercel.app/" target='_blank'><FontAwesomeIcon icon={faGlobe} className='ms-5 fa-xl text-warning'  /></a>
                      </div>
                    </div>
                  </div>

                

                </div>
              </div>
            </div>


          </div>
        </div>
      </div>


    </>
  )
}

export default Project