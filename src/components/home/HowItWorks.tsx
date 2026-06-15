import React from 'react';
import { motion } from 'framer-motion';
import { Ear, Target, Sparkles, Rocket } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';

const steps = [
  {
    icon: Ear,
    number: '01',
    title: 'Deep Listening & Research',
    description: "We start by listening to your story, your challenges, and your ambitions. We don't just look at data charts; we look at the street, analyze human behavior, and immerse ourselves in the local cultural pulse.",
    outcome: 'A deep, authentic understanding of your market reality and untapped opportunities.',
  },
  {
    icon: Target,
    number: '02',
    title: 'Creative Strategy',
    description: "Before we draw a single line or write a single word, we define the roadmap. We establish your brand's unique positioning, tone of voice, and strategic foundation — ensuring everything stands on solid ground.",
    outcome: 'A razor-sharp strategic blueprint tailored to guide your brand forward.',
  },
  {
    icon: Sparkles,
    number: '03',
    title: 'Creative Crafting',
    description: "This is where the magic happens. Our team translates the strategy into powerful visual identities, compelling campaigns, and distinct artistic outputs — crafted to be final, seamless, and uncompromised.",
    outcome: 'Distinct, high-end creative assets that command attention and resist duplication.',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'The Impact & Launch',
    description: "Our partnership doesn't end with handing over files. We guide the rollout into the market, monitoring how people interact with it, ensuring the execution leaves a lasting cultural mark.",
    outcome: 'A strong, unforgettable market presence that people genuinely talk about.',
  },
];

export const HowItWorks: React.FC = () => (
  <Section>
    <SectionHeader
      title="How It Works"
      subtitle="Working with Paraa is not a transaction — it's a creative partnership. Here is how we bring your vision to life."
    />

    {/* Flow indicator */}
    <div className="hidden lg:flex items-center justify-center gap-4 mb-16">
      {steps.map((s, i) => (
        <React.Fragment key={s.number}>
          <div className="px-5 py-2.5 bg-neutral-900 border border-neutral-800 rounded-full text-sm text-white font-medium">
            {s.number}. {s.title.split(' ')[0]} {s.title.split(' ')[1] || ''}
          </div>
          {i < steps.length - 1 && (
            <div className="w-12 h-px bg-gradient-to-r from-neutral-600 to-neutral-800" />
          )}
        </React.Fragment>
      ))}
    </div>

    <div className="space-y-6 lg:space-y-8">
      {steps.map((s, i) => {
        const Icon = s.icon;
        return (
          <motion.div
            key={s.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="grid lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-12 bg-neutral-900 border border-neutral-800 rounded-2xl p-7 sm:p-9 hover:border-neutral-600 transition-colors"
          >
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 bg-[#22c55e]/10 rounded-xl flex items-center justify-center">
                  <Icon className="w-7 h-7 text-[#22c55e]" />
                </div>
                <span className="text-5xl font-extrabold text-neutral-800">{s.number}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{s.title}</h3>
            </div>
            <div>
              <p className="text-neutral-400 leading-relaxed mb-6">{s.description}</p>
              <div className="flex items-start gap-3 bg-neutral-800/50 rounded-xl p-5">
                <span className="text-[#22c55e] text-sm font-semibold uppercase tracking-wider shrink-0 mt-0.5">Outcome:</span>
                <p className="text-white text-sm leading-relaxed">{s.outcome}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  </Section>
);
