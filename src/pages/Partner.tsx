import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Handshake, Film, Megaphone, Link2, Presentation, Wallet, Check, ArrowRight, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/Button';

const W = 'mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10';

export const PartnerPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [pName, setPName] = useState('');
  const [pEmail, setPEmail] = useState('');
  const [pPhone, setPPhone] = useState('');
  const [pLink, setPLink] = useState('');
  const handlePartner = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Partner Application: ${pName}`);
    const body = encodeURIComponent(`New Partner Application\n\nName: ${pName}\nEmail: ${pEmail}\nPhone/WhatsApp: ${pPhone}\nNetwork/Portfolio: ${pLink || 'Not provided'}\n\nFrom paraa.art/partner`);
    window.open(`mailto:elnrgcy@gmail.com?subject=${subject}&body=${body}`, '_self');
    setSubmitted(true);
  };

  const steps = [
    { num: '01', icon: Link2, title: 'Connect', desc: "Introduce the decision-makers of a brand or corporation looking for top-tier production or a 360° campaign to the Paraa team." },
    { num: '02', icon: Presentation, title: 'Pitch & Close', desc: "Our strategic and creative team takes over the pitch, handles the creative direction, scopes the project, and finalizes the contract." },
    { num: '03', icon: Wallet, title: 'Get Paid (7% - 15%)', desc: "Once the contract is signed and the initial payment is secured, your referral fee (ranging from 7% to 15%) is locked and transferred immediately." },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* HERO */}
      <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 to-black" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#22c55e]/5 rounded-full blur-[150px]" />
        <div className={`${W} relative z-10`}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#22c55e]/10 border border-[#22c55e]/20 rounded-full mb-8">
              <Handshake className="w-4 h-4 text-[#22c55e]" />
              <span className="text-[#22c55e] text-sm font-medium">Partner Program</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-7 leading-[1.08]">
              Connect Us with Major Projects. <span className="text-[#22c55e]">Earn Up to 15% Commission.</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Introduce brands looking for high-end cinematic production or full-scale 360° marketing campaigns to Paraa, and secure a premium percentage of the total contract value.
            </p>
            <Link to="#apply"><Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>Join the Network</Button></Link>
          </motion.div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="py-20 lg:py-28 bg-black">
        <div className={W}>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">Transparent Rewards for High-Tier Referrals.</h2>
              <p className="text-neutral-400 leading-relaxed mb-6">
                At Paraa, we value the power of strategic connections. Our referral program offers a transparent and highly rewarding commission structure, giving you <span className="text-white font-semibold">7% to 15% of the total contract value</span> for every client you bring to the agency.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                To maintain our focus on high-impact results, this program applies exclusively to two core capabilities:
              </p>
            </motion.div>

            <div className="space-y-5">
              {[
                { icon: Film, title: 'Creative & Cinematic Production', desc: 'High-end video production, commercial shoots, and premium visual asset creation.' },
                { icon: Megaphone, title: '360° Advertising Campaigns', desc: 'Comprehensive, full-suite marketing campaigns that dominate all channels (digital, offline, content, and strategy) to launch or elevate a brand.' },
              ].map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-5 bg-neutral-900 border border-neutral-800 rounded-2xl p-7 hover:border-neutral-600 transition-colors">
                    <div className="w-12 h-12 bg-[#22c55e]/10 rounded-xl flex items-center justify-center shrink-0"><Icon className="w-6 h-6 text-[#22c55e]" /></div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-2">{c.title}</h3>
                      <p className="text-neutral-400 text-sm leading-relaxed">{c.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Commission highlight */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-12 grid sm:grid-cols-3 gap-5">
            {[
              { value: '7% - 15%', label: 'Commission Range', desc: 'Of total contract value' },
              { value: 'Immediate', label: 'Fast Payouts', desc: 'On contract & first payment' },
              { value: 'No Cap', label: 'Unlimited Referrals', desc: 'Refer as many as you want' },
            ].map((s) => (
              <div key={s.label} className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 rounded-2xl p-7">
                <div className="flex items-center gap-2 mb-2"><TrendingUp className="w-4 h-4 text-[#22c55e]" /><p className="text-2xl sm:text-3xl font-extrabold text-white">{s.value}</p></div>
                <p className="text-white text-sm font-medium mb-1">{s.label}</p>
                <p className="text-neutral-500 text-xs">{s.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS - BENTO */}
      <section className="py-20 lg:py-28 bg-[#0a0a0a]">
        <div className={W}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-neutral-400 max-w-xl mx-auto">Three simple steps from connection to payout.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="relative bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-neutral-600 transition-colors">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-[#22c55e]/10 rounded-xl flex items-center justify-center"><Icon className="w-7 h-7 text-[#22c55e]" /></div>
                    <span className="text-5xl font-extrabold text-neutral-800">{s.num}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* APPLY FORM */}
      <section id="apply" className="py-20 lg:py-28 bg-black scroll-mt-20">
        <div className={W}>
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Join the Network</h2>
              <p className="text-neutral-400">Fill in your details and we'll reach out to onboard you.</p>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[#22c55e]/10 rounded-full flex items-center justify-center mx-auto mb-5"><Check className="w-8 h-8 text-[#22c55e]" /></div>
                  <h3 className="text-xl font-bold text-white mb-2">Welcome to the network!</h3>
                  <p className="text-neutral-400 text-sm">We'll reach out within 48 hours to get you started.</p>
                </div>
              ) : (
                <form onSubmit={handlePartner} className="space-y-5">
                  <div><label className="text-sm font-medium text-neutral-300 block mb-1.5">Full Name</label><input required value={pName} onChange={(e) => setPName(e.target.value)} placeholder="Your name" className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-[#22c55e]" /></div>
                  <div><label className="text-sm font-medium text-neutral-300 block mb-1.5">Email</label><input required type="email" value={pEmail} onChange={(e) => setPEmail(e.target.value)} placeholder="you@email.com" className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-[#22c55e]" /></div>
                  <div><label className="text-sm font-medium text-neutral-300 block mb-1.5">Phone / WhatsApp</label><input required value={pPhone} onChange={(e) => setPPhone(e.target.value)} placeholder="+964 ..." className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-[#22c55e]" /></div>
                  <div><label className="text-sm font-medium text-neutral-300 block mb-1.5">Network / Portfolio (optional)</label><input value={pLink} onChange={(e) => setPLink(e.target.value)} placeholder="LinkedIn or website" className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-[#22c55e]" /></div>
                  <Button type="submit" fullWidth size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>Join the Network</Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
