import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Intro = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 3000);
    const timer2 = setTimeout(() => setStep(2), 6000);
    const timer3 = setTimeout(() => setStep(3), 9000);
    const timer4 = setTimeout(() => onComplete(), 13000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-wine-950 flex flex-col items-center justify-center z-50 p-4">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="step0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="text-center"
          >
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-cream-200 tracking-wide font-light">
              There is one day I wait for every year...
            </p>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="text-center"
          >
            <p className="font-sans text-xl md:text-2xl text-gold-light tracking-widest uppercase mb-4">
              October 11
            </p>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="text-center"
          >
            <p className="font-serif text-2xl md:text-3xl text-cream-200 tracking-wide font-light">
              Because it gave me two reasons to celebrate.
            </p>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="flex flex-col md:flex-row gap-6 md:gap-12 mt-8"
          >
            <div className="bg-wine-900/50 backdrop-blur-sm p-8 rounded-2xl border border-wine-800/50 text-center transform transition-transform">
              <div className="text-4xl mb-4">🎂</div>
              <h3 className="font-serif text-2xl text-cream-100 mb-2">Your Birthday</h3>
              <p className="font-sans text-wine-200 font-light text-sm">The day the world got you.</p>
            </div>
            
            <div className="bg-wine-900/50 backdrop-blur-sm p-8 rounded-2xl border border-wine-800/50 text-center">
              <div className="text-4xl mb-4">🤍🤎</div>
              <h3 className="font-serif text-2xl text-cream-100 mb-2">Our Anniversary</h3>
              <p className="font-sans text-wine-200 font-light text-sm">The day I got you.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Intro;
