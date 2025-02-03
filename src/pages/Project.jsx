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

function Project() {
  return (
    <>
    <div className="container mt-5">
      <h1 className='text-center mb-3'>My Projects</h1>
        <div className="row">
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

            <div className="col-md-4 mt-4">
            <Card style={{ width: '100%',height:'400px' }}>
      <Card.Img variant="top" src={calculator} style={{height:'200px'}} />
      <Card.Body>
        <Card.Title>Simple Calculator</Card.Title>
        <Card.Text>
          Responsive simple calculator designed using HTML, CSS and Javascript
        </Card.Text>
        <div className='d-flex align-items-center'>
          <a href="https://github.com/keerthymohan/simple-calculator" target='_blank'><FontAwesomeIcon icon={faGithub} style={{color:'black'}}/></a>
          <a href="https://keerthymohan.github.io/simple-calculator/" target='_blank'><FontAwesomeIcon icon={faGlobe} className='ms-5' style={{color:'black'}} /></a>
        </div>
      </Card.Body>
    </Card>
            </div>

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
      <Card.Img variant="top" src={simple} style={{height:'200px'}} />
      <Card.Body>
        <Card.Title>Simple Interest</Card.Title>
        <Card.Text>
        Developed a responsive simple interest calculator designed using HTML, CSS and React
        </Card.Text>
        <div className='d-flex align-items-center'>
          <a href="https://github.com/keerthymohan/simpleInterest" target='_blank'><FontAwesomeIcon icon={faGithub} style={{color:'black'}}/></a>
          <a href="https://simple-interest-pink.vercel.app/" target='_blank'><FontAwesomeIcon icon={faGlobe} className='ms-5' style={{color:'black'}} /></a>
        </div>
      </Card.Body>
    </Card>
            </div>

            <div className="col-md-4 mt-4">
            <Card style={{ width: '100%',height:'400px' }}>
      <Card.Img variant="top" src={clock} style={{height:'200px'}} />
      <Card.Body>
        <Card.Title>Clock</Card.Title>
        <Card.Text>
        Developed a simple clock using HTML,CSS and JavaScript
        </Card.Text>
        <div className='d-flex align-items-center'>
          <a href="https://github.com/keerthymohan/simpleclock" target='_blank'><FontAwesomeIcon icon={faGithub} style={{color:'black'}}/></a>
          <a href="https://keerthymohan.github.io/simpleclock/" target='_blank'><FontAwesomeIcon icon={faGlobe} className='ms-5' style={{color:'black'}} /></a>
        </div>
      </Card.Body>
    </Card>
            </div>

            <div className="col-md-4 mt-4">
            <Card style={{ width: '100%',height:'400px' }}>
      <Card.Img variant="top" src={parking} style={{height:'200px'}} />
      <Card.Body>
        <Card.Title>Parking Slot Booking</Card.Title>
        <Card.Text>
        Developed a parking slot booking application using React.js.Utilized Axios to efficiently manage API calls, enabling real-time fetching and updating of booking details.
        </Card.Text>
        <div className='d-flex align-items-center'>
          <a href="https://github.com/keerthymohan/parkingslotfrontend" target='_blank'><FontAwesomeIcon icon={faGithub} style={{color:'black'}}/></a>
          <a href="https://parkingslot.vercel.app/" target='_blank'><FontAwesomeIcon icon={faGlobe} className='ms-5' style={{color:'black'}} /></a>
        </div>
      </Card.Body>
    </Card>
            </div>
        </div>
    </div>
    </>
  )
}

export default Project