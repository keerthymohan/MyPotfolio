import React from 'react'
import images from '../assets/image.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
faPhone
function About() {
  return (
    <>
      <div className='mt-5'>
        <h1 className='mt-5 text-center'>ABOUT ME</h1>
        <div className='container'>
          <div className="row bg-primary p-md-5">
            <div className="col-md-6 p-5" style={{ marginTop: '50px' }}>
              <h5 style={{ fontWeight: '15px', textAlign: 'justify' }}>I'm KEERTHI MOHAN, a recently graduated Computer Science Engineer and an aspiring full-stack web developer. I'm passionate about creating responsive, interactive, and user-friendly web applications using modern technologies that provide seamless and engaging user experiences. I am a continuous learner, always eager to explore emerging technologies and improve my skills to stay ahead in this fast-evolving field.</h5>
              <div>
                <h5><FontAwesomeIcon icon={faUser} /> <span className='ms-2'>Keerthi Mohan</span></h5>
                <h5><FontAwesomeIcon icon={faPhone} /><span className='ms-2'>7510685657</span></h5>
                <h5><FontAwesomeIcon icon={faEnvelope} /><span className='ms-2'>keerthymohan19@gmail.com</span></h5>
                <h5><FontAwesomeIcon icon={faLinkedin} /><span className='ms-2'>Keerthi Mohan</span></h5>

              
              </div>
            </div>
            <div className="col-md-6 p-5">
              <img src={images} className='w-100 my-4 rounded-circle' style={{ height: '450px' }} />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default About