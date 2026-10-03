import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const stars = [
  { icon: '🌙', memory: 'That late-night conversation we had until 4 AM.', top: '20%', left: '15%', delay: 0 },
  { icon: '⭐', memory: 'Our first trip together.', top: '10%', left: '70%', delay: 1 },
  { icon: '🤎', memory: 'The moment I knew.', top: '50%', left: '80%', delay: 2 },
  { icon: '🤍', memory: 'When you smiled at me.', top: '30%', left: '85%', delay: 0.5 },
  { icon: '📷', memory: 'The day we took that ridiculous selfie.', top: '70%', left: '20%', delay: 0.5 },
  { icon: '🎵', memory: 'Singing perfectly off-key in the car.', top: '40%', left: '40%', delay: 1.5 },
  { icon: '☕', memory: 'Our Sunday morning coffee rituals.', top: '80%', left: '60%', delay: 2.5 },
];

const Universe = () => {
  const [activeStar, setActiveStar] = useState(null);

  return (
    <section className="py-24 px-6 min-h-[600px] relative bg-wine-950 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-wine-950 via-wine-900/50 to-wine-950"></div>
      
      <div className="text-center relative z-10 mb-12">
        <h2 className="text-3xl md:text-4xl font-serif text-cream-100 mb-2">Our Little Universe 🤍🤎</h2>
        <p className="text-wine-400 font-light text-sm italic">Explore the constellation of us</p>
      </div>

      <div className="relative w-full max-w-4xl mx-auto h-[400px] z-10">
        {stars.map((star, idx) => (
          <motion.div
            key={idx}
            className="absolute cursor-pointer"
            style={{ top: star.top, left: star.left }}
            animate={{ 
              y: [0, -15, 0],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4, 
              delay: star.delay,
              ease: "easeInOut" 
            }}
            onClick={() => setActiveStar(star)}
            whileHover={{ scale: 1.2 }}
          >
            <span className="text-3xl filter drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]">{star.icon}</span>
          </motion.div>
        ))}

        <AnimatePresence>
          {activeStar && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-wine-900/80 backdrop-blur-md p-6 rounded-xl border border-wine-500/50 text-center w-64 shadow-2xl z-20"
            >
              <span className="text-4xl block mb-4">{activeStar.icon}</span>
              <p className="text-cream-100 font-serif text-lg">{activeStar.memory}</p>
              <button 
                className="mt-4 text-xs uppercase tracking-widest text-gold-light hover:text-cream-100 transition-colors"
                onClick={(e) => { e.stopPropagation(); setActiveStar(null); }}
              >
                Close
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Universe;
