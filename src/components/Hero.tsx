import { motion } from "motion/react";
import profile from "../assets/profile.jpeg";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-24 md:pb-12 overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="flex flex-col-reverse md:grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 max-w-3xl"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6 md:mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-white/70 uppercase tracking-wider">
                Available for new projects
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-balance leading-[1.1] mb-6"
            >
              Architecting Scalable{" "}
              <span className="text-white/40">eCommerce Systems</span> &
              High-Performance Applications.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-white/50 max-w-xl leading-relaxed mb-8 md:mb-10"
            >
              Senior Full Stack Engineer specializing in premium eCommerce
              architecture, modern full-stack systems, native mobile
              applications, and AI-powered integrations.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <a
                href="#work"
                className="w-full sm:w-auto min-h-[44px] px-6 py-3 md:px-8 md:py-4 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
              >
                View Selected Work
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-transparent border border-white/20 text-white rounded-full font-medium hover:bg-white/5 transition-colors flex items-center justify-center"
              >
                Schedule Consultation
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border border-white/10 bg-white/5 p-2">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent z-10 mix-blend-overlay" />
                <img
                  src={profile}
                  alt="Arif Khan"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  data-nosnippet
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hidden md:flex"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}
