import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const reviews = [
  { id: 1, name: 'Mark Eckert', role: 'Owner', company: 'That Pitch', rating: 5, quote: 'This actually works. I\'m kind of astounded. About 1 month in, went from a couple hundred impressions a day, to about 3,800 a day.', date: '2026-01-10' },
  { id: 2, name: 'Sarah Johnson', role: 'Marketing Director', company: 'TechFlow Inc.', rating: 5, quote: 'RankPill has been a game-changer for our content strategy. We\'re publishing more high-quality content than ever before.', date: '2026-01-08' },
  { id: 3, name: 'Michael Chen', role: 'SEO Manager', company: 'GrowthLabs', rating: 5, quote: 'The backlink exchange feature alone is worth the subscription. We\'ve seen our domain authority climb steadily month over month.', date: '2026-01-05' },
  { id: 4, name: 'Emily Rodriguez', role: 'Founder', company: 'Bloom Agency', rating: 5, quote: 'Finally, an SEO tool that actually delivers on its promises. Our organic traffic has tripled in 6 months. The automation saves us hours every week.', date: '2025-12-28' },
  { id: 5, name: 'David Park', role: 'CEO', company: 'ContentScale', rating: 5, quote: 'The AI content writer produces articles that actually rank. We\'ve replaced our entire content team with RankPill and the results are better.', date: '2025-12-20' },
  { id: 6, name: 'Jessica Liu', role: 'Growth Lead', company: 'FinTech Pro', rating: 4, quote: 'Great tool for automating SEO. The keyword research alone saves us hours. Would love to see more customization options for content style.', date: '2025-12-15' },
  { id: 7, name: 'Robert Williams', role: 'Digital Marketer', company: 'BrightPath', rating: 5, quote: 'I was skeptical about AI content, but RankPill changed my mind. The articles are well-researched and actually engage our readers.', date: '2025-12-10' },
  { id: 8, name: 'Anna Martinez', role: 'E-commerce Manager', company: 'ShopNova', rating: 5, quote: 'Our Shopify store went from page 5 to page 1 for our main keywords. The auto-publishing integration is seamless.', date: '2025-12-05' },
];

export const Reviews: React.FC = () => {
  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Customer Reviews</h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8">See what our customers are saying about RankPill.</p>
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-neutral-900 border border-neutral-800 rounded-xl">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-xl">{avgRating}/5</p>
              <p className="text-neutral-500 text-sm">Based on {reviews.length} reviews</p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors"
            >
              <Quote className="w-8 h-8 text-[#22c55e]/20 mb-4" />
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className={`w-4 h-4 ${i <= review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-700'}`} />
                ))}
              </div>
              <p className="text-neutral-300 mb-6 leading-relaxed">"{review.quote}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#22c55e] to-emerald-600 rounded-full flex items-center justify-center text-black font-semibold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-medium">{review.name}</p>
                    <p className="text-neutral-500 text-sm">{review.role} at {review.company}</p>
                  </div>
                </div>
                <span className="text-neutral-600 text-xs">{new Date(review.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-16">
          <Link to="/signup">
            <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>Join 3,000+ Happy Customers</Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
