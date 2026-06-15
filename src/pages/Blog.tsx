import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useContentStore } from '../store/contentStore';

const W = 'mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10';

export const Blog: React.FC = () => {
  const { posts } = useContentStore();
  const published = posts.filter((p) => p.status === 'published');

  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className={W}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">Blog</h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">Creative thinking, production insights, and branding perspectives from the Paraa team.</p>
        </motion.div>

        {published.length === 0 && <p className="text-neutral-500 text-center py-20">No posts yet. Check back soon!</p>}

        {published[0] && (
          <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-16">
            <Link to={`/blog/${published[0].slug}`} className="group block">
              <div className="grid lg:grid-cols-2 gap-0 bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-600 transition-all">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img src={published[0].image} alt={published[0].title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-8 sm:p-10 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-3 text-neutral-500 text-sm mb-5">
                    <span className="px-3 py-1 bg-[#22c55e]/15 text-[#22c55e] rounded-full text-xs font-semibold">Featured</span>
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{new Date(published[0].date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{published[0].readTime}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-[#22c55e] transition-colors leading-snug">{published[0].title}</h2>
                  <p className="text-neutral-400 mb-6 leading-relaxed">{published[0].excerpt}</p>
                  <div className="flex items-center gap-2 text-[#22c55e] font-semibold text-sm">Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></div>
                </div>
              </div>
            </Link>
          </motion.article>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {published.slice(1).map((post, index) => (
            <motion.article key={post.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + index * 0.08 }}>
              <Link to={`/blog/${post.slug}`} className="group block bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-600 transition-all h-full">
                <div className="relative h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-sm text-white text-xs font-medium rounded-full">{post.category}</span>
                </div>
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-3 text-neutral-500 text-sm mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#22c55e] transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-neutral-400 text-sm line-clamp-3 leading-relaxed">{post.excerpt}</p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};
