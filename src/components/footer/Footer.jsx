import React from 'react'

export default function Footer() {
  return (
    <>
    <footer className='py-5 '>
    <div className='container'>
        <div className="row text-center py-5">
            <div className="col-md-4 text-white ">
               <h3>LOCATION</h3>
<p>2215 John Daniel Drive</p>
<p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4 text-white">
               <h3>AROUND THE WEB</h3>
<div className='text-white'>
    <i className="fa-brands fa-facebook border rounded-circle p-2 me-2"></i>
    <i className="fa-brands fa-twitter  border rounded-circle p-2 me-2"></i>
    <i className="fa-brands fa-linkedin  border rounded-circle p-2 me-2"></i>
   <i className="fa-solid fa-globe  border rounded-circle p-2"></i>
</div>
            </div>
            <div className="col-md-4 text-white ">
               <h3>ABOUT FREELANCER</h3>
<p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
        </div>
      
    </div>
    </footer>
    <div className='bg-footer text-center text-white py-3'>
        <p>Copyright © Your Website 2021</p>
    </div>
    </>
  )
}
