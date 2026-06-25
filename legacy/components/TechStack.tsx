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
    category: "Machine Learning & AI",
    skills: [
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
      { name: "Keras", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg" },
      { name: "scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
      { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
      { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
      { name: "RAG (Retrieval-Augmented Generation)", icon: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
      { name: "Vector DBs (Qdrant)", icon: "https://qdrant.tech/img/qdrant-logo.svg" },
      { name: "Knowledge Graphs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" },
      { name: "Edge AI / Real-Time Inference", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
      { name: "Random Forest & XGBoost", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
    ]
  },
  {
    category: "Natural Language Processing (NLP)",
    skills: [
      { name: "Embeddings", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
      { name: "Semantic Search", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" },
      { name: "LangChain", icon: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
      { name: "LangGraph", icon: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
    ]
  },
  {
    category: "Computer Vision",
    skills: [
      { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
      { name: "YOLOv11", icon: "https://avatars.githubusercontent.com/u/53104820?s=200&v=4" },
      { name: "Roboflow", icon: "https://avatars.githubusercontent.com/u/53104820?s=200&v=4" },
      { name: "Object Detection", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
      { name: "Image Classification", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
      { name: "Data Augmentation", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
    ]
  },
  {
    category: "Embedded Systems & IoT",
    skills: [
      { name: "STM32 Microcontrollers", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
      { name: "UART Communication", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
      { name: "ESP32 & Arduino", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg" },
      { name: "Raspberry Pi Pico", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-original.svg" },
      { name: "MQTT Protocols", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg" },
    ]
  },
  {
    category: "Cloud, Infrastructure & Databases",
    skills: [
      { name: "PostgreSQL & Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
      { name: "Streamlit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
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
