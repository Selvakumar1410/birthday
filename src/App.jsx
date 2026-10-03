import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Intro from './components/Intro';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import LoveNotes from './components/LoveNotes';
import Birthday from './components/Birthday';
import Anniversary from './components/Anniversary';
import Universe from './components/Universe';
import Letter from './components/Letter';
import FinalSurprise from './components/FinalSurprise';
import { personalData } from './data/memories';

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef(null);

  const startApp = () => {
    setHasStarted(true);
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setMusicPlaying(true);
      }).catch(err => console.log("Play failed", err));
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (musicPlaying) {
        audioRef.current.pause();
        setMusicPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setMusicPlaying(true);
        }).catch(err => {
          console.log("Play failed", err);
        });
      }
    }
  };

  return (
    <div className="bg-wine-950 min-h-screen font-sans selection:bg-wine-500 selection:text-cream-100 bg-grain">
      {/* Audio Element */}
      <audio ref={audioRef} loop>
        <source src="/i-think-they-call-this-love.mp3" type="audio/mpeg" />
      </audio>

      {!hasStarted ? (
        <div 
          onClick={startApp}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-wine-950 text-cream-200 cursor-pointer"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center"
          >
            <div className="text-4xl mb-4">💌</div>
            <p className="font-serif italic text-2xl tracking-wide">Tap to open...</p>
          </motion.div>
        </div>
      ) : (
        <>
          {/* Music Toggle */}
          <button 
            onClick={toggleMusic}
            className="fixed top-4 right-4 z-50 bg-wine-900/50 backdrop-blur-md p-3 rounded-full border border-wine-800/50 text-cream-200 hover:text-gold-light transition-colors"
          >
            {musicPlaying ? '🎵' : '🔇'}
          </button>

          {!introComplete ? (
            <Intro onComplete={() => setIntroComplete(true)} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative"
        >

          <Hero data={personalData} />
          <OurStory />
          <Timeline data={personalData.timeline} />
          <Gallery />
          <LoveNotes items={personalData.thingsILove} />
          <Birthday name={personalData.herName} />
          <Anniversary date={personalData.anniversaryDate} />
          <Universe />
          <Letter />
          <FinalSurprise />
        </motion.div>
      )}
      </>
    )}
    </div>
  );
}

export default App;
