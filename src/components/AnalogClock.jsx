import React, { useState, useEffect } from 'react';
import './AnalogClock.css'; 

const AnalogClock = ({ speed, isRunning, resetKey }) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setTime(new Date());
    }, [resetKey]);

    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            setTime((prevTime) => new Date(prevTime.getTime() - 1000 * speed));
        }, 1000);

        return () => clearInterval(interval);
    }, [speed, isRunning]);

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    const secondsDegrees = ((seconds / 60) * 360) + 90;

    return (
        <div className="analog-clock-container">
            <div className="analog-clock">
                <div className="clock-face">
                    {[...Array(12)].map((_, i) => (
                        <div
                            key={i}
                            className={`hour-mark ${[3, 6, 9, 12].includes(i + 1) ? 'thick' : ''}`}
                            style={{ transform: `rotate(${i * 30}deg)` }}
                        >
                            <div className="mark"></div>
                        </div>
                    ))}
                    <div className="center-dot"></div>
                    <div
                        className="hand hour-hand"
                        style={{ transform: `rotate(${hoursDegrees}deg) scale(0.5)` }}
                    ></div>
                    <div
                        className="hand minute-hand"
                        style={{ transform: `rotate(${minutesDegrees}deg) scale(0.7)` }}
                    ></div>
                    <div
                        className="hand second-hand"
                        style={{ transform: `rotate(${secondsDegrees}deg) scale(0.7)` }}
                    ></div>
                </div>
            </div>
            {/* <div className="digital-clock">
                Current Time: {time.toLocaleTimeString()}
            </div> */}
        </div>
    );
};

export default AnalogClock;
