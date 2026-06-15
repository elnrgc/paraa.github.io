import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, Eye, EyeOff, FileText, Briefcase, Save, MessageSquare, Star } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Card, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { useContentStore } from '../../store/contentStore';
import type { ContentPost, ContentCase, ContentTestimonial } from '../../store/contentStore';

const Field: React.FC<{ label: string; value: string; onChange: (v: string) => void; textarea?: boolean; placeholder?: string }> = ({ label, value, onChange, textarea, placeholder }) => (
  <div>
    <label className="text-sm font-medium text-neutral-300 block mb-1.5">{label}</label>
    {textarea ? (
      <textarea rows={4} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
        className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-[#22c55e] resize-y text-sm" />
    ) : (
      <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
        className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-[#22c55e] text-sm" />
    )}
  </div>
);

export const ContentManager: React.FC = () => {
  const store = useContentStore();
  const [tab, setTab] = useState<'posts' | 'cases' | 'testimonials'>('posts');
  const [mode, setMode] = useState<'list' | 'edit-post' | 'edit-case' | 'edit-testimonial'>('list');
  const [editPost, setEditPost] = useState<ContentPost | null>(null);
  const [editCase, setEditCase] = useState<ContentCase | null>(null);
  const [editTest, setEditTest] = useState<ContentTestimonial | null>(null);

  // ── Post actions ──
  const openNewPost = () => { setEditPost({ id: 'post-' + Date.now(), title: '', slug: '', excerpt: '', content: '', image: '', category: '', tags: [], date: new Date().toISOString().split('T')[0], readTime: '5 min read', status: 'draft' }); setMode('edit-post'); };
  const openEditPost = (p: ContentPost) => { setEditPost({ ...p }); setMode('edit-post'); };
  const savePost = () => {
    if (!editPost || !editPost.title.trim()) return;
    const post = { ...editPost };
    if (!post.slug) post.slug = post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    if (store.posts.find((p) => p.id === post.id)) store.updatePost(post.id, post);
    else store.addPost(post);
    setMode('list'); setEditPost(null);
  };

  // ── Case actions ──
  const openNewCase = () => { setEditCase({ id: 'case-' + Date.now(), title: '', slug: '', client: '', industry: '', services: [], resultValue: '', resultDesc: '', image: '', story: '', fullContent: '', testimonialQuote: '', testimonialAuthor: '', testimonialRole: '', duration: '', status: 'draft' }); setMode('edit-case'); };
  const openEditCase = (c: ContentCase) => { setEditCase({ ...c }); setMode('edit-case'); };
  const saveCase = () => {
    if (!editCase || !editCase.title.trim()) return;
    const cs = { ...editCase };
    if (!cs.slug) cs.slug = cs.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    if (store.cases.find((c) => c.id === cs.id)) store.updateCase(cs.id, cs);
    else store.addCase(cs);
    setMode('list'); setEditCase(null);
  };

  // ── Testimonial actions ──
  const openNewTest = () => { setEditTest({ id: 'test-' + Date.now(), quote: '', author: '', role: '', company: '', rating: 5, status: 'draft' }); setMode('edit-testimonial'); };
  const openEditTest = (t: ContentTestimonial) => { setEditTest({ ...t }); setMode('edit-testimonial'); };
  const saveTest = () => {
    if (!editTest || !editTest.quote.trim()) return;
    if (store.testimonials.find((t) => t.id === editTest.id)) store.updateTestimonial(editTest.id, editTest);
    else store.addTestimonial(editTest);
    setMode('list'); setEditTest(null);
  };

  // ─── EDIT POST ───
  if (mode === 'edit-post' && editPost) {
    const isNew = !store.posts.find((p) => p.id === editPost.id);
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">{isNew ? 'New Blog Post' : 'Edit Blog Post'}</h1>
          <div className="flex gap-2"><Button variant="outline" onClick={() => { setMode('list'); setEditPost(null); }}>Cancel</Button><Button leftIcon={<Save className="w-4 h-4" />} onClick={savePost}>Save</Button></div>
        </div>
        <Card><CardContent><div className="space-y-5">
          <Field label="Title *" value={editPost.title} onChange={(v) => setEditPost({ ...editPost, title: v })} placeholder="Post title" />
          <Field label="Slug" value={editPost.slug} onChange={(v) => setEditPost({ ...editPost, slug: v })} placeholder="auto-generated" />
          <div className="grid sm:grid-cols-3 gap-4">
            <Field label="Category" value={editPost.category} onChange={(v) => setEditPost({ ...editPost, category: v })} placeholder="Production" />
            <Field label="Read Time" value={editPost.readTime} onChange={(v) => setEditPost({ ...editPost, readTime: v })} placeholder="8 min read" />
            <Field label="Date" value={editPost.date} onChange={(v) => setEditPost({ ...editPost, date: v })} placeholder="2025-12-15" />
          </div>
          <Field label="Cover Image URL" value={editPost.image} onChange={(v) => setEditPost({ ...editPost, image: v })} placeholder="https://..." />
          {editPost.image && <img src={editPost.image} alt="" className="w-full h-40 object-cover rounded-xl border border-neutral-800" />}
          <Field label="Excerpt" value={editPost.excerpt} onChange={(v) => setEditPost({ ...editPost, excerpt: v })} textarea placeholder="Short summary..." />
          <Field label="Full Content (HTML)" value={editPost.content} onChange={(v) => setEditPost({ ...editPost, content: v })} textarea placeholder="<p>Article...</p>" />
          <Field label="Tags (comma separated)" value={editPost.tags.join(', ')} onChange={(v) => setEditPost({ ...editPost, tags: v.split(',').map((t) => t.trim()).filter(Boolean) })} placeholder="Production, AI" />
          <div><label className="text-sm font-medium text-neutral-300 block mb-1.5">Status</label>
            <select value={editPost.status} onChange={(e) => setEditPost({ ...editPost, status: e.target.value as 'published' | 'draft' })} className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#22c55e] text-sm">
              <option value="draft">Draft</option><option value="published">Published</option>
            </select></div>
        </div></CardContent></Card>
      </div>
    );
  }

  // ─── EDIT CASE ───
  if (mode === 'edit-case' && editCase) {
    const isNew = !store.cases.find((c) => c.id === editCase.id);
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">{isNew ? 'New Case Study' : 'Edit Case Study'}</h1>
          <div className="flex gap-2"><Button variant="outline" onClick={() => { setMode('list'); setEditCase(null); }}>Cancel</Button><Button leftIcon={<Save className="w-4 h-4" />} onClick={saveCase}>Save</Button></div>
        </div>
        <Card><CardContent><div className="space-y-5">
          <Field label="Title *" value={editCase.title} onChange={(v) => setEditCase({ ...editCase, title: v })} placeholder="Case study title" />
          <Field label="Slug" value={editCase.slug} onChange={(v) => setEditCase({ ...editCase, slug: v })} placeholder="auto-generated" />
          <div className="grid sm:grid-cols-3 gap-4">
            <Field label="Client" value={editCase.client} onChange={(v) => setEditCase({ ...editCase, client: v })} placeholder="Client name" />
            <Field label="Industry" value={editCase.industry} onChange={(v) => setEditCase({ ...editCase, industry: v })} placeholder="Technology" />
            <Field label="Duration" value={editCase.duration} onChange={(v) => setEditCase({ ...editCase, duration: v })} placeholder="3 months" />
          </div>
          <Field label="Cover Image URL" value={editCase.image} onChange={(v) => setEditCase({ ...editCase, image: v })} placeholder="https://..." />
          {editCase.image && <img src={editCase.image} alt="" className="w-full h-40 object-cover rounded-xl border border-neutral-800" />}
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Result Value" value={editCase.resultValue} onChange={(v) => setEditCase({ ...editCase, resultValue: v })} placeholder="+280%" />
            <Field label="Result Description" value={editCase.resultDesc} onChange={(v) => setEditCase({ ...editCase, resultDesc: v })} placeholder="increase in brand recognition" />
          </div>
          <Field label="Services (comma separated)" value={editCase.services.join(', ')} onChange={(v) => setEditCase({ ...editCase, services: v.split(',').map((s) => s.trim()).filter(Boolean) })} placeholder="Creative, Digital" />
          <Field label="Story Summary" value={editCase.story} onChange={(v) => setEditCase({ ...editCase, story: v })} textarea placeholder="Brief story..." />
          <Field label="Full Content (HTML)" value={editCase.fullContent} onChange={(v) => setEditCase({ ...editCase, fullContent: v })} textarea placeholder="<p>Detailed...</p>" />
          <Field label="Testimonial Quote" value={editCase.testimonialQuote} onChange={(v) => setEditCase({ ...editCase, testimonialQuote: v })} textarea placeholder="Client quote..." />
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Testimonial Author" value={editCase.testimonialAuthor} onChange={(v) => setEditCase({ ...editCase, testimonialAuthor: v })} placeholder="Name" />
            <Field label="Testimonial Role" value={editCase.testimonialRole} onChange={(v) => setEditCase({ ...editCase, testimonialRole: v })} placeholder="Role" />
          </div>
          <div><label className="text-sm font-medium text-neutral-300 block mb-1.5">Status</label>
            <select value={editCase.status} onChange={(e) => setEditCase({ ...editCase, status: e.target.value as 'published' | 'draft' })} className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#22c55e] text-sm">
              <option value="draft">Draft</option><option value="published">Published</option>
            </select></div>
        </div></CardContent></Card>
      </div>
    );
  }

  // ─── EDIT TESTIMONIAL ───
  if (mode === 'edit-testimonial' && editTest) {
    const isNew = !store.testimonials.find((t) => t.id === editTest.id);
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">{isNew ? 'New Testimonial' : 'Edit Testimonial'}</h1>
          <div className="flex gap-2"><Button variant="outline" onClick={() => { setMode('list'); setEditTest(null); }}>Cancel</Button><Button leftIcon={<Save className="w-4 h-4" />} onClick={saveTest}>Save</Button></div>
        </div>
        <Card><CardContent><div className="space-y-5">
          <Field label="Quote *" value={editTest.quote} onChange={(v) => setEditTest({ ...editTest, quote: v })} textarea placeholder="What the client said..." />
          <div className="grid sm:grid-cols-3 gap-4">
            <Field label="Author Name" value={editTest.author} onChange={(v) => setEditTest({ ...editTest, author: v })} placeholder="Ahmad Al-Rawi" />
            <Field label="Role / Title" value={editTest.role} onChange={(v) => setEditTest({ ...editTest, role: v })} placeholder="CEO" />
            <Field label="Company" value={editTest.company} onChange={(v) => setEditTest({ ...editTest, company: v })} placeholder="Company name" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-neutral-300 block mb-1.5">Rating (1-5 stars)</label>
              <div className="flex gap-2 mt-1">
                {[1,2,3,4,5].map((n) => (
                  <button key={n} type="button" onClick={() => setEditTest({ ...editTest, rating: n })}
                    className="p-1 transition-colors">
                    <Star className={`w-7 h-7 ${n <= editTest.rating ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-700'}`} />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-neutral-300 block mb-1.5">Status</label>
              <select value={editTest.status} onChange={(e) => setEditTest({ ...editTest, status: e.target.value as 'published' | 'draft' })} className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#22c55e] text-sm">
                <option value="draft">Draft</option><option value="published">Published</option>
              </select>
            </div>
          </div>
        </div></CardContent></Card>
      </div>
    );
  }

  // ─── LIST VIEW ───
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Content Manager</h1>
          <p className="text-neutral-400">Manage all website content. Changes appear instantly.</p>
        </div>
        <div className="flex gap-2">
          {tab === 'posts' && <Button leftIcon={<Plus className="w-4 h-4" />} onClick={openNewPost}>New Post</Button>}
          {tab === 'cases' && <Button leftIcon={<Plus className="w-4 h-4" />} onClick={openNewCase}>New Case Study</Button>}
          {tab === 'testimonials' && <Button leftIcon={<Plus className="w-4 h-4" />} onClick={openNewTest}>New Testimonial</Button>}
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-neutral-800 pb-3">
        <button onClick={() => setTab('posts')} className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${tab === 'posts' ? 'bg-[#22c55e] text-black' : 'text-neutral-400 hover:text-white hover:bg-neutral-800'}`}>
          <FileText className="w-4 h-4" /> Blog ({store.posts.length})
        </button>
        <button onClick={() => setTab('cases')} className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${tab === 'cases' ? 'bg-[#22c55e] text-black' : 'text-neutral-400 hover:text-white hover:bg-neutral-800'}`}>
          <Briefcase className="w-4 h-4" /> Cases ({store.cases.length})
        </button>
        <button onClick={() => setTab('testimonials')} className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${tab === 'testimonials' ? 'bg-[#22c55e] text-black' : 'text-neutral-400 hover:text-white hover:bg-neutral-800'}`}>
          <MessageSquare className="w-4 h-4" /> Testimonials ({store.testimonials.length})
        </button>
      </div>

      {/* Posts */}
      {tab === 'posts' && (
        <div className="space-y-3">
          {store.posts.length === 0 && <p className="text-neutral-500 text-center py-10">No posts yet.</p>}
          {store.posts.map((p) => (
            <Card key={p.id} padding="sm"><CardContent>
              <div className="flex items-center gap-4">
                {p.image && <img src={p.image} alt="" className="w-16 h-12 rounded-lg object-cover shrink-0 hidden sm:block" />}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1"><h3 className="text-white font-medium truncate">{p.title || 'Untitled'}</h3><Badge variant={p.status === 'published' ? 'success' : 'warning'} size="sm">{p.status}</Badge></div>
                  <p className="text-neutral-500 text-xs">{p.category || 'No category'} · {p.date}</p>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <button onClick={() => store.updatePost(p.id, { status: p.status === 'published' ? 'draft' : 'published' })} className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg">{p.status === 'published' ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}</button>
                  <button onClick={() => openEditPost(p)} className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg"><Edit className="w-4 h-4" /></button>
                  <button onClick={() => { if (confirm('Delete?')) store.deletePost(p.id); }} className="p-2 text-neutral-400 hover:text-red-400 hover:bg-neutral-800 rounded-lg"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
            </CardContent></Card>
          ))}
        </div>
      )}

      {/* Cases */}
      {tab === 'cases' && (
        <div className="space-y-3">
          {store.cases.length === 0 && <p className="text-neutral-500 text-center py-10">No case studies yet.</p>}
          {store.cases.map((c) => (
            <Card key={c.id} padding="sm"><CardContent>
              <div className="flex items-center gap-4">
                {c.image && <img src={c.image} alt="" className="w-16 h-12 rounded-lg object-cover shrink-0 hidden sm:block" />}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1"><h3 className="text-white font-medium truncate">{c.title || 'Untitled'}</h3><Badge variant={c.status === 'published' ? 'success' : 'warning'} size="sm">{c.status}</Badge></div>
                  <p className="text-neutral-500 text-xs">{c.client} · {c.industry} · {c.resultValue}</p>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <button onClick={() => store.updateCase(c.id, { status: c.status === 'published' ? 'draft' : 'published' })} className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg">{c.status === 'published' ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}</button>
                  <button onClick={() => openEditCase(c)} className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg"><Edit className="w-4 h-4" /></button>
                  <button onClick={() => { if (confirm('Delete?')) store.deleteCase(c.id); }} className="p-2 text-neutral-400 hover:text-red-400 hover:bg-neutral-800 rounded-lg"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
            </CardContent></Card>
          ))}
        </div>
      )}

      {/* Testimonials */}
      {tab === 'testimonials' && (
        <div className="space-y-3">
          {store.testimonials.length === 0 && <p className="text-neutral-500 text-center py-10">No testimonials yet.</p>}
          {store.testimonials.map((t) => (
            <Card key={t.id} padding="sm"><CardContent>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#22c55e] to-emerald-600 rounded-full flex items-center justify-center text-black font-bold shrink-0 hidden sm:flex">{t.author?.charAt(0) || '?'}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white font-medium truncate">{t.author || 'Anonymous'}</h3>
                    <Badge variant={t.status === 'published' ? 'success' : 'warning'} size="sm">{t.status}</Badge>
                    <div className="flex gap-0.5 ml-1">{[1,2,3,4,5].map((n) => <Star key={n} className={`w-3 h-3 ${n <= t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-700'}`} />)}</div>
                  </div>
                  <p className="text-neutral-500 text-xs truncate">"{t.quote?.slice(0, 80)}..."</p>
                  <p className="text-neutral-600 text-xs">{t.role} at {t.company}</p>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <button onClick={() => store.updateTestimonial(t.id, { status: t.status === 'published' ? 'draft' : 'published' })} className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg">{t.status === 'published' ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}</button>
                  <button onClick={() => openEditTest(t)} className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg"><Edit className="w-4 h-4" /></button>
                  <button onClick={() => { if (confirm('Delete?')) store.deleteTestimonial(t.id); }} className="p-2 text-neutral-400 hover:text-red-400 hover:bg-neutral-800 rounded-lg"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
            </CardContent></Card>
          ))}
        </div>
      )}
    </div>
  );
};
