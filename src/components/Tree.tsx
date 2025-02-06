import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Tree = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <svg
      className="absolute left-1/2 -translate-x-1/2 bottom-0 h-screen w-auto opacity-20"
      viewBox="0 0 200 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M100 400 L100 300 Q100 200 150 150 T100 50 Q80 0 100 0"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: isVisible ? 1 : 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      {/* Branches */}
      {[...Array(6)].map((_, i) => (
        <motion.path
          key={i}
          d={`M100 ${300 - i * 50} Q${i % 2 ? 150 : 50} ${280 - i * 50} ${i % 2 ? 180 : 20} ${290 - i * 50}`}
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isVisible ? 1 : 0 }}
          transition={{ duration: 1, delay: 2 + i * 0.2 }}
        />
      ))}
    </svg>
  );
};

export default Tree;