import { motion } from 'motion/react';

export default function TechStack() {
  const technologies = [
    'Shopify',
    'Hydrogen',
    'React',
    'React Native',
    'Express.js',
    'Next.js',
    'Remix.js',
    'Node.js',
    'PostgreSQL',
    'MongoDB',
    'Prisma',
    'Tailwind CSS',
    'Git & GitHub'
  ];

  return (
    <section className="py-32 bg-[#0B0B0F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <div className="mb-16">
          <h2 className="text-sm font-medium text-white/40 uppercase tracking-widest mb-4">Core Technologies</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-balance leading-[1.1]">
            The tools behind the <span className="text-white/40">architecture.</span>
          </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="px-6 py-3 md:px-8 md:py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
            >
              <span className="text-sm md:text-base font-medium text-white/80 tracking-wide">
                {tech}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
