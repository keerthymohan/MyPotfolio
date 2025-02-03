import React from 'react'

function Contact() {
  return (
    <>
    <h1 className='mt-5 text-center'>CONTACT ME </h1>
    <div className='container p-4 shadow' style={{backgroundColor:'rgba(128, 128, 128, 0.432)'}}>
        <div className="row">
            <div className="col-md-6">
            <form>
            <div className='mb-3'>
                <label htmlFor="">Name</label>
                <input type="text" className='form-control' />
            </div>
            <div className='mb-3'>
                <label htmlFor="">Email ID</label>
                <input type="text" className='form-control' />
            </div>
            <div className='mb-3'>
                <label htmlFor="">Message</label>
                <textarea name="" id="" rows={4} className='form-control'></textarea>
            </div>
        </form>
        <button className='btn btn-info rounded ps-2 pe-2'>SEND MESSAGE</button>
            </div>
        </div>
        

    </div>
    </>
  )
}

export default Contact