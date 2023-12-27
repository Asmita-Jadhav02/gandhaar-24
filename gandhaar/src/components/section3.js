import React from "react";
import Themes from "./section_3/themes";
import './section_3/themes.css'
import Map from "./section_3/map";

const Section3 = () => {
    return (
        <>
            <div className="gandhaar_themes" style={{ height: '120vh', background: "linear-gradient(0deg, rgba(242,239,217,1) 7%, rgba(149,196,181,1) 42%, rgba(117,181,169,1) 57%, rgba(72,160,151,1) 73%, rgba(45,148,141,1) 92%)" }}>
                <h1 style={{ margin: "auto", paddingTop: "7vh", paddingBottom: "7vh" }}>
                    <span className="theme_title" >Gandhaar Themes</span>
                    
                </h1>
                <div style={{ height: '75vh', position: 'relative' }}>
                    <Map></Map>
                    <Themes></Themes>
                </div>
            </div>
        </>
    )

}

export default Section3