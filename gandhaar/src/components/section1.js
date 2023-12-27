import React from "react";
import GlobeAnimation from "./section_1/globe_animate";
import Gandhaar from "./section_1/gandhaar";

const Section1 = () => {
    return (
        <div className="section1">
            <Gandhaar></Gandhaar>
            <GlobeAnimation></GlobeAnimation>
        </div>
    );
}

export default Section1