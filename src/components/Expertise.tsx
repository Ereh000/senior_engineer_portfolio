import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export default function Expertise() {
  const [activePanel, setActivePanel] = useState<number | null>(0);

  const panels = [
    {
      title: "Full Stack Architecture",
      content:
        "Designing and implementing scalable MERN stack & Next.js applications. Creating robust RESTful and GraphQL APIs, managing complex state, and building secure JWT-based authentication systems.",
      tech: ["React", "Node.js", "Express", "Next.js", "Remix"],
    },
    {
      title: "Shopify Engineering",
      content:
        "Deep expertise in Liquid, Storefront API, and Admin API. Building custom themes from scratch, developing public and custom apps, and optimizing conversion funnels for high-volume merchants.",
      tech: ["Liquid", "Shopify CLI", "Storefront API", "Admin API"],
    },
    {
      title: "Performance Optimization",
      content:
        "Achieving Lighthouse 95+ scores through advanced caching strategies, code splitting, image optimization, and efficient database querying. Ensuring sub-second load times for critical paths.",
      tech: ["Web Vitals", "Lighthouse", "Caching", "CDN"],
    },
    {
      title: "AI Integrations",
      content:
        "Integrating Large Language Models (LLMs) into production applications. Building AI-powered search, automated customer support, and intelligent product recommendations.",
      tech: ["OpenAI", "Gemini Models", "LangChain", "Vector DBs", "RAG"],
    },
    {
      title: "API Systems",
      content:
        "Architecting resilient microservices and third-party integrations. Handling webhooks, rate limiting, and ensuring data consistency across distributed systems.",
      tech: ["REST", "GraphQL", "Webhooks", "OAuth"],
    },
    {
      title: "Database Engineering",
      content:
        "Designing efficient schemas and optimizing queries for both SQL and NoSQL databases. Managing migrations, indexing strategies, and ensuring data integrity.",
      tech: ["PostgreSQL", "MongoDB", "MySQL", "Prisma"],
    },
  ];

  return (
    <section
      id="expertise"
      className="py-32 bg-[#0B0B0F] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24">
          <h2 className="text-sm font-medium text-white/40 uppercase tracking-widest mb-4">
            Core Competencies
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-balance leading-[1.1]">
            Specialized in <span className="text-white/40">modern</span>
            <br />
            web architecture.
          </h3>
        </div>

        <div className="flex flex-col gap-4">
          {panels.map((panel, index) => {
            const isActive = activePanel === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`group border rounded-2xl overflow-hidden transition-all duration-500 ease-out ${
                  isActive
                    ? "border-white/20 bg-white/[0.02]"
                    : "border-white/5 hover:border-white/10 bg-transparent"
                }`}
              >
                <button
                  onClick={() => setActivePanel(isActive ? null : index)}
                  className="w-full text-left px-6 py-8 md:px-10 flex items-center justify-between focus:outline-none"
                >
                  <span
                    className={`text-xl md:text-2xl font-medium tracking-tight transition-colors duration-300 ${isActive ? "text-white" : "text-white/60 group-hover:text-white/80"}`}
                  >
                    {panel.title}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isActive ? "border-white/30 bg-white/10 rotate-45" : "border-white/10 group-hover:border-white/20"}`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={isActive ? "text-white" : "text-white/50"}
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 pb-8 md:px-10 md:pb-10 pt-0">
                        <p className="text-lg text-white/60 leading-relaxed max-w-3xl mb-8">
                          {panel.content}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {panel.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white/70"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
