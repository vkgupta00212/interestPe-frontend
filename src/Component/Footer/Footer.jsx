import React from "react";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import './Footer.css'

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
            <BsTwitter />
            <SiLinkedin />
            <BsYoutube />
            <FaFacebookF />
            </div>
        </div>

        <div className="footer-section-two">
            <div className="footer-section-columns">
            <span>Qualtiy</span>
            <span>Help</span>
            <span>Share</span>
            <span>Carrers</span>
            <span>Testimonials</span>
            <span>Work</span>
            </div>
            <div className="footer-section-columns">
            <span>244-5333-7783</span>
            <span>hello@food.com</span>
            <span>press@food.com</span>
            <span>contact@food.com</span>
            </div>
          
        </div>
        </div>  
    </div>
  );
};

export default Footer;