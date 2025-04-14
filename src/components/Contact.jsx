import React from 'react'
import Header from './Header'

function Contact() {
  return (
    <>
      <div>
        <div className="row">
          <div className="col-3" style={{ backgroundColor: 'rgb(34, 34, 34)' }} >
            <Header />
          </div>
          <div className="col-9 ps-4 p-3" style={{ backgroundColor: 'black' }}  >
            <div className='container mt-md-4'>
              <h5 className=' text-warning fs-3 fw-bolder'>CONTACT ME</h5>
              <div className='container border border-secondary rounded  p-2'>

              <div className='p-4'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63005.12833095724!2d76.7368612618145!3d9.260327597335769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06152f4f9705d7%3A0x4d93dd296d4b4abc!2sPathanamthitta%2C%20Kerala!5e0!3m2!1sen!2sin!4v1744353043482!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
              <h5 className=' text-warning fs-3 fw-bolder mt-3'>CONTACT FORM</h5>

                <div style={{ backgroundColor: 'rgb(34, 34, 34)' }} className='p-md-4 p-2 rounded'>

                  <div className='d-md-flex'>
                    <div className='mt-3'>
                      <label className='text-light' htmlFor="">Name 
                      <input type="text" className=' form-control mt-2 me-5'  />
                      </label>
                    </div>
                    <div className='mt-3 ms-md-5'>
                      <label className='text-light' htmlFor="">Phone  
                      <input type="text" className=' form-control mt-2 me-5'  />
                      </label>
                    </div>
                    <div className='mt-3 ms-md-5'>
                      <label className='text-light' htmlFor="">EMail ID  
                      <input type="text" className=' form-control mt-2 me-5'  />
                      </label>
                    </div>
                  </div>

                  <div className='mt-3'>
                    <label className='text-light mb-2' htmlFor="">Message</label> <br />
                    <textarea className='w-100'style={{height:'100px'}}  name="" id=""></textarea>
                  </div>

                  <div className='d-flex align-items-center justify-content-center'><button className='btn btn-warning w-25 rounded p-2 mt-3'>SUBMIT</button></div>

                </div>
                
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Contact