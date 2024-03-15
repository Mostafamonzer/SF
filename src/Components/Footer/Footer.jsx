import React from 'react'
import styles from './Footer.module.css'
export default function Footer() {
  return<>
    <div className={`${styles.footer} container-fluid pt-5`} >
        <div className="container">
            <div className="row text-center">
                <div className="col-md p-2">
                     <div>
                        <h2>LOCATION</h2>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                </div>
                <div className="col-md p-2">
                    <h2>AROUND THE WEB</h2>
                    <div className="icon text-center">
                       <span className='px-1'> <i className="fa-brands fa-linkedin-in p-2 border rounded-circle"></i></span> 
                       <span className='px-1'> <i className="fa-brands fa-facebook-f p-2 border rounded-circle"></i></span> 
                       <span className='px-1'> <i className="fa-brands fa-twitter p-2 border rounded-circle "></i></span> 
                       <span className='px-1'> <i className="fa-solid fa-globe p-2 border rounded-circle"></i></span> 
                    </div>
                </div>
                <div className="col-md p-2 ">
                    <h2>ABOUT FREELANCER</h2>
                    <p>Freelance is a free to use, licensed Bootstrap theme</p>
                    <p>created by Route</p>
                </div>
            </div>
        </div>
    </div>
  </>
}
