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
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
