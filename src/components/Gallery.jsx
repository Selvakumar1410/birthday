import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// Placeholder array. In reality, you'd have an array of image objects with rotations, coords, etc.
const photos = [
  { id: 1, src: "/photos/gallery-1.jpg", caption: "That smile.", rotate: -3, zIndex: 10, align: "self-start", width: "w-64" },
  { id: 2, src: "/photos/gallery-2.jpg", caption: "My favorite day.", rotate: 2, zIndex: 5, align: "self-end", width: "w-72" },
  { id: 3, src: "/photos/gallery-3.jpg", caption: "We had no idea how much this moment would mean later.", rotate: -1, zIndex: 8, align: "self-center", width: "w-80" },
  { id: 4, src: "/photos/gallery-4.jpg", caption: "Us being us 🤍🤎", rotate: 4, zIndex: 12, align: "self-start", width: "w-60" },
];

const Polaroid = ({ photo, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, zIndex: 20 }}
      className={`bg-cream-100 p-3 pb-8 rounded-sm shadow-xl cursor-pointer ${photo.width} ${photo.align} relative`}
      style={{ rotate: photo.rotate, zIndex: photo.zIndex }}
      onClick={() => onClick(photo)}
    >
      <div className="aspect-[3/4] bg-wine-900 w-full rounded flex items-center justify-center overflow-hidden">
        {photo.src ? (
          <img src={photo.src} alt={photo.caption} className="w-full h-full object-cover" />
        ) : (
          <span className="font-serif italic text-wine-500/50">Image {photo.id}</span>
        )}
      </div>
      <p className="font-serif italic text-wine-900 text-center mt-4 text-sm px-2">
        {photo.caption}
      </p>
    </motion.div>
  );
};

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section className="py-24 px-6 overflow-hidden bg-wine-900/20 relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-cream-100 mb-4">Memories</h2>
        <p className="text-wine-300 font-light">A collection of us.</p>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col gap-12 md:gap-8 items-center py-10 px-4 min-h-[800px]">
        {photos.map(photo => (
          <Polaroid key={photo.id} photo={photo} onClick={setSelectedPhoto} />
        ))}
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-wine-950/90 backdrop-blur-md"
            onClick={() => setSelectedPhoto(null)}
          >
            <button className="absolute top-6 right-6 text-cream-200 hover:text-gold-light transition-colors">
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-cream-100 p-4 pb-12 rounded-sm max-w-2xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <div className="aspect-square md:aspect-video bg-wine-900 w-full rounded flex items-center justify-center overflow-hidden">
                {selectedPhoto.src ? (
                  <img src={selectedPhoto.src} alt={selectedPhoto.caption} className="w-full h-full object-contain" />
                ) : (
                  <span className="font-serif text-xl italic text-wine-500/50">Full Image {selectedPhoto.id}</span>
                )}
              </div>
              <p className="font-serif text-2xl text-wine-900 text-center mt-8 px-4">
                {selectedPhoto.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
