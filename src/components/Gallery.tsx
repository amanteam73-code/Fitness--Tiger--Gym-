import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Interior' | 'Equipment' | 'Sessions' | 'Sauna'>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Interior', 'Equipment', 'Sessions', 'Sauna'];

  const filteredItems = activeFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  const openLightbox = (item: GalleryItem) => {
    const origIndex = GALLERY_ITEMS.findIndex(gi => gi.id === item.id);
    if (origIndex !== -1) {
      setLightboxIndex(origIndex);
    }
  };

  const nextSlide = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const prevSlide = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  return (
    <section id="gallery" className="py-24 relative bg-[#06050b] overflow-hidden border-t border-purple-500/10">
      {/* Decorative Spot background overlay */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Title details */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-cyan-400 font-mono text-[10px] sm:text-xs uppercase tracking-widest block mb-2 font-semibold">Visual Tour</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
            THE ROCK <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 font-black">SANCTUARY GALLERY</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light mt-4 leading-relaxed">
            Step inside Patna’s most premium bodybuilding and conditioning arena. Designed with sleek frameworks, rich ambient wood sauna and clinical safety rigs.
          </p>
        </div>

        {/* Filter categories tabs selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`gallery-filter-${cat}`}
              onClick={() => setActiveFilter(cat as any)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-display font-extrabold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/20'
                  : 'bg-[#111025]/40 border border-purple-500/5 text-zinc-450 hover:text-cyan-300 hover:bg-[#111025]/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Photo Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => openLightbox(item)}
                key={item.id}
                id={`gallery-item-${item.id}`}
                className="group relative rounded-2.5xl overflow-hidden aspect-[4/3] bg-zinc-950 cursor-pointer border border-purple-500/10 hover:border-cyan-500/30 hover:shadow-[0_10px_35px_rgba(6,182,212,0.12)] transition-all duration-500"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 duration-500 ease-out transform"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600";
                  }}
                />
                
                {/* Overlay hover details banner */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06050b] via-[#06050b]/40 to-transparent opacity-0 group-hover:opacity-100 duration-300 flex flex-col justify-end p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-cyan-450 uppercase font-black tracking-widest">{item.category}</span>
                      <h4 className="font-display font-extrabold text-base sm:text-lg text-white uppercase mt-0.5">{item.title}</h4>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center text-white pointer-events-none shadow-lg">
                      <Eye className="w-5 h-5 font-bold" />
                    </div>
                  </div>
                </div>

                {/* Always-on corner indicators */}
                <div className="absolute top-4 left-4 bg-zinc-950/80 px-2.5 py-1 rounded text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                  {item.category}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Highlight Quote */}
        <div className="mt-14 text-center">
          <p className="text-zinc-550 font-mono text-xs uppercase tracking-widest font-semibold">
            *All photographs are taken in The Rock Gym NIT More Lalbagh branch premises. Come take your free physical tour!
          </p>
        </div>

      </div>

      {/* Full screen Lightbox overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />

            {/* Lightbox Layout */}
            <div className="relative w-full max-w-4xl max-h-[85vh] z-10 flex flex-col items-center">
              
              {/* Close trigger button */}
              <button
                id="gallery-lightbox-close"
                onClick={() => setLightboxIndex(null)}
                className="absolute -top-12 right-0 p-2 text-zinc-400 hover:text-white font-mono text-sm cursor-pointer hover:bg-white/10 rounded-xl flex items-center space-x-1"
              >
                <X className="w-4 h-4" />
                <span>CLOSE</span>
              </button>

              {/* Slider Image frame */}
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="relative rounded-2xl overflow-hidden max-h-[70vh] border border-white/10 aspect-video flex items-center justify-center bg-black shadow-2xl"
              >
                <img
                  src={GALLERY_ITEMS[lightboxIndex].imageUrl}
                  alt={GALLERY_ITEMS[lightboxIndex].title}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200";
                  }}
                />

                {/* Swipe Overlay text labels */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-5">
                  <span className="text-xs font-mono text-cyan-400 uppercase font-bold tracking-widest">{GALLERY_ITEMS[lightboxIndex].category}</span>
                  <h4 className="font-display font-bold text-lg text-white uppercase">{GALLERY_ITEMS[lightboxIndex].title}</h4>
                </div>
              </motion.div>

              {/* Slide controls */}
              <div className="flex items-center justify-between w-full mt-4 max-w-sm px-4">
                <button
                  id="btn-lightbox-prev"
                  onClick={prevSlide}
                  className="p-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white cursor-pointer active:scale-95 transition-all text-sm flex items-center space-x-1"
                >
                  <ChevronLeft className="w-5 h-5 text-cyan-400" />
                  <span>PREV</span>
                </button>

                <span className="font-mono text-xs text-zinc-500">
                  {lightboxIndex + 1} / {GALLERY_ITEMS.length}
                </span>

                <button
                  id="btn-lightbox-next"
                  onClick={nextSlide}
                  className="p-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white cursor-pointer active:scale-95 transition-all text-sm flex items-center space-x-1"
                >
                  <span>NEXT</span>
                  <ChevronRight className="w-5 h-5 text-cyan-400" />
                </button>
              </div>

            </div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
