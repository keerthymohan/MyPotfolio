import React from 'react'
import images from '../assets/image.jpg'
import { Link } from 'react-router-dom'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Home() {
  return (
    <>
      <div style={{ backgroundColor: 'black', height: '100vh' }} className='d-flex align-items-center justify-content-center'>
        <div className='container fade-in'>
          <div className=' border border-secondary p-4'>
            <div className="row">
              <div className="col-md-5">
                <img src={images} className='w-75 p-3 rounded-circle ' style={{ height: '300px' }} />

              </div>
              <div className="col-md-7">
                <h2 className='text-warning mb-4' style={{ fontWeight: 'bolder' }}>KEERTHI MOHAN</h2>

                <p style={{ fontWeight: '15px', textAlign: 'justify', color: 'white' }}>An enthusiastic Web Developer with a strong foundation in both front-end and back-end technologies. Skilled in building responsive, user-friendly websites and web applications using modern frameworks such as React, MongoDB and Node.js.</p>

                <div className="d-flex mt-4">
                  <a href="https://github.com/keerthymohan" target='_blank' ><FontAwesomeIcon icon={faGithub} className='fa-2x text-light' />
                  </a>
                  <a href="https://www.linkedin.com/in/keerthy-mohan/" target='_blank'><FontAwesomeIcon icon={faLinkedin} className='ms-5 fa-2x text-light' />
                  </a>
                  <a href="mailto:keerthymohan19@gmail.com" target='_blank'><FontAwesomeIcon icon={faEnvelope} className='ms-5 fa-2x text-light' />
                  </a>
                </div>
                <div className='mt-5'>
              <Link to={'/about'}><button className='btn btn-warning'>Explore more about me...</button></Link>
            </div>
                
              </div>
              

            </div>

            

          </div>

        </div>

      </div>






    </>
  )
}

export default Home