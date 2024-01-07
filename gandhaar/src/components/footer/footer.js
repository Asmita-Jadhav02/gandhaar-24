import React from "react";
import logo from "./gandhaar-logo.png";
import './footer.css';


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-row1">
                <div className="logo">
                    <img src={logo} alt="gandhaar-logo"></img>
                </div>
                <div className="footer-data">
                    <div className="gandhaar-text">
                        Gandhaar '24
                    </div>
                    <div className="social-media-icons">
                        <div className='social'><a href="mailto:gandhaar@cumminscollege.in" target='_blank'><i className="icon-envelope"></i></a></div>
                        <div className='social'><a href="https://www.instagram.com/gandhaar_cummins/" target='_blank'><i className="icon-instagram"></i></a></div>
                    </div>
                </div>
                <div className="Venue">
                <span>Venue:</span><br></br>
                MKSSS's Cummins College of Engineering for Women, Pune
                </div>
            </div>
            <div className="copyright">
                <i className="fa fa-copyright icon"></i>
                &nbsp;CCOEW Gandhaar 2024, Pune
            </div>

        </div>
    )
}

export default Footer