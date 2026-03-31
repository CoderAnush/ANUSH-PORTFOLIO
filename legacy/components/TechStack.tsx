"use client";
import React from "react";

const techSkills = [
  { name: "C/C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
  { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
  { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" },
  { name: "scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
  { name: "Keras", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg" },
  { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
  { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg" },
  { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
];

const row1 = techSkills.slice(0, 10);
const row2 = techSkills.slice(10, 20);

// Helper component for Marquee row
const TechMarqueeRow = ({ items, reverse = false }: { items: typeof techSkills, reverse?: boolean }) => (
  <div className="marquee-wrapper">
    <div className={`marquee-track ${reverse ? "scroll-right" : "scroll-left"}`}>
      <div className="marquee-group">
        {items.map((tech, index) => (
          <div className="marquee-item" key={`g1-${index}`}>
            <div className="icon-container">
              <img 
                src={tech.icon} 
                alt={tech.name} 
                className={tech.name === "GitHub" ? "github-icon" : ""} 
                loading="lazy"
              />
            </div>
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
      <div className="marquee-group" aria-hidden="true">
        {items.map((tech, index) => (
          <div className="marquee-item" key={`g2-${index}`}>
            <div className="icon-container">
              <img 
                src={tech.icon} 
                alt={tech.name} 
                className={tech.name === "GitHub" ? "github-icon" : ""} 
                loading="lazy"
              />
            </div>
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const TechStack = () => {
  return (
    <div className="techstack" id="techstack">
      <h2>My Techstack</h2>

      <div className="tech-frame-animated">
        <div className="tech-fade-left"></div>
        <div className="tech-fade-right"></div>
        
        <TechMarqueeRow items={row1} />
        <TechMarqueeRow items={row2} reverse={true} />
        
      </div>
    </div>
  );
};

export default TechStack;
