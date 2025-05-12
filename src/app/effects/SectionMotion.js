'use client'
import { motion } from 'motion/react';

export default function SectionMotion({ children, keyName }) {
  return (
    <motion.div
      key={keyName}
      initial={{ opacity: 0, y: 20, }}
      animate={{ opacity: 1, y: 0, }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

