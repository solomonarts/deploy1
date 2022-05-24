import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import HomeCard from '../HomeCard';
import About from './About';

function Home() {
  return (
    <div id='Home'>
     <HeroSection />


      <HomeCard />

      <About />

         
    </div>
  );
}

export default Home;
