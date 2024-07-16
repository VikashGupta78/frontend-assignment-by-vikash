import React, { useState } from 'react';
import AnalogClock from '../components/AnalogClock';
import SpeedSlider from '../components/SpeedSlider';
import ShareButton from '../components/ShareButton';
import RandomQuotes from '../components/RandomQuotes';
import CountdownTimer from '../components/CountdownTimer';
import { VscDebugRestart } from "react-icons/vsc";
import './Tracking.css';
import Statusbar from '../components/Statusbar';
import Slider from '../components/slider';

function Tracking() {
    const [speed, setSpeed] = useState(1);
    const [isRunning, setIsRunning] = useState(true);
    const [resetKey, setResetKey] = useState(0);
    const [countdownFinished, setCountdownFinished] = useState(false);

    const handleEnd = () => {
        setIsRunning(false);
        setCountdownFinished(true);
    };

    const handleStart = () => {
        if (countdownFinished) {
            setResetKey(prevKey => prevKey + 1); // Reset the clock and timer
            setCountdownFinished(false);
        }
        setIsRunning(true);
    };

    const handleReset = () => {
        setIsRunning(true);
        setResetKey(prevKey => prevKey + 1); // Change the key to force reset
        setCountdownFinished(false);
    };

    return (
        <div className="tracking-screen">
            <Statusbar color='black' />
            <AnalogClock speed={speed} isRunning={isRunning} resetKey={resetKey} />
            <div className="timer">
                <CountdownTimer speed={speed} isRunning={isRunning} resetKey={resetKey} onEnd={handleEnd} />
            </div>
            <div className="button-container">
                {isRunning ? (
                    <button className='start-button' onClick={() => setIsRunning(false)}>Stop</button>
                ) : (
                    <button className='start-button' onClick={handleStart}>Start</button>
                )}
                <button className='reset-button' onClick={handleReset}><VscDebugRestart /></button>
            </div>
            <SpeedSlider speed={speed} setSpeed={setSpeed} />
            <ShareButton className='share-button' speed={speed} />
            <RandomQuotes />
            <Slider color='black' />
        </div>
    );
}

export default Tracking;
