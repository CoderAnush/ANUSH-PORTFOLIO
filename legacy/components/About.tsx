"use client";
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <div className="about-content">
          <div className="about-text">
            <p className="para">
              Final year B.Tech student in Electrical and Computer Engineering with a strong focus on AI/ML and Data Science.
            </p>
            <p className="para">
              Passionate about building scalable intelligent systems and solving real-world problems through data-driven approaches.
            </p>
          </div>
          <div className="about-photo-card">
             <div className="about-photo-wrapper">
               <Image unoptimized src="/images/anush_photo.jpg" alt="Anush" width={300} height={400} className="about-photo" />
             </div>
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
