import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Header from './Header'
faPhone
function About() {
  const data = [
    {
      date: '2020 - 2024 , BTech in CSE ',
      description: 'Musaliar Colleg of Engineering & Technology,  Pathanamthitta',
      description2: '7.83 CGPA'
    },
    {
      date: '2019 - 2020 , Plus Two',
      description: 'Catholicate Higher Secondary School',
      description2: '86.75 %'
    }
  ];

  const data2 =[
    {
      date:'Aug 2024 - Mar 2025, ',
      title:'MERN Full Stack Developer intern at Luminar Technolab.',
      description:'Developed full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js) to build responsive user interfaces.',
      description2:'Used JavaScript (ES6), TypeScript, and frameworks like Bootstrap and Tailwind CSS to enhance UI design.',
      description3:'Worked with Git and GitHub for version control and team collaboration on projects.'
    }
  ]
  return (
    <>

    <div>
      <div className="row">
        <div className="col-3" style={{ backgroundColor: 'rgb(34, 34, 34)' }}>
          <Header/>
        </div>
        <div className="col-9 ps-4 p-3" style={{ backgroundColor: 'black' }}>

        <div className='mt-md-4 container'>
        <h5 className='text-warning fs-3 fw-bolder '>ABOUT ME</h5>
        <div className=' border border-secondary rounded p-md-4 p-3'>
          <p style={{ fontWeight: '15px', textAlign: 'justify', color: 'white' }}>I'm <span className='text-warning'>KEERTHI MOHAN</span>, a passionate and dedicated individual with a strong background in computer science. I graduated with a B.Tech in Computer Science and Engineering from APJ Abdul Kalam Technological University. Recently, I completed my MEAN Full Stack Development internship at Luminar Technolab.</p>
          <p style={{ fontWeight: '15px', textAlign: 'justify', color: 'white' }}>I'm passionate about creating responsive, interactive, and user-friendly web applications using modern technologies that provide seamless and engaging user experiences. I am a continuous learner, always eager to explore emerging technologies and improve my skills to stay ahead in this fast-evolving field.</p>
          <div className='mt-4'>
            <div className="row" >
              <div className="col-md-4" >
                <p><a style={{ textDecoration: 'none' }} className='text-light' href=""><FontAwesomeIcon icon={faUser} className='me-3 ' /> Keerthi Mohan</a></p>
                <p><a style={{ textDecoration: 'none' }} className='text-light' href=""><FontAwesomeIcon icon={faPhone} className='me-3' />7510685657</a></p>
              </div>
              <div className="col-md-5">
                <p><a style={{ textDecoration: 'none' }} className='text-light' href="mailto:keerthymohan19@gmail.com" target='_blank'><FontAwesomeIcon icon={faEnvelope} className='me-3' />keerthymohan19@gmail.com</a></p>
                <p><a style={{ textDecoration: 'none' }} className='text-light' href="https://www.linkedin.com/in/keerthy-mohan/" target='_blank'><FontAwesomeIcon icon={faLinkedin} className='me-3' />Keerthi Mohan</a></p>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>         
        </div>
      </div>


      <div className='container'>
            <div className="row">
              <div className="col-md-6" >
                <h5 className='text-warning mt-5 fs-3 fw-bolder'>EDUCATION</h5>
                <div className='border border-secondary rounded p-md-4 p-3'>
                  <div style={{ backgroundColor: ' rgba(34, 34, 34, 0.71)' }} className='p-4'>
  
                    <div className="timeline">
                      {data.map((item, index) => (
                        <div className="timeline-item" key={index}>
                          <div className="timeline-dot"></div>
                          <div className="timeline-content">
                            <h4 className='fw-bold text-light'>{item.date}</h4>
                            <p className='text-light'>{item.description}</p>
                            <h6 className='text-light'>{item.description2}</h6>
                          </div>
                        </div>
                      ))}
                    </div>
  
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <h5 className='text-warning mt-5 fs-3 fw-bolder'>EXPERIENCE</h5>
               <div className='border border-secondary rounded p-md-4 p-3'>
                  <div style={{ backgroundColor: ' rgba(34, 34, 34, 0.71)' }} className='p-4'>
  
                    <div className="timeline">
                      {data2.map((item, index) => (
                        <div className="timeline-item" key={index}>
                          <div className="timeline-dot"></div>
                          <div className="timeline-content">
                            <h4 className='fw-bold text-light'>{item.date}</h4>
                            <h5 className='fw-bold text-light'>{item.title}</h5>
                            <p className='text-light'>* {item.description}</p>
                            <p className='text-light'>* {item.description2}</p>
                            <p className='text-light'>* {item.description3}</p>

  
                          </div>
                        </div>
                      ))}
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

export default About