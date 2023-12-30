// PanelMembers.js

import React from 'react';
import teamData from './teamData.json';
import './TeamCarousel.css';

const PanelMembers = () => {
  return (
   <>
   <div className="team-carousel">
      <div className="team-members">
        {teamData.map((member) => (
          <div key={member.id} className="team-member">
            <img src={member.image} alt={member.name} className="member-image" />
            <h3 className="member-name">{member.name}</h3>
            <p className="member-title">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
   </>
  );
};

export default PanelMembers;
