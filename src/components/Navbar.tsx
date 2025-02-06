import React, { useState } from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex items-center gap-2 text-pink-600"
            whileHover={{ scale: 1.05 }}
          >
            <Heart className="w-5 h-5 md:w-6 md:h-6" />
            <span className="font-serif text-base md:text-lg font-semibold">For Jyoti</span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            <a href="/" className="text-gray-700 hover:text-pink-600 transition-colors">Home</a>
            <a href="/poetry" className="text-gray-700 hover:text-pink-600 transition-colors">Poetry</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="py-4 space-y-4">
            <a
              href="/"
              className="block text-gray-700 hover:text-pink-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/poetry"
              className="block text-gray-700 hover:text-pink-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Poetry
            </a>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;