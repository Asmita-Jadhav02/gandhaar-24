import React, { useState } from 'react'
import './loader.css';
import logo from './gandhaar-logo.png'

const Loader = ({ onStartClick }) => {
    const [loadingText, setLoadingText] = useState('Loading...');

    const handleStartClick = () => {
        setLoadingText('Starting...');
        onStartClick();
    };

    
    return (
        <div className='loader'>
            <div className='svg-wrapper'>
                <img src={logo} alt=''></img>
                </div>
            
                <div className='loader-text'>
                <h3 className='ready-text'>Are You Ready For Gandhaar 2024 ?!</h3>

                <div className="text-container">
                    {!loadingText.includes('Starting') && (
                        <div className="start-text" onClick={handleStartClick}>
                            YESSS I AM!! &#x2192;
                        </div>
                    )}
                </div>
                </div>
        </div>
    )
}

export default Loader;