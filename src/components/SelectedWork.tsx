import { motion } from 'motion/react';

export default function SelectedWork() {
  const projects = [
    {
      title: 'Premium D2C Storefront',
      subtitle: 'Headless Shopify Architecture',
      problem: 'Legacy monolithic theme causing 4s+ load times and poor mobile conversion rates.',
      architecture: 'Decoupled frontend using Hydrogen and Remix, communicating with Shopify Storefront API. Edge-cached responses and optimized image delivery pipeline.',
      tech: ['Shopify Hydrogen', 'Remix', 'Tailwind CSS', 'GraphQL'],
      results: 'Lighthouse score improved from 45 to 98. Sub-second LCP.',
      impact: '32% increase in mobile conversion rate within first quarter.',
      image: 'https://picsum.photos/seed/d2c/1920/1080?blur=4'
    },
    {
      title: 'Automated Inventory Sync',
      subtitle: 'Custom Public Shopify App',
      problem: 'Merchants manually updating stock across multiple warehouses leading to overselling.',
      architecture: 'Event-driven Node.js microservice handling webhooks, processing inventory deltas, and syncing via Admin API with robust retry mechanisms.',
      tech: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'Shopify Admin API'],
      results: 'Processing 10k+ webhooks/minute with 99.99% uptime.',
      impact: 'Eliminated overselling for 50+ enterprise merchants.',
      image: 'https://picsum.photos/seed/inventory/1920/1080?blur=4'
    },
    {
      title: 'AI-Powered Product Discovery',
      subtitle: 'MERN Stack Integration',
      problem: 'Users struggling to find specific products using traditional keyword search.',
      architecture: 'Vector database integration with OpenAI embeddings, providing semantic search capabilities directly within the custom storefront.',
      tech: ['React', 'Next.js', 'MongoDB', 'OpenAI API', 'Vector DB'],
      results: 'Search latency under 200ms for semantic queries.',
      impact: '45% increase in search-to-cart conversion rate.',
      image: 'https://picsum.photos/seed/ai-search/1920/1080?blur=4'
    }
  ];

  return (
    <section id="work" className="py-32 bg-[#0B0B0F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-24">
          <h2 className="text-sm font-medium text-white/40 uppercase tracking-widest mb-4">Selected Work</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-balance leading-[1.1]">
            Architecting solutions for <span className="text-white/40">complex problems.</span>
          </h3>
        </div>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col lg:flex-row gap-12 lg:gap-24 items-center"
            >
              <div className={`w-full lg:w-1/2 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white/5 border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-transparent to-transparent opacity-50 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className={`w-full lg:w-1/2 flex flex-col justify-center ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <span className="text-sm font-medium text-white/40 uppercase tracking-widest mb-4">{project.subtitle}</span>
                <h4 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-8">{project.title}</h4>

                <div className="space-y-6">
                  <div>
                    <h5 className="text-sm font-medium text-white/40 uppercase tracking-widest mb-2">The Problem</h5>
                    <p className="text-white/70 leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-white/40 uppercase tracking-widest mb-2">Architecture</h5>
                    <p className="text-white/70 leading-relaxed">{project.architecture}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
                    <div>
                      <h5 className="text-sm font-medium text-white/40 uppercase tracking-widest mb-2">Performance</h5>
                      <p className="text-white font-medium">{project.results}</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-white/40 uppercase tracking-widest mb-2">Business Impact</h5>
                      <p className="text-white font-medium">{project.impact}</p>
                    </div>
                  </div>
                  <div className="pt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white/60">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
