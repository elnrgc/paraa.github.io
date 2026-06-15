import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Wrap } from '../ui/Section';
import { ArrowRight, Sparkles, BookOpen, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContentStore } from '../../store/contentStore';

export const Hero: React.FC = () => {
  const { posts } = useContentStore();
  const featured = posts.filter((p) => p.status === 'published').slice(0, 5);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (featured.length === 0) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % featured.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featured.length]);

  const currentPost = featured[activeSlide] || featured[0];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-black" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/[0.03] rounded-full blur-[150px]" />

      <Wrap className="relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-neutral-900 border border-neutral-800 rounded-full mb-10">
            <Sparkles className="w-4 h-4 text-white/60" />
            <span className="text-neutral-300 text-sm">Your Creative Partner</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-extrabold text-white mb-8 leading-[1.05] tracking-tight">
            We make brands<br /><span className="text-neutral-500">impossible to ignore.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Paraa is your creative partner for communication. Marketing, production, creative, and digital — from Baghdad to the world.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-20">
            <Link to="/waitlist"><Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>Join the Waiting List</Button></Link>
            <Link to="/services"><Button variant="outline" size="lg">Our Services</Button></Link>
          </motion.div>

          {/* Blog Showcase */}
          {currentPost && (
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-3xl mx-auto text-left">
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#22c55e]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Creative Discourse & Thinking</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button onClick={() => setActiveSlide((prev) => (prev - 1 + featured.length) % featured.length)}
                    className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-colors"><ChevronLeft className="w-4 h-4" /></button>
                  <button onClick={() => setActiveSlide((prev) => (prev + 1) % featured.length)}
                    className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-colors"><ChevronRight className="w-4 h-4" /></button>
                </div>
              </div>

              <div className="relative group bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all duration-500 shadow-2xl">
                <div className="grid md:grid-cols-2 min-h-[280px]">
                  <div className="relative overflow-hidden aspect-video md:aspect-auto">
                    <AnimatePresence mode="wait">
                      <motion.img key={currentPost.id} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.5 }}
                        src={currentPost.image} alt={currentPost.title} className="absolute inset-0 w-full h-full object-cover" />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-neutral-900 via-transparent to-transparent opacity-80" />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md text-[#22c55e] font-semibold text-xs rounded-full">{currentPost.category}</span>
                  </div>
                  <div className="p-7 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-neutral-500 text-xs mb-3">
                        <Clock className="w-3.5 h-3.5" /><span>{currentPost.readTime}</span><span>·</span>
                        <span>{new Date(currentPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      </div>
                      <AnimatePresence mode="wait">
                        <motion.h3 key={currentPost.title} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                          className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-[#22c55e] transition-colors line-clamp-2">{currentPost.title}</motion.h3>
                      </AnimatePresence>
                      <AnimatePresence mode="wait">
                        <motion.p key={currentPost.excerpt} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                          className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-3">{currentPost.excerpt}</motion.p>
                      </AnimatePresence>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-neutral-800/80">
                      <Link to={`/blog/${currentPost.slug}`} className="text-sm font-semibold text-[#22c55e] inline-flex items-center gap-1.5 group-hover:underline">
                        Read <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <div className="flex items-center gap-1.5">
                        {featured.map((_, idx) => (
                          <button key={idx} onClick={() => setActiveSlide(idx)}
                            className={`h-1.5 rounded-full transition-all ${idx === activeSlide ? 'w-5 bg-[#22c55e]' : 'w-1.5 bg-neutral-700 hover:bg-neutral-500'}`} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </Wrap>
    </section>
  );
};
