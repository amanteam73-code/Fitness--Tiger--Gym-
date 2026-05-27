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
        
        {/* High Definition Vector Shield & Tiger Logo */}
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
            <filter id="eyeGlow" x="-20%" y="-20%" width="140%" height="140%">
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

          {/* MUSCULAR TRAPS / SHOULDERS (FLANKING THE SHIELD BASE) */}
          {/* Left Muscular Triceps/Traps */}
          <path 
            d="M 12,50 C -4,35 2,12 25,18 C 22,34 26,45 35,52" 
            fill="none" 
            stroke="url(#cyanBlueGrad)" 
            strokeWidth="2.5" 
            opacity="0.6"
          />
          {/* Right Muscular Triceps/Traps */}
          <path 
            d="M 108,50 C 124,35 118,12 95,18 C 98,34 94,45 85,52" 
            fill="none" 
            stroke="url(#cyanBlueGrad)" 
            strokeWidth="2.5" 
            opacity="0.6"
          />

          {/* TIGER GEOMETRICS & FACIAL STRIPES */}
          {/* Outer Ears */}
          <polygon points="36,36 22,20 48,30" fill="#0c0f24" stroke="url(#neonGradient)" strokeWidth="1.5" />
          <polygon points="84,36 98,20 72,30" fill="#0c0f24" stroke="url(#neonGradient)" strokeWidth="1.5" />
          
          {/* Inner Ears */}
          <polygon points="34,33 26,23 42,29" fill="#ec4899" opacity="0.8" />
          <polygon points="86,33 94,23 78,29" fill="#ec4899" opacity="0.8" />

          {/* Crown Stripes */}
          <path d="M 60,20 L 55,30 L 65,30 Z" fill="url(#neonGradient)" />
          <path d="M 60,32 L 52,42 L 68,42 Z" fill="#020617" stroke="url(#cyanBlueGrad)" strokeWidth="1" />

          {/* Cheek Whisker Shapes (Muscular Side Swipes) */}
          <polygon points="26,52 42,56 31,64" fill="url(#neonGradient)" />
          <polygon points="94,52 78,56 89,64" fill="url(#neonGradient)" />
          <polygon points="24,66 40,68 28,78" fill="url(#neonGradient)" />
          <polygon points="96,66 80,68 92,78" fill="url(#neonGradient)" />

          {/* Forehead Plates */}
          <polygon points="46,45 60,38 74,45 60,50" fill="#030712" stroke="url(#cyanBlueGrad)" strokeWidth="1.5" />

          {/* EYES (CYAN NEON GLOW) */}
          <polygon points="38,55 52,57 48,51 39,51" fill="#000000" stroke="#06b6d4" strokeWidth="2" />
          <circle cx="44" cy="54" r="1.5" fill="#22d3ee" filter="url(#eyeGlow)" />
          <polygon points="82,55 68,57 72,51 81,51" fill="#000000" stroke="#06b6d4" strokeWidth="2" />
          <circle cx="76" cy="54" r="1.5" fill="#22d3ee" filter="url(#eyeGlow)" />

          {/* Nose & Bridge */}
          <polygon points="54,58 66,58 60,70" fill="url(#neonGradient)" />
          <line x1="60" y1="50" x2="60" y2="58" stroke="url(#neonGradient)" strokeWidth="2.5" />
          
          {/* Muzzle and Snout */}
          <path 
            d="M 46,74 C 48,70 52,68 60,68 C 68,68 72,70 74,74 C 76,79 70,82 60,82 C 50,82 44,79 46,74 Z" 
            fill="#020617" 
            stroke="url(#neonGradient)" 
            strokeWidth="2" 
          />
          
          {/* FANGS & TEETH */}
          <polygon points="49,75 53,75 51,83" fill="#ffffff" />
          <polygon points="71,75 67,75 69,83" fill="#ffffff" />
          
          {/* Muscular Chin & Low Jaw */}
          <polygon points="52,82 68,82 60,94" fill="#020617" stroke="url(#cyanBlueGrad)" strokeWidth="2" />
          
          {/* Intense Tiger Eye-brow Stripes */}
          <path d="M 34,48 L 48,51 L 44,46 Z" fill="url(#neonGradient)" />
          <path d="M 86,48 L 72,51 L 76,46 Z" fill="url(#neonGradient)" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="font-display font-black text-xl sm:text-2xl tracking-tighter uppercase leading-none select-none text-white">
            FITNESS<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 font-extrabold ml-1">TIGER GYM</span>
          </span>
          <span className="text-[9px] font-mono tracking-[0.2em] font-semibold text-cyan-400 uppercase leading-none mt-1.5">
            PATNA • LUXURY GYM
          </span>
        </div>
      )}
    </div>
  );
}
