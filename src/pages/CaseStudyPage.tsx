import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, TrendingUp, Clock, Users, Quote, Tag } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useContentStore } from '../store/contentStore';

const W = 'mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10';

export const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { cases } = useContentStore();
  const published = cases.filter((c) => c.status === 'published');
  const cs = published.find((c) => c.slug === slug);

  if (!cs) return <Navigate to="/work" replace />;

  const idx = published.findIndex((c) => c.slug === slug);
  const prev = idx > 0 ? published[idx - 1] : null;
  const next = idx < published.length - 1 ? published[idx + 1] : null;
  const related = published.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-black pt-28 pb-20">
      <div className={W}>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <Link to="/work" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Our Work
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="px-3 py-1 bg-[#22c55e]/15 text-[#22c55e] rounded-full text-xs font-semibold">{cs.industry}</span>
                <span className="text-neutral-500 text-sm flex items-center gap-1.5"><Clock className="w-4 h-4" />{cs.duration}</span>
                <span className="text-neutral-500 text-sm flex items-center gap-1.5"><Users className="w-4 h-4" />{cs.client}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">{cs.title}</h1>
              <div className="flex items-center gap-3 bg-[#22c55e]/10 border border-[#22c55e]/20 rounded-xl p-5 mb-6">
                <TrendingUp className="w-6 h-6 text-[#22c55e] shrink-0" />
                <div>
                  <span className="text-[#22c55e] font-extrabold text-2xl">{cs.resultValue}</span>
                  <span className="text-neutral-300 text-sm ml-2">{cs.resultDesc}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {cs.services.map((sv) => (
                  <span key={sv} className="text-xs px-3 py-1.5 bg-neutral-800 text-neutral-300 rounded-lg">{sv}</span>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-800">
              <img src={cs.image} alt={cs.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* Story */}
        <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">The Story</h2>
          <div className="text-neutral-300 leading-[1.85] text-[16.5px] space-y-6">
            <p>{cs.story}</p>
            {cs.fullContent ? (
              <div dangerouslySetInnerHTML={{ __html: cs.fullContent }} />
            ) : (
              <>
                <h3 className="text-xl font-bold text-white pt-2">The Challenge</h3>
                <p>When {cs.client} came to Paraa, they needed more than just a creative refresh — they needed a strategic partner who could understand their market, connect with their audience, and deliver results that actually moved the business forward. The {cs.industry.toLowerCase()} space is competitive, and standing out requires more than good visuals. It requires cultural intelligence, strategic clarity, and obsessive attention to execution.</p>

                <h3 className="text-xl font-bold text-white pt-2">Our Approach</h3>
                <p>We started with deep listening — understanding not just what {cs.client} wanted to say, but why it mattered and who needed to hear it. From there, we built a comprehensive strategy that combined {cs.services.join(', ').toLowerCase()} into one cohesive creative vision. Every asset, every message, every touchpoint was designed to work together as a unified system rather than disconnected pieces.</p>

                <h3 className="text-xl font-bold text-white pt-2">The Execution</h3>
                <p>Over {cs.duration}, our team delivered a complete creative package. The production quality was uncompromised — every frame, every design, every word was crafted with the same level of care. We didn't just create content; we created a presence that commanded attention and built trust with the audience from the very first interaction.</p>

                <h3 className="text-xl font-bold text-white pt-2">The Results</h3>
                <p>The impact was immediate and measurable. {cs.resultValue} {cs.resultDesc} — a clear testament to what happens when strategy, creativity, and execution align perfectly. But beyond the numbers, the real success was in how the brand was perceived: more professional, more trustworthy, and more culturally relevant than ever before.</p>
              </>
            )}
          </div>

          {/* Testimonial */}
          {cs.testimonialQuote && (
            <div className="mt-10 bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
              <Quote className="w-10 h-10 text-[#22c55e]/20 mb-5" />
              <p className="text-white text-lg leading-relaxed mb-5 italic">"{cs.testimonialQuote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#22c55e] to-emerald-600 rounded-full flex items-center justify-center text-black font-bold text-sm">
                  {cs.testimonialAuthor.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{cs.testimonialAuthor}</p>
                  <p className="text-neutral-500 text-xs">{cs.testimonialRole}, {cs.client}</p>
                </div>
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mt-10 pt-8 border-t border-neutral-800">
            <Tag className="w-4 h-4 text-neutral-500" />
            {cs.services.map((s) => (
              <span key={s} className="text-xs px-3 py-1.5 bg-neutral-900 border border-neutral-800 text-neutral-400 rounded-lg">{s}</span>
            ))}
            <span className="text-xs px-3 py-1.5 bg-neutral-900 border border-neutral-800 text-neutral-400 rounded-lg">{cs.industry}</span>
          </div>
        </motion.article>

        {/* Prev / Next */}
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4 mb-20">
          {prev ? (
            <Link to={`/work/${prev.slug}`} className="group bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-600 transition-colors">
              <p className="text-neutral-500 text-xs uppercase tracking-wider mb-2 flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Previous</p>
              <p className="text-white font-semibold group-hover:text-[#22c55e] transition-colors line-clamp-2">{prev.title}</p>
            </Link>
          ) : <div />}
          {next ? (
            <Link to={`/work/${next.slug}`} className="group bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-600 transition-colors text-right">
              <p className="text-neutral-500 text-xs uppercase tracking-wider mb-2 flex items-center gap-1 justify-end">Next <ArrowRight className="w-3 h-3" /></p>
              <p className="text-white font-semibold group-hover:text-[#22c55e] transition-colors line-clamp-2">{next.title}</p>
            </Link>
          ) : <div />}
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-8">More Case Studies</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((r) => (
                <Link key={r.id} to={`/work/${r.slug}`} className="group bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-600 transition-all">
                  <div className="relative h-40 overflow-hidden">
                    <img src={r.image} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-black/60 backdrop-blur-sm text-xs text-white rounded-full">{r.industry}</span>
                  </div>
                  <div className="p-5">
                    <p className="text-[#22c55e] text-sm font-semibold mb-1">{r.resultValue} <span className="text-neutral-500 font-normal">{r.resultDesc}</span></p>
                    <h4 className="text-white font-semibold group-hover:text-[#22c55e] transition-colors line-clamp-2">{r.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-20">
          <p className="text-neutral-400 mb-6">Ready to create your own success story?</p>
          <Link to="/waitlist"><Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>Join the Waiting List</Button></Link>
        </motion.div>
      </div>
    </div>
  );
};
