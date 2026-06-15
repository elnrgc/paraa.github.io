import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, Layers, ArrowRight, Check, Film, Gauge, Globe, Camera } from 'lucide-react';
import { Button } from '../components/ui/Button';

const W = 'mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10';

const tiers = [
  {
    code: 'C',
    name: 'Standard Digital Production',
    desc: 'Built for agile content, fast-turnaround social media assets, and clean digital frameworks optimized for rapid publishing.',
    accent: 'from-neutral-700 to-neutral-800',
    tag: 'Agile & Fast',
  },
  {
    code: 'B',
    name: 'Advanced Corporate Tier',
    desc: 'Elevated production value designed for corporate web placement, specialized visual storytelling, and tailored art direction.',
    accent: 'from-blue-700 to-blue-900',
    tag: 'Corporate',
  },
  {
    code: 'B+',
    name: 'Advanced Pro Production',
    desc: 'The bridge to premium commercial work. Enhanced visual aesthetics, deeper art direction, and advanced lighting/sound frameworks suited for regional campaigns.',
    accent: 'from-violet-700 to-purple-900',
    tag: 'Regional Campaigns',
  },
  {
    code: 'A',
    name: 'Premium Cinematic Level',
    desc: 'Transitioning into high-end cinema equipment and comprehensive lighting setups. Perfect for commercial broadcasting and premium brand identities.',
    accent: 'from-amber-600 to-orange-800',
    tag: 'Premium Broadcast',
  },
  {
    code: 'A+',
    name: 'Ultimate High-End Cinema',
    desc: 'Our highest cinematic benchmark. Reserved for massive 360° advertising campaigns, complex art sets, and uncompromised cinematic execution designed to leave a permanent mark.',
    accent: 'from-[#22c55e] to-emerald-800',
    tag: 'Ultimate Benchmark',
    top: true,
  },
];

