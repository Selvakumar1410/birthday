import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FinalSurprise = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="min-h-screen relative bg-black flex flex-col items-center justify-center px-6 overflow-hidden">
      
      <AnimatePresence mode="wait">
        {!revealed ? (
          <motion.div
            key="pre-reveal"
            className="flex flex-col items-center cursor-pointer group h-full justify-center w-full min-h-[50vh]"
            onClick={() => setRevealed(true)}
            exit={{ opacity: 0, transition: { duration: 1.5 } }}
          >
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-2xl md:text-3xl font-serif text-cream-200/70 mb-8 italic"
            >
              "Wait... there's one more thing."
            </motion.p>
            <p className="text-xs uppercase tracking-widest text-wine-500 font-sans group-hover:text-gold-light transition-colors">
              Click to reveal
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="reveal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 0.5 }}
            className="w-full max-w-4xl flex flex-col items-center z-10 py-20"
          >
            {/* Final Background Image Overlay */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <div className="absolute inset-0 bg-black/40 z-10"></div>
              <div 
                className="w-full h-full bg-wine-900 bg-cover bg-center opacity-60 blur-[2px]"
                style={{ backgroundImage: 'url("/photos/final.jpg")' }}
              >
              </div>
            </div>

            <div className="z-10 text-center w-full">
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2, duration: 1.5 }}
                className="text-5xl md:text-7xl font-serif text-cream-100 mb-6"
              >
                Happy Birthday, Chlm 🤎
              </motion.h1>
              
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 3.5, duration: 1.5 }}
                className="text-4xl md:text-5xl font-serif text-gold-light mb-16 italic"
              >
                Happy Anniversary, Us. <span className="whitespace-nowrap">🤍🤎</span>
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 5.5, duration: 2 }}
                className="max-w-2xl mx-auto mb-20"
              >
                <p className="text-xl md:text-2xl text-cream-200/90 font-light leading-relaxed mb-4">
                  "No matter how many birthdays come and go, <br/>
                  I hope I get to celebrate them with you."
                </p>
              </motion.div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 8, duration: 1 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="px-8 py-4 bg-transparent border border-wine-500/50 text-cream-200 rounded-full font-sans text-sm uppercase tracking-widest hover:bg-wine-900/50 hover:border-gold-light transition-all"
              >
                Replay Our Story <span className="whitespace-nowrap">🤍🤎</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FinalSurprise;
