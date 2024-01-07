import React from 'react';
import './cult.css';

import anwesha from './imgs/anwesha.jpeg';
import rucha from './imgs/rucha.jpeg';
import smruti from './imgs/smruti.jpeg';
import sakshi from './imgs/sakshi.jpeg';
import sneha from './imgs/sneha.jpeg';
import saniya from './imgs/saniya.JPG';
import asmita from './imgs/asmita.jpg';

const CulturalPanel = () => {

    const CulturalPanelMembers = [
        {
            id: 6,
            imgSrc: rucha,
            name: "Rucha Joshi",
            post: "Assistant Cultural Secretary",
            socialLinks: {
                email: "rucha.v.joshi@cumminscollege.in",
                instagram: "https://www.instagram.com/jorucha?igsh=MTg4OXN1aTJlZGZsbg==",
                linkedin: "https://www.linkedin.com/in/rucha-joshi-79744b259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            },
        },
        {
            id: 4,
            imgSrc: sneha,
            name: "Sneha Ganjoo",
            post: "Assistant Cultural Secretary",
            socialLinks: {
                email: "sneha.ganjoo@cumminscollege.in",
                instagram: "https://instagram.com/sneha_ganjoo",
                linkedin: "http://linkedin.com/in/snehaganjoo",
            },
        },
        {
            id: 2,
            imgSrc: anwesha,
            name: "Anwesha Sen",
            post: "Assistant Cultural Secretary",
            socialLinks: {
                email: "anwesha.sen@cumminscollege.in ",
                instagram: "https://www.instagram.com/anweshasen_?igsh=MWZiZjBteHJxN3VlcQ%3D%3D&utm_source=qr",
                linkedin: "https://www.linkedin.com/in/anwesha-sen-01907027b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            },
        },
        {
            id: 4,
            imgSrc: sakshi,
            name: "Sakshi Todmal",
            post: "Cultural Secretary",
            socialLinks: {
                email: "sakshi.todmal@cumminscollege.in",
                instagram: "https://www.instagram.com/sakshi_todmal?igsh=YnBkdmhuYTBlbWtq",
                linkedin: "https://www.linkedin.com/in/sakshi-todmal-1a6004229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            },
        },
        {
            id: 3,
            imgSrc: asmita,
            name: "Asmita Jadhav",
            post: "Assistant Cultural Secretary",
            socialLinks: {
                email: "asmita.jadhav@cumminscollege.in",
                instagram: "https://www.instagram.com/ashu_djadhav2911?igsh=MW0yeGNmcmdrM2YyYg==",
                linkedin: "https://www.linkedin.com/in/asmita-d-jadhav/",
            },
        },
        
        {
            id: 5,
            imgSrc: smruti,
            name: "Smruti Khatawkar",
            post: "Assistant Cultural Secretary",
            socialLinks: {
                email: "smruti.khatawkar@cumminscollege.in",
                instagram: "https://www.instagram.com/not_smriti?igsh=czNsMHdzYjNwZHBs",
                linkedin: "https://www.linkedin.com/in/smruti-khatawkar-76998824b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            },
        },
        
        {
            id: 7,
            imgSrc: saniya,
            name: "Saniya Pawar",
            post: "Assistant Cultural Secretary",
            socialLinks: {
                email: "saniya.pawar@cumminscollege.in",
                instagram: "https://www.instagram.com/saniya.pawar06?igsh=MWMxNHV6cmt5N3RpaA==",
                linkedin: "https://www.linkedin.com/in/saniya-pawar-732613270/",
            },
        },
    ];

    return (
        <div className="panel-cards">

            {/* <div className="cs">
                <div className="card1">
                    <div className="imgBx">
                        <img src={sakshi} alt="images"></img>
                    </div>
                    <div className="details">
                        <h2>Sakshi Todmal<br></br><span>Cultural Secretary</span></h2>
                        <div className="social-icons">
                            <div className='social'><a href="mailto:sakshi.todmal@cumminscollege.in" target='_blank'><i className="icon-envelope"></i></a></div>
                            <div className='social'><a href="https://www.instagram.com/sakshi_todmal?igsh=YnBkdmhuYTBlbWtq" target='_blank'><i className="icon-instagram"></i></a></div>
                            <div className='social'><a href="https://www.linkedin.com/in/sakshi-todmal-1a6004229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><i className="icon-linkedin"></i></a></div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className='cs'>
            {
                CulturalPanelMembers.map((member) => (
                    <div className="card1" key={member.id}>
                        <div className="imgBx">
                            <img src={member.imgSrc} alt="images" />
                        </div>
                        <div className="details">
                            <h2>{member.name}<br /><span>{member.post}</span></h2>
                            <div className="social-icons">
                                <div className='social'><a href={`mailto:${member.socialLinks.email}`}  target='_blank'><i className="icon-envelope"></i></a></div>
                                <div className='social'><a href={member.socialLinks.instagram}  target='_blank'><i className="icon-instagram"></i></a></div>
                                <div className='social'><a href={member.socialLinks.linkedin}  target='_blank'><i className="icon-linkedin"></i></a></div>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
        </div >
    );
}

export default CulturalPanel;
