import React from 'react';
import { motion } from 'framer-motion';

const FallingLeaf = () => {
  const startX = Math.random() * window.innerWidth;
  
  const variants = {
    initial: { 
      x: startX,
      y: -20,
      rotate: 0,
      opacity: 0 
    },
    animate: {
      x: startX + Math.random() * 100 - 50,
      y: window.innerHeight + 20,
      rotate: 360,
      opacity: [0, 1, 1, 0],
      transition: {
        duration: 10 + Math.random() * 5,
        ease: "linear",
        repeat: Infinity,
        delay: Math.random() * 10
      }
    }
  };

  return (
    <motion.div
      className="absolute w-4 h-4 text-pink-300 pointer-events-none"
      variants={variants}
      initial="initial"
      animate="animate"
    >
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
      </svg>
    </motion.div>
  );
};

export default FallingLeaf;