import React from "react";
import sabali from './images/Sabali.png';
import './stars.css';

const Stars = () => {
    return (
        <>
        <div className="star-lineup">
        <div className="to-be">To be Revealed...</div>    

            <div className="star">
                <img src={sabali} alt="Sabali The Band"></img>
            </div>
            <div className="star">
                <img src={sabali} alt="Sabali The Band"></img>
            </div>
        </div>
        </>
    )
}

export default Stars
