import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Send, 
  CheckCircle, 
  ChevronRight, 
  Copy,
  Check,
  Instagram
} from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function Contact() {
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formService, setFormService] = useState('Personal Training');
  const [formMessage, setFormMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formName || !formPhone) return;

    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      const text = encodeURIComponent(`Hi GLOBAL GYM! I'm ${formName}. I'm writing through the website form. I am interested in "${formService}". Message: ${formMessage}. Phone: ${formPhone}. Let me know slot openings!`);
      window.open(`https://wa.me/919955542052?text=${text}`, '_blank');

      setTimeout(() => {
        setSubmitSuccess(false);
        setFormName('');
        setFormPhone('');
        setFormMessage('');
      }, 4000);

    }, 1500);
  };

  const googleMapSrc = "https://maps.google.com/maps?q=GLOBAL%20GYM%20Bazaar%2520Samiti%20near%20Shiv-Kali%20Mandir%20Bahadurpur%20Patna&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="contact" className="py-24 relative bg-[#06050b] bg-grid-pattern overflow-hidden border-t border-purple-500/10">
      {/* Glow backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-pink-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Title Details */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-cyan-400 font-mono text-[10px] sm:text-xs uppercase tracking-widest block mb-2 font-semibold">Connect With Us</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
            START YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 font-black">TRANSFORMATION TODAY</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light mt-4 leading-relaxed">
            Visit our state-of-the-art facility in Bazaar Samiti Road, Bahadurpur. Send us a message or tap below to directly message our fitness consultants.
          </p>
        </div>

        {/* Double-span: Column 1 contact details & schedule list, Column 2 live form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          
          {/* Column 1 info list */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="font-display font-black text-2xl text-white uppercase tracking-wider mb-2 leading-none">
              GLOBAL GYM <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500">HQ PATNA</span>
            </h3>

            {/* Address */}
            <div className="p-6 rounded-2.5xl bg-[#111025]/40 border border-purple-500/5 flex items-start space-x-4 relative group hover:border-cyan-500/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-zinc-950 flex items-center justify-center text-cyan-400 shrink-0 border border-zinc-850">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex-grow">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Branch Location Address</span>
                <p className="text-zinc-300 text-xs sm:text-sm font-sans font-light leading-relaxed mt-1">
                  {BUSINESS_INFO.address}
                </p>
                <button
                  id="btn-copy-address"
                  onClick={handleCopyAddress}
                  className="mt-3.5 inline-flex items-center space-x-1 text-xs text-cyan-400 hover:text-white transition-colors cursor-pointer bg-zinc-950 border border-zinc-850 px-3 py-1.5 rounded-lg text-left"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-450" />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Address Details'}</span>
                </button>
              </div>
            </div>

            {/* Quick dials & WhatsApp Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Phone Line */}
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                id="contact-call-link"
                className="p-5 rounded-2.5xl bg-[#111025]/40 border border-purple-500/5 hover:border-cyan-500/30 flex items-center space-x-4 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-950 flex items-center justify-center text-cyan-400 shrink-0 border border-zinc-850">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">Click to Call</span>
                  <div className="text-zinc-350 font-mono text-xs sm:text-sm font-bold mt-0.5">
                    {BUSINESS_INFO.phoneFormatted}
                  </div>
                </div>
              </a>

              {/* WhatsApp Live */}
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                id="contact-whatsapp-link"
                className="p-5 rounded-2.5xl bg-[#111025]/40 border border-purple-500/5 hover:border-emerald-500/40 flex items-center space-x-4 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-950 flex items-center justify-center text-emerald-400 shrink-0 border border-zinc-850">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">WhatsApp Help</span>
                  <div className="text-zinc-350 font-mono text-xs sm:text-sm font-bold mt-0.5">
                    Direct Counselor
                  </div>
                </div>
              </a>

            </div>

            {/* Hours Checklist */}
            <div className="p-6 rounded-2.5xl bg-[#111025]/40 border border-purple-500/5">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-5 h-5 text-cyan-400" />
                <h4 className="font-display font-extrabold text-base text-white uppercase tracking-tight">OPERATIONAL TIMINGS</h4>
              </div>
              
              <div className="space-y-3.5">
                {BUSINESS_INFO.hours.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex justify-between items-center text-xs sm:text-sm font-mono border-b border-zinc-900/60 pb-2.5 last:border-0 last:pb-0"
                  >
                    <span className="text-zinc-500 uppercase">{item.day}</span>
                    <span className="text-zinc-300 font-bold">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Column 2 interactive contact form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3.5xl bg-[#111025]/40 border border-purple-500/5 relative shadow-xl">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-1">Interactive Inquiry desk</span>
              <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-tight mb-6">
                DISPATCH SECURE ONLINE ENROLMENT FORM
              </h3>

              <form onSubmit={handleFormSubmit} id="gym-contact-field-form" className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2 font-semibold">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Vikash Yadav"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-805 text-white focus:outline-none focus:border-cyan-500 text-sm font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2 font-semibold">Mobile Contact Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g., 082278 22710"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-805 text-white focus:outline-none focus:border-cyan-500 text-sm font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2 font-semibold">Program to discuss</label>
                  <select
                    value={formService}
                    onChange={(e) => setFormService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-805 text-white focus:outline-none focus:border-cyan-500 text-sm font-sans cursor-pointer"
                  >
                    <option value="Personal Training VIP">1-on-1 Personal Transformation Program</option>
                    <option value="Sauna Recovery Pass">Sauna Pass & General Access</option>
                    <option value="Zumba & Aerobics Combo">Aerobics & Zumba Group Classes</option>
                    <option value="CrossFit / HIIT Bootcamp">CrossFit & HIIT Conditioning Bootcamp</option>
                    <option value="Yoga & Meditation Class">Weekly Yoga & Body Flexibility</option>
                    <option value="General Weight Training">General Weight Training & Diet Plan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2 font-semibold">Additional target details (Optional)</label>
                  <textarea
                    rows={4}
                    placeholder="e.g., I want to lose weight in next 3 months, please let me know when slot starts."
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-805 text-white focus:outline-none focus:border-cyan-500 text-sm font-sans resize-none"
                  />
                </div>

                {isSubmitting ? (
                  <div className="w-full py-4 text-center rounded-xl bg-[#111025]/80 border border-[#111025] text-cyan-400 font-mono text-xs uppercase tracking-widest font-extrabold animate-pulse">
                     Transmitting inquiry sheet to counselor...
                  </div>
                ) : submitSuccess ? (
                  <div className="p-4 rounded-xl bg-emerald-900/15 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-sans flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    <span>Inquiry processed! Opening WhatsApp template to secure timeslot...</span>
                  </div>
                ) : (
                  <button
                    type="submit"
                    id="submit-contact-form"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-display font-extrabold text-sm uppercase tracking-wider hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] duration-300"
                  >
                    <span>Secure Slot Placement</span>
                    <Send className="w-4 h-4 text-white" />
                  </button>
                )}

              </form>
            </div>
          </div>

        </div>

        {/* Fast Action Quick Connect portal row - Responsive Single Row */}
        <div id="fast-connect-bar" className="mt-16 pt-12 border-t border-zinc-900/60 mb-16 w-full">
          <div className="text-center mb-8">
            <span className="text-[10px] font-mono text-cyan-455 uppercase tracking-widest block mb-1 font-bold">Instant Quick Portals</span>
            <h4 className="font-display font-extrabold text-lg text-white uppercase tracking-tight">FAST CHANNEL HELPPORT</h4>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto px-2">
            {/* WhatsApp (Green / Support) */}
            <a 
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center space-x-3 px-6 py-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-black hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:border-transparent transition-all duration-300 group cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
              <span className="font-display font-black text-xs uppercase tracking-wider">WHATSAPP PORTAL</span>
            </a>

            {/* Direct Call (White/Gold Contact Accent) */}
            <a 
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center justify-center space-x-3 px-6 py-4 rounded-2xl bg-[#111025]/40 border border-[#111025] hover:bg-zinc-100 hover:text-black hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] transition-all duration-300 text-zinc-300 group cursor-pointer"
            >
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-display font-black text-xs uppercase tracking-wider">DIRECT HOTLINE</span>
            </a>

            {/* Instagram (White/Gold Contact Accent) */}
            <a 
              href={BUSINESS_INFO.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center space-x-3 px-6 py-4 rounded-2xl bg-pink-950/20 border border-pink-500/20 text-pink-400 hover:bg-pink-500 hover:text-white hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:border-transparent transition-all duration-300 group cursor-pointer"
            >
              <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-display font-black text-xs uppercase tracking-wider">INSTAGRAM FEED</span>
            </a>

            {/* Location (White/Gold Contact Accent) */}
            <a 
              href="https://maps.google.com/?q=GLOBAL+GYM+Bazaar+Samiti+Rd+near+Shiv+Kali+Mandir+Bahadurpur+Patna+Bihar+800016"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center space-x-3 px-6 py-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:border-transparent transition-all duration-300 group cursor-pointer"
            >
              <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-display font-black text-xs uppercase tracking-wider">OFFICIAL MAPS</span>
            </a>
          </div>
        </div>

        {/* Embedded Iframe Map Container with glow and details */}
        <div className="border border-purple-500/10 rounded-3.5xl overflow-hidden shadow-2xl relative shadow-purple-500/5 mb-10 h-96">
          {/* Iframe */}
          <iframe
            src={googleMapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="GLOBAL GYM Patna Place Map"
            className="w-full h-full grayscale opacity-65 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          />
          {/* Absolute corner badge map label */}
          <div className="absolute bottom-6 left-6 bg-zinc-950 text-white rounded-2xl p-4 border border-zinc-800 shadow-2xl max-w-sm pointer-events-none hidden sm:block">
            <div className="font-display font-black text-xs text-cyan-400 uppercase tracking-widest">GLOBAL GYM LOCATION</div>
            <p className="text-zinc-400 text-[10px] mt-1 font-light leading-snug">
              Road Number 13A, Bazaar Samiti Rd, near Shiv-Kali Mandir, Bahadurpur, Patna, Bihar 800016
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
