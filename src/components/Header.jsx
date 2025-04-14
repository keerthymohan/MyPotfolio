import { faBars, faBriefcase, faEnvelope, faHouse, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import images from '../assets/image.jpg'
import { Link } from 'react-router-dom';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Header() {
  return (
    <>

      <div className="container d-none d-md-block mt-3" style={{ height: '100vh' }}>
        <div className='text-center'>
          <img src={images} className='w-75 p-3 rounded-circle ' style={{ height: '180px' }} />
          <h4 className=' text-warning fw-bolder'>KEERTHI MOHAN</h4>
          <div className="d-flex justify-content-center mt-4">
            <a href="https://github.com/keerthymohan" target='_blank' ><FontAwesomeIcon icon={faGithub} className='fa-xl text-warning profile' />
            </a>
            <a href="https://www.linkedin.com/in/keerthy-mohan/" target='_blank'><FontAwesomeIcon icon={faLinkedin} className='ms-5 fa-xl text-warning profile' />
            </a>
            <a href="mailto:keerthymohan19@gmail.com" target='_blank'><FontAwesomeIcon icon={faEnvelope} className='ms-5 fa-xl text-warning profile' />
            </a>
          </div>
        </div>

        <div style={{ marginTop: '40px' }} className='ms-md-4'>

          <Link to={'/'} style={{ textDecoration: 'none' }}><p style={{ color: 'white', backgroundColor: ' rgba(0, 0, 0, 0.639)', }} className='headersec  me-md-5 p-2 rounded'> <FontAwesomeIcon icon={faHouse} className='me-3 ms-3' style={{ color: "#fafcff", }} />HOME</p></Link>

          <Link to={'/about'} style={{ textDecoration: 'none' }}><p style={{ color: 'white', backgroundColor: ' rgba(0, 0, 0, 0.639)' }} className='headersec me-md-5 p-2 rounded'> <FontAwesomeIcon icon={faHouse} className='me-3 ms-3' style={{ color: "#fafcff", }} />ABOUT</p></Link>

          <Link to={'/skill'} style={{ textDecoration: 'none' }}><p style={{ color: 'white', backgroundColor: ' rgba(0, 0, 0, 0.639)' }} className='headersec me-md-5 p-2 rounded'> <FontAwesomeIcon icon={faUser} className='me-3 ms-3' style={{ color: "#ffffff", }} />SKILLS</p></Link>

          <Link to={'/project'} style={{ textDecoration: 'none' }}><p style={{ color: 'white', backgroundColor: ' rgba(0, 0, 0, 0.639)' }} className='headersec me-md-5 p-2 rounded'> <FontAwesomeIcon icon={faBars} className='me-3 ms-3' style={{ color: "#f7f9fd", }} />PROJECTS</p></Link>

          <Link to={'/contact'} style={{ textDecoration: 'none' }}><p style={{ color: 'white', backgroundColor: ' rgba(0, 0, 0, 0.639)' }} className='headersec me-md-5 p-2 rounded'> <FontAwesomeIcon icon={faPhone} className='me-3 ms-3' style={{ color: "#f7f9fd" }} />CONTACT</p></Link>
        </div>

      </div>



      <div className='container d-block d-md-none' style={{ backgroundColor: ' rgb(50, 49, 49)', height: '100vh' }}>
        <div>
          <Link to={'/'} style={{ textDecoration: 'none' }}><h4 className='text-warning pt-5 ms-md-4'><FontAwesomeIcon icon={faBriefcase} className='text-warning' /></h4></Link>
        </div>
        <div style={{ marginTop: '50px' }} className='ms-md-4 '>
          <Link to={'/about'} style={{ textDecoration: 'none' }}><p style={{ color: 'white' }} className=' me-md-5'> <FontAwesomeIcon icon={faHouse} style={{ color: "#fafcff", }} /></p></Link>

          <Link to={'/skill'} style={{ textDecoration: 'none' }}><p style={{ color: 'white' }} className=' me-md-5'> <FontAwesomeIcon icon={faUser} style={{ color: "#ffffff", }} /></p></Link>

          <Link to={'/project'} style={{ textDecoration: 'none' }}><p style={{ color: 'white' }} className=' me-md-5'> <FontAwesomeIcon icon={faBars} style={{ color: "#f7f9fd", }} /></p></Link>

          <Link to={'/contact'} style={{ textDecoration: 'none' }}><p style={{ color: 'white' }} className=' me-md-5'> <FontAwesomeIcon icon={faPhone} style={{ color: "#f7f9fd", }} /></p></Link>
        </div>

      </div>




    </>
  )
}

export default Header