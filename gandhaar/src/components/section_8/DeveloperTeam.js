// DeveloperTeam.js

import React from 'react';
import './TeamCarousel.css';
import teamData from './teamData.json';

const DeveloperTeam = () => {
  return (
   <>
    <div className="team-carousel">
    <h2 className="grid-title">Website & App Development Team</h2>
      <div className="team-members">
        {teamData.map((member) => (
          <div key={member.id} className="team-member">
            <img src={member.image} alt={member.name} className="member-image" />
            <h3 className="member-name">{member.name}</h3>
          </div>
        ))}
      </div>
    </div>
   </>
  );
};

export default DeveloperTeam;
