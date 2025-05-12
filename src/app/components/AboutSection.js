import { motion } from "motion/react";
import VideoBackground from "./VideoBackground";

export default function AboutSection() {
  return (
    <div>
      <div>
               <VideoBackground 
   src="https://cdn.jsdelivr.net/gh/ViggsV/files@main/full%20flow.webm" 
 />
 </div>
    <div className="z-10">
      <motion.div
        initial={{ opacity: 0, filter: "blur(8px) brightness(55)" }}
        animate={{ opacity: 1, filter: "blur(2px) brightness(1)" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-5xl text-orange-400 mb-4">About Me</h2>
      </motion.div>
      <div className="flex p-6 bg-black/70 border-l-4 border-orange-500 text-gray-300 max-w-3xl">
        <p className="mb-4">
          Welcome to my portfolio. I'm a developer passionate about creating
          unique digital experiences.
        </p>
        <p>
          My skills include web development, UI/UX design, and creative coding.
        </p>
        </div>
      </div>
    </div>
  );
}
