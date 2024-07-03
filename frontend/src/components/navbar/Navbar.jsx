import React from 'react';
import { NavLink } from 'react-router-dom';
import '../navbar/navbar.css'

const Navbar = () => {
  return (
    <>
      <div className="navbarContainer">
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <img className='logoImg' src="/images/bio_life_Logo.png" alt="Bio Life Logo" />
            </div>
            <ul className='navlinks'>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/products">Products</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;



