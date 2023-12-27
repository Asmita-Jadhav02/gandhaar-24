import React from "react";
import s_logo from "./logos/sanstha-logo.png";
import c_logo from "./logos/college-logo.png";
import './header.css'

const Header = () => {
  return (
    <div className="header">

      <div className="lg1">
        <img id="logo1" src={s_logo} alt="Logo 1" />
      </div>

      <div className="college-name">
        MKSSS's Cummins College of Engineering for Women, Pune
      </div>

      <div className="lg2">
        <img id="logo2" src={c_logo} alt="Logo 2" />
      </div>
    </div>
  );
}

export default Header