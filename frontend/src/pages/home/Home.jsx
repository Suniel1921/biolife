import React from 'react';
import '../home/home.css';
import HomeSlider from './HomeSlider';
import DealOfTheDay from '../../components/deal_of_the_Day/DealOfTheDay';

const Home = () => {
  return (
    <>
    <div className="homeContainer">
            <div className="home">
              <HomeSlider/>
            </div>

            <div className="container">
            <DealOfTheDay/>
            </div>
    </div>
      
    </>
  )
}

export default Home



