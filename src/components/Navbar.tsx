import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="text-xl font-semibold tracking-tighter">
          Arif Khan<span className="text-white/40">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#expertise" className="hover:text-white transition-colors">Expertise</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#process" className="hover:text-white transition-colors">Process</a>
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium bg-white text-black rounded-full hover:bg-white/90 transition-colors"
        >
          Book Consultation
        </a>

        {/* Mobile Menu Button - Minimal */}
        <button className="md:hidden p-2 text-white/70 hover:text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
          </svg>
        </button>
      </div>
    </motion.nav>
  );
}
