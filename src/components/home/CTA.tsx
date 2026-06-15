import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

export const CTA: React.FC = () => (
  <Section className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-black" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[150px]" />
    <div className="relative z-10 max-w-3xl mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-7 leading-tight">
          Ready to make your brand<br /><span className="text-neutral-500">impossible to ignore?</span>
        </h2>
        <p className="text-base sm:text-lg text-neutral-400 mb-10 max-w-xl mx-auto leading-relaxed">
          Join the waiting list and let's start a conversation about what your brand could become.
        </p>
        <Link to="/waitlist"><Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>Join the Waiting List</Button></Link>
        <p className="mt-6 text-neutral-500 text-sm">Baghdad · Basra · Erbil · Sulaymaniyah · Babel · Karbala</p>
      </motion.div>
    </div>
  </Section>
);
