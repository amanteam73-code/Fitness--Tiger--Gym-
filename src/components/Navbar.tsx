/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_INFO } from '../data';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active link detection
      const sections = ['home', 'about', 'services', 'trainers', 'membership', 'gallery', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Trainers', id: 'trainers' },
    { label: 'Membership Plans', id: 'membership' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#080710]/85 backdrop-blur-xl border-b border-purple-500/15 py-4 shadow-xl shadow-[#000000]/40' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div 
            onClick={() => handleScrollTo('home')}
            className="cursor-pointer"
          >
            <Logo className="w-11 h-11" showText={true} />
          </div>

          {/* Desktop Nav Actions */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleScrollTo(item.id)}
                className={`px-3.5 py-2 rounded-lg font-sans text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeSection === item.id
                    ? 'text-cyan-300 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-purple-500/20 shadow-[0_0_15px_rgba(139,92,246,0.15)] font-semibold'
                    : 'text-zinc-300 hover:text-cyan-300 hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA & Actions */}
          <div className="hidden sm:flex items-center space-x-5">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              id="cta-call-nav"
              className="flex items-center text-zinc-300 hover:text-cyan-400 transition-colors text-sm font-medium font-mono"
            >
              <Phone className="w-4 h-4 text-cyan-400 mr-2 animate-bounce" />
              <span>{BUSINESS_INFO.phoneFormatted}</span>
            </a>
            <button
              id="btn-nav-join"
              onClick={() => handleScrollTo('membership')}
              className="px-5 py-2.5 rounded-xl font-display text-xs font-extrabold text-white uppercase tracking-wider bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:scale-[1.03] active:scale-[0.97] transition-all shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] cursor-pointer duration-300 border border-white/10"
            >
              Join Now
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center space-x-3">
            <button
              id="btn-nav-join-mobile"
              onClick={() => handleScrollTo('membership')}
              className="px-3.5 py-2 rounded-lg font-display text-xs font-bold text-white uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-purple-500 hover:brightness-110 cursor-pointer shadow-md shadow-purple-500/20"
            >
              Join
            </button>
            <button
              id="btn-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-[#080710]/95 backdrop-blur-xl border-b border-zinc-850 shadow-2xl py-6 px-4 flex flex-col space-y-3 lg:hidden"
          >
            {menuItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleScrollTo(item.id)}
                className={`py-3 px-4 rounded-xl text-left font-sans text-base font-medium flex justify-between items-center transition-all ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-cyan-500/10 to-pink-500/10 text-cyan-300 border-l-4 border-cyan-400 pl-3 font-semibold'
                    : 'text-zinc-300 hover:bg-zinc-900/50 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-[10px] text-zinc-500 font-mono">0{menuItems.indexOf(item) + 1}</span>
              </button>
            ))}
            
            <div className="pt-4 border-t border-zinc-850 flex flex-col space-y-4">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                id="mobile-nav-call"
                className="flex items-center text-zinc-300 hover:text-cyan-300 text-sm font-mono tracking-tight justify-center py-2"
              >
                <Phone className="w-4 h-4 text-cyan-400 mr-2" />
                <span>Call Us: {BUSINESS_INFO.phoneFormatted}</span>
              </a>
              <button
                id="mobile-nav-start-trial"
                onClick={() => handleScrollTo('membership')}
                className="w-full py-3.5 rounded-xl font-display text-sm font-bold text-center text-white uppercase tracking-wider bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:brightness-110 transition-colors cursor-pointer shadow-lg shadow-purple-500/20"
              >
                Join Now
              </button>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                id="mobile-nav-whatsapp"
                className="w-full py-3.5 rounded-xl font-display text-sm font-bold text-center text-white uppercase tracking-wider bg-emerald-600 hover:bg-emerald-750 transition-colors cursor-pointer flex items-center justify-center space-x-2 shadow-lg shadow-emerald-950/40"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
