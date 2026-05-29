import { motion } from 'motion/react';
import { ShieldCheck, Flame, HeartHandshake, Sparkles, Award, Cpu } from 'lucide-react';
import { SAUNA_IMAGE } from '../data';

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Professional Coaching',
      desc: 'Work directly with certified trainers who build data-backed programs tailored around your joints, strength levels, and biological metrics.',
      color: 'from-cyan-500 to-blue-500',
      iconColor: 'text-cyan-400'
    },
    {
      icon: Cpu,
      title: 'State-of-the-Art Gear',
      desc: 'Imported high-end commercial cable towers, biomechanically superior pulley systems, safety racks, and functional training frames.',
      color: 'from-purple-500 to-pink-500',
      iconColor: 'text-purple-400'
    },
    {
      icon: Sparkles,
      title: 'Medical Grade Sanitization',
      desc: 'Experience training in an immaculate, ultra-sanitized space, continuously filtered with premium HEPA ventilation setups.',
      color: 'from-pink-500 to-rose-400',
      iconColor: 'text-pink-400'
    },
    {
      icon: HeartHandshake,
      title: 'Supportive Community',
      desc: 'A dedicated, zero-judgment atmosphere where athletes of all experience levels push their physical boundaries and support each other.',
      color: 'from-[#a855f7] to-[#6366f1]',
      iconColor: 'text-indigo-400'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0a0914] border-t border-purple-500/10">
      {/* Background spot overlays */}
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full glow-spot-blue blur-[130px] pointer-events-none opacity-60" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full glow-spot-pink blur-[140px] pointer-events-none opacity-40 animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core grid: Column 1 Story, Column 2 Image Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-20">
          
          {/* Story column */}
          <div className="lg:col-span-7">
            <span className="text-cyan-400 font-mono text-[10px] sm:text-xs uppercase tracking-widest block mb-3 font-semibold">Our Core Identity</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight mb-6 leading-none">
              Patna’s Luxury Wellness <br />
              & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 font-black">Transformation Sanctuary</span>
            </h2>
            
            <p className="text-zinc-300 font-light text-base sm:text-lg leading-relaxed mb-6">
              Founded on the belief that peak physical health should be paired with extreme architectural comfort, 
              <strong className="text-white"> GLOBAL GYM</strong> has pioneered Patna's premium fitness ecosystem. We are committed to shifting 
              traditional working formats into personalized body transformation journeys.
            </p>
            
            <p className="text-zinc-405 text-sm sm:text-base leading-relaxed mb-8 font-light">
              Whether your focus is shredding visceral fat, gaining powerful muscular endurance, executing posture corrections, 
              or relaxing inside our handcrafted wooden sauna, we provide a results-oriented atmosphere designed 
              exclusively for clients who demand the best.
            </p>

            {/* Quote Block */}
            <div className="p-6 rounded-2xl bg-[#111025]/60 border border-purple-500/20 relative overflow-hidden shadow-lg shadow-black/30">
              <div className="absolute -right-4 -bottom-4 opacity-5">
                <Flame className="w-32 h-32 text-pink-500" />
              </div>
              <p className="font-display text-base text-zinc-300 italic relative z-10">
                "We don't sell random access keys. We guide permanent posture, neural resilience and biological transformation."
              </p>
              <div className="mt-3 flex items-center space-x-2">
                <span className="w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-400" />
                <span className="text-xs font-mono font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Founders, GLOBAL GYM</span>
              </div>
            </div>
          </div>

          {/* Interactive Image grid showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-zinc-900 border border-purple-500/20 group aspect-[4/5] hover:border-pink-500/40 transition-all duration-300 shadow-purple-500/5">
              <img
                src={SAUNA_IMAGE}
                alt="GLOBAL GYM Premium Sauna Facility"
                className="w-full h-full object-cover transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600";
                }}
              />
              {/* Overlay with details */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col justify-end p-8">
                <div className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-[10px] font-mono font-extrabold uppercase text-white w-max mb-3 tracking-widest">
                  Highlight Amenity
                </div>
                <h3 className="font-display font-bold text-2xl text-white uppercase tracking-tight">
                  Authentic Wood Sauna
                </h3>
                <p className="text-zinc-300 text-xs mt-2 font-light leading-relaxed">
                  Enhance cellular decompression and recovery. Free access with our Premium and VIP Membership packages.
                </p>
              </div>
            </div>

            {/* Achievement Badge floating */}
            <div className="absolute -bottom-6 -left-6 bg-zinc-950 text-white rounded-2xl p-5 border border-purple-500/20 shadow-2xl flex items-center space-x-4 max-w-xs backdrop-blur-md">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/40 border border-cyan-800/40 flex items-center justify-center text-cyan-400">
                <Award className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <div className="font-display font-bold text-lg text-white">4.9★ rating</div>
                <div className="text-[11px] text-zinc-400 font-sans leading-snug">Patna’s highest-rated certified premium gym. (5,000+ Reviews)</div>
              </div>
            </div>
          </div>

        </div>

        {/* Why Core Values Columns */}
        <div className="border-t border-[#111025] pt-16">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-mono text-xs uppercase tracking-widest font-bold">Our Guarantees</span>
            <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white uppercase mt-2">
              Engineered For Results
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div 
                  key={i} 
                  id={`about-value-${i}`}
                  className="p-6 rounded-2.5xl bg-[#111025]/40 border border-purple-500/5 hover:border-purple-500/20 hover:bg-[#111025]/80 transition-all duration-300 group hover:shadow-[0_10px_25px_rgba(139,92,246,0.1)] relative"
                >
                  {/* Neon active line indicator */}
                  <div className={`absolute top-0 left-0 w-0 h-1 bg-gradient-to-r ${v.color} group-hover:w-full transition-all duration-300 rounded-t-2.5xl`} />
                  
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-zinc-900 to-zinc-950 p-[1px] mb-6 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 border border-zinc-800">
                    <div className="w-full h-full bg-zinc-950 rounded-[11px] flex items-center justify-center">
                      <Icon className={`w-6 h-6 ${v.iconColor}`} />
                    </div>
                  </div>
                  <h4 className="font-display font-bold text-lg text-white group-hover:text-cyan-400 transition-colors duration-200">
                    {v.title}
                  </h4>
                  <p className="mt-2 text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
