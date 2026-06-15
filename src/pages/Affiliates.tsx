import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Users, BarChart3, Gift, ArrowRight, Check } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Link } from 'react-router-dom';

export const Affiliates: React.FC = () => {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#22c55e]/10 border border-[#22c55e]/20 rounded-full mb-6">
            <Gift className="w-4 h-4 text-[#22c55e]" />
            <span className="text-[#22c55e] text-sm font-medium">Affiliate Program</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Earn <span className="text-[#22c55e]">30% Recurring</span> Commission
          </h1>
          <p className="text-lg text-neutral-400 mb-8">
            Join our affiliate program and earn recurring commissions for every customer you refer. Simple, transparent, and rewarding.
          </p>
          <Link to="/signup">
            <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Join Affiliate Program
            </Button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { icon: DollarSign, label: 'Commission Rate', value: '30%', desc: 'Recurring monthly' },
            { icon: Users, label: 'Active Affiliates', value: '500+', desc: 'And growing' },
            { icon: BarChart3, label: 'Avg. Monthly Earnings', value: '$850', desc: 'Per affiliate' },
            { icon: Gift, label: 'Cookie Duration', value: '90 Days', desc: 'Industry leading' },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label}>
                <CardContent>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#22c55e]/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#22c55e]" />
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-neutral-400 text-sm">{stat.label}</p>
                  <p className="text-neutral-600 text-xs mt-1">{stat.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </motion.div>

        {/* How it works */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: '1', title: 'Sign Up', desc: 'Create your free affiliate account in minutes.' },
              { step: '2', title: 'Share', desc: 'Share your unique referral link with your audience.' },
              { step: '3', title: 'Earn', desc: 'Earn 30% recurring commission for every paying customer.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-[#22c55e] text-black font-bold text-xl rounded-2xl flex items-center justify-center mx-auto mb-4">{item.step}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-neutral-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Join?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              '30% recurring commission on all payments',
              '90-day cookie duration',
              'Real-time tracking dashboard',
              'Monthly payouts via PayPal or Stripe',
              'Marketing materials provided',
              'Dedicated affiliate support',
              'No minimum payout threshold',
              'Works for any niche or audience',
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 p-4 bg-neutral-900 border border-neutral-800 rounded-lg">
                <Check className="w-5 h-5 text-[#22c55e] flex-shrink-0" />
                <span className="text-neutral-300">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Earning?</h3>
          <p className="text-neutral-400 mb-6">It takes less than 2 minutes to get started.</p>
          <Link to="/signup">
            <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>Join Now – It's Free</Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
