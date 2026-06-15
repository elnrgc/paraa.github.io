import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Section, SectionHeader } from '../ui/Section';
import { faqs } from '../../data';
import { cn } from '../../utils/cn';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <Section dark id="faq">
      <SectionHeader title="Frequently Asked Questions" subtitle="Got questions? We've got answers." />
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div key={faq.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.04 }}
            className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden">
            <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex items-center justify-between p-6 sm:p-7 text-left gap-4">
              <span className="font-medium text-white leading-relaxed">{faq.question}</span>
              <ChevronDown className={cn('w-5 h-5 text-neutral-400 transition-transform shrink-0', openIndex === index && 'rotate-180')} />
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-neutral-400 leading-relaxed">{faq.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
