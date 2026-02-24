import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Home, Briefcase, User, Mail, Code } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-nav py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="text-xl font-semibold tracking-tighter">
            Arif Khan<span className="text-white/40">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <a href="#work" className="hover:text-white transition-colors">
              Work
            </a>
            <a href="#expertise" className="hover:text-white transition-colors">
              Expertise
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#process" className="hover:text-white transition-colors">
              Process
            </a>
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium bg-white text-black rounded-full hover:bg-white/90 transition-colors"
          >
            Book Consultation
          </a>

          {/* Removed Mobile Menu Button */}
        </div>
      </motion.nav>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-6 inset-x-6 z-50">
        <div className="bg-bg/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-4 flex items-center justify-between shadow-2xl">
          <a
            href="#"
            className="flex flex-col items-center gap-1 text-white/50 hover:text-white transition-colors"
            aria-label="Home"
          >
            <Home className="w-5 h-5" />
            <span className="text-[10px] font-medium tracking-wide">Home</span>
          </a>
          <a
            href="#work"
            className="flex flex-col items-center gap-1 text-white/50 hover:text-white transition-colors"
            aria-label="Work"
          >
            <Briefcase className="w-5 h-5" />
            <span className="text-[10px] font-medium tracking-wide">Work</span>
          </a>
          <a
            href="#expertise"
            className="flex flex-col items-center gap-1 text-white/50 hover:text-white transition-colors"
            aria-label="Expertise"
          >
            <Code className="w-5 h-5" />
            <span className="text-[10px] font-medium tracking-wide">
              Skills
            </span>
          </a>
          <a
            href="#about"
            className="flex flex-col items-center gap-1 text-white/50 hover:text-white transition-colors"
            aria-label="About"
          >
            <User className="w-5 h-5" />
            <span className="text-[10px] font-medium tracking-wide">About</span>
          </a>
          <a
            href="#contact"
            className="flex flex-col items-center gap-1 text-white/50 hover:text-white transition-colors"
            aria-label="Contact"
          >
            <Mail className="w-5 h-5" />
            <span className="text-[10px] font-medium tracking-wide">
              Contact
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
