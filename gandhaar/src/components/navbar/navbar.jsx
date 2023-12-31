import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleMenu = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className={`navbar ${isExpanded ? 'expanded' : ''}`}>
      <div className="menu-button" onClick={toggleMenu}>
        {isExpanded ? (
          <div className="circle">&#10006;</div>
        ) : (
          <div className="circle">MENU</div>
        )}
      </div>
      {isExpanded && (
        <div className="nav-items">
          <div className="circle"><a href='#home'>HOME</a></div>
          <div className="circle"><a href='#themes'>THEMES</a></div>
          <div className="circle"><a href='#events'>DAY-WISE THEMES</a></div>
          <div className="circle"><a href='#gallery'>GALLERY</a></div>
        </div>

      )}
    </div>
  );
};

export default Navbar;