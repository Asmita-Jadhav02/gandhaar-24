import React from 'react';
import './developers.css';

import adwita from './imgs/AdwitaJainImage.jpeg';
import aishwarya from './imgs/AishwaryaMenonImage.jpeg';
import asmita from './imgs/AsmitaJadhav.jpeg';
import eesha from './imgs/EeshaSatvalekarImage.jpeg';
import harshita from './imgs/HarshitaKhairnar.jpeg';
import khushi from './imgs/KhushiGosavi.jpg';
import mrunal from './imgs/MrunalJambenalImage.jpeg';
import purva from './imgs/PurvaSardaImage.jpeg';
import ruchi from './imgs/RuchiHonaleImage.jpeg';
import sai from './imgs/SaiWaniImage.jpeg';
import sakshi from './imgs/SakshiPawarImage.jpeg';
import snigdha from './imgs/snigdha_photo13.jpeg';



const teamData = [
  {
    "name": "Asmita Jadhav",
    "title": "",
    "image": asmita
    
  },
    {
      "name": "Khushi Gosavi",
      "title": "",
      "image": khushi
      
    },
    {
      "name": "Mrunal Jambenal",
      "title": "",
      "image": mrunal
    },
    {
      "name": "Aishwarya Menon",
      "title": "",
      "image": aishwarya
    },
    {
      "name": "Sakshi Pawar",
      "title": "",
      "image": sakshi
    },
    {
      "name": "Ruchi Honale",
      "title": "",
      "image": ruchi
    },
    {
        "name": "Harshita Khairnar",
        "title": "",
        "image": harshita
      },
      {
        "name": "Sai Wani",
        "title": "",
        "image": sai
      },
    {
      "name": "Snigdha Srivastava",
      "title": "",
      "image": snigdha
    },
    {
      "name": "Purva Sarda",
      "title": "",
      "image": purva
    },
    {
      "name": "Adwita Jain",
      "title": "",
      "image": adwita
    },
    {
      "name": "Eesha Satvalekar",
      "title": "",
      "image": eesha
    }

  ]

const DeveloperTeam = () => {
  return (
   <>
    <div className="team-carousel">
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