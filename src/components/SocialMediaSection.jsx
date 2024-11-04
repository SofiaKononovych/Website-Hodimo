import React from 'react';
import insta from '../images/insta.png'
import tiktok from '../images/tiktok.png'
import linkedin from '../images/linkedin.png'

const SocialMediaSection = () => {
  return (
    <div className="SocialMediaSection">
      <div className="JoinOurSocialMedia">JOIN OUR SOCIAL MEDIA</div>
      <div className="SocialIconsContainer">
        <div className="SocialIcon">
          <img src={insta} alt="Instagram" />
        </div>
        <div className="SocialIcon">
          <img src={tiktok} alt="TikTok" />
        </div>
        <div className="SocialIcon">
          <img src = {linkedin} alt="LinkedIn" />
        </div>
      </div>
    </div>
  );
};

export default SocialMediaSection;
