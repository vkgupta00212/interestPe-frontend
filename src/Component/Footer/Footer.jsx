import React from "react";
import { SiLinkedin } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-sections">
        <div className="footer-section-one">
          <div className="nav-logo">
            <p>
              interestPe
              <li className="logo-tagline">Befikar lending</li>
            </p>
          </div>

          <div className="footer-icons">
            <a href="https://www.instagram.com/interestpe/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/interestpe/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
              <SiLinkedin />
            </a>
          </div>
        </div>

        <div className="footer-section-two">
          <div className="footer-section-columns">
            <span>Qualtiy</span>
            <span>Help</span>
            <span>+91 9718765341</span>
            <span>interestpe01@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;