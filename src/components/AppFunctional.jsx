import React from 'react';
import iphoneMockup1 from '../images/iMockup - iPhone 14.png';
import iphoneMockup2 from '../images/iMockup - iPhone 14 (1).png';
import iphoneMockup3 from '../images/iMockup - iPhone 14 (3).png';

const AppFunctional = () => {
  return (
    <div className="AppFunctionsRectangle">
      <div className="Hodimo">
        HODIMO — знає: куди варто завітати, що про це думають твої друзі, і де тебе чекають знижки.
      </div>

      <div className="FramesContainer">
        <div className="Frame9">
          <div className="FrameText">Знайди класні заклади в рекомендаціях</div>
          <img className="ImockupIphone14" src={iphoneMockup1} alt="Phone mockup 1" />
        </div>
        <div className="Frame13">
          <img className="ImockupIphone14" src={iphoneMockup2} alt="Phone mockup 2" />
          <div className="FrameText">Отримай дисконт в улюблених закладах</div>
        </div>
        <div className="Frame14">
          <div className="FrameText">Знайди класні заклади в рекомендаціях</div>
          <img className="ImockupIphone14" src={iphoneMockup3} alt="Phone mockup 3" />
        </div>
      </div>
    </div>
  );
};

export default AppFunctional;
