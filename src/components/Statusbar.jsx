import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import battery from '../assets/Battery.svg';
import network from '../assets/Cellular Connection.svg';
import wifi from '../assets/Wifi.svg';

function Statusbar({ color }) {
    const [currentTime, setCurrentTime] = useState(getCurrentTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(getCurrentTime());
        }, 1000); // Update every second

        return () => clearInterval(interval);
    }, []);

    function getCurrentTime() {
        const now = new Date();
        return `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
    }

    const statusBarStyle = {
        display: 'flex',
        width: '92%',
        height: '44px',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexShrink: 0,
        padding: '0',
    };

    const statusIconsStyle = {
        display: 'flex',
        flex: '1', // Allow icons to grow to fill available space
        justifyContent: 'flex-end', // Align icons to the right
        gap: '5px', // Increased gap for better spacing
    };

    const statusIconStyle = {
        width: '20px',
        height: '20px',
        filter: color === 'black' ? 'invert(100%)' : 'invert(0%)',
    };

    const timeStyle = {
        color: color === 'black' ? '#000000' : '#FFFFFF',
        minWidth: '50px', // Ensure enough space for the time text
    };

    return (
        <div style={statusBarStyle}>
            <div className='time' style={timeStyle}>{currentTime}</div>
            <div style={statusIconsStyle}>
                <img src={network} alt='Network' style={statusIconStyle} />
                <img src={wifi} alt='WiFi' style={statusIconStyle} />
                <img src={battery} alt='Battery' style={statusIconStyle} />
            </div>
        </div>
    );
}

Statusbar.propTypes = {
    color: PropTypes.oneOf(['black', 'white']).isRequired,
};

export default Statusbar;
