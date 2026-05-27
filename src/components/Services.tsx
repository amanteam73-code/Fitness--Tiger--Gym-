import { useState, ComponentType } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Flame, 
  Dumbbell, 
  Music, 
  Sparkles, 
  Activity, 
  Award, 
  Apple, 
  Bike, 
  Zap, 
  Trophy, 
  ChevronRight, 
  Compass 
} from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data';

// Map icon strings to actual Lucide-React React Element components
const serviceIconMap: Record<string, ComponentType<any>> = {
  Flame,
  Dumbbell,
  Music,
  Sparkles,
  Activity,
  Award,
  Apple,
  Bike,
  Zap,
  Trophy // used for Adult Sports
};

export default function Services() {
  const [activeTab, setActiveTab] = useState<'all' | 'strength' | 'cardio' | 'mind-body' | 'specialty' | 'sports'>('all');
  
  // Combine custom categories
  const categories = [
    { value: 'all', label: 'All Services' },
    { value: 'strength', label: 'Strength & Power' },
    { value: 'cardio', label: 'High & Low Cardio' },
    { value: 'mind-body', label: 'Mind, Core & Balance' },
    { value: 'specialty', label: 'Specialty Labs' }
  ];

  // Map services to match category tabs correctly
  const augmentedServices = [
    ...SERVICES,
    {
      id: 'adult-sports',
      title: 'Adult Sports Conditioning',
      description: 'Accelerate coordination, dynamic footwork, and functional power explicitly designed for competitive badminton, basketball, and tracking.',
      iconName: 'Trophy',
      category: 'specialty',
      bgGradient: 'from-blue-600/20 to-orange-400/20'
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? augmentedServices
    : augmentedServices.filter(service => service.category === activeTab);

  const getInquiryUrl = (serviceName: string) => {
    const text = encodeURIComponent(`Hi Tiger Fitness! I'm interested in enrolling in the "${serviceName}" program at your Patna gym. Could you please share slot timings and coach fees?`);
    return `https://wa.me/916202730517?text=${text}`;
  };

  return (
    <section id="services" className="py-24 relative bg-[#06050b] bg-grid-pattern border-t border-purple-500/10">
      {/* Cyan & Purple Glowing spot background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full glow-spot-blue blur-[140px] pointer-events-none opacity-40 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full glow-spot-purple blur-[150px] pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="text-cyan-400 font-mono text-[10px] sm:text-xs uppercase tracking-widest block mb-2 font-semibold">Our Offerings</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
              WORLD-CLASS <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 font-black">FITNESS DISCIPLINES</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-light mt-3 leading-relaxed">
              We provide Patna’s most comprehensive selection of high-end conditioning, recovery, and hypertrophy services, customized for professional and personal goals.
            </p>
          </div>

          {/* Contacts shortcut */}
          <div className="mt-6 md:mt-0">
            <div className="text-zinc-500 text-xs font-mono mb-2 text-right hidden md:block font-semibold">Need instant recommendations?</div>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 text-sm text-cyan-400 hover:text-pink-400 font-semibold transition-colors duration-300 cursor-pointer"
            >
              <span>Consult our fitness counselor</span>
              <ChevronRight className="w-4 h-4 text-cyan-400" />
            </a>
          </div>
        </div>

        {/* Filtering Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 pb-2 border-b border-zinc-900/60 overflow-x-auto scroller-hidden">
          {categories.map((tab) => (
            <button
              key={tab.value}
              id={`tab-${tab.value}`}
              onClick={() => setActiveTab(tab.value as any)}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold font-display tracking-wider uppercase transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeTab === tab.value
                  ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white font-extrabold shadow-lg shadow-cyan-500/20'
                  : 'bg-[#111025]/40 text-zinc-400 hover:text-cyan-300 hover:bg-[#111025]/80 border border-purple-500/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid Container */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => {
              const IconComponent = serviceIconMap[service.iconName] || Compass;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  key={service.id}
                  id={`service-${service.id}`}
                  className="group rounded-2.5xl bg-[#111025]/40 border border-purple-500/5 hover:border-cyan-500/30 hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)] overflow-hidden relative transition-all duration-500 flex flex-col justify-between"
                >
                  {/* Subtle cyan tint glow inside the card on hover */}
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Top-right corner tag */}
                  <div className="absolute top-4 right-4 bg-zinc-950/85 backdrop-blur-md px-2.5 py-1 rounded-md text-[9px] font-mono font-bold text-cyan-400 uppercase tracking-widest border border-cyan-500/20">
                    {service.category}
                  </div>

                  <div className="p-8 relative z-10 flex-grow">
                    {/* Icon frame - glowing Cyan */}
                    <div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-zinc-850 flex items-center justify-center mb-6 group-hover:bg-cyan-950/40 group-hover:border-cyan-500/40 transition-all duration-300 shadow-inner group-hover:shadow-[0_0_15px_rgba(6,182,212,0.25)]">
                      <IconComponent className="w-6 h-6 text-cyan-400 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 filter drop-shadow-[0_0_4px_rgba(6,182,212,0.6)]" />
                    </div>

                    <h3 className="font-display font-black text-xl text-white uppercase group-hover:text-cyan-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="mt-3 text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Pricing / Booking Trigger Footer */}
                  <div className="p-6 border-t border-zinc-900/60 relative z-10 bg-[#111025]/20">
                    <a
                       href={getInquiryUrl(service.title)}
                       target="_blank"
                       rel="noreferrer"
                       id={`inquire-${service.id}`}
                       className="w-full py-3.5 rounded-xl bg-zinc-950 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 text-zinc-300 hover:text-white font-display font-extrabold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all cursor-pointer border border-zinc-850 hover:border-transparent hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] duration-350"
                     >
                      <span>Inquire Timings</span>
                      <ChevronRight className="w-4.5 h-4.5" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Custom quick advice note */}
        <div className="mt-14 p-6 rounded-2xl bg-[#111025]/60 border border-purple-500/20 max-w-4xl mx-auto text-center shadow-[0_4px_25px_rgba(139,92,246,0.08)]">
          <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
            💡 <strong className="text-cyan-400">Special Combo Pass</strong>: Enrolling in our <strong className="text-purple-400">Premium Access Plan</strong> grants you full access to 
            <em> Aerobics, Zumba, Yoga</em> and exclusive <em>Sauna recoveries</em> at no secondary recurring cost.
          </p>
        </div>

      </div>
    </section>
  );
}
