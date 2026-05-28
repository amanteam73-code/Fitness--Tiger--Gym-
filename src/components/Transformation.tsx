import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Flame, Award, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Transformation() {
  // Calculator states
  const [currentWeight, setCurrentWeight] = useState<number | ''>(80);
  const [targetWeight, setTargetWeight] = useState<number | ''>(72);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [activity, setActivity] = useState<number>(1.375); // Light active default
  const [calcResult, setCalcResult] = useState<{
    dailyCal: number;
    protein: number;
    durationWeeks: number;
    plan: string;
    actionLabel: string;
  } | null>(null);

  const calculateTarget = (e: FormEvent) => {
    e.preventDefault();
    if (!currentWeight || !targetWeight) return;

    // Estimate daily calorie needs using base calculations
    const bmr = gender === 'male' 
      ? (10 * currentWeight) + (6.25 * 174) - (5 * 28) + 5 // average height & age
      : (10 * currentWeight) + (6.25 * 162) - (5 * 28) - 161;

    const maintenance = Math.round(bmr * activity);
    
    // Weight diff
    const weightDiff = currentWeight - targetWeight;
    const isLosing = weightDiff > 0;
    
    // Safe rate of weight loss is ~0.5kg to 0.7kg per week
    const safeRate = 0.6;
    const durationWeeks = Math.max(Math.round(Math.abs(weightDiff) / safeRate), 4);
    
    // safe daily deficit or surplus
    const calorieAdjustment = isLosing ? -450 : 350;
    const dailyCal = Math.max(maintenance + calorieAdjustment, 1200);
    
    // protein standard recommendation: ~1.8g to 2.2g per kg of bodyweight
    const protein = Math.round(currentWeight * (gender === 'male' ? 2.0 : 1.7));
    
    // Plan matching
    let plan = 'Basic Access Plan';
    if (Math.abs(weightDiff) > 10) {
      plan = 'Elite Personal Coaching (Includes VIP supervision)';
    } else if (Math.abs(weightDiff) > 4) {
      plan = 'Premium Transformation Access (Includes Diet Blueprint)';
    }

    setCalcResult({
      dailyCal,
      protein,
      durationWeeks,
      plan,
      actionLabel: isLosing ? 'Safe Deficit Intake' : 'Bulking Target Intake'
    });
  };

  return (
    <section id="testimonials" className="py-24 relative bg-[#06050b] overflow-hidden border-t border-purple-500/10">
      {/* Background spot overlays */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-pink-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-cyan-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Title and ratings block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7">
            <span className="text-cyan-400 font-mono text-[10px] sm:text-xs uppercase tracking-widest block mb-2 font-semibold">Scientific Results</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight mb-4 leading-normal">
              PHYSIQUE TRANSFORMATION <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 font-black">& DIET BLUEPRINT</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
              Real results require rigorous consistency, hygienic spaces, and biomechanically safe guidance. See how Patna’s top leaders, athletes, and working professionals transformed their lives.
            </p>
          </div>

          {/* Large Google Reviews Badge */}
          <div className="lg:col-span-5 w-full">
            <div className="glassmorphism bg-[#111025]/40 p-6 sm:p-8 rounded-3xl border border-pink-500/15 flex flex-col justify-between relative overflow-hidden shadow-xl shadow-pink-500/5">
              <div className="absolute -right-6 -bottom-6 opacity-[0.03]">
                <Star className="w-32 h-32 text-pink-500 fill-current" />
              </div>
              
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex text-pink-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="font-mono text-[10px] font-bold text-cyan-400 uppercase tracking-widest">Google Verified</span>
              </div>

              <div className="font-display font-black text-4xl text-white tracking-tight">
                4.8★ STARS
              </div>
              <div className="text-xs sm:text-sm font-sans text-zinc-300 mt-1 leading-relaxed">
                Over <strong className="text-white">366+ Verified Gym-Goer Reviews</strong> in Patna's premium database.
              </div>
              <p className="text-[10px] text-zinc-500 font-light mt-3 leading-relaxed uppercase tracking-wider">
                *The highest-rated premium gymnasium workspace in central Patna.
              </p>
            </div>
          </div>
        </div>

        {/* Core Double Grid: Column 1 Testimonials List, Column 2 Physique Target Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Testimonials Frame */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display font-extrabold text-lg sm:text-xl text-zinc-300 uppercase tracking-widest mb-2 flex items-center space-x-2">
              <Award className="w-5 h-5 text-cyan-400" />
              <span>Real Success Chronicles</span>
            </h3>

            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                id={`testimonial-${t.id}`}
                className="p-6 sm:p-8 rounded-2.5xl bg-[#111025]/40 border border-purple-500/5 hover:border-pink-500/20 transition-all duration-300 shadow-sm hover:shadow-[0_4px_25px_rgba(236,72,153,0.06)]"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-display font-extrabold text-base text-white uppercase group-hover:text-cyan-300">
                      {t.name}
                    </h4>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mt-0.5">
                      {t.role}
                    </span>
                  </div>
                  
                  <div className="px-3 py-1 bg-zinc-950 font-mono text-[9px] font-bold text-[#ec4899] rounded-md border border-zinc-900 uppercase">
                    {t.duration}
                  </div>
                </div>

                <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed italic mb-4">
                  "{t.comment}"
                </p>

                {/* Achievement Highlight */}
                <div className="pt-3 border-t border-zinc-900/60 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span className="text-[10px] font-mono font-black text-cyan-400 uppercase tracking-wider">
                      {t.achievement}
                    </span>
                  </div>
                  
                  <div className="flex text-pink-400 text-xs text-right tracking-tight font-sans">
                    ★★★★★
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Physique Transformation Planner form */}
          <div className="lg:col-span-6 w-full">
            <div className="glassmorphism bg-[#111025]/40 p-6 sm:p-8 rounded-3xl border border-purple-500/10 relative shadow-xl">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-cyan-500 to-pink-500 text-white font-mono text-[8px] uppercase px-4 py-1.5 rounded-bl-xl tracking-widest font-black">
                Interactive Planner
              </div>

              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white uppercase tracking-tight mb-2">
                ESTIMATE DEFICIT & CALORIES
              </h3>
              <p className="text-zinc-400 text-xs font-light mb-6 leading-relaxed">
                Calculate daily targets, protein counts, safe timelines and discover the appropriate membership plan for your physique.
              </p>

              <form onSubmit={calculateTarget} id="physique-planner-form" className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-zinc-550 uppercase tracking-widest mb-2 font-bold">Gender</label>
                    <div className="grid grid-cols-2 gap-2 bg-zinc-950 p-1 rounded-xl border border-zinc-900">
                      <button
                        type="button"
                        id="gender-male"
                        onClick={() => setGender('male')}
                        className={`py-2 rounded-lg text-[11px] font-display font-extrabold uppercase transition-all cursor-pointer ${
                          gender === 'male' ? 'bg-cyan-500 text-white' : 'text-zinc-500 hover:text-zinc-200'
                        }`}
                      >
                        Male
                      </button>
                      <button
                        type="button"
                        id="gender-female"
                        onClick={() => setGender('female')}
                        className={`py-2 rounded-lg text-[11px] font-display font-extrabold uppercase transition-all cursor-pointer ${
                          gender === 'female' ? 'bg-pink-500 text-white' : 'text-zinc-500 hover:text-zinc-200'
                        }`}
                      >
                        Female
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-zinc-550 uppercase tracking-widest mb-2 font-bold">Activity level</label>
                    <select
                      value={activity}
                      onChange={(e) => setActivity(parseFloat(e.target.value))}
                      className="w-full px-3 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-cyan-500 text-xs cursor-pointer"
                    >
                      <option value="1.2">Sedentary (Desk life)</option>
                      <option value="1.375">Lightly Active (1-2 workouts/wk)</option>
                      <option value="1.55">Moderately Active (3-5 workouts/wk)</option>
                      <option value="1.725">Extremely Active (Athletic drills)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-zinc-550 uppercase tracking-widest mb-2 font-bold">Current weight (KG)</label>
                    <input
                      type="number"
                      required
                      min={40}
                      max={200}
                      value={currentWeight}
                      onChange={(e) => setCurrentWeight(e.target.value === '' ? '' : parseInt(e.target.value, 10))}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-cyan-500 text-sm font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-zinc-550 uppercase tracking-widest mb-2 font-bold">Target weight (KG)</label>
                    <input
                      type="number"
                      required
                      min={40}
                      max={200}
                      value={targetWeight}
                      onChange={(e) => setTargetWeight(e.target.value === '' ? '' : parseInt(e.target.value, 10))}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-cyan-500 text-sm font-sans"
                    />
                  </div>
                </div>

                {/* Submit trigger button */}
                <button
                  type="submit"
                  id="btn-calc-target"
                  className="w-full mt-4 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-display font-extrabold text-xs uppercase tracking-wider hover:scale-[1.01] active:scale-[0.99] hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all flex items-center justify-center space-x-2 cursor-pointer duration-300"
                >
                  <Flame className="w-4 h-4 text-white" />
                  <span>Execute Physical Assessment</span>
                </button>
              </form>

              {/* Calculator Output Block */}
              <AnimatePresence>
                {calcResult && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 pt-6 border-t border-zinc-900/60 space-y-4 overflow-hidden"
                  >
                    <div className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest text-center">Estimation assessment sheet</div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Calories */}
                      <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-cyan-500/25 shadow-md">
                        <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider">{calcResult.actionLabel}</div>
                        <div className="font-display font-black text-xl sm:text-2xl text-cyan-400 mt-1">
                          {calcResult.dailyCal} kcal
                        </div>
                        <span className="text-[9px] text-zinc-500 uppercase font-mono">Suggested daily limit</span>
                      </div>

                      {/* Protein */}
                      <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-pink-500/25 shadow-md">
                        <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider">PROTEIN TARGET</div>
                        <div className="font-display font-black text-xl sm:text-2xl text-white mt-1">
                          {calcResult.protein}g / day
                        </div>
                        <span className="text-[9px] text-zinc-500 uppercase font-mono">For lean tissue recovery</span>
                      </div>

                    </div>

                    <div className="p-4 rounded-xl bg-zinc-950 border border-purple-500/25 space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-zinc-500 font-mono text-[10px] uppercase">ESTIMATED SAFE TIMEFRAME</span>
                        <span className="text-white font-extrabold">{calcResult.durationWeeks} Weeks</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-zinc-500 font-mono text-[10px] uppercase">SUGGESTED PATHWAY</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 font-extrabold tracking-tight">{calcResult.plan}</span>
                      </div>
                    </div>

                    {/* CTA link to suggested membership */}
                    <button
                      id="btn-calc-apply"
                      onClick={() => {
                        const text = encodeURIComponent(`Hi The Rock Gym! I used your online Physique Planner and got a daily target of ${calcResult.dailyCal} kcal, ${calcResult.protein}g protein, with a transition timeframe of ${calcResult.durationWeeks} weeks. I'm excited to enrol for my branch trials!`);
                        window.open(`https://wa.me/918227822710?text=${text}`, '_blank');
                      }}
                      className="w-full py-3.5 rounded-xl bg-zinc-950 hover:bg-zinc-900 text-zinc-300 hover:text-white font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all cursor-pointer border border-zinc-850 hover:border-cyan-500/25 duration-300"
                    >
                      <span>Share Target with Counselor</span>
                      <ChevronRight className="w-4 h-4 text-cyan-400 font-bold" />
                    </button>

                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
