import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowRight, Clock, Users } from 'lucide-react';
import { caseStudies } from '../data';
import { Button } from '../components/ui/Button';

export const SuccessStoriesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Success Stories
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Real results from real businesses. See how companies like yours are growing their organic traffic with RankPill.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { label: 'Happy Customers', value: '3,000+' },
            { label: 'Articles Published', value: '200K+' },
            { label: 'Total Clicks', value: '50M+' },
            { label: 'Average ROI', value: '340%' }
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-center"
            >
              <p className="text-3xl font-bold text-[#22c55e] mb-1">{stat.value}</p>
              <p className="text-neutral-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-700 transition-all"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent" />
                
                {/* Industry Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                    {study.industry}
                  </span>
                </div>

                {/* Result Badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-4 py-2 bg-[#22c55e]/20 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-[#22c55e]" />
                      <span className="text-[#22c55e] font-bold text-lg">
                        {study.results[0].value}
                      </span>
                    </div>
                    <span className="text-white text-sm">
                      {study.results[0].description}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-[#22c55e] transition-colors">
                  {study.title}
                </h2>

                <p className="text-neutral-400 mb-4 line-clamp-3">
                  {study.story}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-4 text-neutral-500 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{study.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{study.client}</span>
                  </div>
                </div>

                {/* Services */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.services.map((service) => (
                    <span
                      key={service}
                      className="text-xs px-2 py-1 bg-neutral-800 text-neutral-300 rounded"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {/* Testimonial */}
                {study.testimonial && (
                  <blockquote className="border-l-2 border-[#22c55e] pl-4 mb-4">
                    <p className="text-neutral-300 text-sm italic mb-2">
                      "{study.testimonial.quote}"
                    </p>
                    <cite className="text-neutral-500 text-sm not-italic">
                      — {study.testimonial.author}, {study.testimonial.role}
                    </cite>
                  </blockquote>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-neutral-400 mb-6">
            Join thousands of businesses growing their organic traffic with RankPill.
          </p>
          <Link to="/signup">
            <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Start Your Free Trial
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
