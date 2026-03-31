"use client";
import { PropsWithChildren } from "react";
// import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              ANUSH
              <br />
              <span>RAMESH</span>
            </h1>
          </div>
          <div className="landing-info">
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">DATA SCIENTIST</div>
              <div className="landing-h2-2">AI/ML ENGINEER</div>
            </h2>
            <h2>
              <div className="landing-h2-info">AI/ML ENGINEER</div>
              <div className="landing-h2-info-1">DATA SCIENTIST</div>
            </h2>
          </div>
          <div className="scroll-down-cta" onClick={handleScrollDown}>
            <span className="cta-text">Scroll Down</span>
            <svg 
              className="cta-chevron" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
