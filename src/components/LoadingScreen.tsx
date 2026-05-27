import { useState, useEffect } from 'react';
import { Dumbbell } from 'lucide-react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 400);
          return 100;
        }
        const increment = Math.floor(Math.random() * 15) + 8;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      id="intro-loading-wrapper"
      className="fixed inset-0 z-50 bg-[#05040a] flex flex-col items-center justify-center select-none"
    >
      {/* Soft neon spot behind loader */}
      <div className="absolute inset-0 bg-radial-gradient from-purple-500/10 via-transparent to-transparent opacity-60 pointer-events-none" />

      <div className="text-center relative z-10 p-6 max-w-sm w-full">
        
        {/* Animated Dumbbell Loader Shield */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            {/* outer glowing ring */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 opacity-40 blur-xl animate-pulse" />
            
            <div className="w-18 h-18 rounded-2xl bg-zinc-900 border border-purple-500/15 flex items-center justify-center text-white shadow-xl rotate-45 animate-[bounce_1.4s_infinite_alternate]">
              <Dumbbell className="w-8 h-8 text-cyan-455 transform -rotate-45" />
            </div>
          </div>
        </div>

        {/* Brand Typography */}
        <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tighter text-white mb-2 leading-none">
          FITNESS<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 font-extrabold ml-1 font-black">TIGER GYM</span>
        </h2>
        <div className="text-[9px] font-mono tracking-[0.25em] text-zinc-500 uppercase mb-8 font-semibold">
          Patna's Premium Wellness Hub
        </div>

        {/* Counter Meter */}
        <div className="w-full h-1 bg-zinc-950 rounded-full overflow-hidden mb-3.5 border border-white/5 relative">
          <div 
            style={{ width: `${progress}%` }}
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 rounded-full transition-all duration-150"
          />
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
          <span className="uppercase tracking-widest text-zinc-500 text-[8px] font-semibold">Initializing core rigs...</span>
          <span className="font-bold text-cyan-400">{progress}%</span>
        </div>

      </div>
    </div>
  );
}
