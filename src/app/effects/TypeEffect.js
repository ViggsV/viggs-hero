import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TypeEffect({ children, transition = {}, isVisible = true }) {
  const text = typeof children === 'string' ? children : '';

  return (
    <span>
      <AnimatePresence >
        {isVisible &&
         text.split('').map((letter, index) => {
  const displayLetter = letter === ' ' ? '\u00A0' : letter;
  return (
    <motion.span
      key={letter + index}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          ...transition,
          delay: (transition.delay || 0) + index * 0.1,
          duration: transition.duration || 0.2,
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          delay: index * 0.05,
          duration: 0.2,
        },
      }}
      style={{ display: 'inline-block' }}
    >
      {displayLetter}
    </motion.span>
  );
})}
      </AnimatePresence>
    </span>
  );
}
