import React from 'react'
import styles from './Contact.module.css'
export default function Contact() {
  return<>
  <div className="container-fluid">
    <h2 className='text-center  pt-3 fw-bolder fs-1'>CONATCT SECTION</h2>
    <div className="d-flex flex-row justify-content-center align-items-center mb-3 pt-3">
        <div className={`${styles.line} px-2`}></div>
        <div className={` px-2`}> <i className='fa-solid fa-star text-dark'></i> </div>
        <div className={`${styles.line} px-2`}></div>
     </div>

    <div className="row">
      <div className="col-md"></div>
      <div className="col-md-7">
        <div className="Details">
         <input type="text" className="form-control mt-4" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='UserName'/>
         <input type="text" className="form-control mt-4" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='UserAge'/>
         <input type="text" className="form-control mt-4" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='UserEmail'/>
         <input type="text" className="form-control mt-4" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='UserPass'/>
         <button type="button" className="btn btn-success m-4 ">Send Massage</button>
        </div>
      </div>
      <div className="col-md"></div>
      </div>  


  </div>
  </>
}
