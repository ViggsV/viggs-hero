'use client'
import { useState, useEffect } from 'react';
import MenuButton from '../components/Menubutton.js';
import Title from '../components/Title.js';
import { AnimatedNoise } from "../effects/animated-noise";


// Content sections
function AboutSection() {
  return (
    <div className="p-6 bg-black bg-opacity-70 border-l-4 border-orange-500 text-gray-300 max-w-3xl">
      <h2 className="text-2xl text-orange-400 mb-4">About Me</h2>
      <p className="mb-4">Welcome to my portfolio. I'm a developer passionate about creating unique digital experiences.</p>
      <p>My skills include web development, UI/UX design, and creative coding.</p>
    </div>
  );
}

function ProjectsSection() {
  return (
    <div className="p-6 bg-black bg-opacity-70 border-l-4 border-orange-500 text-gray-300 max-w-3xl">
      <h2 className="text-2xl text-orange-400 mb-4">Projects</h2>
      <ul className="list-disc pl-6">
        <li className="mb-3">
          <span className="text-orange-300">Project Alpha</span> - A responsive web application built with React
        </li>
        <li className="mb-3">
          <span className="text-orange-300">Project Beta</span> - Full-stack development with Node.js and MongoDB
        </li>
        <li className="mb-3">
          <span className="text-orange-300">Project Gamma</span> - UI/UX design for a mobile application
        </li>
      </ul>
    </div>
  );
}
function ContactSection() {
  return (
    <div className="p-6 bg-black bg-opacity-70 border-l-4 border-orange-500 text-gray-300 max-w-3xl">
      <h2 className="text-2xl text-orange-400 mb-4">Contact</h2>
      <p className="mb-4">Feel free to reach out through any of these channels:</p>
      <ul className="list-none">
        <li className="mb-2">📧 Email: contact@viggs.dev</li>
        <li className="mb-2">🔗 GitHub: github.com/viggs</li>
        <li className="mb-2">💼 LinkedIn: linkedin.com/in/viggs</li>
      </ul>
    </div>
  );
}

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

   
    <div className=" relative h-full w-full overflow-hidden flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-900 to-black p-8 font-mono">
      <div className="w-full ">

        <Title />
     
         <AnimatedNoise opacity={0.1} />

  
        {showMenu ? (
          <div className="flex flex-col items-left mt-6 ">
            <MenuButton text="ABOUT" onClick={() => handleMenuClick('about')} />
            <MenuButton text="PROJECTS" onClick={() => handleMenuClick('projects')} />
            <MenuButton text="CONTACT" onClick={() => handleMenuClick('contact')} />
            <MenuButton text="RESUME" onClick={() => window.open('/resume.pdf', '_blank')} />
          </div>
        ) : (
          <div className="mt-6">
            {currentSection === 'about' && <AboutSection />}
            {currentSection === 'projects' && <ProjectsSection />}
            {currentSection === 'contact' && <ContactSection />}
            
            <div className="mt-8">
              <MenuButton text="BACK" onClick={handleBackClick} />
            </div>
          </div>
        )}
        

      </div>
    </div>
  );

  
}