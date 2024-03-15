import React from 'react'
import styles from '../About/About.module.css'
export default function About() {
  return <>
  <div className={`${styles.Main} container-fluid py-5 `}>
     <h2 className='text-center pt-5 mt-5 h1 fw-bold '>ABOUT COMPONENT</h2>
     <div className="d-flex flex-row justify-content-center align-items-center mb-3 pt-3">
        <div className={`${styles.line} px-2`}></div>
        <div className={` px-2`}> <i className='fa-solid fa-star text-white'></i> </div>
        <div className={`${styles.line} px-2`}></div>
     </div>
  
      <div className="container  pt-5">
        <div className="row">
            <div className="col-md-6">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className="col-md-6">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
        </div>
      </div>


  </div>
    
  
  </>
}
