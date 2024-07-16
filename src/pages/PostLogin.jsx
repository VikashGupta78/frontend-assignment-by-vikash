import React from 'react';
import Statusbar from '../components/Statusbar';
import Slider from '../components/slider';
import bgImg from '../assets/bgImage.png';
import vector from '../assets/Vector.svg';
import eclipse from '../assets/Ellipse.svg';
import polygon from '../assets/Polygon 4.svg';
import icon from '../assets/Check.svg';
import './PostLogin.css';
import { useNavigate } from 'react-router-dom';

function PostLogin() {
  const navigate = useNavigate();
  return (
    <div className="post-login-container">
      <img src={bgImg} alt="Background" className="background-image" />
      <Statusbar color="white" />
      <div className="drawer">
        <div className="indicator-wrapper">
            <div className="indicator-top"></div>
        </div>
        
        <div className="image-box">
          <img className="img1" src={vector} alt="vector" />
          <img className="img2" src={eclipse} alt="eclipse" />
          <img className="img3" src={polygon} alt="polygon" />
          <img className="img4" src={icon} alt="icon" />
        </div>
        <div className="login-success">Login Successful</div>
        <button onClick={(e)=>{navigate("/tracking")}} className="tracking-btn">Go to Tracking Screen</button>
        <div onClick={(e)=>{navigate("/login")}} className="logout-btn">Logout</div>
        <Slider color="black" />
      </div>
    </div>
  );
}

export default PostLogin;
