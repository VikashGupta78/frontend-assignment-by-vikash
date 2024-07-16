import React from 'react';

const ShareButton = ({ speed }) => {
    const handleShare = () => {
        const url = `${window.location.origin}/tracking?speed=${speed}`;
        navigator.clipboard.writeText(url);
        alert('URL copied to clipboard!');
    };

    return (
        <button
            style={{
                backgroundColor: 'orange',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
                transition: 'background-color 0.3s ease',
            }}
            onClick={handleShare}
            onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#e69500';
            }}
            onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'orange';
            }}
        >
            Share
        </button>
    );
};

export default ShareButton;
