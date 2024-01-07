import React from "react";
import Themes from "./section_3/themes";
import './section_3/themes.css'
import Map from "./section_3/map";

const Section3 = () => {
    return (
        <div className="section3">
            <div className="gandhaar_themes">
                <h1 style={{ margin: "auto", paddingTop: "7vh", paddingBottom: "7vh" }}>
                    <span className="theme_title" >Gandhaar Themes</span>
                    
                </h1>
                <div style={{ height: '75vh', position: 'relative' }}>
                    <Map></Map>
                    <Themes></Themes>
                </div>
            </div>
        </div>
    )

}

export default Section3