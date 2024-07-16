import React from 'react';
import bgImg from '../assets/bgImage.png';
import './OnboardingTemplate.css';
import { GrLinkNext } from "react-icons/gr";
import circleBackground from '../assets/Ellipse 190.svg';
import circleOverlay from '../assets/Ellipse 191.svg';
import Statusbar from './Statusbar';
import Slider from './slider';
import { useNavigate } from 'react-router-dom';

function OnboardingTemplate({ text1, text2, pageNumber }) {
    const navigate = useNavigate();
    return (
        <div className="onboarding-container">
            <img src={bgImg} alt="Background" className="background-image" />
            <Statusbar color="white" />
            <div className="content-wrapper">
            <div className="content">
                <h2>{text1}</h2>
                <p>{text2}</p>
                <div className="indicator">
                    <div className="page-line" style={{ backgroundColor: pageNumber === 1 ? 'white' : '#B2B2B2' }}></div>
                    <div className="page-line" style={{ backgroundColor: pageNumber === 2 ? 'white' : '#B2B2B2' }}></div>
                    <div className="page-line" style={{ backgroundColor: pageNumber === 3 ? 'white' : '#B2B2B2' }}></div>
                </div>
                {pageNumber === 3 ? (
                    <div className="progress-button">
                        <img src={circleBackground} alt="Circle Background" className="circle-background" />
                        <img src={circleOverlay} alt="Circle Overlay" className="circle-overlay" />
                        <div onClick={(e)=>{navigate("/login")}} className="inner-circle">
                            <div className="arrow">&#10132;</div>
                        </div>
                    </div>
                ) : (
                    <div className="buttons">
                        <button className="button-skip">Skip</button>
                        <div onClick={(e)=>{navigate(`/onboarding${pageNumber+1}`)}} className="next">
                            <button className="button-next">Next</button>
                            <div className="icon"><GrLinkNext /></div>
                        </div>
                    </div>
                )}
            </div>
            </div>
            
            <Slider color='white' />
        </div>
    );
}

export default OnboardingTemplate;
