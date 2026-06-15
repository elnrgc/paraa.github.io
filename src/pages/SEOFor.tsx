import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Building2, ShoppingBag, Stethoscope, Scale, GraduationCap, Utensils, Car, Home, Briefcase, Palette, Dumbbell, Plane } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card, CardContent } from '../components/ui/Card';
import { Link } from 'react-router-dom';

const industries = [
  { id: 'real-estate', name: 'Real Estate', icon: Home, description: 'Dominate local real estate search results and generate more leads.', keywords: '2.4K+' },
  { id: 'restaurants', name: 'Restaurants', icon: Utensils, description: 'Get found by hungry customers searching for restaurants near them.', keywords: '1.8K+' },
  { id: 'dentists', name: 'Dentists', icon: Stethoscope, description: 'Attract new patients searching for dental services in your area.', keywords: '1.2K+' },
  { id: 'lawyers', name: 'Lawyers', icon: Scale, description: 'Rank for high-intent legal keywords and get more client inquiries.', keywords: '3.1K+' },
  { id: 'ecommerce', name: 'E-commerce', icon: ShoppingBag, description: 'Drive organic traffic to your online store and increase sales.', keywords: '5.6K+' },
  { id: 'saas', name: 'SaaS', icon: Building2, description: 'Build topical authority and drive signups for your software.', keywords: '2.8K+' },
  { id: 'automotive', name: 'Automotive', icon: Car, description: 'Get more customers for your dealership or auto service center.', keywords: '1.5K+' },
  { id: 'education', name: 'Education', icon: GraduationCap, description: 'Attract more students and enrollments with SEO-optimized content.', keywords: '2.1K+' },
  { id: 'consulting', name: 'Consulting', icon: Briefcase, description: 'Establish thought leadership and attract high-value consulting clients.', keywords: '1.9K+' },
  { id: 'design', name: 'Design Agencies', icon: Palette, description: 'Showcase your portfolio and attract new design clients organically.', keywords: '1.3K+' },
  { id: 'fitness', name: 'Fitness & Gym', icon: Dumbbell, description: 'Get more gym memberships and personal training clients.', keywords: '1.7K+' },
  { id: 'travel', name: 'Travel & Tourism', icon: Plane, description: 'Rank for travel-related keywords and drive bookings.', keywords: '4.2K+' },
];

export const SEOFor: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = industries.filter((ind) =>
    ind.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ind.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            SEO For Every Industry
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Tailored SEO strategies for 132+ industries. Find your niche and start growing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-md mx-auto mb-12"
        >
          <Input
            placeholder="Search your industry..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            leftIcon={<Search className="w-5 h-5" />}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card hover className="h-full group cursor-pointer">
                  <CardContent>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-[#22c55e]/10 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#22c55e]" />
                      </div>
                      <span className="text-xs px-2 py-1 bg-neutral-800 text-neutral-400 rounded-full">
                        {industry.keywords} keywords
                      </span>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#22c55e] transition-colors">
                      SEO for {industry.name}
                    </h3>
                    <p className="text-neutral-400 text-sm mb-4">{industry.description}</p>
                    <div className="flex items-center gap-1 text-[#22c55e] text-sm font-medium">
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-neutral-500 mb-6">Don't see your industry? We cover 132+ niches.</p>
          <Link to="/signup">
            <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Get Started – It Works for Any Industry
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
