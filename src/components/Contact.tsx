import { motion } from "motion/react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// ─── EmailJS Config ────────────────────────────────────────────────
// Replace these with your actual EmailJS credentials from https://emailjs.com
// Or set them in your .env file as VITE_EMAILJS_SERVICE_ID, etc.
const EMAILJS_SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";
// ───────────────────────────────────────────────────────────────────

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMsg("Please fill in all required fields.");
      setFormState("error");
      return;
    }

    setFormState("loading");
    setErrorMsg("");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setFormState("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setErrorMsg("Something went wrong. Please try again later.");
      setFormState("error");
    }
  };

  const inputClasses = (name: string) => `
    w-full bg-transparent border-b ${focusedInput === name ? "border-white" : "border-white/20"}
    py-4 px-0 text-white placeholder-white/30 focus:outline-none transition-colors duration-300
    text-lg md:text-xl font-medium tracking-tight
  `;

  return (
    <section
      id="contact"
      className="py-20 md:py-32 max-sm:pb-0 bg-[#0B0B0F] border-t border-white/5 pb-40 md:pb-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
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
                href="mailto:art.izarif00@gmail.com"
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
            {formState === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full py-12 text-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-2">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h4 className="text-2xl font-semibold text-white tracking-tight">
                  Message Sent!
                </h4>
                <p className="text-white/50 text-base max-w-xs">
                  Thanks for reaching out. I'll get back to you as soon as
                  possible.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="mt-4 text-sm text-white/40 hover:text-white transition-colors underline underline-offset-4"
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <form ref={formRef} className="space-y-8" onSubmit={handleSubmit}>
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name *"
                    value={form.name}
                    onChange={handleChange}
                    className={inputClasses("name")}
                    onFocus={() => setFocusedInput("name")}
                    onBlur={() => setFocusedInput(null)}
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address *"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClasses("email")}
                    onFocus={() => setFocusedInput("email")}
                    onBlur={() => setFocusedInput(null)}
                  />
                </div>

                {/* Phone / Contact — NEW FIELD */}
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone / Contact Number"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClasses("phone")}
                    onFocus={() => setFocusedInput("phone")}
                    onBlur={() => setFocusedInput(null)}
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Project Details *"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClasses("message")} resize-none`}
                    onFocus={() => setFocusedInput("message")}
                    onBlur={() => setFocusedInput(null)}
                  />
                </div>

                {/* Error message */}
                {formState === "error" && errorMsg && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm -mt-4"
                  >
                    {errorMsg}
                  </motion.p>
                )}

                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="w-full py-5 min-h-[56px] bg-white text-black rounded-full font-medium text-lg
                    hover:bg-white/90 transition-all flex items-center justify-center gap-2 mt-4
                    disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formState === "loading" ? (
                    <>
                      <svg
                        className="animate-spin"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
