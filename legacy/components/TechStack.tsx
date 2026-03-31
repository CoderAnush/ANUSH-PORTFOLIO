"use client";
import React from "react";

const groupedSkills = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "C/C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    ]
  },
  {
    category: "ML & Data Science",
    skills: [
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
      { name: "Keras", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg" },
      { name: "scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
      { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
      { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
      { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" },
      { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
    ]
  },
  {
    category: "Tools & Frameworks",
    skills: [
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
      { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
      { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" },
    ]
  }
];

type TechItem = { name: string; icon: string };

const TechGrid = ({ items }: { items: TechItem[] }) => (
  <div className="tech-grid" style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    marginBottom: '40px'
  }}>
    {items.map((tech, index) => (
      <div className="marquee-item tech-item" key={index} style={{ margin: '0' }}>
        <div className="icon-container">
          <img
            src={tech.icon}
            alt={tech.name}
            className={tech.name === "GitHub" ? "github-icon" : ""}
            loading="lazy"
          />
        </div>
        <span style={{color: '#fff'}}>{tech.name}</span>
      </div>
    ))}
  </div>
);

const TechStack = () => {
  return (
    <div className="techstack" id="techstack">
      
      {/* Proof of Skill Section */}
      <div className="problem-solving-section" style={{ marginBottom: '80px', textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px auto' }}>
        <h2>Problem Solving</h2>
        <p style={{ fontSize: '18px', color: '#ccc', lineHeight: '1.6', marginBottom: '30px' }}>
          Currently practicing Data Structures and Algorithms on LeetCode, focusing on core patterns and problem-solving skills.
        </p>
        <div className="dsa-links" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://github.com/CoderAnush/LEETCODE-SOLUTIONS" target="_blank" rel="noreferrer" className="marquee-item" style={{
            padding: '12px 24px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', 
            borderRadius: '10px', color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px',
            flexDirection: 'row', width: 'auto', height: 'auto', fontWeight: 'bold'
          }}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="github-icon" style={{ width: '24px', height: '24px', margin: 0 }} />
            LeetCode Solutions
          </a>
          <a href="https://github.com/CoderAnush/GFG-SOLUTIONS" target="_blank" rel="noreferrer" className="marquee-item" style={{
             padding: '12px 24px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', 
             borderRadius: '10px', color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px',
             flexDirection: 'row', width: 'auto', height: 'auto', fontWeight: 'bold'
          }}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="github-icon" style={{ width: '24px', height: '24px', margin: 0 }} />
            GFG Solutions
          </a>
        </div>
      </div>

      <h2>Tech Stack</h2>

      <div className="tech-container">
        {groupedSkills.map((group, index) => (
          <div key={index} className="tech-group-block">
            <h3 style={{fontSize: '24px', color: '#fff', textAlign: 'center', marginBottom: '30px', fontWeight: '500'}}>{group.category}</h3>        
            <TechGrid items={group.skills} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
