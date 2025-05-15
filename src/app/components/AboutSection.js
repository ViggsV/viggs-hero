import { motion, AnimatePresence } from "motion/react";
import React, { useState, useEffect } from "react";
import VideoBackground from "./VideoBackground";
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiAdobeaftereffects } from 'react-icons/si';
import { TbBrandMotion } from 'react-icons/tb'; // Motion One icon (using Tabler Icons as no direct icon in Simple Icons)


import TypeEffect from "../effects/TypeEffect";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isTwoVisible, setIsTwoVisible] = useState(false);
  const [isThreeVisible, setIsThreeVisible] = useState(false);
  const [isFourVisible, setIsFourVisible] = useState(false);
  const [isFiveVisible, setIsFiveVisible] = useState(false);

  useEffect(() => {
    const showTimeout = setTimeout(() => {
      setIsVisible(true); // Show after 1s
    }, 8900);

    const hideTimeout = setTimeout(() => {
      setIsVisible(false); // Hide after 4s total
    }, 10500);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);
  useEffect(() => {
    const showTwoTimeout = setTimeout(() => {
      setIsTwoVisible(true); // Show after 1s
    }, 9400);

    const hideTwoTimeout = setTimeout(() => {
      setIsTwoVisible(false); // Hide after 4s total
    }, 10800);

    return () => {
      clearTimeout(showTwoTimeout);
      clearTimeout(hideTwoTimeout);
    };
  }, []);
  useEffect(() => {
    const showThreeTimeout = setTimeout(() => {
      setIsThreeVisible(true); // Show after 1s
    }, 9600);

    const hideThreeTimeout = setTimeout(() => {
      setIsThreeVisible(false); // Hide after 4s total
    }, 10900);

    return () => {
      clearTimeout(showThreeTimeout);
      clearTimeout(hideThreeTimeout);
    };
  }, []);
  useEffect(() => {
    const showFourTimeout = setTimeout(() => {
      setIsFourVisible(true); // Show after 1s
    }, 16000);

    const hideFourTimeout = setTimeout(() => {
      setIsFourVisible(false); // Hide after 4s total
    }, 22000);

    return () => {
      clearTimeout(showFourTimeout);
      clearTimeout(hideFourTimeout);
    };
  }, []);
  useEffect(() => {
    const showFiveTimeout = setTimeout(() => {
      setIsFiveVisible(true); // Show after 1s
    }, 25000);



    return () => {
      clearTimeout(showFiveTimeout);

    };
  }, []);

  return (
    <div>
      <div>
        <VideoBackground
          src="https://cdn.jsdelivr.net/gh/ViggsV/files@main/full%20flow.webm"
          loopStart={27.5}
          loopEnd={30.5}
        />
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
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: [0, 1, 0] }}
          transition={{ duration: 6, delay: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2 max-w-md text-center ">
            <p className="text-white text-2xl">My name is Viggs.</p>
          </div>
        </motion.div>

        {/* Scene 2: I WANT YOU SUCCEED */}


        {/* <div className=" text-red-800 absolute bottom-[10%] left-1/2  -translate-x-1/2  text-center max-w-sm text-nowrap">
          <p className="text-3xl font-semibold">
           <TypeEffect isVisible={isVisible} transition={{ delay: 0 }}>
             
              I want
            </TypeEffect>{" "}
            <span className="text-orange-400 ">
              <motion.span
                className="relative inline-block"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{
                  duration: 0.8,
                  delay: 9.5,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                YOU
              </motion.span>{" "}
            </span>

            <TypeEffect  isVisible={isTwoVisible} transition={{ delay: 0 }}>to succeed.</TypeEffect>
          </p>
        </div> */}

{/* "I want" */}
<p className="text-black text-3xl font-semibold absolute bottom-[10%] left-1/2 -translate-x-[10rem]">
  <TypeEffect isVisible={isVisible} transition={{ delay: 0 }}>
    I want
  </TypeEffect>
</p>

{/* "YOU" */}
<AnimatePresence mode="wait">
  {isTwoVisible && (
    <p className="text-orange-400 text-3xl font-semibold absolute bottom-[10%] left-1/2 -translate-x-[1.8rem]">
      <span className="relative inline-block w-[3ch] text-center">
        {/* YOU */}
        <motion.span
          key="you"
          className="absolute left-0 top-[-5] w-full"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{
            duration: 0.4,
            delay: 0,
            type: "spring",
            stiffness: 100,
          }}
        >
          YOU
        </motion.span>

        {/* US */}
        <motion.span
          key="us"
          className="absolute left-0 top-[-5] w-full"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{
            duration: 0.4,
            delay: 0.4,
            type: "spring",
            stiffness: 100,
          }}
        >
          US
        </motion.span>
        <motion.span
          key="him"
          className="absolute left-0 top-[-10] w-full"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{
            duration: 0.4,
            delay: 0.6,
            type: "spring",
            stiffness: 100,
          }}
        >
          HIM
        </motion.span>
        <motion.span
          key="her"
          className="absolute left-0 top-[-5] w-full"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{
            duration: 0.5,
            delay: 1,
            type: "spring",
            stiffness: 100,
          }}
        >
          HER
        </motion.span>
      </span>
    </p>
  )}
