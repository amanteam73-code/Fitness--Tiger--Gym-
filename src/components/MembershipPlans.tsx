import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ChevronRight, Percent } from 'lucide-react';
import { MEMBERSHIP_PLANS } from '../data';

export default function MembershipPlans() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly');

  // Calculates rates for 3 months (quarterly package) with an automatic 15% discount
  const getPlanPriceAndSavings = (basePrice: string) => {
    const numericStr = basePrice.replace(/[^\d]/g, '');
    const priceNum = parseInt(numericStr, 10);
    
    if (billingCycle === 'monthly') {
      return {
        price: basePrice,
        interval: 'month',
        savings: null
      };
    } else {
      const totalForThreeMonthsRaw = priceNum * 3;
      const discountedTotal = Math.round(totalForThreeMonthsRaw * 0.85);
      const averageMonthlyRate = Math.round(discountedTotal / 3);
      
      const totalSavings = totalForThreeMonthsRaw - discountedTotal;
      
      return {
        price: `₹${averageMonthlyRate.toLocaleString('en-IN')}`,
        interval: 'month',
        savings: `Saves ₹${totalSavings.toLocaleString('en-IN')} if quarterly`
      };
    }
  };

  const handleJoinClick = (planName: string, monthlyRate: string) => {
    const period = billingCycle === 'monthly' ? 'Monthly' : 'Quarterly (3-Months Combo with 15% Off)';
    const text = encodeURIComponent(`Hi GLOBAL GYM! I've selected the "${planName}" under the ${period} billing cycle. Please register my slot and share UPI / Cash scan details for Patna Bazar Samiti branch. Thank you!`);
    window.open(`https://wa.me/919955542052?text=${text}`, '_blank');
  };

  return (
    <section id="membership" className="py-24 relative bg-[#0a0914] bg-grid-pattern overflow-hidden border-t border-purple-500/10">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#ec4899]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header content */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-cyan-400 font-mono text-[10px] sm:text-xs uppercase tracking-widest block mb-2 font-semibold">Flexible Investment</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
            EXQUISITE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 font-black">MEMBERSHIP ACCESS</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light mt-4 leading-relaxed">
            Select an elite transformation pathway designed to boost your lifespan and athletic power. No hidden administrative fees. Free Sauna benefits included in premium lines.
          </p>

          {/* Core pricing toggle buttons */}
          <div className="mt-10 inline-flex items-center p-1.5 rounded-2xl bg-[#111025]/60 border border-purple-500/10">
            <button
              id="billing-toggle-monthly"
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-display font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md shadow-cyan-500/20'
                  : 'text-zinc-400 hover:text-cyan-400'
              }`}
            >
              1 Month Rate
            </button>
            <button
              id="billing-toggle-quarterly"
              onClick={() => setBillingCycle('quarterly')}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-display font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center space-x-2 ${
                billingCycle === 'quarterly'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md shadow-cyan-500/20'
                  : 'text-zinc-400 hover:text-cyan-400'
              }`}
            >
              <span>3 Months Saver</span>
              <span className="bg-pink-500 text-white text-[9px] px-2 py-0.5 rounded font-mono font-bold animate-pulse">Save 15%</span>
            </button>
          </div>
        </div>

        {/* Pricing columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {MEMBERSHIP_PLANS.map((plan) => {
            const calculated = getPlanPriceAndSavings(plan.price);
            const isRec = plan.id === 'premium';

            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5 }}
                key={plan.id}
                id={`plan-card-${plan.id}`}
                className={`rounded-3.5xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden transition-all duration-300 group ${
                  isRec
                    ? 'bg-[#111025]/60 border-2 border-pink-500/40 shadow-2xl shadow-pink-500/10 glow-pink scale-102 z-10'
                    : 'glassmorphism bg-[#111025]/20 hover:border-cyan-500/20 hover:shadow-[0_10px_35px_rgba(6,182,212,0.12)]'
                }`}
              >
                {/* Visual Glows on recommended cards */}
                {isRec && (
                  <>
                    <div className="absolute top-0 right-0 bg-gradient-to-l from-cyan-500 to-pink-500 text-white font-mono font-black text-[9px] uppercase tracking-widest px-5 py-2.5 rounded-bl-2xl">
                      RECOMMENDED
                    </div>
                    {/* Glowing highlight point */}
                    <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/20 blur-3xl pointer-events-none" />
                  </>
                )}

                <div>
                  
                  {/* Plan Badge / Title */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-zinc-300 font-display font-semibold text-lg uppercase group-hover:text-cyan-300 transition-colors duration-200">
                      {plan.name}
                    </span>
                    {plan.badge && !isRec && (
                      <span className="text-[10px] font-mono text-cyan-400 bg-zinc-950/80 border border-cyan-500/25 px-2.5 py-1 rounded">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  {/* Pricing metrics */}
                  <div className="mb-6 flex items-baseline select-none">
                    <span className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tighter">
                      {calculated.price}
                    </span>
                    <span className="text-zinc-500 font-sans text-sm ml-2 font-semibold">
                       / {calculated.interval}
                    </span>
                  </div>

                  {/* Savings details */}
                  {billingCycle === 'quarterly' && (
                    <div className="mb-6 inline-flex items-center space-x-1.5 px-3 py-1 rounded bg-pink-950/50 border border-pink-500/20 text-pink-400 text-xs font-mono font-bold animate-pulse">
                      <Percent className="w-3.5 h-3.5" />
                      <span>{calculated.savings}</span>
                    </div>
                  )}

                  <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed mb-8 border-b border-zinc-900/60 pb-6">
                    {plan.description}
                  </p>

                  {/* Features Bullet List */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => {
                      const isSaunaPerk = feature.toLowerCase().includes('sauna');
                      return (
                        <div key={i} className="flex items-start space-x-3">
                          <CheckCircle2 className={`w-4.5 h-4.5 shrink-0 mt-0.5 ${
                            isSaunaPerk ? 'text-pink-500' : 'text-cyan-400'
                          }`} />
                          <span className={`text-xs sm:text-sm font-sans font-light leading-snug ${
                            isSaunaPerk ? 'text-zinc-100 font-bold uppercase tracking-wide text-xs bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent' : 'text-zinc-400'
                          }`}>
                            {feature}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                </div>

                {/* Confirm booking button */}
                <div>
                  <button
                    id={`btn-join-plan-${plan.id}`}
                    onClick={() => handleJoinClick(plan.name, calculated.price)}
                    className={`w-full py-4 rounded-xl font-display text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-350 cursor-pointer active:scale-95 flex items-center justify-center space-x-2 ${
                      isRec
                        ? 'bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white shadow-xl hover:shadow-[0_0_25px_rgba(236,72,153,0.35)] hover:scale-[1.01]'
                        : 'bg-zinc-950 border border-zinc-850 text-zinc-300 hover:text-white hover:border-cyan-500/20 hover:bg-[#111025]/60'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-zinc-500 text-center uppercase font-mono mt-3 tracking-widest font-semibold">
                    Instant Activation on Branch Visit
                  </p>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
