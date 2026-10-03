import React, { useState } from 'react';
import { motion } from 'framer-motion';

// For simplicity in this iteration without extra deps, we can use a basic implementation or just a CSS-based confetti.
// To make it beautiful as requested, let's build a simple custom confetti effect or assume we'll install it.
// I will implement a simpler custom animation for now to avoid extra dependency issues unless specified.

const Birthday = ({ name }) => {
  const [wished, setWished] = useState(false);

  const handleMakeWish = () => {
    setWished(true);
  };

  return (
    <section className="min-h-[80vh] py-24 px-6 flex flex-col items-center justify-center relative bg-cream-100 text-wine-900 transition-colors duration-1000">
      
      {wished && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                top: '-10%', 
                left: `${Math.random() * 100}%`, 
                opacity: 1, 
                rotate: 0,
                scale: Math.random() * 0.5 + 0.5
              }}
              animate={{ 
                top: '110%', 
                rotate: Math.random() * 360,
                opacity: [1, 1, 0]
              }}
              transition={{ 
                duration: Math.random() * 3 + 2,
                ease: "linear",
              }}
              className="absolute w-3 h-3 md:w-4 md:h-4"
              style={{
                backgroundColor: ['#D4AF37', '#a35d68', '#f4ebec', '#8c4852'][Math.floor(Math.random() * 4)],
                borderRadius: Math.random() > 0.5 ? '50%' : '2px'
              }}
            />
          ))}
        </div>
      )}

      <div className="z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-wine-400 font-sans tracking-widest text-sm uppercase block mb-4">Today is about you</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-8 text-wine-900">
            Happy Birthday, <br/><span className="text-wine-600 italic">{name}</span> 🎂
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-wine-800 leading-relaxed mb-16">
            "Today is the day we celebrate you. <br/>
            Your smile, your dreams, your craziness, your kindness, and everything that makes you who you are."
          </p>
        </motion.div>

        {!wished ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center"
          >
            <p className="font-serif italic text-wine-500 mb-6 text-xl">Make a wish...</p>
            <button 
              onClick={handleMakeWish}
              className="w-16 h-24 relative group cursor-pointer"
            >
              <div className="absolute bottom-0 w-8 h-16 bg-cream-300 left-1/2 transform -translate-x-1/2 rounded-sm border border-cream-400 shadow-inner"></div>
              {/* Flame */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 0.9, 1],
                  rotate: [0, -2, 2, 0],
                }}
                transition={{ repeat: Infinity, duration: 0.5 }}
                className="absolute top-0 w-4 h-8 bg-gradient-to-t from-gold-light to-orange-400 left-1/2 transform -translate-x-1/2 rounded-full blur-[1px] group-hover:scale-125 transition-transform"
                style={{ transformOrigin: 'bottom center' }}
              ></motion.div>
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-serif italic text-wine-600 mt-12"
          >
            I hope it comes true. ✨
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Birthday;
