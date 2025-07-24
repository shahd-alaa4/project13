import React from 'react'

export default function Contact() {
  return (
    <>
  <h1 className='text-center text-uppercase text-color pt-2 fw-bold '>conatct section</h1>
 <div className=' d-flex justify-content-center align-items-center my-4  pb-4'>
  <div className="line  me-3"></div>
  <i className="fa-solid fa-star text-color "></i>
  <div className="line  ms-3"></div>
</div>
  <div className='container'>
  <div className=' d-flex flex-wrap flex-column justify-content-center align-items-center '>
    <input type="text"  className='w-50 my-4 border-0 shadow-sm py-2 rounded-2' placeholder='userName'/>
    <input type="text"  className='w-50 my-4 border-0 shadow-sm py-2 rounded-2' placeholder='userAge'/>
    <input type="email"  className='w-50 my-4 border-0 shadow-sm py-2 rounded-2' placeholder='userEmail'/>
    <input type="password"  className='w-50 my-4 border-0 shadow-sm py-2 rounded-2' placeholder='userPassword'/>
<div className='w-50'>  
    <button className=' bg text-white rounded-3 border-0 py-2 mb-5 mt-3 px-2 '>send Message</button>
</div>  
</div>
      
   </div>
  </>
  )
}
