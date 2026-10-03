import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = ({ data }) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6 text-center pt-20">
      
      {/* Background with slight dark overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/photos/hero.jpg")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-wine-950/90 via-wine-900/80 to-wine-950/95"></div>
      </div>

      <div className="z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center h-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="font-serif text-4xl md:text-6xl text-cream-100 mb-6 font-medium leading-tight">
            Happy Birthday, {data.herName} <span className="text-wine-400">🤎</span>
          </h1>
          <h2 className="font-serif text-2xl md:text-3xl text-gold-light mb-16 italic">
            And Happy Anniversary to us. <span className="whitespace-nowrap">🤍🤎</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="max-w-2xl mx-auto"
        >
          <p className="font-sans text-lg md:text-xl text-wine-200 font-light leading-relaxed mb-12">
            "Some dates are just dates. <br/>
            But this one changed everything for me."
          </p>
          
          <div className="font-serif text-xl text-cream-200 tracking-widest uppercase">
            {data.yourName} 🤍 &times; {data.herName} 🤎
          </div>
          <div className="text-wine-400 text-sm mt-4 font-light tracking-widest">
            {data.specialDate}
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 z-10 flex flex-col items-center text-wine-300 opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest mb-2 font-light">Our story starts here</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={24} className="text-gold-light" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
