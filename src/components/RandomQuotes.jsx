import React, { useState, useEffect } from 'react';

const URL = "https://api.quotable.io/random";

const RandomQuotes = () => {
    const [quote, setQuote] = useState('');

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const response = await fetch(URL);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setQuote(data.content);
            } catch (error) {
                console.error('Error fetching quote:', error);
            }
        };

        fetchQuote();
        const interval = setInterval(fetchQuote, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="random-quotes" style={{
            color: 'black',
            padding: '10px',
            borderRadius: '5px',
            textAlign: 'center',
            margin: '20px 0',
            fontStyle: 'italic',
            fontSize: '1.2rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            maxWidth: '400px',
            width: '100%',
        }}>
            "{quote}"
        </div>
    );
};

export default RandomQuotes;
