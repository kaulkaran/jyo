import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  poem: string;
  image: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, poem, image }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-xl md:rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative aspect-video overflow-hidden rounded-t-xl md:rounded-t-2xl">
              <img src={image} alt={title} className="w-full h-full object-cover" />
              <button
                onClick={onClose}
                className="absolute top-2 right-2 md:top-4 md:right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
              >
                <X className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
              </button>
            </div>
            <div className="p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-semibold text-pink-800 mb-3 md:mb-4">{title}</h2>
              <p className="whitespace-pre-line text-gray-700 leading-relaxed text-sm md:text-base">{poem}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;