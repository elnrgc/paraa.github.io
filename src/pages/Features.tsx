import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Zap, Target, TrendingUp, Shield } from 'lucide-react';
import { services } from '../data';
import { Button } from '../components/ui/Button';

const W = 'mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10';

export const FeaturePage: React.FC = () => {
  const location = useLocation();
  const currentSlug = location.pathname.replace('/', '');
  const service = services.find((s) => s.slug === currentSlug);

  if (!service) {
    return (
      <div className="min-h-screen bg-black pt-32 flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-4xl font-bold text-white mb-6">Page Not Found</h1>
          <p className="text-neutral-400 mb-8">The page you're looking for doesn't exist.</p>
          <Link to="/"><Button>Go Back Home</Button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 to-black" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#22c55e]/10 rounded-full blur-[150px]" />
        <div className={`${W} relative z-10`}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-full mb-8">
              <span className="text-[#22c55e] text-sm font-medium">Feature</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-7 leading-tight">{service.name}</h1>
            <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">{service.description}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/signup"><Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>Get Started Free</Button></Link>
              <Link to="/#pricing"><Button variant="outline" size="lg">View Pricing</Button></Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 lg:py-32">
        <div className={W}>
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Key Features</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto leading-relaxed">Everything you need to succeed with {service.name.toLowerCase()}.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto">
            {service.features.map((feature, index) => (
              <motion.div key={feature} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-neutral-900 border border-neutral-800 rounded-2xl p-7 hover:border-neutral-600 transition-colors">
                <div className="w-11 h-11 bg-[#22c55e]/10 rounded-xl flex items-center justify-center mb-5"><Check className="w-5 h-5 text-[#22c55e]" /></div>
                <h3 className="text-white font-medium text-[15px]">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a]">
        <div className={W}>
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">How It Works</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto leading-relaxed">Simple 4-step process to get started.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 max-w-5xl mx-auto">
            {service.process.map((step, index) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center">
                {index < service.process.length - 1 && <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-neutral-700 to-transparent" />}
                <div className="w-16 h-16 bg-[#22c55e] text-black font-bold text-xl rounded-2xl flex items-center justify-center mx-auto mb-6">{step.step}</div>
                <h3 className="text-white font-semibold text-lg mb-3">{step.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 lg:py-32">
        <div className={W}>
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Why Choose {service.name}?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 lg:gap-6 max-w-3xl mx-auto">
            {service.benefits.map((benefit, index) => {
              const icons = [Zap, Target, TrendingUp, Shield];
              const Icon = icons[index % icons.length];
              return (
                <motion.div key={benefit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-5 bg-neutral-900 border border-neutral-800 rounded-2xl p-7 hover:border-neutral-600 transition-colors">
                  <div className="w-11 h-11 bg-[#22c55e]/10 rounded-xl flex items-center justify-center shrink-0"><Icon className="w-5 h-5 text-[#22c55e]" /></div>
                  <h3 className="text-white font-medium text-lg pt-2">{benefit}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#22c55e]/5 rounded-full blur-[150px]" />
        <div className={`${W} relative z-10`}>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Ready to Get Started?</h2>
            <p className="text-neutral-400 mb-10 text-lg leading-relaxed">Start your 7-day free trial and see results in weeks, not months.</p>
            <Link to="/signup"><Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>Start Free Trial</Button></Link>
            <p className="mt-5 text-neutral-500 text-sm">No credit card required · Cancel anytime</p>
          </div>
        </div>
      </section>
    </div>
  );
};
