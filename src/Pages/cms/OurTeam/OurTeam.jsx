import React, { useEffect } from 'react';
import './Team.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  const teamMembers = [
    {
      name: "For Fitness",
      title: "CEO",
      imgSrc: "https://www.boat-lifestyle.com/cdn/shop/files/jemmi_d1dd51d5-8b8b-47ad-9920-f8594669cbb2.png?v=1726059408", 
    },
    {
      name: "For Parties",
      title: "TRAINER",
      imgSrc: "https://www.boat-lifestyle.com/cdn/shop/files/Ranveer.png?v=1726038549",
    },
    {
      name: "For Work",
      title: "CEO",
      imgSrc: "https://www.boat-lifestyle.com/cdn/shop/files/Aman.png?v=1726038424"
    },
    {
      name: "For Audiophiles",
      title: "TRAINER",
      imgSrc: "https://www.boat-lifestyle.com/cdn/shop/files/YJ.png?v=1726059363"
    },
  ];

  return (
    <div className="team-container">
      <h2>Our Team</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      
      <div className="grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index} data-aos="fade-up">
            <img src={member.imgSrc} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.title}</p>

            <div className="social-icons">
              <IconButton href="https://facebook.com" target="_blank" color="inherit" sx={{ '&:hover': { color: '#1877f2' } }}>
                <Facebook />
              </IconButton>

              <IconButton href="https://twitter.com" target="_blank" color="inherit" sx={{ '&:hover': { color: '#1da1f2' } }}>
                <Twitter />
              </IconButton>

              <IconButton href="https://instagram.com" target="_blank" color="inherit" sx={{ '&:hover': { color: '#e1306c' } }}>
                <Instagram />
              </IconButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
