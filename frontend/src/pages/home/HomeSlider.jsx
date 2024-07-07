import React from 'react';
import '../home/homeSlider.css';

const HomeSlider = () => {
  return (
    <>
   <div className="homeSliderContainer">
    <div className="container">
    <div className="banner">
      <div className="content">
        <span className="deal-tag">WEEKEND DEAL</span>
        <h1>All New<br />For A Better You</h1>
        <p>AMAZING DISCOUNTS AND DEALS</p>
        <p className="price">From <span>Rs.3999.99</span></p>
        <button className="shop-now">SHOP NOW</button>
      </div>
      <div className="images">
        <img src="/images/20.png" alt="Watch 1" />
      </div>
    </div>
    </div>

   </div>
    </>
  );
};

export default HomeSlider;


