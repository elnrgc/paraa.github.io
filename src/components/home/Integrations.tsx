import React from 'react';
import { motion } from 'framer-motion';


const integrations = [
  { name: 'WordPress', logo: 'W' },
  { name: 'Shopify', logo: 'S' },
  { name: 'Webflow', logo: 'W' },
  { name: 'Wix', logo: 'W' },
  { name: 'Framer', logo: 'F' },
  { name: 'Webhooks', logo: '<>' },
];

export const Integrations: React.FC = () => (
  <section className="py-20 lg:py-24 bg-black border-y border-neutral-800">
    <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <p className="text-neutral-500 text-sm uppercase tracking-widest mb-3">Works with your favorite platforms</p>
        <h3 className="text-xl sm:text-2xl font-semibold text-white">Seamless Integrations</h3>
      </motion.div>
      <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
        {integrations.map((int, i) => (
          <motion.div key={int.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }} className="group flex flex-col items-center gap-3">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-neutral-900 border border-neutral-800 rounded-2xl flex items-center justify-center text-xl sm:text-2xl font-bold text-neutral-400 group-hover:text-white group-hover:border-neutral-600 transition-colors">{int.logo}</div>
            <span className="text-neutral-500 text-sm group-hover:text-neutral-300 transition-colors">{int.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
