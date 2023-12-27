import React from "react";
import PlaneAnimation from "./section_2/plane_animate";
import Polaroid from "./section_2/polaroids";

const Section2 = () => {
    return (
        <div className="section2" style={{position: 'relative', background: "linear-gradient(0deg, rgba(45,148,141,1) 0%, rgba(61,155,147,1) 24%, rgba(101,174,163,1) 46%, rgba(117,181,169,1) 53%, rgba(149,196,181,1) 66%, rgba(197,218,200,1) 86%, rgba(242,239,217,1) 100%)"}}>
            <PlaneAnimation/>
            <Polaroid />
        </div>
    );
}

export default Section2