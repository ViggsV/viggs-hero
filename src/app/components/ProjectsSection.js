import { motion, } from "motion/react";
import React, { useState, useEffect } from "react";
import RisingTextSequence from "./RisingTextSequence";
export default function ProjectsSection() {
  const [isTwoVisible, setIsTwoVisible] = useState(false);
  useEffect(() => {
      const showTwoTimeout = setTimeout(() => {
        setIsTwoVisible(true); // Show after 1s
      }, 100);
  
      // const hideTwoTimeout = setTimeout(() => {
      //   setIsTwoVisible(false); // Hide after 4s total
      // }, 11800);
  
      return () => {
        clearTimeout(showTwoTimeout);
        // clearTimeout(hideTwoTimeout);
      };
    }, []);
  return (

    <div>
            <motion.div
        initial={{ opacity: 0, filter: "blur(8px) brightness(55)" }}
        animate={{ opacity: 1, filter: "blur(2px) brightness(1)" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-5xl text-orange-400 mb-4">Projects</h2>
      </motion.div>
  
    <div className="p-6 bg-black/70 border-l-4 border-orange-500 text-gray-300 max-w-3xl">
      
      <ul className="list-disc pl-6">
        <li className="mb-3"><span className="text-orange-300">Project Alpha</span> - A responsive web application built with React</li>
        <li className="mb-3"><span className="text-orange-300">Project Beta</span> - Full-stack development with Node.js and MongoDB</li>
        <li className="mb-3"><span className="text-orange-300">Project Gamma</span> - UI/UX design for a mobile application</li>
      </ul>
    </div>

    <RisingTextSequence isVisible={isTwoVisible}></RisingTextSequence>
      </div>
      
  );
}
