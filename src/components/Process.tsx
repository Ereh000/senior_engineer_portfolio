import { motion } from 'motion/react';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Strategy',
      desc: 'Analyzing business requirements, identifying technical constraints, and defining the optimal architecture for scalability and performance.'
    },
    {
      num: '02',
      title: 'Architecture Design',
      desc: 'Structuring database schemas, API contracts, and frontend component hierarchies. Selecting the right tech stack for the specific problem domain.'
    },
    {
      num: '03',
      title: 'Engineering & Integration',
      desc: 'Writing clean, modular, and testable code. Integrating third-party services, payment gateways, and complex state management systems.'
    },
    {
      num: '04',
      title: 'Optimization & Scaling',
      desc: 'Profiling performance bottlenecks, implementing caching layers, optimizing database queries, and ensuring Lighthouse 95+ scores.'
    }
  ];

  return (
    <section id="process" className="py-20 md:py-32 bg-[#0B0B0F] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-10 md:mb-24 text-center">
          <h2 className="text-sm font-medium text-white/40 uppercase tracking-widest mb-4">Methodology</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-balance leading-[1.1]">
            A systematic approach to <span className="text-white/40">complex engineering.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative group p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500"
            >
              <div className="absolute top-4 right-6 text-6xl md:text-8xl font-bold text-white/[0.03] group-hover:text-white/[0.06] transition-colors duration-500 pointer-events-none select-none font-mono">
                {step.num}
              </div>
              
              <h4 className="text-xl font-semibold tracking-tight text-white mb-4 relative z-10">
                {step.title}
              </h4>
              <p className="text-white/60 leading-relaxed relative z-10">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
