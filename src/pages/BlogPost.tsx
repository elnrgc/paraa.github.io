import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, ArrowRight, Tag, User } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useContentStore } from '../store/contentStore';

const W = 'mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { posts } = useContentStore();
  const published = posts.filter((p) => p.status === 'published');
  const post = published.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const idx = published.findIndex((p) => p.slug === slug);
  const prevPost = idx > 0 ? published[idx - 1] : null;
  const nextPost = idx < published.length - 1 ? published[idx + 1] : null;
  const relatedPosts = published.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-black pt-28 pb-20">
      <div className={W}>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="max-w-3xl mx-auto mb-12">
          <div className="flex flex-wrap items-center gap-4 text-neutral-500 text-sm mb-6">
            <span className="px-3 py-1 bg-[#22c55e]/15 text-[#22c55e] rounded-full text-xs font-semibold">{post.category}</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readTime}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-[#22c55e] to-emerald-600 rounded-full flex items-center justify-center text-black font-bold text-sm"><User className="w-5 h-5" /></div>
            <div><p className="text-white font-medium text-sm">Paraa Team</p><p className="text-neutral-500 text-xs">Paraa Agency</p></div>
          </div>
          <div className="bg-neutral-900 border-l-4 border-[#22c55e] rounded-r-xl p-6 mb-10">
            <p className="text-neutral-300 text-lg leading-relaxed italic">{post.excerpt}</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="max-w-4xl mx-auto mb-14">
          <div className="relative aspect-[16/8] rounded-2xl overflow-hidden border border-neutral-800">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="max-w-3xl mx-auto mb-16">
          <div className="text-neutral-300 leading-[1.85] text-[16.5px] space-y-6">
            {post.content ? (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              <>
                <p>In an era where algorithms generate images in seconds and AI can write copy on demand, a critical question emerges for every brand and creator: does the process of making still matter? At Paraa, we believe the answer is an unequivocal yes.</p>
                <h2 className="text-2xl font-bold text-white pt-4">The Irreplaceable Human Element</h2>
                <p>There is something fundamentally different about content that was crafted by human hands, directed by human eyes, and shaped by human intuition. When a director walks onto a set, they don't just see lights and cameras — they feel the energy of the space, the mood of the talent, the rhythm of the moment.</p>
                <h2 className="text-2xl font-bold text-white pt-4">Art Is in the Process</h2>
                <p>The phrase "art is in the process" isn't a nostalgic slogan — it's a strategic truth. When you invest in real production, you're investing in authenticity. And in a world drowning in AI-generated sameness, authenticity is the ultimate competitive advantage.</p>
                <h2 className="text-2xl font-bold text-white pt-4">The Cultural Dimension</h2>
                <p>In markets like Iraq, cultural intelligence is not optional — it's essential. The way light falls in Baghdad is different. The way people gesture, the colors that carry meaning, the humor that lands — these are things that require lived experience, not data training.</p>
                <h2 className="text-2xl font-bold text-white pt-4">The Bottom Line</h2>
                <p>Production will always matter because people will always crave what is real. In an age of infinite content, the brands that invest in genuine creative production will be the ones that stand out, build trust, and create lasting cultural impact.</p>
                <p className="text-[#22c55e] font-semibold">At Paraa, we choose soul. Every time.</p>
              </>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-2 mt-12 pt-8 border-t border-neutral-800">
            <Tag className="w-4 h-4 text-neutral-500" />
            {post.tags.map((tag) => (<span key={tag} className="text-xs px-3 py-1.5 bg-neutral-900 border border-neutral-800 text-neutral-400 rounded-lg">{tag}</span>))}
          </div>
        </motion.article>

        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4 mb-20">
          {prevPost ? (
            <Link to={`/blog/${prevPost.slug}`} className="group bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-600 transition-colors">
              <p className="text-neutral-500 text-xs uppercase tracking-wider mb-2 flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Previous</p>
              <p className="text-white font-semibold group-hover:text-[#22c55e] transition-colors line-clamp-2">{prevPost.title}</p>
            </Link>
          ) : <div />}
          {nextPost ? (
            <Link to={`/blog/${nextPost.slug}`} className="group bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-600 transition-colors text-right">
              <p className="text-neutral-500 text-xs uppercase tracking-wider mb-2 flex items-center gap-1 justify-end">Next <ArrowRight className="w-3 h-3" /></p>
              <p className="text-white font-semibold group-hover:text-[#22c55e] transition-colors line-clamp-2">{nextPost.title}</p>
            </Link>
          ) : <div />}
        </div>

        {relatedPosts.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-8">More from the Blog</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedPosts.map((rp) => (
                <Link key={rp.id} to={`/blog/${rp.slug}`} className="group bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-600 transition-all">
                  <div className="relative h-40 overflow-hidden">
                    <img src={rp.image} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-black/60 backdrop-blur-sm text-xs text-white rounded-full">{rp.category}</span>
                  </div>
                  <div className="p-5">
                    <p className="text-neutral-500 text-xs mb-2">{rp.readTime}</p>
                    <h4 className="text-white font-semibold group-hover:text-[#22c55e] transition-colors line-clamp-2">{rp.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-20">
          <p className="text-neutral-400 mb-6">Want to work with a team that thinks like this?</p>
          <Link to="/waitlist"><Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>Join the Waiting List</Button></Link>
        </motion.div>
      </div>
    </div>
  );
};
