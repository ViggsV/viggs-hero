import React from 'react';
import { motion } from 'framer-motion'; // use correct package

export default function TypeEffect({ children, transition = {} }) {
  const text = typeof children === 'string' ? children : '';

  return (
<span>
  {text.split('').map((letter, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: {
          ...transition,
          delay: (transition.delay || 0) + index * 0.1,  // staggered entry delay
          duration: transition.duration || 0.2,
        }
      }}
    

    >
      {letter}
    </motion.span>
  ))}
</span>
  );
}
