import React from 'react';

const SpeedSlider = ({ speed, setSpeed }) => {
    // Calculate the percentage value for positioning the indicator
    const sliderPosition = (speed / 300) * 100;

    const handleSpeedChange = (event) => {
        setSpeed(Number(event.target.value));
    };

    return (
        <div className="speed-slider">
            <label htmlFor="speedSlider" className="slider-label">
                Speed:
            </label>
            <div className="slider-container">
                <input
                    id="speedSlider"
                    type="range"
                    min="1"
                    max="300"
                    value={speed}
                    onChange={handleSpeedChange}
                    className="slider-input"
                />
                <div
                    className="slider-value"
                    style={{ left: `calc(${sliderPosition}% - 10px)` }}
                >
                    {speed} sec
                </div>
            </div>

            <style jsx>{`
                .speed-slider {
                    margin: 20px 0;
                    width: 90%;
                    max-width: 400px;
                    text-align: center;
                }

                .slider-label {
                    font-size: 18px;
                    color: black;
                    display: block;
                    margin-bottom: 10px;
                    text-align: center;
                }

                .slider-container {
                    position: relative;
                    width: 100%;
                }

                .slider-input {
                    width: 100%;
                    margin: 0;
                    cursor: pointer;
                }

                .slider-value {
                    position: absolute;
                    top: -30px;
                    transform: translateX(-50%);
                    font-size: 14px;
                    background-color: lightblue;
                    padding: 5px;
                    border-radius: 5px;
                    white-space: nowrap;
                }

                @media (max-width: 768px) {
                    .slider-value {
                        top: -40px;
                    }
                }
            `}</style>
        </div>
    );
};

export default SpeedSlider;
