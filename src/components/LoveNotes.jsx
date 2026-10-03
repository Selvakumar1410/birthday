import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoveNotes = ({ items }) => {
  const [revealedIndex, setRevealedIndex] = useState(-1);

  const handleNext = () => {
    if (revealedIndex < items.length - 1) {
      setRevealedIndex(prev => prev + 1);
    }
  };

  return (
    <section className="py-32 px-6 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl w-full text-center">
        
        {revealedIndex === -1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cursor-pointer group"
            onClick={handleNext}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-wine-300 italic mb-8 group-hover:text-cream-100 transition-colors">
              Click to reveal...
            </h2>
            <div className="w-12 h-12 rounded-full border border-wine-500 mx-auto flex items-center justify-center text-wine-400 group-hover:border-gold-light group-hover:text-gold-light transition-all animate-pulse">
              🤎
            </div>
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          {revealedIndex >= 0 && (
            <motion.div
              key={revealedIndex}
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              transition={{ duration: 0.8 }}
              className="min-h-[200px] flex flex-col items-center justify-center cursor-pointer"
              onClick={handleNext}
            >
              <h3 className="text-wine-400 font-sans tracking-widest text-sm uppercase mb-6">
                {revealedIndex === items.length - 1 ? 'And most importantly...' : 'I love your...'}
              </h3>
              <p className="text-4xl md:text-5xl lg:text-6xl font-serif text-cream-100 leading-tight">
                {items[revealedIndex]}
              </p>
              
              {revealedIndex < items.length - 1 && (
                <p className="text-wine-500/50 mt-12 text-sm italic">Tap to continue</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default LoveNotes;
