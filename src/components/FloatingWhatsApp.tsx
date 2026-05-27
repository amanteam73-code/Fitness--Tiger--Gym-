import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-none">
      
      {/* Tooltip dialog message */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 15 }}
            className="mb-3.5 mr-1 p-4 rounded-2xl bg-[#111025] border border-purple-500/10 text-white shadow-2xl glassmorphism max-w-[260px] pointer-events-auto relative"
          >
            {/* Close tooltip absolute */}
            <button
              id="close-whats-hint"
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-zinc-500 hover:text-white p-0.5 text-[9px] font-mono cursor-pointer"
            >
              ✕
            </button>

            <div className="flex items-center space-x-2 text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest mb-1">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Counselor Online</span>
            </div>
            
            <p className="text-zinc-300 text-[11px] leading-relaxed font-sans font-light">
              Hi there! Ask about slot timings, monthly memberships, yoga sessions, or book your free sauna tour instantly!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
 
      {/* Floating Button triggers */}
      <a
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        id="btn-floating-whatsapp-widget"
        className="pointer-events-auto w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 shadow-2xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 duration-200 hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] ring-4 ring-emerald-900/30 group cursor-pointer"
        aria-label="Direct help on WhatsApp"
        onClick={() => setShowTooltip(false)}
      >
        {/* Animated pulsing gold notification dot */}
        <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-pink-500 border border-zinc-950 flex items-center justify-center text-[7px] text-white font-bold animate-pulse">
          1
        </span>
        
        {/* Lucide Message Circle Icon */}
        <MessageCircle className="w-7 h-7 fill-white text-emerald-600 group-hover:rotate-6 transition-all duration-300" />
      </a>

    </div>
  );
}
