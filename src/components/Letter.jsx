import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Letter = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Split your letter into paragraphs or lines for animated reveal
  const letterContent = [
    "Chlm Kuttyyy,",
    "As I sit here thinking about what to write, I realize that words are never quite enough to capture how I feel.",
    "You came into my life and turned the ordinary into something extraordinary. Every laugh, every quiet moment, every look—they all mean the world to me.",
    "Happy Birthday. I hope today brings you even a fraction of the joy you bring me every single day.",
    "And Happy Anniversary to us. I am so incredibly lucky that I get to walk this journey by your side.",
    "Yours always."
  ];

  return (
    <section className="py-32 px-6 bg-wine-900/30 flex items-center justify-center min-h-screen">
      <div className="max-w-2xl w-full">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="envelope"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center justify-center cursor-pointer group"
              onClick={() => setIsOpen(true)}
            >
              <p className="font-serif italic text-2xl text-cream-200 mb-8">
                "I wrote something for you..."
              </p>
              
              {/* Envelope Graphic */}
              <div className="relative w-64 h-40 bg-cream-200 rounded-md shadow-2xl border border-cream-300 transform group-hover:scale-105 transition-transform duration-500">
                {/* Envelope Flap */}
                <div className="absolute top-0 w-full h-0 border-l-[128px] border-r-[128px] border-t-[80px] border-l-transparent border-r-transparent border-t-cream-300 drop-shadow-md z-10"></div>
                
                {/* Wax seal */}
                <div className="absolute top-[70px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-wine-700 rounded-full z-20 flex items-center justify-center shadow-lg border-2 border-wine-800 text-gold-light opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all">
                  🤎
                </div>
              </div>
              
              <p className="text-wine-400 text-sm mt-8 tracking-widest uppercase font-light">Tap to open</p>
            </motion.div>
          ) : (
            <motion.div
              key="letter"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="bg-cream-100 p-8 md:p-12 rounded-sm shadow-2xl relative"
            >
              {/* Decorative corner lines */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-wine-300/50"></div>
              <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-wine-300/50"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b border-l border-wine-300/50"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-wine-300/50"></div>

              <div className="font-serif text-wine-900 text-lg md:text-xl leading-relaxed space-y-6">
                {letterContent.map((paragraph, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, filter: 'blur(5px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{ delay: 1 + (idx * 0.8), duration: 1 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Letter;
