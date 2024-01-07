import React from "react";
import Schedule from "./section_6/schedule";


const Section6 = () => {
    return (
        <div style={{minHeight:'100vh', height: 'max-content', background: 'linear-gradient(0deg, rgba(45,148,141,1) 0%, rgba(61,155,147,1) 24%, rgba(101,174,163,1) 46%, rgba(117,181,169,1) 53%, rgba(149,196,181,1) 66%, rgba(197,218,200,1) 86%, rgba(242,239,217,1) 100%)'}}>
            <h1 className="schedule-title">Schedule</h1>
            <Schedule></Schedule>
        </div>

    )
}

export default Section6