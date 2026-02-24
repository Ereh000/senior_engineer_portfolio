import { motion } from "motion/react";

export default function Experience() {
  const experiences = [
    {
      role: "Senior Shopify Developer",
      company: "Webley & Scott",
      location: "Lucknow, India",
      period: "July 2024 - Present",
      responsibilities: [
        "Led development and customization of high-performance Shopify stores with optimized UX/UI and mobile responsiveness.",
        "Developed 30+ custom Shopify themes using Liquid, HTML5, CSS3, and JavaScript.",
        "Built public and custom Shopify apps using Remix.js, Node.js, and GraphQL, some published on the Shopify App Store.",
        "Implemented advanced features including checkout customization, volume discounts, and visual search.",
        "Developed full-stack solutions with authentication, database management, and third-party integrations.",
        "Improved store performance, security, and scalability through continuous optimization and maintenance.",
      ],
    },
    {
      role: "Shopify Developer",
      company: "Webley & Scott",
      location: "Lucknow, India",
      period: "June 2022 - July 2024",
      responsibilities: [
        "Designed and optimized user-friendly eCommerce interfaces.",
        "Built responsive layouts for cross-device compatibility.",
        "Developed custom apps based on business requirements.",
        "Improved product SEO and site performance, increasing organic traffic.",
        "Supported long-term maintenance and feature upgrades.",
      ],
    },
    {
      role: "Front-End Web Developer",
      company: "NotHuman.ai",
      location: "Delhi, India",
      period: "Nov 2021 - April 2022",
      responsibilities: [
        "Developed responsive websites using HTML5, CSS3, and JavaScript (ES6+).",
        "Used Git/GitHub for team collaboration and version control.",
        "Redesigned client landing pages, improving mobile responsiveness and engagement.",
        "Delivered project features ahead of schedule by rapidly learning new tools.",
        "Followed WCAG accessibility and SEO best practices.",
      ],
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-10 md:mb-24">
          <h2 className="text-sm font-medium text-white/40 uppercase tracking-widest mb-4">
            Experience
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-balance leading-[1.1]">
            A track record of{" "}
            <span className="text-white/40">engineering excellence.</span>
          </h3>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-16 last:mb-0 pl-6 md:pl-12 relative"
            >
              <div className="absolute w-3 h-3 bg-white rounded-full -left-[6.5px] top-2 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />

              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                <h4 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-1 md:mb-0">
                  {exp.role}{" "}
                  <span className="text-white/40">
                    at {exp.company} | {exp.location}
                  </span>
                </h4>
                <span className="text-sm font-medium text-white/40 uppercase tracking-widest">
                  {exp.period}
                </span>
              </div>

              <div className="mt-8">
                <ul className="list-disc pl-5 space-y-3">
                  {exp.responsibilities.map((resp, i) => (
                    <li
                      key={i}
                      className="text-white/70 leading-relaxed text-[15px]"
                    >
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