</AnimatePresence>
{/* "to succeed." */}
<p className="text-black text-3xl font-semibold absolute bottom-[10%] left-1/2 translate-x-[3.4rem]">
  <TypeEffect isVisible={isThreeVisible} transition={{ delay: 0 }}>
    to succeed.
  </TypeEffect>
</p>
        

        {/* Scene 3: Babushka  */}
        <div className="absolute top-[60%] right-[10%] max-w-sm text-right">
          <p className="text-xl italic"><TypeEffect isVisible={isFourVisible} transition={{ delay: 0 }}>I am willing to help.</TypeEffect></p>
        </div>

        {/* Scene 4: Portrait stroke → bottom-center */}
 <div className="absolute top-[35%] left-[20%] -translate-x-1/2 max-w-lg text-left space-y-4">
  <p className="text-lg font-semibold text-gray-100 mb-2">
    <TypeEffect isVisible={isFiveVisible} transition={{ delay: 0 }}>
      Skills & Tools:
    </TypeEffect>
  </p>
  <ul className="list-none">
    {[
      { name: 'JavaScript', icon: <motion.span className="text-yellow-400"  initial={{ opacity: 0, x: -10 }}
    animate={isFiveVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
    transition={{ duration: 0.5, delay: 0.3 }}  ><SiJavascript size={22} /> </motion.span>},
      { name: 'React', icon: <motion.span className="text-cyan-400" initial={{ opacity: 0, x: -10 }}
    animate={isFiveVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
    transition={{ duration: 0.5, delay: 0.3 }}> <SiReact  size={22} /></motion.span> },
      { name: 'Tailwind', icon: <motion.span  className="text-sky-400" initial={{ opacity: 0, x: -10 }}
    animate={isFiveVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
    transition={{ duration: 0.5, delay: 0.3 }}><SiTailwindcss size={22} /></motion.span> },
      { name: 'Adobe After Effects', icon: <motion.span  initial={{ opacity: 0, x: -10 }}
    animate={isFiveVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
    transition={{ duration: 0.5, delay: 0.3 }}
    className="text-red-600"><SiAdobeaftereffects size={22}/></motion.span>  },
    ].map(({ name, icon }) => (
      <li key={name} className="flex items-center gap-3 text-gray-200 text-xl font-medium">
        <TypeEffect isVisible={isFiveVisible} transition={{ delay: 0 }}>
          {name}
        </TypeEffect>
        {icon}
      </li>
    ))}
  </ul>
</div>
        {/* Add more phases/snippets here */}
      </div>
    </div>
  );
}
