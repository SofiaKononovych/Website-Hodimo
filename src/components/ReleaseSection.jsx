import React from 'react';
import left from '../images/left.png'
import right from '../images/right.png'


const ReleaseSection = () => {
  return (
    <div className="ReleaseSection">
      <div className="ReleaseText">To be released on AppStore and PlayMarket soon...</div>
      <div className="PhoneMockups">
        <img src={left} alt="Phone Mockup 1" />
        <img src={right} alt="Phone Mockup 2" />
      </div>
    </div>
  );
};

export default ReleaseSection;
