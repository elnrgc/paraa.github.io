import React from 'react';
import { Link } from 'react-router-dom';
import { Megaphone, Film, Palette, Monitor, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from '../ui/Section';
import { services } from '../../data';

const iconMap: Record<string, React.FC<{ className?: string }>> = { Megaphone, Film, Palette, Monitor };

export const Features: React.FC = () => (
  <Section id="services">
    <SectionHeader title="What We Do" subtitle="Four disciplines. One creative vision. Every project gets obsessive attention to detail." />
    <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
      {services.map((s, i) => {
        const Icon = iconMap[s.icon] || Palette;
        return (
          <motion.div key={s.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
            <Link to={`/services/${s.slug}`} className="group block h-full p-8 sm:p-9 bg-neutral-900 border border-neutral-800 rounded-2xl transition-all duration-300 hover:border-neutral-600 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-[#22c55e]/10 rounded-xl flex items-center justify-center">
                  <Icon className="w-7 h-7 text-[#22c55e]" />
                </div>
                <ArrowRight className="w-5 h-5 text-neutral-700 group-hover:text-[#22c55e] group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-[#22c55e] text-xs font-semibold tracking-widest uppercase mb-3">{s.tagline}</p>
              <h3 className="text-xl font-bold text-white mb-4">{s.name}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">{s.shortDescription}</p>
              <div className="flex flex-wrap gap-2">
                {s.features.slice(0, 4).map((f) => (
                  <span key={f} className="text-xs px-3 py-1.5 bg-neutral-800 text-neutral-300 rounded-lg">{f}</span>
                ))}
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  </Section>
);
