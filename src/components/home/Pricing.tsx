import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { Button } from '../ui/Button';
import { pricingPlans } from '../../data';

export const Pricing: React.FC = () => (
  <Section id="pricing">
    <SectionHeader title="Packages" subtitle="Structured plans built for growth. Every package includes posting and content management." />

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 mb-10">
      {pricingPlans.map((plan, i) => (
        <motion.div
          key={plan.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.04 }}
          className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-600 transition-colors flex flex-col"
        >
          <h3 className="text-white font-semibold text-lg mb-1">{plan.name}</h3>
          <div className="flex items-baseline gap-1 mb-3">
            <span className="text-3xl font-bold text-white">${plan.price.toLocaleString()}</span>
          </div>
          <div className="space-y-2.5 mb-6 flex-1">
            <div className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-[#22c55e] shrink-0" />
              <span className="text-neutral-300 text-sm">Posting</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-neutral-500 text-xs font-medium uppercase tracking-wider">{plan.duration}</span>
            </div>
          </div>
          <Link to="/waitlist" className="block">
            <Button variant="outline" fullWidth size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
              GET THIS PACKAGE
            </Button>
          </Link>
        </motion.div>
      ))}

      {/* Custom Plan Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="bg-gradient-to-br from-[#22c55e]/10 to-emerald-600/5 border border-[#22c55e]/30 rounded-2xl p-6 flex flex-col"
      >
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-5 h-5 text-[#22c55e]" />
          <h3 className="text-white font-semibold text-lg">Custom Plan</h3>
        </div>
        <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-1">
          Need something unique? We build fully customized plans tailored to your specific needs, timeline, and budget.
        </p>
        <Link to="/contact" className="block">
          <Button fullWidth size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
            LET'S TALK
          </Button>
        </Link>
      </motion.div>
    </div>
  </Section>
);
