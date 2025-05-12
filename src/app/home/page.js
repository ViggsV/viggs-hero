"use client";
import { useState } from "react";
import MenuButton from "../components/Menubutton.js";
import Title from "../components/Title.js";
import { AnimatedNoise } from "../effects/animated-noise";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import { motion, AnimatePresence } from "motion/react";
import SectionMotion from "../effects/SectionMotion.js";

// Main App Component
export default function HalfLifePortfolio() {
  const [currentSection, setCurrentSection] = useState(null);
  const [showMenu, setShowMenu] = useState(true);

  const handleMenuClick = (section) => {
    setCurrentSection(section);
    setShowMenu(false);
  };

  const handleBackClick = () => {
    setCurrentSection(null);
    setShowMenu(true);
  };

  return (
    <div className="relative h-full w-full overflow-hidden flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-900 to-black p-8 font-mono z-1">
      <div className="w-full ">

        <AnimatedNoise opacity={0.1} />

        {showMenu ? (
          <div className="flex flex-col items-left mt-6 ">
            <Title />



            <MenuButton text="ABOUT" onClick={() => handleMenuClick("about")} />
            <MenuButton
              text="PROJECTS"
              onClick={() => handleMenuClick("projects")}
            />
            <MenuButton
              text="CONTACT"
              onClick={() => handleMenuClick("contact")}
            />
            <MenuButton
              text="RESUME"
              onClick={() => window.open("/resume.pdf", "_blank")}
            />
          </div>
        ) : (
          <div className="mt-6">
            <AnimatePresence mode="wait">
              {currentSection === "about" && (
                
                  <AboutSection />
                
              )}
              {currentSection === "projects" && (
                <SectionMotion key="projects">
                  <ProjectsSection />
                </SectionMotion>
              )}
              {currentSection === "contact" && (
                <SectionMotion key="contact">
                  <ContactSection />
                </SectionMotion>
              )}
            </AnimatePresence>

            <div className="mt-8 ">
              <MenuButton text="BACK" onClick={handleBackClick} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
