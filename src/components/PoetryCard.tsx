import React from 'react';
import { motion } from 'framer-motion';

interface PoetryCardProps {
  title: string;
  preview: string;
  fullPoem: string;
  image: string;
  onClick: () => void;
}

const PoetryCard: React.FC<PoetryCardProps> = ({ title, preview, image, onClick }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
      }}
      className="relative overflow-hidden rounded-xl md:rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg cursor-pointer w-full max-w-xs transition-colors hover:bg-white/90 group"
      onClick={onClick}
    >
      <div className="aspect-[3/4] overflow-hidden">
        <motion.img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
          initial={false}
        />
      </div>
      <div className="p-3 md:p-4">
        <h3 className="font-serif text-base md:text-lg font-semibold text-pink-800 mb-1 md:mb-2">{title}</h3>
        <p className="font-sans text-xs md:text-sm text-gray-600 italic">{preview}</p>
      </div>
      <motion.div
        className="absolute inset-0 bg-pink-500/10 opacity-0 group-hover:opacity-100"
        initial={false}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default PoetryCard;