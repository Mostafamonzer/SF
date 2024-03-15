import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../Assets/images/poert1.png'
import img2 from '../../Assets/images/port2.png'
import img3 from '../../Assets/images/port3.png'
import styles from './Portofolio.module.css'

export default function Portofolio() {
  return <>
    <div className="container">
      <h2 className='text-center pt-5  h1 fw-bold'>START FRAMWORK</h2>
      <div className="d-flex flex-row justify-content-center align-items-center mb-3 pt-3">
          <div className={`${styles.line} px-2`}></div>
          <div className={` px-2`}> <i className='fa-solid fa-star text-dark'></i> </div>
          <div className={`${styles.line} px-2`}></div>
      </div>

      <div className="row">
        <div className="col-md-4 p-3">
           <Link> <img src={img1} className='w-100' alt='imag-pic'  /></Link>
        </div>

        <div className="col-md-4  p-3">
           <Link> <img src={img2} className='w-100' alt='imag-pic'  /></Link>
        </div>

        <div className="col-md-4  p-3">
           <Link> <img src={img3} className='w-100' alt='imag-pic'  /></Link>
        </div>
        
        <div className="col-md-4 p-3">
           <Link> <img src={img3} className='w-100' alt='imag-pic'  /></Link>
        </div>

        <div className="col-md-4  p-3">
           <Link> <img src={img1} className='w-100' alt='imag-pic'  /></Link>
        </div>

        <div className="col-md-4  p-3">
           <Link> <img src={img2} className='w-100' alt='imag-pic'  /></Link>
        </div>

        </div>
      </div>
   
  </>
}
