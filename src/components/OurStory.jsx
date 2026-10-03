import React from 'react';
import { motion } from 'framer-motion';

const Chapter = ({ num, title, text, image, align = "left", delay = 0 }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
      className={`flex flex-col ${align === 'left' ? 'items-start' : 'items-end text-right'} w-full md:w-3/4 ${align === 'left' ? 'mr-auto' : 'ml-auto'} mb-24`}
    >
      <div className="mb-4">
        <span className="text-wine-400 font-sans tracking-widest text-xs uppercase block mb-1">Chapter {num}</span>
        <h3 className="text-3xl md:text-4xl font-serif text-cream-100">{title}</h3>
      </div>
      
      <div className="relative w-full rounded-xl overflow-hidden mb-6 bg-wine-900 border border-wine-800/50 shadow-2xl">
        <img src={image} alt={title} className="w-full h-auto max-h-[80vh] object-contain md:object-cover" />
      </div>
      
      <p className="text-wine-200 font-light text-lg md:text-xl leading-relaxed max-w-xl">
        {text}
      </p>
    </motion.div>
  );
};

const OurStory = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="mb-24 text-center">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif text-gold-light mb-6"
        >
          Our Story
        </motion.h2>
        <div className="h-px w-24 bg-wine-800 mx-auto"></div>
      </div>

      <div className="flex flex-col gap-8">
        <Chapter 
          num="01" 
          title="The Beginning" 
          text="It didn't start with a conversation. It started with a surprise PDF full of secret love notes you had written about me."
          image="/photos/story-1.jpg"
          align="left"
        />
        
        <Chapter 
          num="02" 
          title="The Conversations" 
          text="From random conversations to the person I started looking forward to talking to every day..."
          image="/photos/story-2.jpg"
          align="right"
        />
        
        <Chapter 
          num="03" 
          title="Us" 
          text="And somehow, somewhere between all those little moments, you became my person."
          image="/photos/story-3.jpg"
          align="left"
        />
      </div>
    </section>
  );
};

export default OurStory;
