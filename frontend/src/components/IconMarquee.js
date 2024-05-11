import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub, faReact, faNode, faHtml5, faCss3, faPython, faJava
} from '@fortawesome/free-brands-svg-icons';
// Importing Tabler Icons as fallbacks or for specific icons not in FontAwesome
import {
  IconBrandFlutter, IconBrandKotlin, IconBrandSwift, IconBrandAndroid,
  IconBrandApple, IconBrandFirebase, IconApi, IconBrandVisualStudio,
  IconBrandFigma, IconBrandWordpress
} from '@tabler/icons-react';

const IconSet = () => (
  <>
    <FontAwesomeIcon icon={faReact} className="marquee-icon" />
    <FontAwesomeIcon icon={faNode} className="marquee-icon" />
    <FontAwesomeIcon icon={faHtml5} className="marquee-icon" />
    <FontAwesomeIcon icon={faCss3} className="marquee-icon" />
    <FontAwesomeIcon icon={faPython} className="marquee-icon" />
    <FontAwesomeIcon icon={faJava} className="marquee-icon" />
    <FontAwesomeIcon icon={faGithub} className="marquee-icon" />
    {/* Tabler Icons for technologies not available in FontAwesome */}
    <IconBrandFlutter className="marquee-icon" />
    <IconBrandKotlin className="marquee-icon" />
    <IconBrandSwift className="marquee-icon" />
    <IconBrandAndroid className="marquee-icon" />
    <IconBrandApple className="marquee-icon" /> {/* Assuming this for iOS */}
    <IconBrandFirebase className="marquee-icon" />
    <IconApi className="marquee-icon" /> {/* For API */}
    <IconBrandVisualStudio className="marquee-icon" /> {/* Assuming this for Visual Studio Code */}
    <IconBrandFigma className="marquee-icon" />
    <IconBrandWordpress className="marquee-icon" />
  </>
);

const IconMarquee = () => {
  return (
    <section className="icon-marquee-section">
      <h2 className="marquee-title">Technologies</h2>
      <div className="icon-marquee-container">
        <div className="scrolling-wrapper scroll-left">
          <IconSet />
        </div>
        <div className="scrolling-wrapper scroll-right">
          <IconSet />
        </div>
      </div>
    
    </section>
  );
};

export default IconMarquee;
