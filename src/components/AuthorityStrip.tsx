import { motion } from 'motion/react';

export default function AuthorityStrip() {
  const stats = [
    { label: 'Years Experience', value: '4+' },
    { label: 'Shopify Themes', value: '30+' },
    { label: 'Public Apps', value: '5+' },
    { label: 'Hydrogen Stores', value: '10+' },
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-2"
            >
              <span className="text-4xl md:text-5xl font-semibold tracking-tighter text-white">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-white/40 uppercase tracking-widest">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
