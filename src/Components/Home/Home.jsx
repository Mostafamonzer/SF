import React from 'react';
import styles from './Home.module.css';
import imag from '../../Assets/images/images.jpeg'
import { Link } from 'react-router-dom';

export default function Home() {
  return <>
  <div className={`${styles.Main} container-fluid pt-3`} >
    <Link className='d-flex justify-content-center pt-5'>
      <img src={imag} className='rounded rounded-circle ' alt='imag-pic'  />
    </Link>
    <h2 className='text-center pt-5  h1 fw-bold'>START FRAMWORK</h2>
    <div className="d-flex flex-row justify-content-center align-items-center mb-3 pt-3">
        <div className={`${styles.line} px-2`}></div>
        <div className={` px-2`}> <i className='fa-solid fa-star text-white'></i> </div>
        <div className={`${styles.line} px-2`}></div>
     </div>
     <p className='text-center fw-medium'>Graphic Artist - Web Designer - Illustrator</p>
  </div>
  </>
}