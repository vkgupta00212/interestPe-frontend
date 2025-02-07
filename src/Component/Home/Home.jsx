import React from "react";
import { useNavigate } from "react-router-dom";
import Termsheet from "../assets/svg/termsheet.svg";
import Googleplay from "../assets/svg/googleplay.svg";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();


  const googleplayClick = () => {
    navigate("/notfound");
  };

  return (
    <div className="home-page">
      <div className="home-page-container">
        <div className="home-page-tagline">
          <div className="home-heading">
            <h3>interestPe se</h3>
            <h2>Befikar lending</h2>
          </div>

          <div className="home-googleplay" onClick={googleplayClick}>
            <img src={Googleplay} width={200} alt="Google Play" />
          </div>
        </div>

        <div className="home-page-image">
          <img src={Termsheet} width={700} height={460} alt="Termsheet" />
        </div>
      </div>
    </div>
  );
};

export default Home;
