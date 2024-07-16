import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ speed, isRunning, resetKey, onEnd }) => {
    const [secondsLeft, setSecondsLeft] = useState(120 * 60); // 120 minutes

    useEffect(() => {
        setSecondsLeft(120 * 60); // Reset to 120 minutes
    }, [resetKey]);

    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            setSecondsLeft((prevSeconds) => {
                const newSeconds = prevSeconds - speed;
                if (newSeconds <= 0) {
                    onEnd();
                    return 0;
                }
                return newSeconds;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [speed, isRunning, onEnd]);

    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;

    return (
        <div>
            <style jsx>{`
                .countdown-timer {
                    font-size: 24px;
                    color: black;
                    background-color: white;
                    padding: 10px 20px;
                    border: 2px solid orange;
                    border-radius: 10px;
                    text-align: center;
                    margin: 10px 0;
                    width: fit-content;
                }

                @media (max-width: 768px) {
                    .countdown-timer {
                        font-size: 20px;
                        padding: 8px 16px;
                        width: 100%;
                        box-sizing: border-box;
                    }
                }
            `}</style>
            <div className="countdown-timer">
                Time Left: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </div>
        </div>
    );
};

export default CountdownTimer;
