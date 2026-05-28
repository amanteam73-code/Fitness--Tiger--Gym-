import { ArrowUp, Facebook, Instagram, Youtube, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import Logo from './Logo';

export default function Footer() {
  const socialIconsList = [
    { name: 'Instagram', icon: Instagram, url: BUSINESS_INFO.socials.instagram },
    { name: 'Facebook', icon: Facebook, url: '#' },
    { name: 'YouTube', icon: Youtube, url: '#' },
  ];

  const quickLinks1 = [
    { label: 'Home Floor', id: 'home' },
    { label: 'Gym Story', id: 'about' },
    { label: 'Elite Programs', id: 'services' },
    { label: 'Master Drills', id: 'trainers' },
  ];

  const quickLinks2 = [
    { label: 'Membership Plans', id: 'membership' },
    { label: 'Athlete Gallery', id: 'gallery' },
    { label: 'Success Reviews', id: 'testimonials' },
    { label: 'Branch Contact', id: 'contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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
    <footer id="footer" className="relative bg-[#05040a]/75 backdrop-blur-xl border-t border-purple-500/10 pt-20 pb-10 overflow-hidden">
      
      {/* Decorative Gradient Background overlay */}
      <div className="absolute bottom-0 right-0 w-84 h-84 rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Main Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Logo & Brand statement */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleScrollTo('home')}>
              <Logo className="w-12 h-12" />
            </div>

            <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
              Bihar's pioneering premium wellness hub, customized around high-performance athletic structures, wood sauna recovery treatments and master coaching mentorship.
            </p>

            {/* Ratings summary footer */}
            <div className="flex items-center space-x-3 text-zinc-400 py-1.5 bg-zinc-950 px-4 rounded-xl border border-purple-500/10 w-max shadow-md">
              <div className="flex text-pink-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest font-black text-cyan-400">4.8★ rating verified</span>
            </div>

            {/* Social icons */}
            <div className="flex items-center space-x-4">
              {socialIconsList.map((soc) => {
                const IconComponent = soc.icon;
                return (
                  <a
                    key={soc.name}
                    href={soc.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-850 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-pink-500 text-zinc-400 hover:text-white flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-sm"
                    aria-label={soc.name}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-extrabold text-xs text-white uppercase tracking-widest block border-b border-zinc-900 pb-2">
              MEMBERSHIP HQ
            </h4>
            <div className="flex flex-col space-y-2">
              {quickLinks1.map((lnk) => (
                <button
                  key={lnk.id}
                  id={`footer-lbl-${lnk.id}`}
                  onClick={() => handleScrollTo(lnk.id)}
                  className="text-zinc-400 hover:text-cyan-400 text-xs sm:text-sm font-sans font-light tracking-tight text-left cursor-pointer transition-colors duration-200"
                >
                  {lnk.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links Column 2 */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-extrabold text-xs text-white uppercase tracking-widest block border-b border-zinc-900 pb-2">
              Explore links
            </h4>
            <div className="flex flex-col space-y-2">
              {quickLinks2.map((lnk) => (
                <button
                  key={lnk.id}
                  id={`footer-lbl2-${lnk.id}`}
                  onClick={() => handleScrollTo(lnk.id)}
                  className="text-zinc-400 hover:text-cyan-400 text-xs sm:text-sm font-sans font-light tracking-tight text-left cursor-pointer transition-colors duration-200"
                >
                  {lnk.label}
                </button>
              ))}
            </div>
          </div>

          {/* Location / Direct help lines column */}
          <div className="lg:col-span-3 space-y-4 text-xs">
            <h4 className="font-display font-extrabold text-xs text-white uppercase tracking-widest block border-b border-zinc-900 pb-2">
              BRANCH ADDRESS
            </h4>
            <p className="text-zinc-400 font-sans leading-relaxed">
              4th Floor, K D Roy Campus, NIT More, Lalbagh, Patna, Bihar 800006
            </p>
            <div className="pt-2">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">General Inquiries</span>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                id="footer-call"
                className="text-white hover:text-cyan-400 font-mono font-extrabold transition-all text-sm block"
              >
                {BUSINESS_INFO.phoneFormatted}
              </a>
            </div>
          </div>

        </div>

        {/* Premium Developer Credit Section */}
        <div className="mt-12 mb-12 flex justify-center w-full">
          <div className="relative group w-full max-w-2xl px-4">
            
            {/* Absolute background soft glow following hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-3xl opacity-10 group-hover:opacity-25 blur-xl transition-all duration-700 pointer-events-none" />
            
            {/* Glass box with custom styling */}
            <div className="premium-credit-box p-6 sm:p-8 rounded-2.5xl flex flex-col items-center justify-center text-center relative overflow-hidden">
              {/* Subtle background ambient mesh */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-550/5 via-transparent to-pink-505/5 pointer-events-none" />
              
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 font-semibold mb-3 select-none">
                Designed & Developed by
              </span>
              
              {/* Animated Gradient Developer Name */}
              <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight leading-none mb-3">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient-shift font-black block select-all">
                  Aman Web Developer
                </span>
              </h3>

              {/* Tagline */}
              <p className="text-zinc-400 text-xs sm:text-sm font-sans font-light tracking-wide max-w-md leading-relaxed">
                Creating Modern & Premium Digital Experiences
              </p>

              {/* Luxury Accents (Subtle lines and dots representing code structure aesthetics) */}
              <div className="flex items-center space-x-3 mt-6">
                <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-blue-500/40" />
                <div className="flex space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse duration-1000" />
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse duration-1000 delay-300" />
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse duration-1000 delay-550" />
                </div>
                <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-pink-500/40" />
              </div>
              
            </div>
          </div>
        </div>

        {/* Legal copyright footer base */}
        <div className="mt-12 pt-8 border-t border-zinc-900/60 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-zinc-500 font-mono text-[10px] text-center sm:text-left uppercase tracking-widest font-semibold">
            © {new Date().getFullYear()} THE ROCK GYM PATNA. ALL RIGHTS RESERVED. 
          </p>

          <button
            id="btn-footer-scroll-top"
            onClick={scrollToTop}
            className="group flex items-center space-x-2 text-xs font-mono text-zinc-400 hover:text-white uppercase tracking-widest cursor-pointer bg-zinc-950 px-4 py-2 rounded-xl border border-zinc-850 active:scale-95 transition-all hover:border-cyan-500/25 shadow-sm"
            aria-label="Scroll to top"
          >
            <span>Scroll To Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform font-bold" />
          </button>
        </div>

      </div>
    </footer>
  );
}
