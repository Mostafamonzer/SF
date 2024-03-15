import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import logo from '../../Assets/images/freshcart-logo.svg'

export default function Navbar() {
  return <>
    <nav className=" navbar-expand-lg  py-4 navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <h2 className='px-4  fw-bold'>START FRAMWORK</h2>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  ms-auto fw-bold">
    
            <li className="nav-item">
              <Link className="nav-link" to="/about">ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portofolio">PORTOFOLIO</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  fw-bold" to="/contact">CONTACT</Link>
            </li>


          </ul>
        

        </div>
      </div>
    </nav>
  </>
}
