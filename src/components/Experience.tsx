import { motion } from 'motion/react';

export default function Experience() {
  const experiences = [
    {
      role: 'Senior Shopify Developer',
      company: 'Webley & Scott',
      period: '2023 - Present',
      impact: 'Led the architectural transition from legacy monolithic themes to modular, high-performance Hydrogen storefronts. Mentored junior developers and established CI/CD pipelines for theme deployment.',
      architecture: 'Designed scalable custom apps using Node.js and PostgreSQL to handle complex B2B pricing logic, reducing manual data entry by 80%.',
      performance: 'Optimized core web vitals across 10+ enterprise stores, achieving an average Lighthouse performance score of 96.'
    },
    {
      role: 'Shopify Developer',
      company: 'Webley & Scott',
      period: '2021 - 2023',
      impact: 'Developed and maintained 20+ custom Shopify themes for high-volume merchants. Implemented complex Liquid logic for advanced product filtering and variant selection.',
      architecture: 'Integrated third-party ERP and CRM systems via Shopify Admin API, ensuring real-time inventory and order synchronization.',
      performance: 'Reduced average page load time by 2.5s through aggressive image optimization and lazy loading strategies.'
    },
    {
      role: 'Frontend Developer',
      company: 'NotHuman.ai',
      period: '2020 - 2021',
      impact: 'Built responsive, accessible user interfaces for AI-powered SaaS products using React and Tailwind CSS.',
      architecture: 'Implemented complex state management using Redux and Context API for real-time data visualization dashboards.',
      performance: 'Improved application rendering performance by 40% through strategic component memoization and code splitting.'
    }
  ];

  return (
    <section className="py-32 bg-[#0B0B0F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-24">
          <h2 className="text-sm font-medium text-white/40 uppercase tracking-widest mb-4">Experience</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-balance leading-[1.1]">
            A track record of <span className="text-white/40">engineering excellence.</span>
          </h3>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-16 last:mb-0 pl-8 md:pl-12 relative"
            >
              <div className="absolute w-3 h-3 bg-white rounded-full -left-[6.5px] top-2 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
              
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                <h4 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-1 md:mb-0">
                  {exp.role} <span className="text-white/40">at {exp.company}</span>
                </h4>
                <span className="text-sm font-medium text-white/40 uppercase tracking-widest">{exp.period}</span>
              </div>

              <div className="space-y-6 mt-8">
                <div>
                  <h5 className="text-sm font-medium text-white/40 uppercase tracking-widest mb-2">Impact</h5>
                  <p className="text-white/70 leading-relaxed">{exp.impact}</p>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-white/40 uppercase tracking-widest mb-2">Architecture</h5>
                  <p className="text-white/70 leading-relaxed">{exp.architecture}</p>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-white/40 uppercase tracking-widest mb-2">Performance</h5>
                  <p className="text-white/70 leading-relaxed">{exp.performance}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
