/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ComponentType } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Waves, 
  Tv, 
  Notebook, 
  Cpu, 
  Coins, 
  TrendingUp, 
  Sparkles,
  Award
} from 'lucide-react';
import { BENEFITS } from '../data';

const benefitIconMap: Record<string, ComponentType<any>> = {
  ShieldCheck,
  Waves, // Sauna
  Tv, // Online Classes
  Notebook, // Workout sheets
  Cpu, // Modern Equipment
  Coins, // Cost
  TrendingUp, // Support
  Sparkles // Hygiene & Safety
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative bg-[#0a0914] overflow-hidden border-t border-purple-500/10">
      {/* Background spot overlays */}
      <div className="absolute inset-y-0 right-0 w-1/3 bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-pink-500/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-cyan-400 font-mono text-[10px] sm:text-xs uppercase tracking-widest block mb-2 font-semibold">Exquisite Amenities</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
            WHY CHOOSE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 font-black">TIGER FITNESS</span>?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light mt-4 leading-relaxed">
            We are Patna's premium destination. We blend luxury design aesthetics with clinical athletic coaching to offer you an unparalleled physical wellness sanctuary.
          </p>
        </div>

        {/* Bento/Grid style display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((benefit, index) => {
            const IconComponent = benefitIconMap[benefit.iconName] || Award;
            
            // Introduce a subtle layout offset or accent for specific items like Sauna & Certified Trainers
            const isHighlighted = benefit.id === 'sauna' || benefit.id === 'certified-trainers';
            
            return (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                key={benefit.id}
                id={`benefit-${benefit.id}`}
                className={`p-8 rounded-2.5xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between group ${
                  isHighlighted 
                    ? 'bg-[#111025]/60 border border-purple-500/30 hover:shadow-[0_10px_25px_rgba(236,72,153,0.15)] hover:border-pink-500/40 scale-[1.01] z-10' 
                    : 'glassmorphism bg-[#111025]/20 hover:border-cyan-500/20 hover:bg-[#111025]/50'
                }`}
              >
                {/* Micro glowing indicator top-left */}
                {isHighlighted && (
                  <div className="absolute top-0 left-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-mono font-extrabold text-[8px] uppercase px-3 py-1 rounded-br-lg tracking-wider">
                    Premium Feature
                  </div>
                )}

                {/* Accent hover background line */}
                <div className="absolute top-0 right-0 w-0.5 h-0 bg-gradient-to-b from-cyan-500 to-pink-500 group-hover:h-full transition-all duration-300" />

                <div>
                  {/* Icon wrap */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                    isHighlighted 
                      ? 'bg-purple-950/40 border border-purple-850 text-purple-400 group-hover:bg-purple-900/30 group-hover:text-pink-300' 
                      : 'bg-[#111025]/50 border border-zinc-850 text-zinc-400 group-hover:text-cyan-400 group-hover:border-cyan-500/20'
                  }`}>
                    <IconComponent className="w-5 h-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                  </div>

                  <h3 className="font-display font-semibold text-lg text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-pink-300 transition-colors duration-200">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Bottom decorative stats hint */}
                <div className="mt-6 pt-4 border-t border-zinc-900/60 flex justify-between items-center text-[10px] font-mono text-zinc-500">
                  <span className="uppercase tracking-wider">Tiger Standard</span>
                  <span>0{index + 1}</span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
