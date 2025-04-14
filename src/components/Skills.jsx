import React from 'react'
import Header from './Header'

function Skills() {
  return (
    <>


      <div>
        <div className="row">
          <div className="col-3" style={{ backgroundColor: 'rgb(34, 34, 34)' }} >
            <Header />
          </div>
          <div className="col-9 ps-4 p-3" style={{ backgroundColor: 'black' }}  >

            <div className='container mt-md-4'>

              <h5 className=' text-warning fs-3 fw-bolder'>SKILLS</h5>

              <div className='border border-secondary rounded  p-md-4 p-3'>

                <div className="row">
                  <div className="col-6 col-lg-2 my-3" >
                    <div className=' skill d-flex flex-column align-items-center rounded justify-content-center p-3' style={{ backgroundColor: ' rgba(34, 34, 34, 0.71)' }}>
                      <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" alt="" className='rounded-pill' style={{ height: '100px', width: '20x' }} />
                      <p className='text-light mt-2'>HTML</p>
                    </div>
                  </div>

                  <div className="col-6 col-lg-2 my-3">
                    <div className=' skill d-flex flex-column align-items-center rounded justify-content-center p-3' style={{ backgroundColor: ' rgba(34, 34, 34, 0.71)' }}>
                      <img src="https://th.bing.com/th/id/OIP.inXQ_yDlWt5yDJiO76wCxwHaHa?rs=1&pid=ImgDetMain" alt="" className='rounded-pill' style={{ height: '100px', width: '20x' }} />
                      <p className='text-light mt-2'>CSS</p>
                    </div>
                  </div>

                  <div className="col-6 col-lg-2 my-3">
                    <div className='skill d-flex flex-column align-items-center rounded justify-content-center p-3' style={{ backgroundColor: ' rgba(34, 34, 34, 0.71)' }}>
                      <img src="https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-7017516947717339mnyf7eumy.png" alt="" className='rounded-pill' style={{ height: '100px', width: '100px' }} />
                      <p className='text-light mt-2'>JavaScript</p>
                    </div>
                  </div>

                  <div className="col-6 col-lg-2 my-3">
                    <div className='skill d-flex flex-column align-items-center rounded justify-content-center p-3' style={{ backgroundColor: ' rgba(34, 34, 34, 0.71)' }}>
                      <img src=" https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" alt="" className='rounded-pill' style={{ height: '100px', width: '100px' }} />
                      <p className='text-light mt-2'>REACT</p>
                    </div>
                  </div>

                  <div className="col-6 col-lg-2 my-3">
                    <div className='skill d-flex flex-column align-items-center rounded justify-content-center p-3' style={{ backgroundColor: ' rgba(34, 34, 34, 0.71)' }}>
                      <img src="https://hossaini.gallerycdn.vsassets.io/extensions/hossaini/bootstrap-intellisense/1.1.6/1692877389926/Microsoft.VisualStudio.Services.Icons.Default" alt="" className='rounded-pill' style={{ height: '100px', width: '100px' }} />
                      <p className='text-light mt-2'>Bootstrap</p>
                    </div>
                  </div>

                  <div className="col-6 col-lg-2 my-3">
                    <div className='skill d-flex flex-column align-items-center rounded justify-content-center p-3' style={{ backgroundColor: ' rgba(34, 34, 34, 0.71)' }}>
                      <img src="https://freepngimg.com/icon/download/social_media/9215-tailwind-css.png" alt="" className='rounded-pill' style={{ height: '100px', width: '100px' }} />
                      <p className='text-light mt-2'>Tailwind CSS</p>
                    </div>
                  </div>

                  

                  <div className="col-6 col-lg-2 my-3">
                    <div className='skill d-flex flex-column align-items-center rounded justify-content-center p-3' style={{ backgroundColor: ' rgba(34, 34, 34, 0.71)' }}>
                      <img src="https://cdn.jim-nielsen.com/macos/1024/figma-2021-05-05.png" alt="" className='rounded-pill' style={{ height: '100px', width: '100px' }} />
                      <p className='text-light mt-2'>Figma</p>
                    </div>
                  </div>

                  

                  <div className="col-6 col-lg-2 my-3">
                    <div className='skill d-flex flex-column align-items-center rounded justify-content-center p-3' style={{ backgroundColor: ' rgba(34, 34, 34, 0.71)' }}>
                      <img src="https://image.pngaaa.com/668/4547668-middle.png" alt="" className='rounded-pill' style={{ height: '100px', width: '100px' }} />
                      <p className='text-light mt-2'>Node.js</p>
                    </div>
                  </div>

                  <div className="col-6 col-lg-2 my-3">
                    <div className='skill d-flex flex-column align-items-center rounded justify-content-center p-3' style={{ backgroundColor: ' rgba(34, 34, 34, 0.71)' }}>
                      <img src="https://th.bing.com/th/id/OIP.JhdchOb0n1bwrlfhGqycbgHaFG?rs=1&pid=ImgDetMain" alt="" className='rounded-pill' style={{ height: '100px', width: '100px' }} />
                      <p className='text-light mt-2'>MongoDB</p>
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

export default Skills