export const CoProductionPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [coAgency, setCoAgency] = useState('');
  const [coName, setCoName] = useState('');
  const [coEmail, setCoEmail] = useState('');
  const [coTier, setCoTier] = useState('Not sure yet');
  const handleCoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Co-Production Inquiry: ${coAgency}`);
    const body = encodeURIComponent(`New Co-Production Inquiry\n\nAgency: ${coAgency}\nName: ${coName}\nEmail: ${coEmail}\nTarget Tier: ${coTier}\n\nFrom paraa.art/co-production`);
    window.open(`mailto:elnrgcy@gmail.com?subject=${subject}&body=${body}`, '_self');
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* HERO */}
      <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 to-black" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#22c55e]/5 rounded-full blur-[150px]" />
        <div className={`${W} relative z-10`}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#22c55e]/10 border border-[#22c55e]/20 rounded-full mb-8">
              <Building2 className="w-4 h-4 text-[#22c55e]" />
              <span className="text-[#22c55e] text-sm font-medium">B2B Co-Production</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-7 leading-[1.08]">
              Your Execution Partner in Iraq.{' '}
              <span className="text-neutral-500">Tailored to Your Standards.</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              We act as an elite white-label or co-credited visual production arm for international agencies and corporations — delivering assets precisely matching your technical guidelines, scaling flawlessly from Mid-Range to Ultimate High-End Cinematic levels.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="#inquire"><Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>Start a Project</Button></Link>
              <Link to="#tiers"><Button variant="outline" size="lg">View the Tiers</Button></Link>
            </div>
          </motion.div>

          {/* Quick highlights */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            {[
              { icon: Globe, label: 'White-Label', desc: 'Or co-credited' },
              { icon: Layers, label: '5 Tiers', desc: 'C to A+' },
              { icon: Camera, label: 'Cinema Gear', desc: 'Industrial grade' },
              { icon: Gauge, label: 'On-Ground', desc: 'Local execution' },
            ].map((h) => {
              const Icon = h.icon;
              return (
                <div key={h.label} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 text-center">
                  <div className="w-11 h-11 bg-[#22c55e]/10 rounded-xl flex items-center justify-center mx-auto mb-3"><Icon className="w-5 h-5 text-[#22c55e]" /></div>
                  <p className="text-white font-semibold text-sm">{h.label}</p>
                  <p className="text-neutral-500 text-xs">{h.desc}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* VISION */}
      <section className="py-20 lg:py-28 bg-black">
        <div className={W}>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                Seamless Execution. <span className="text-neutral-500">Uncompromised Quality.</span>
              </h2>
              <p className="text-neutral-400 leading-relaxed mb-5">
                Navigating production in Iraq requires a deep pulse on local street culture combined with strict adherence to international technical parameters. At Paraa, we bridge that gap entirely.
              </p>
              <p className="text-neutral-400 leading-relaxed mb-8">
                We step in as your on-ground production team, handling everything from creative direction to optimized asset delivery. We adapt completely to your agency's internal specifications to ensure your creative vision is never diluted.
              </p>
              <div className="space-y-3">
                {[
                  'We adapt to your agency technical guidelines',
                  'On-ground execution with local cultural pulse',
                  'Creative direction to final asset delivery',
                ].map((p) => (
                  <div key={p} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#22c55e] rounded-full flex items-center justify-center shrink-0"><Check className="w-3 h-3 text-black" /></div>
                    <span className="text-neutral-300 text-sm">{p}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-800">
              <img src="https://images.unsplash.com/photo-1500099817043-86d46000d58f?w=900&q=80" alt="Cinematic production" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 mb-2"><Film className="w-4 h-4 text-[#22c55e]" /><span className="text-white text-sm font-medium">Cinematic Execution</span></div>
                <p className="text-neutral-300 text-sm">From concept to final cut — without compromise.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TIERS */}
      <section id="tiers" className="py-20 lg:py-28 bg-[#0a0a0a] scroll-mt-20">
        <div className={W}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-full mb-6">
              <Layers className="w-4 h-4 text-[#22c55e]" />
              <span className="text-neutral-300 text-sm">Scalable Budgets</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">The 5 Production Tiers</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              To provide absolute transparency and scalability for agency budgets, our production capabilities and cinema equipment are structured across 5 strict industrial tiers — from <span className="text-white">C</span> to <span className="text-[#22c55e]">A+</span>.
            </p>
          </div>

          <div className="space-y-4">
            {tiers.map((t, i) => (
              <motion.div
                key={t.code}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`relative grid lg:grid-cols-[auto_1fr_auto] gap-6 lg:gap-8 items-center bg-neutral-900 border rounded-2xl p-7 sm:p-8 hover:border-neutral-600 transition-colors ${t.top ? 'border-[#22c55e]/40' : 'border-neutral-800'}`}
              >
                {/* Tier Badge */}
                <div className="flex items-center gap-5">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${t.accent} flex items-center justify-center shrink-0`}>
                    <span className="text-white font-extrabold text-3xl">{t.code}</span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">{t.name}</h3>
                    {t.top && <span className="text-[10px] px-2 py-0.5 bg-[#22c55e]/20 text-[#22c55e] rounded font-bold uppercase tracking-wider">Highest</span>}
                  </div>
                  <p className="text-neutral-400 text-sm leading-relaxed">{t.desc}</p>
                </div>

                {/* Tag */}
                <div className="lg:text-right">
                  <span className="inline-block text-xs px-3 py-1.5 bg-neutral-800 text-neutral-300 rounded-lg font-medium">{t.tag}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INQUIRE FORM */}
      <section id="inquire" className="py-20 lg:py-28 bg-black scroll-mt-20">
        <div className={W}>
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Inquire About a Project</h2>
              <p className="text-neutral-400">Tell us about your production needs and tier requirements.</p>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[#22c55e]/10 rounded-full flex items-center justify-center mx-auto mb-5"><Check className="w-8 h-8 text-[#22c55e]" /></div>
                  <h3 className="text-xl font-bold text-white mb-2">Inquiry received!</h3>
                  <p className="text-neutral-400 text-sm">Our production team will reach out within 48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleCoSubmit} className="space-y-5">
                  <div><label className="text-sm font-medium text-neutral-300 block mb-1.5">Agency / Company</label><input required value={coAgency} onChange={(e) => setCoAgency(e.target.value)} placeholder="Your agency name" className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-[#22c55e]" /></div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div><label className="text-sm font-medium text-neutral-300 block mb-1.5">Name</label><input required value={coName} onChange={(e) => setCoName(e.target.value)} placeholder="Your name" className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-[#22c55e]" /></div>
                    <div><label className="text-sm font-medium text-neutral-300 block mb-1.5">Email</label><input required type="email" value={coEmail} onChange={(e) => setCoEmail(e.target.value)} placeholder="you@agency.com" className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-[#22c55e]" /></div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-neutral-300 block mb-1.5">Target Tier</label>
                    <select value={coTier} onChange={(e) => setCoTier(e.target.value)} className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#22c55e]">
                      <option>Tier C — Standard Digital</option>
                      <option>Tier B — Advanced Corporate</option>
                      <option>Tier B+ — Advanced Pro</option>
                      <option>Tier A — Premium Cinematic</option>
                      <option>Tier A+ — Ultimate High-End</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                  <Button type="submit" fullWidth size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>Send Inquiry</Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
