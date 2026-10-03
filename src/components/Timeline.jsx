import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

const TimelineItem = ({ item, index, activeIndex, setActiveIndex }) => {
  const isActive = activeIndex === index;

  return (
    <div className="relative pl-8 md:pl-0">
      {/* Mobile line */}
      <div className="md:hidden absolute left-3 top-2 bottom-0 w-px bg-wine-800 -z-10"></div>
      
      <div className={`md:flex items-center justify-between w-full mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
        
        <div className="hidden md:block w-5/12"></div>
        
        <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-wine-900 border border-wine-500 transform -translate-x-1/2 flex items-center justify-center z-10 cursor-pointer hover:bg-wine-800 transition-colors"
             onClick={() => setActiveIndex(isActive ? null : index)}>
          <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-gold-light' : 'bg-wine-500'} transition-colors`}></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className={`w-full md:w-5/12 cursor-pointer group`}
          onClick={() => setActiveIndex(isActive ? null : index)}
        >
          <div className={`p-6 rounded-2xl border transition-all duration-300 ${isActive ? 'bg-wine-900 border-wine-500 shadow-xl' : 'bg-wine-900/40 border-wine-800/50 hover:bg-wine-900/60'}`}>
            <span className="text-gold-light text-sm font-sans tracking-widest uppercase block mb-2">{item.date}</span>
            <h4 className="text-2xl font-serif text-cream-100 mb-2">{item.title}</h4>
            
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="text-wine-200 mt-4 font-light text-sm md:text-base">
                    {item.description}
                  </p>
                  
                  {/* Photo or placeholder */}
                  {item.image ? (
                    <div className="mt-4 aspect-video rounded-lg overflow-hidden border border-wine-800/30">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="mt-4 aspect-video rounded-lg bg-wine-950/50 flex items-center justify-center border border-wine-800/30">
                      <Heart size={20} className="text-wine-700" />
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Timeline = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto relative">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-serif text-cream-100 mb-4">Our Journey</h2>
        <p className="text-wine-300 font-light">Every moment led to us.</p>
      </div>

      <div className="relative">
        {/* Desktop central line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-wine-800 transform -translate-x-1/2"></div>
        
        {data.map((item, idx) => (
          <TimelineItem 
            key={idx} 
            item={item} 
            index={idx} 
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
