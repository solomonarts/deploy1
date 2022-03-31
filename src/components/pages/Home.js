import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import HomeCard from '../HomeCard';

function Home() {
  return (
    <>
     <HeroSection />
      {/*<Cards /> */}

      <HomeCard />

      {/* <Footer /> */}
    </>
  );
}

export default Home;
