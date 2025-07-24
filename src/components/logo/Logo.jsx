import React from 'react'
import About from './../about/About';
import logo from "../../assets/avataaars.svg"

export default function Logo() {
  return (
  <>
 <div className='bg text-center py-5'>
<img src={logo}  className='w-25' alt="" />
<div className='text-white'>
   <h1 className='fw-bold text-uppercase mt-5'>start Framework</h1>
   <div className=' d-flex justify-content-center align-items-center my-4 '>
       <div className="line2  me-3"></div>
  <i className="fa-solid fa-star text-white "></i>
  <div className="line2  ms-3"></div>
  </div> 
 
 <p className='m-0'>Graphic Artist - Web Designer - Illustrator</p></div>
</div>
  </>
  )
}
