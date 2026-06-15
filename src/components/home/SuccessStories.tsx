import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from '../ui/Section';
import { Button } from '../ui/Button';
import { useContentStore } from '../../store/contentStore';

export const SuccessStories: React.FC = () => {
  const { cases } = useContentStore();
  const published = cases.filter((c) => c.status === 'published');

  if (published.length === 0) return null;

  return (
    <Section dark>
      <SectionHeader title="Success Stories" subtitle="Real results from real businesses with us." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 mb-14">
        {published.slice(0, 6).map((c, i) => (
          <motion.div key={c.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
            <Link to={`/work/${c.slug}`} className="group block bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-600 transition-all duration-300">
              <div className="relative h-52 overflow-hidden">
                <img src={c.image} alt={c.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-black/50 backdrop-blur-sm text-white text-xs font-medium rounded-full">{c.industry}</span>
                </div>
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[#22c55e] transition-colors">{c.title}</h3>
                <div className="flex items-center gap-2.5 mb-4">
                  <TrendingUp className="w-4 h-4 text-[#22c55e]" />
                  <span className="text-[#22c55e] font-semibold">{c.resultValue}</span>
                  <span className="text-neutral-500 text-sm">{c.resultDesc}</span>
                </div>
                <p className="text-neutral-400 text-sm mb-5 leading-relaxed line-clamp-2">{c.story}</p>
                <div className="flex flex-wrap gap-2">
                  {c.services.slice(0, 2).map((sv) => (
                    <span key={sv} className="text-xs px-3 py-1.5 bg-neutral-800 text-neutral-300 rounded-lg">{sv}</span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="text-center">
        <Link to="/work"><Button variant="outline" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>View All Work</Button></Link>
      </div>
    </Section>
  );
};
