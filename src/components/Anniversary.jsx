import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Anniversary = ({ date }) => {
  const [time, setTime] = useState({ years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTime = () => {
      const start = new Date(date);
      const now = new Date();
      const diff = now - start;

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTime({ years, months, days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [date]);

  const CounterItem = ({ value, label }) => (
    <div className="flex flex-col items-center mx-2 md:mx-4">
      <span className="text-3xl md:text-5xl font-serif text-gold-light mb-2 w-16 md:w-24 text-center">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-xs md:text-sm font-sans tracking-widest text-wine-300 uppercase">{label}</span>
    </div>
  );

  return (
    <section className="py-32 px-6 bg-wine-950 relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-wine-800/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-6xl font-serif text-cream-100 mb-16">
            And Happy Anniversary to Us <span className="whitespace-nowrap">🤍🤎</span>
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-y-8 mb-20 bg-wine-900/30 backdrop-blur-sm p-8 rounded-2xl border border-wine-800/50">
            <CounterItem value={time.years} label="Years" />
            <span className="text-wine-600 text-3xl font-light mb-6 hidden md:block">:</span>
            <CounterItem value={time.months} label="Months" />
            <span className="text-wine-600 text-3xl font-light mb-6 hidden md:block">:</span>
            <CounterItem value={time.days} label="Days" />
            <span className="text-wine-600 text-3xl font-light mb-6 hidden md:block">:</span>
            <CounterItem value={time.hours} label="Hours" />
            <span className="text-wine-600 text-3xl font-light mb-6 hidden md:block">:</span>
            <CounterItem value={time.minutes} label="Minutes" />
          </div>

          <p className="text-xl md:text-2xl font-light text-wine-200 leading-relaxed italic max-w-2xl mx-auto">
            "Thank you for being part of my life. <br/>
            Here's to everything we've already lived... <br/>
            and everything still waiting for us."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Anniversary;
