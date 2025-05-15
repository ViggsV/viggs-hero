import React from "react";
import { motion } from "framer-motion";

const words = ["HIM", "HER", "ME", "YOU","THEM","THEY","ALL","LOVE", "DREAMS", "PEACE", "US"];  
                                                                      
export default function RisingTextSequence({ isVisible }) {
  return (
    isVisible && (
      <p className="text-orange-400 text-3xl font-semibold absolute bottom-[9%] left-1/2 -translate-x-1/2">
        <span className="relative inline-block w-[7ch] text-center h-[2.5rem] overflow-hidden">
          {words.map((word, index) => (
            <motion.span
              key={word}
              className="absolute left-0 top-0 w-full"
              initial={{ opacity: 0, y: 100 }}
                              animate={{
                  opacity: word === "US" ? [0, 1, 1, 0] : [0, 1, 0],
                  y: word === "US" ?  [100, 0, 0, -50] : [100, 0, -50],
                }}  
              transition={{
                duration: 2,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
            >
              {word}
            </motion.span>
          ))}
        </span>
      </p>
    )
  );
}