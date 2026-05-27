/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Trainers from './components/Trainers';
import MembershipPlans from './components/MembershipPlans';
import Transformation from './components/Transformation';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#050505]">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div 
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            <LoadingScreen onComplete={() => setIsLoading(false)} />
          </motion.div>
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full relative"
          >
            
            {/* Sticky transparent header with blur */}
            <Navbar />

            <main className="w-full relative z-10">
              {/* Hero Banner Grid with metrics */}
              <Hero />

              {/* Founder-story details */}
              <About />

              {/* Dynamic services list with booking triggers */}
              <Services />

              {/* Interactive bento details on amenities */}
              <WhyChooseUs />

              {/* Master coaches and class orientation form */}
              <Trainers />

              {/* Flexible memberships with 3-months discount support */}
              <MembershipPlans />

              {/* Success, testimonials and interactive calorie planner */}
              <Transformation />

              {/* High-definition gym tours and full lightbox */}
              <Gallery />

              {/* Embedded maps, coordinates, dials, and help form */}
              <Contact />
            </main>

            {/* Structured footer with social details */}
            <Footer />

            {/* Direct floating Counselor live links */}
            <FloatingWhatsApp />

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
