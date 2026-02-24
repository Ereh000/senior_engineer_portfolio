import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-32 bg-[#0B0B0F]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-balance leading-[1.1] mb-8">
              Engineering philosophy built on <span className="text-white/40">performance and scale.</span>
            </h2>
            <div className="w-24 h-[1px] bg-white/20 mb-8" />
            <p className="text-lg text-white/60 leading-relaxed mb-6">
              I believe that great architecture is invisible. It powers seamless user experiences, scales effortlessly under load, and provides a foundation for rapid iteration.
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              Based in Lucknow, India, I've spent the last 4+ years architecting custom Shopify solutions, headless storefronts, and full-stack applications for premium brands worldwide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center space-y-12"
          >
            {[
              {
                title: 'Shopify Architecture',
                description: 'Custom theme development, public/private apps, and complex API integrations that extend platform capabilities.',
              },
              {
                title: 'Headless Commerce',
                description: 'Building blazing fast storefronts using Shopify Hydrogen, Next.js, and Remix for uncompromising performance.',
              },
              {
                title: 'Full Stack Systems',
                description: 'End-to-end MERN stack development, robust JWT authentication, and scalable database design (PostgreSQL, MongoDB).',
              },
              {
                title: 'AI Integration',
                description: 'Implementing LLMs and AI-powered features to automate workflows and enhance customer experiences.',
              },
            ].map((item, index) => (
              <div key={index} className="group">
                <h3 className="text-xl font-medium text-white mb-3 flex items-center gap-4">
                  <span className="text-sm font-mono text-white/30">0{index + 1}</span>
                  {item.title}
                </h3>
                <p className="text-white/50 leading-relaxed pl-9 group-hover:text-white/70 transition-colors">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
