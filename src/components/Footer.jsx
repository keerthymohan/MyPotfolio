import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
  return (
    <>
      <div className='bg-secondary mt-3 p-5'>
        <h6 className='text-center text-light'>My Portfolio || All Rights Reserved ©️</h6>
        <div className='d-flex align-items-center justify-content-center mt-4'>
          <a href="https://github.com/keerthymohan" target='_blank' ><FontAwesomeIcon icon={faGithub} className='fa-2x text-light' />
          </a>
          <a href="https://www.linkedin.com/in/keerthy-mohan/" target='_blank'><FontAwesomeIcon icon={faLinkedin} className='ms-5 fa-2x text-light' />
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer