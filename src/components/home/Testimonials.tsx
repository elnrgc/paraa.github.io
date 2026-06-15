import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { useContentStore } from '../../store/contentStore';

export const Testimonials: React.FC = () => {
  const { testimonials } = useContentStore();
  const published = testimonials.filter((t) => t.status === 'published');

  if (published.length === 0) return null;

  return (
    <Section dark>
      <SectionHeader title="What They Say About Us" subtitle="Paraa is the only creative partner in Iraq." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
        {published.map((t, i) => (
          <motion.div key={t.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-neutral-900 border border-neutral-800 rounded-2xl p-7 sm:p-8 hover:border-neutral-600 transition-colors">
            <Quote className="w-9 h-9 text-[#22c55e]/20 mb-6" />
            <div className="flex gap-1 mb-5">{[...Array(5)].map((_, j) => <Star key={j} className={`w-4 h-4 ${j < t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-700'}`} />)}</div>
            <p className="text-neutral-300 mb-8 leading-relaxed">"{t.quote}"</p>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-gradient-to-br from-[#22c55e] to-emerald-600 rounded-full flex items-center justify-center text-black font-semibold text-sm">{t.author.charAt(0)}</div>
              <div><p className="text-white font-medium">{t.author}</p><p className="text-neutral-500 text-sm">{t.role} at {t.company}</p></div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
