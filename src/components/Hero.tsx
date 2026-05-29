import { motion } from 'motion/react';
import { ArrowRight, Award, MessageCircle, Star, Users, Dumbbell, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, HERO_IMAGE } from '../data';

export default function Hero() {
  const stats = [
    { 
      number: '10K+', 
      label: 'Active Members', 
      icon: Users,
      colorClass: 'text-cyan-400',
      glowClass: 'hover:shadow-[0_0_25px_rgba(6,182,212,0.25)] hover:border-cyan-500/30',
      accentGrad: 'from-cyan-400 to-blue-500',
      iconBg: 'bg-cyan-950/40 border-cyan-800/50'
    },
    { 
      number: '4.9★', 
      label: '⭐ 4.9 Verified Rating (5K+ Reviews)', 
      icon: Star,
      colorClass: 'text-pink-400',
      glowClass: 'hover:shadow-[0_0_25px_rgba(236,72,153,0.25)] hover:border-pink-500/30',
      accentGrad: 'from-pink-400 via-purple-400 to-indigo-400',
      iconBg: 'bg-pink-950/40 border-pink-800/50'
    },
    { 
      number: 'Premium', 
      label: 'World-Class Equipment', 
      icon: Dumbbell,
      colorClass: 'text-purple-400',
      glowClass: 'hover:shadow-[0_0_25px_rgba(139,92,246,0.25)] hover:border-purple-500/30',
      accentGrad: 'from-purple-400 to-indigo-500',
      iconBg: 'bg-purple-950/40 border-purple-800/50'
    },
    { 
      number: 'Certified', 
      label: 'Fitness Experts', 
      icon: Award,
      colorClass: 'text-amber-400',
      glowClass: 'hover:shadow-[0_0_25px_rgba(245,158,11,0.25)] hover:border-amber-500/30',
      accentGrad: 'from-amber-400 to-orange-500',
      iconBg: 'bg-amber-950/40 border-amber-800/50'
    },
  ];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-grid-pattern bg-[#06050b]"
    >
      {/* Background Image Container with Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="GLOBAL GYM Luxury Gym Patna"
          className="w-full h-full object-cover object-center opacity-25 select-none scale-105 animate-[zoom-slow_20s_infinite_alternate]"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1920";
          }}
        />
        {/* Colorful Modern Gradients covering the boring dark canvas */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06050b] via-[#06050b]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06050b] via-transparent to-[#06050b]/35" />
        
        {/* Soft custom modern colorful glowing spots */}
        <div className="absolute top-1/6 left-1/4 w-[500px] h-[500px] rounded-full glow-spot-blue blur-[140px] opacity-75 animate-pulse" />
        <div className="absolute bottom-1/5 right-1/4 w-[450px] h-[450px] rounded-full glow-spot-pink blur-[150px] opacity-60 animate-pulse" />
        <div className="absolute top-1/3 right-1/10 w-[350px] h-[350px] rounded-full glow-spot-purple blur-[120px] opacity-50 animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Welcome Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-start mb-6"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-purple-500/30 backdrop-blur-lg shadow-[0_0_20px_rgba(139,92,246,0.15)]">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-[10px] sm:text-xs font-mono font-extrabold tracking-wider bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent uppercase">
              PATNA'S ULTIMATE LUXURY FITNESS DESTINATION • 4.9★ RATING
            </span>
          </div>
        </motion.div>

        {/* Main Headings */}
        <div className="max-w-4xl mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.9] text-white"
          >
            Transform Your Body. <br />
            <span className="relative inline-block mt-2">
              <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-20 blur-md" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 font-black">
                Build Your Strength.
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-zinc-350 text-base sm:text-xl font-sans font-light leading-relaxed max-w-3xl"
          >
            Empower yourself at Patna’s most vibrant fitness space. Fully engineered with high-end biomechanical cages, exquisite Wood Saunas, custom Diet Blueprints, and certified VIP instructors.
          </motion.p>
        </div>

        {/* Call to Actions - Redesigned to be extremely colorful & glowing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row flex-wrap gap-4 mb-20"
        >
          {/* Join Now - Vibrant gradient glow button */}
          <button
            id="hero-join-now"
            onClick={() => handleScrollTo('membership')}
            className="px-8 py-4 rounded-xl font-display text-sm font-extrabold text-white uppercase tracking-wider bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:scale-[1.03] active:scale-[0.98] transition-all hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] duration-300 flex items-center justify-center space-x-2.5 cursor-pointer shadow-[0_5px_25px_rgba(236,72,153,0.25)] border border-white/20"
          >
            <Sparkles className="w-4 h-4 fill-current animate-pulse text-yellow-300" />
            <span>Join Now</span>
            <ArrowRight className="w-4 h-4" strokeWidth={3} />
          </button>

          {/* Start Free Trial - Cyan Cybernetic Button */}
          <button
            id="hero-free-trial"
            onClick={() => handleScrollTo('contact')}
            className="px-8 py-4 rounded-xl font-display text-sm font-extrabold text-[#22d3ee] uppercase tracking-wider bg-zinc-950/80 border border-cyan-500/40 hover:bg-zinc-900 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2 cursor-pointer duration-300"
          >
            <span>Start Free Trial</span>
          </button>

          {/* WhatsApp Direct */}
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            id="hero-whatsapp-link"
            className="px-6 py-4 rounded-xl font-display text-sm font-bold text-white tracking-wider bg-emerald-600/90 hover:bg-emerald-600 hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-3 duration-300"
          >
            <MessageCircle className="w-5 h-5 fill-current text-white" />
            <span>Chat on WhatsApp ({BUSINESS_INFO.phoneFormatted})</span>
          </a>
        </motion.div>

        {/* Stats Section with Glassmorphism Cards that Glow and possess slight 3D impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`glassmorphism p-6 rounded-2xl border border-zinc-800/60 ${stat.glowClass} transition-all duration-500 relative group overflow-hidden`}
              >
                {/* Accent line top with specific card colors */}
                <div className={`absolute top-0 left-0 w-0 h-1 bg-gradient-to-r ${stat.accentGrad} group-hover:w-full transition-all duration-300`} />
                
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-display font-black text-3xl sm:text-4xl tracking-tight text-white`}>
                    {stat.number}
                  </span>
                  <div className={`p-2.5 rounded-xl border ${stat.iconBg} ${stat.colorClass} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-sm shadow-black`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-zinc-350 text-xs sm:text-sm font-semibold tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </motion.div>

      </div>

      {/* Floating Indicators for scroll rhythm */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity" onClick={() => handleScrollTo('about')}>
        <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-2">Scroll To Explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-zinc-800 flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: infinite, duration: 1.5 }}
            className="w-1.5 h-1.5 rounded-full bg-cyan-400" 
          />
        </div>
      </div>
    </section>
  );
}

const infinite = Infinity; Infinity;
