import React from 'react';
import Hero from './Hero';             
import Navbar from './Navbar';
import StatsSection from './StatsSection';
import AppFunctional from './AppFunctional';
import SocialMediaSection from './SocialMediaSection';
import ReleaseSection from './ReleaseSection';

const Home = () => {
  return (
    <div id="home" className="home-section">
    {/* <Navbar /> */}
    <Hero /> 
    <StatsSection />
    <AppFunctional />
    <SocialMediaSection />
    <ReleaseSection />
    </div>
  );
};

export default Home;