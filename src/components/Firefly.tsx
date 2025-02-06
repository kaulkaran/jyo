import React from 'react';
import { motion } from 'framer-motion';

const Firefly = () => {
  const randomPosition = () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
  });

  const variants = {
    animate: {
      x: [0, 10, -10, 0],
      y: [0, -10, 10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="absolute w-2 h-2 rounded-full bg-yellow-300/50 blur-sm"
      style={randomPosition()}
      variants={variants}
      animate="animate"
    />
  );
};

export default Firefly;