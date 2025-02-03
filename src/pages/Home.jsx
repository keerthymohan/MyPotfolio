import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import About from '../components/About'
import Skills from '../components/Skills'
import weather from '../assets/weather.png'
import bmi from '../assets/BMI.png'
import Card from 'react-bootstrap/Card';
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import travel from '../assets/TravelWebsite.png'
import { Link } from 'react-router-dom'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


function Home() {
  return (
    <>
    <div className=" mt-5 p-3">
        <div className="row fade-in">
            <div className="col-md-6 col-5">
            <img src="https://keerthymohan.github.io/my-portfolio/images/blob-removebg-preview.png" className='w-100' style={{height:'450px'}} />

            </div>
            <div className="col-md-6 col-7 mt-md-5 mt-2 p-md-5">
            <h2 className='text-danger mb-4' style={{fontWeight:'bolder'}}>KEERTHI MOHAN</h2>
            <p  style={{textAlign:'justify'}}>Aspiring MEA(R)N Full Stack Web Developer, passionate about web development and new technologies. Skilled in building responsive, interactive, and user-friendly web interfaces focused on functionality and user experience.</p>
            <div className="d-flex ">
              <a href="https://github.com/keerthymohan" target='_blank' ><FontAwesomeIcon icon={faGithub} className='fa-2x text-dark'/>
              </a>
              <a href="https://www.linkedin.com/in/keerthy-mohan/" target='_blank'><FontAwesomeIcon icon={faLinkedin} className='ms-5 fa-2x text-dark'/>
              </a>
            <FontAwesomeIcon icon={faWhatsapp} className='ms-5 fa-2x'/>
            </div>
            <button className='btn btn-danger rounded p-2 text-white mt-3'>DOWNLOAD CV</button>
            </div>
        </div>
        
    </div>
    <About/>
    <Skills/>

    <h1 className='mt-5 text-center '>PROJECTS</h1>

    <div className="container bg-primary p-4">
      <div className="row">
      <div className="col-md-4 mt-4">
            <Card style={{ width: '100%',height:'400px' }}>
      <Card.Img variant="top" src={weather} style={{height:'200px'}} />
      <Card.Body>
        <Card.Title>Weather Search</Card.Title>
        <Card.Text>
         weather application using HTML, Bootstrap and JavaScript. Fetches real-time weather data from the OpenWeather API and updates the user interface based on the city entered by the user.
        </Card.Text>
        <div className='d-flex align-items-center'>
          <a href="https://github.com/keerthymohan/weather-search" target='_blank'><FontAwesomeIcon icon={faGithub} style={{color:'black'}}/></a>
          <a href="https://keerthymohan.github.io/weather-search/" target='_blank'><FontAwesomeIcon icon={faGlobe} className='ms-5' style={{color:'black'}} /></a>
        </div>
      </Card.Body>
    </Card>
            </div>

            <div className="col-md-4 mt-4">
            <Card style={{ width: '100%',height:'400px' }}>
      <Card.Img variant="top" src={bmi} style={{height:'200px'}} />
      <Card.Body>
        <Card.Title>Weather Search</Card.Title>
        <Card.Text>
        Developed a BMI Calculator using HTML,CSS, Bootstrap and React.js, which providing an interface for users to calculate their BMI based on height and weight.
        </Card.Text>
        <div className='d-flex align-items-center'>
          <a href="https://github.com/keerthymohan/bmi_calculator" target='_blank'><FontAwesomeIcon icon={faGithub} style={{color:'black'}}/></a>
          <a href="https://bmical-five.vercel.app/" target='_blank'><FontAwesomeIcon icon={faGlobe} className='ms-5' style={{color:'black'}} /></a>
        </div>
      </Card.Body>
    </Card>
            </div>
            <div className="col-md-4 mt-4">
            <Card style={{ width: '100%',height:'400px' }}>
      <Card.Img variant="top" src={travel} style={{height:'200px'}} />
      <Card.Body>
        <Card.Title>Travel Website</Card.Title>
        <Card.Text>
          Responsive Travel Website designed using HTML, CSS and Bootstrap.
        </Card.Text>
        <div className='d-flex align-items-center'>
          <a href="https://github.com/keerthymohan/Travelwebsite" target='_blank'><FontAwesomeIcon icon={faGithub} style={{color:'black'}}/></a>
          <a href="https://keerthymohan.github.io/Travelwebsite/" target='_blank'><FontAwesomeIcon icon={faGlobe} className='ms-5' style={{color:'black'}} /></a>
        </div>
      </Card.Body>
    </Card>
            </div>

      </div>

      <div className='d-flex align-items-center justify-content-center  mt-4'>
        <Link to={'/project'}><button className='btn btn-light rounded p-2 ps-3 pe-3'>see more projects..</button></Link>
        </div>
    </div>


    <Contact/>
    <Footer/>
    </>
  )
}

export default Home