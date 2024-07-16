import React from 'react';
import PropTypes from 'prop-types';

function Slider({ color }) {
    const bottomBarStyle = {
        width: '100%',
        height: '36px',
        marginTop: 'auto',
        display: 'flex',
        justifyContent: 'center',
        // border: '1px solid black'
    };

    const swipeLineStyle = {
        width: '134px',
        height: '5px',
        marginTop: '23px',
        backgroundColor: color === 'black' ? 'black' : 'white',
        // border: '1px solid black'
    };

    return (
        <div style={bottomBarStyle}>
            <div style={swipeLineStyle}></div>
        </div>
    );
}

Slider.propTypes = {
    color: PropTypes.oneOf(['black', 'white']).isRequired,
};

export default Slider;
