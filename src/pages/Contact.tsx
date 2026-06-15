import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, MapPin, Clock, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card, CardContent } from '../components/ui/Card';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Have a question or need help? We'd love to hear from you. Our team typically responds within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="space-y-6">
            {[
              { icon: Mail, title: 'Email Us', desc: 'support@rankpill.com', sub: 'We reply within 24 hours' },
              { icon: MessageSquare, title: 'Live Chat', desc: 'Available on dashboard', sub: 'Mon-Fri, 9am-6pm EST' },
              { icon: MapPin, title: 'Location', desc: 'San Francisco, CA', sub: 'United States' },
              { icon: Clock, title: 'Business Hours', desc: 'Mon - Fri: 9AM - 6PM', sub: 'EST (UTC-5)' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title}>
                  <CardContent>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#22c55e]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#22c55e]" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-1">{item.title}</h3>
                        <p className="text-neutral-300 text-sm">{item.desc}</p>
                        <p className="text-neutral-500 text-xs mt-1">{item.sub}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-2">
            <Card>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-[#22c55e]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-[#22c55e]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-neutral-400">We'll get back to you within 24 hours.</p>
                    <Button variant="outline" className="mt-6" onClick={() => setSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <Input label="Full Name" placeholder="John Doe" required />
                      <Input label="Email" type="email" placeholder="you@example.com" required />
                    </div>
                    <Input label="Subject" placeholder="How can we help?" required />
                    <div>
                      <label className="block text-sm font-medium text-neutral-300 mb-1.5">Message</label>
                      <textarea
                        rows={5}
                        placeholder="Tell us more about your question..."
                        required
                        className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-2.5 text-white placeholder-neutral-500 focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] resize-none"
                      />
                    </div>
                    <Button type="submit" size="lg" leftIcon={<Send className="w-4 h-4" />}>
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
