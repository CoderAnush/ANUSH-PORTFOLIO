"use client";
import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import setSplitText from "./utils/splitText";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    
    // Hide Scroll CTA on scroll
    const scrollHandler = () => {
      const cta = document.getElementById("scroll-cta-main");
      if (cta) {
        if (window.scrollY > 100) {
          cta.style.opacity = "0";
          cta.style.pointerEvents = "none";
        } else {
          cta.style.opacity = "1";
          cta.style.pointerEvents = "auto";
        }
      }
    };
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [isDesktopView]);

  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      
      {/* Scroll Down CTA rendered outside smooth-wrapper to overlay above 3D Canvas */}
      <div id="scroll-cta-main" className="scroll-down-cta" onClick={handleScrollDown} style={{ transition: "opacity 0.3s ease" }}>
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

      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <WhatIDo />
            <Career />
            <Work />
            {isDesktopView && (
              <Suspense fallback={<div>Loading....</div>}>
                <TechStack />
              </Suspense>
            )}
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
