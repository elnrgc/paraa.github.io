import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, ArrowRight, TrendingUp, FileText, Link as LinkIcon, MessageCircle, Zap } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const guides = [
  { id: 1, title: 'The Complete SEO Automation Guide', description: 'Learn how to fully automate your SEO workflow from keyword research to content publishing.', icon: Zap, readTime: '25 min', category: 'Getting Started', difficulty: 'Beginner' },
  { id: 2, title: 'AI Content Writing Best Practices', description: 'How to generate high-quality, SEO-optimized content that ranks and converts.', icon: FileText, readTime: '18 min', category: 'Content', difficulty: 'Intermediate' },
  { id: 3, title: 'Keyword Research Masterclass', description: 'Find untapped keyword opportunities that your competitors are missing.', icon: TrendingUp, readTime: '22 min', category: 'SEO', difficulty: 'Intermediate' },
  { id: 4, title: 'Backlink Building Strategy Guide', description: 'Build high-quality backlinks that boost your domain authority and rankings.', icon: LinkIcon, readTime: '20 min', category: 'Link Building', difficulty: 'Advanced' },
  { id: 5, title: 'Reddit Marketing for SEO', description: 'Leverage Reddit to drive massive organic traffic to your website.', icon: MessageCircle, readTime: '15 min', category: 'Marketing', difficulty: 'Intermediate' },
  { id: 6, title: 'Getting Started with RankPill', description: 'Step-by-step setup guide to get your first articles published in minutes.', icon: BookOpen, readTime: '10 min', category: 'Getting Started', difficulty: 'Beginner' },
];

export const Guides: React.FC = () => {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-full mb-6">
            <BookOpen className="w-4 h-4 text-[#22c55e]" />
            <span className="text-neutral-400 text-sm">Learn & Grow</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Guides & Tutorials</h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            In-depth guides to help you master SEO and get the most out of RankPill.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {guides.map((guide, index) => {
            const Icon = guide.icon;
            return (
              <motion.div key={guide.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }}>
                <Card hover className="h-full group cursor-pointer">
                  <CardContent>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-[#22c55e]/10 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#22c55e]" />
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${guide.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' : guide.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'}`}>
                        {guide.difficulty}
                      </span>
                    </div>
                    <span className="text-xs text-[#22c55e] font-medium">{guide.category}</span>
                    <h3 className="text-white font-semibold text-lg mt-1 mb-2 group-hover:text-[#22c55e] transition-colors">{guide.title}</h3>
                    <p className="text-neutral-400 text-sm mb-4">{guide.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-neutral-500 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{guide.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[#22c55e] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Read <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-16">
          <Link to="/signup">
            <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>Start Your Free Trial</Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
