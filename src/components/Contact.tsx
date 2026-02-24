import { motion } from "motion/react";
import { useState } from "react";

export default function Contact() {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const inputClasses = (name: string) => `
    w-full bg-transparent border-b ${focusedInput === name ? "border-white" : "border-white/20"}
    py-4 px-0 text-white placeholder-white/30 focus:outline-none transition-colors duration-300
    text-lg md:text-xl font-medium tracking-tight
  `;

  return (
    <section
      id="contact"
      className="py-32 bg-[#0B0B0F] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-sm font-medium text-white/40 uppercase tracking-widest mb-4">
              Get in Touch
            </h2>
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-balance leading-[1.1] mb-8">
              Let's Build <span className="text-white/40">Scalable</span>{" "}
              Digital Systems.
            </h3>
            <p className="text-lg text-white/60 leading-relaxed max-w-md mb-12">
              Available for freelance opportunities and full-time roles. Reach
              out to discuss architecture, engineering, or your next big
              project.
            </p>

            <div className="space-y-4">
              <a
                href="tel:+917398269095"
                className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <span className="text-lg font-medium tracking-tight">
                  +91 7398269095
                </span>
              </a>
              <a
                href="mailto:hello@arifkhan.dev"
                className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <span className="text-lg font-medium tracking-tight">
                  art.izarif00@gmail.com
                </span>
              </a>
              <a
                href="https://linkedin.com/in/arif-khan-01a711241"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <span className="text-lg font-medium tracking-tight">
                  LinkedIn
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className={inputClasses("name")}
                  onFocus={() => setFocusedInput("name")}
                  onBlur={() => setFocusedInput(null)}
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  className={inputClasses("email")}
                  onFocus={() => setFocusedInput("email")}
                  onBlur={() => setFocusedInput(null)}
                />
              </div>
              <div className="relative">
                <textarea
                  id="details"
                  placeholder="Project Details"
                  rows={4}
                  className={`${inputClasses("details")} resize-none`}
                  onFocus={() => setFocusedInput("details")}
                  onBlur={() => setFocusedInput(null)}
                />
              </div>
              <button
                type="submit"
                className="w-full py-5 bg-white text-black rounded-full font-medium text-lg hover:bg-white/90 transition-colors flex items-center justify-center gap-2 mt-4"
              >
                Send Message
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
