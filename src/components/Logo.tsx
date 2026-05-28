/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "w-12 h-12", showText = true }: LogoProps) {
  return (
    <div className="flex items-center space-x-3 group">
      <div className={`relative flex-shrink-0 cursor-pointer ${className}`}>
        {/* Glow behind the logo */}
        <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-40 blur-lg group-hover:opacity-75 transition duration-300" />
        
        {/* High Definition Vector Shield & Rock Logo */}
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full relative z-10 filter drop-shadow-[0_4px_12px_rgba(6,182,212,0.3)] transform group-hover:scale-105 transition-transform duration-300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" /> {/* Cyan */}
              <stop offset="50%" stopColor="#a855f7" /> {/* Purple */}
              <stop offset="100%" stopColor="#f43f5e" /> {/* Pink-Red */}
            </linearGradient>
            <linearGradient id="cyanBlueGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0891b2" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <linearGradient id="pinkPurpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
            <filter id="rockGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* BACKGROUND SHIELD WITH NEON GLOW BEZEL */}
          <polygon 
            points="60,6 109,24 109,72 60,114 11,72 11,24" 
            fill="#060813" 
            stroke="url(#neonGradient)" 
            strokeWidth="3.5"
            strokeLinejoin="round" 
          />

          {/* INNER GLOW TRIANGLE/CHASSIS FOR POP */}
          <polygon 
            points="60,15 101,30 101,68 60,103 19,68 19,30" 
            fill="url(#pinkPurpleGrad)" 
            opacity="0.18" 
          />

          {/* GEOMETRIC SOLID ROCK STRUCTURE */}
          {/* Facet 1: Left Center Facet */}
          <polygon 
            points="60,26 45,65 60,94" 
            fill="url(#cyanBlueGrad)" 
            opacity="0.85" 
            stroke="#ffffff" 
            strokeWidth="0.5" 
            strokeOpacity="0.2"
          />

          {/* Facet 2: Right Center Facet */}
          <polygon 
            points="60,26 75,65 60,94" 
            fill="url(#neonGradient)" 
            opacity="0.9" 
            stroke="#ffffff" 
            strokeWidth="0.5" 
            strokeOpacity="0.2"
          />

          {/* Facet 3: Left Outer Facet */}
          <polygon 
            points="60,26 23,80 45,65" 
            fill="#1e1b4b" 
            opacity="0.6" 
            stroke="url(#cyanBlueGrad)" 
            strokeWidth="0.5" 
          />

          {/* Facet 4: Right Outer Facet */}
          <polygon 
            points="60,26 97,80 75,65" 
            fill="#311042" 
            opacity="0.6" 
            stroke="url(#neonGradient)" 
            strokeWidth="0.5" 
          />

          {/* Facet 5: Left Lower Facet */}
          <polygon 
            points="45,65 23,80 60,94" 
            fill="url(#pinkPurpleGrad)" 
            opacity="0.75" 
            stroke="#ffffff" 
            strokeWidth="0.5" 
            strokeOpacity="0.2"
          />

          {/* Facet 6: Right Lower Facet */}
          <polygon 
            points="75,65 97,80 60,94" 
            fill="url(#cyanBlueGrad)" 
            opacity="0.7" 
            stroke="#ffffff" 
            strokeWidth="0.5" 
            strokeOpacity="0.2"
          />

          {/* Facet 7: Top Crown Facet */}
          <polygon 
            points="60,14 60,26 45,19" 
            fill="#06b6d4" 
            opacity="0.4" 
          />
          <polygon 
            points="60,14 60,26 75,19" 
            fill="#d946ef" 
            opacity="0.4" 
          />

          {/* Heavy Base Rock Pedestal */}
          <polygon 
            points="32,94 88,94 60,106" 
            fill="#020617" 
            stroke="url(#neonGradient)" 
            strokeWidth="1.5" 
          />

          {/* Small Sparks */}
          <circle cx="28" cy="40" r="1.5" fill="#22d3ee" filter="url(#rockGlow)" />
          <circle cx="92" cy="40" r="1.5" fill="#f43f5e" filter="url(#rockGlow)" />
          <circle cx="60" cy="18" r="1" fill="#a855f7" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="font-display font-black text-xl sm:text-2xl tracking-tighter uppercase leading-none select-none text-white">
            THE<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 font-extrabold ml-1">ROCK GYM</span>
          </span>
          <span className="text-[9px] font-mono tracking-[0.2em] font-semibold text-cyan-400 uppercase leading-none mt-1.5">
            PATNA • LUXURY FITNESS
          </span>
        </div>
      )}
    </div>
  );
}
