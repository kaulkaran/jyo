import React from 'react';
import { Heart, Github, Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative z-10 py-6 md:py-8 mt-12 md:mt-16 border-t border-pink-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-3 md:gap-4">
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="text-pink-500"
          >
            <Heart className="w-6 h-6 md:w-8 md:h-8" />
          </motion.div>
          
          <p className="text-center font-serif text-sm md:text-base text-gray-600 italic px-4">
            "Created with Love"
            <br />
            <span className="text-xs md:text-sm">— Karan Kaul</span>
          </p>

          <div className="flex gap-4 md:gap-6 mt-2 md:mt-4">
            {[
              { icon: Mail, href: "mailto:karankaul02@gmail.com", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-gray-600 hover:text-pink-500 transition-colors"
                aria-label={label}
              >
                <Icon className="w-4 h-4 md:w-5 md:h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;