import React from 'react'
import port1 from "../../assets/poert1.png"
import port2 from "../../assets/port2.png"
import port3 from "../../assets/port3.png"


export default function Portfolio() {
  return (
     <>
     
  <h1 className='text-center text-uppercase text-color pt-2 fw-bold'>portfolio component</h1>
  <div className=' d-flex justify-content-center align-items-center my-4 '>
  <div className="line  me-3"></div>
  <i className="fa-solid fa-star text-color "></i>
  <div className="line  ms-3"></div>
</div>
  <div className='container'> 
<div className="row gy-5 mb-4 ">
  <div className="col-md-4 ">
    <div className='position-relative'>
    <img src={port1} className='w-100 rounded-3 ' alt="" />
  <div className="image rounded-3">
    <i class="fa-solid fa-plus text-white display-1 d-flex justify-content-center align-items-center h-100"></i>
  </div>
  </div>
  </div>
  <div className="col-md-4 ">
        <div className='position-relative'>

    <img src={port2} className='w-100 rounded-3 ' alt="" />
  <div className="image rounded-3">
    <i class="fa-solid fa-plus text-white display-1 d-flex justify-content-center align-items-center h-100"></i>
  </div>
  </div>
  </div>
  <div className="col-md-4 ">
        <div className='position-relative'>

    <img src={port3} className='w-100 rounded-3 ' alt="" />
  <div className="image rounded-3">
    <i class="fa-solid fa-plus text-white display-1 d-flex justify-content-center align-items-center h-100"></i>
  </div>
  </div>
  </div>
  <div className="col-md-4 ">
        <div className='position-relative'>

    <img src={port1} className='w-100 rounded-3 ' alt="" />
  <div className="image rounded-3">
    <i class="fa-solid fa-plus text-white display-1 d-flex justify-content-center align-items-center h-100"></i>
  </div>
  </div>
  </div>
  <div className="col-md-4 ">
        <div className='position-relative'>

    <img src={port2} className='w-100 rounded-3 ' alt="" />
  <div className="image rounded-3">
    <i class="fa-solid fa-plus text-white display-1 d-flex justify-content-center align-items-center h-100"></i>
  </div>
  </div>
  </div>
  <div className="col-md-4 ">
        <div className='position-relative'>

    <img src={port3} className='w-100 rounded-3 ' alt="" />
  <div className="image rounded-3">
    <i class="fa-solid fa-plus text-white display-1 d-flex justify-content-center align-items-center h-100"></i>
  </div>
  </div>
  </div>
</div>
  </div>
  </>
  )
}
