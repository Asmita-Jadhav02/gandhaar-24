import React, { useState } from 'react';
import './Navbar.css';


const Navbar = () => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleMenu = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className={`navbar ${isExpanded ? 'expanded' : ''}`}>
      <div className="menu-button" onClick={toggleMenu}>
        <div className="circle">MENU</div>
      </div>
      {isExpanded && (
        <div className="nav-items">
          <div className="circle"><a href='#home'>HOME</a></div>
          <div className="circle"><a href='#pre-gandhaar'>PRE-GANDHAAR</a></div>
          <div className="circle"><a href='#day-wise-themes'>DAY-WISE THEMES</a></div>
          <div className="circle"><a href='#team'>TEAM</a></div>
        </div>

      )}
    </div>
  );
};

export default Navbar;
