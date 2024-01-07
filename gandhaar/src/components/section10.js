import React from "react";
import DeveloperTeam from "./section_10/developers";

const Section10 = () => {
    return (
        <div style={{height:'max-content', background: 'linear-gradient(0deg, rgba(242,239,217,1) 0%, rgba(241,230,210,1) 15%, rgba(237,180,173,1) 41%, rgba(234,143,145,1) 58%, rgba(231,107,118,1) 81%, rgba(230,97,110,1) 100%)'}}>
            <h1 className='dev-title'>Developer Team</h1>
            <DeveloperTeam> </DeveloperTeam>
        </div>
    )
}

export default Section10