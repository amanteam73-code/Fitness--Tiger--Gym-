import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Calendar, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { TRAINERS } from '../data';
import { TrainerItem } from '../types';

export default function Trainers() {
  const [selectedTrainer, setSelectedTrainer] = useState<TrainerItem | null>(null);
  const [sessionBooked, setSessionBooked] = useState(false);
  const [bookName, setBookName] = useState('');
  const [bookPhone, setBookPhone] = useState('');
  const [bookGoal, setBookGoal] = useState('Body Transformation / Muscle Gain');

  const handleBookSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!bookName || !bookPhone) return;

    setSessionBooked(true);
    setTimeout(() => {
      const text = encodeURIComponent(`Hi Tiger Fitness! I'm ${bookName}. I would like to book my FREE 1-on-1 personal training orientation slot with ${selectedTrainer?.name}. Goal: ${bookGoal}. Phone: ${bookPhone}. Please confirm!`);
      window.open(`https://wa.me/916202730517?text=${text}`, '_blank');
      
      setSessionBooked(false);
      setSelectedTrainer(null);
      setBookName('');
      setBookPhone('');
    }, 1500);
  };

  return (
    <section id="trainers" className="py-24 relative bg-[#06050b] overflow-hidden border-t border-purple-500/10">
      {/* background glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full glow-spot-blue blur-[150px] pointer-events-none opacity-30 animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Title block */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-cyan-400 font-mono text-[10px] sm:text-xs uppercase tracking-widest block mb-2 font-bold uppercase">Our Master Coaches</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
            MEET PATNA’S <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 font-extrabold font-black font-serif">FINEST COACHES</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light mt-4 leading-relaxed">
            Certified international specialists committed to correct postural alignments, results-driven hypertrophy programs and permanent weight loss recipes.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRAINERS.map((trainer) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              key={trainer.id}
              id={`trainer-card-${trainer.id}`}
              className="group bg-[#111025]/40 border border-purple-500/5 rounded-3xl overflow-hidden hover:border-cyan-500/30 hover:bg-[#111025]/80 transition-all duration-300 flex flex-col justify-between"
            >
              
              {/* Photo & overlay */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-950">
                <img
                  src={trainer.imageUrl}
                  alt={trainer.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=600";
                  }}
                />
                
                {/* Glowing overlay layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06050b] via-[#06050b]/45 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />
                
                {/* Exp experience badge absolute */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono font-extrabold text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-lg">
                  {trainer.experience} EXP
                </div>
              </div>

              {/* General details */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-cyan-300 transition-colors duration-255">
                    {trainer.name}
                  </h3>
                  
                  <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mt-1">
                    {trainer.role}
                  </div>

                  {/* Certification label with icon */}
                  <div className="mt-4 flex items-start space-x-2 text-zinc-400">
                    <Award className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs font-sans font-light tracking-tight leading-snug">
                      {trainer.certification}
                    </span>
                  </div>

                  {/* Specialties tag layout */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {trainer.specialization.map((spec, idx) => (
                      <span 
                        key={idx}
                        className="bg-zinc-950/80 px-2.5 py-1 rounded-md text-[10px] font-mono text-zinc-400"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Booking Call Trigger */}
                <div className="mt-6 pt-4 border-t border-zinc-900/60 font-medium">
                  <button
                    id={`btn-trainer-book-${trainer.id}`}
                    onClick={() => setSelectedTrainer(trainer)}
                    className="w-full py-3.5 rounded-xl bg-zinc-950 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-pink-500 text-zinc-300 hover:text-white font-display font-extrabold text-xs uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-all cursor-pointer border border-zinc-800 hover:border-transparent active:scale-95"
                  >
                    <span>Book Orientation</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Free 1-on-1 Personalized Session Booker Modal */}
      <AnimatePresence>
        {selectedTrainer && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTrainer(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-lg bg-zinc-950 border border-purple-500/20 rounded-3xl p-6 sm:p-8 overflow-hidden shadow-2xl z-10"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500" />
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[10px] font-mono uppercase text-cyan-400 tracking-widest font-extrabold">Tiger VIP Trial Lab</span>
                  <h3 className="font-display font-extrabold text-2xl uppercase tracking-tight text-white mt-1">
                    Book Free Session
                  </h3>
                </div>
                <button
                  id="modal-close-trainer"
                  onClick={() => setSelectedTrainer(null)}
                  className="p-1 px-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white text-xs font-mono cursor-pointer"
                >
                  ESC ✕
                </button>
              </div>

              {sessionBooked ? (
                <div className="py-12 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-white">GENERATING APPOINTMENT SHEETS</h4>
                  <p className="text-xs text-zinc-400 max-w-xs mt-2 leading-relaxed">
                    Redirecting you to Counselor WhatsApp to confirm slot timing allocations...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBookSubmit} id="trainer-book-form" className="space-y-4">
                  
                  {/* Selected trainer brief card info */}
                  <div className="p-4 rounded-xl bg-[#111025]/40 border border-purple-500/10 flex items-center space-x-4">
                    <img
                      src={selectedTrainer.imageUrl}
                      alt={selectedTrainer.name}
                      className="w-12 h-12 rounded-xl object-cover grayscale shrink-0"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=150";
                      }}
                    />
                    <div>
                      <div className="font-display font-bold text-sm text-white uppercase">{selectedTrainer.name}</div>
                      <div className="text-[10px] font-mono text-zinc-500 uppercase">{selectedTrainer.role}</div>
                    </div>
                  </div>

                  <div>
                     <label className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2 font-semibold">Your Full Name</label>
                     <input
                      type="text"
                      required
                      placeholder="e.g., Vikash Singh"
                      value={bookName}
                      onChange={(e) => setBookName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-cyan-500 text-sm font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-450 uppercase tracking-widest mb-2 font-semibold">WhatsApp Contact Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g., +91 62027 30517"
                      value={bookPhone}
                      onChange={(e) => setBookPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-cyan-500 text-sm font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-450 uppercase tracking-widest mb-2 font-semibold">Primary Physique Target</label>
                    <select
                      value={bookGoal}
                      onChange={(e) => setBookGoal(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-820 text-white focus:outline-none focus:border-cyan-400 text-sm font-sans cursor-pointer"
                    >
                      <option value="Body Transformation / Muscle Gain">Heavy Hypertrophy & Muscle Gain</option>
                      <option value="Fat Loss & Endurance Build">Fat Shred & Speed Conditioning</option>
                      <option value="Postural Correction & Power lifting">Posture Align & Powerlifting</option>
                      <option value="General Athletic Flexibility">General Flexibility & Aerobic Energy</option>
                    </select>
                  </div>

                  {/* Submission triggers */}
                  <button
                    type="submit"
                    id="submit-trainer-booking"
                    className="w-full mt-6 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-display font-extrabold text-sm uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_25px_rgba(139,92,246,0.35)] transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Confirm Free Session Booking</span>
                  </button>

                  <p className="text-[10px] text-zinc-500 text-center leading-relaxed mt-2 uppercase tracking-tight">
                    *Limited to 1 trial orientation per person. No hidden costs. Tiger Fitness Patna guarantees client data privacy.
                  </p>

                </form>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
