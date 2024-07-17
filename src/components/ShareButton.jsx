import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

const ShareButton = ({ speed }) => {
    const handleShare = () => {
        const uniqueId = uuidv4();
        const url = `${window.location.origin}/tracking?speed=${speed}&id=${uniqueId}`;
        navigator.clipboard.writeText(url);
        toast.success('URL copied to clipboard!');
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
