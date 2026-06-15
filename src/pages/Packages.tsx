import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Rocket, Building2, TrendingUp, Crown } from 'lucide-react';
import { Button } from '../components/ui/Button';

const W = 'mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10';

const families = [
  {
    id: 'growth',
    name: 'Growth',
    icon: Rocket,
    color: 'from-emerald-500/20 to-green-600/20',
    border: 'border-emerald-500/30',
    plans: [
      { name: 'Growth', price: 4000, duration: '1 Month' },
      { name: 'Growth Plus', price: 5000, duration: '1 Month' },
    ],
    desc: 'For new brands, startups, and businesses entering the market. Build a clean, professional presence from day one.',
    href: '/packages/growth',
  },
  {
    id: 'professional',
    name: 'Professional',
    icon: TrendingUp,
    color: 'from-blue-500/20 to-indigo-600/20',
    border: 'border-blue-500/30',
    plans: [
      { name: 'Professional', price: 6500, duration: '1 Month' },
      { name: 'Professional+', price: 8000, duration: '2 Months' },
    ],
    desc: 'For brands ready to refine their image and build stronger credibility and trust.',
    href: '/packages/professional',
  },
  {
    id: 'advanced',
    name: 'Advanced',
    icon: TrendingUp,
    color: 'from-violet-500/20 to-purple-600/20',
    border: 'border-violet-500/30',
    plans: [
      { name: 'Advanced', price: 10000, duration: '2 Months' },
    ],
    desc: 'For brands moving from presence into real growth with measurable progression.',
    href: '/packages/advanced',
  },
  {
    id: 'business',
    name: 'Business',
    icon: Building2,
    color: 'from-amber-500/20 to-orange-600/20',
    border: 'border-amber-500/30',
    plans: [
      { name: 'Business', price: 12500, duration: '2 Months' },
      { name: 'Business Plus', price: 15000, duration: '3 Months' },
    ],
    desc: 'For established companies that need content tied directly to business growth and market influence.',
    href: '/packages/business',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    icon: Crown,
    color: 'from-[#22c55e]/20 to-emerald-700/20',
    border: 'border-[#22c55e]/30',
    plans: [
      { name: 'Enterprise', price: 17500, duration: '3 Months' },
      { name: 'Enterprise Plus', price: 20000, duration: '3 Months' },
      { name: 'Executive', price: 22500, duration: '3 Months' },
      { name: 'Elite', price: 25000, duration: '3 Months' },
    ],
    desc: 'For large brands seeking premium execution, lasting influence, and leadership-level digital presence.',
    href: '/packages/enterprise',
  },
];

export const PackagesIndex: React.FC = () => (
  <div className="min-h-screen bg-black pt-32 pb-20">
    <div className={W}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 lg:mb-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">Packages</h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Five package families. Each built for a different stage of brand growth. Every package includes posting and content management.
        </p>
      </motion.div>

      <div className="space-y-6">
        {families.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div key={f.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
              <Link to={f.href} className={`group block bg-neutral-900 border ${f.border} rounded-2xl p-7 sm:p-9 hover:bg-neutral-800/50 transition-all`}>
                <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center shrink-0`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-[#22c55e] transition-colors">{f.name}</h2>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-4">{f.desc}</p>
                    <div className="flex flex-wrap gap-3">
                      {f.plans.map((p) => (
                        <span key={p.name} className="text-xs px-3 py-1.5 bg-neutral-800 text-neutral-300 rounded-lg">
                          {p.name} — ${p.price.toLocaleString()} — {p.duration}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-neutral-600 group-hover:text-[#22c55e] group-hover:translate-x-1 transition-all shrink-0 hidden lg:block" />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Custom Plan */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-10">
        <Link to="/packages/custom" className="group block bg-gradient-to-br from-[#22c55e]/10 to-emerald-700/5 border border-[#22c55e]/30 rounded-2xl p-7 sm:p-9 hover:border-[#22c55e]/60 transition-all">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
            <div className="w-16 h-16 rounded-2xl bg-[#22c55e]/20 flex items-center justify-center shrink-0">
              <Sparkles className="w-8 h-8 text-[#22c55e]" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-2">Custom Plan</h2>
              <p className="text-neutral-400 text-sm leading-relaxed">Need something unique? Fully customized plans tailored to your specific needs, timeline, and budget.</p>
            </div>
            <ArrowRight className="w-6 h-6 text-neutral-600 group-hover:text-[#22c55e] group-hover:translate-x-1 transition-all shrink-0 hidden lg:block" />
          </div>
        </Link>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-16">
        <p className="text-neutral-400 mb-6">Not sure which package fits? Let us help you choose.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/waitlist"><Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>Get a Package</Button></Link>
          <Link to="/contact"><Button variant="outline" size="lg">Talk to Our Team</Button></Link>
        </div>
      </motion.div>
    </div>
  </div>
);
