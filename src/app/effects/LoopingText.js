import { motion } from "motion/react";


const DURATION = 32;
const fadeInTime = 0.1;
const visibleTime = 4;
const fadeOutTime = 0.5;

const secondsToFraction = (s) => s / DURATION;

export default function LoopingText({children}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 1, 0, 0] }}
      transition={{
        duration: DURATION,
        times: [
          secondsToFraction(0),                    // Start invisible
          secondsToFraction(fadeInTime),           // Fully visible
          secondsToFraction(fadeInTime + visibleTime), // Start fading out
          secondsToFraction(fadeInTime + visibleTime + fadeOutTime), // Fully invisible
          1                                        // Stay invisible till end
        ],
        ease: 'easeInOut',
        repeat: Infinity,
      }}
      
    >
      {children}
    </motion.div>
  );
}
