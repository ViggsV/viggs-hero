import { motion } from "motion/react";
import VideoBackground from "./VideoBackground";

export default function AboutSection() {
  return (
    <div>
      <div>
        <VideoBackground src="https://cdn.jsdelivr.net/gh/ViggsV/files@main/full%20flow.webm" />
      </div>

      <div className="z-10 md:hidden">
        <motion.div
          initial={{ opacity: 0, filter: "blur(8px) brightness(55)" }}
          animate={{ opacity: 1, filter: "blur(2px) brightness(1)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-5xl text-orange-400 mb-4">About Me</h2>
        </motion.div>
        <div className="block p-6 bg-black/70 border-l-4 border-orange-500 text-gray-300 max-w-3xl">
          <p className="mb-4">
            Welcome to my portfolio. I'm a developer passionate about creating
            unique digital experiences.
          </p>
          <p>
            My skills include web development, UI/UX design, and creative
            coding.
          </p>
        </div>
      </div>
      {/* ✅ Desktop Variant */}
      {/* ——— Desktop: One text overlay per scene ——— */}
      <div className="hidden md:block select-none inset-0 z-10 text-white">
        {/* Scene 1: MY NAME */}

        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 max-w-md text-center ">
        
          <p className="text-2xl">My name is Viggs.</p>
        </div>

        {/* Scene 2: I WANT YOU SUCCEED */}
        <div className="absolute bottom-[10%] left-1/2  -translate-x-1/2  text-center max-w-sm">
          <p className="text-3xl font-semibold">
            I want <span className="text-orange-400">YOU</span> to succeed.
          </p>
        </div>

        {/* Scene 3: Babushka  */}
        <div className="absolute top-[60%] right-[10%] max-w-sm text-right">
          <p className="text-xl italic">I am willing to help.</p>
        </div>

        {/* Scene 4: Portrait stroke → bottom-center */}
        <div className="absolute top-[35%] left-[20%]  -translate-x-1/2 max-w-lg text-center space-y-2">
          <p className="text-lg">Skills & Tools:</p>
          <ul className="list-disc list-inside text-gray-200">
            <li>JavaScript & TypeScript</li>
            <li>React & Next.js</li>
            <li>TailwindCSS & Motion One</li>
            <li>Adobe After Effects & Creative Coding</li>
          </ul>
        </div>
        {/* Add more phases/snippets here */}
      </div>
    </div>
  );
}
