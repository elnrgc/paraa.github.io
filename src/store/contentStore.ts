import { create } from 'zustand';
import { caseStudies as defaultCases, testimonials as defaultTestimonials } from '../data';
import { articles100 } from '../data/blogArticles';

export interface ContentPost {
  id: string; title: string; slug: string; excerpt: string; content: string; image: string;
  category: string; tags: string[]; date: string; readTime: string; status: 'published' | 'draft';
}

export interface ContentCase {
  id: string; title: string; slug: string; client: string; industry: string; services: string[];
  resultValue: string; resultDesc: string; image: string; story: string; fullContent: string;
  testimonialQuote: string; testimonialAuthor: string; testimonialRole: string; duration: string;
  status: 'published' | 'draft';
}

export interface ContentTestimonial {
  id: string; quote: string; author: string; role: string; company: string; rating: number;
  status: 'published' | 'draft';
}

export interface AdBanner {
  id: string; title: string; image: string; link: string; active: boolean;
}

export interface HeroBanner {
  title: string; description: string; buttonText: string; buttonLink: string;
  image: string; active: boolean;
}

export interface PopupAd {
  title: string; description: string; buttonText: string; buttonLink: string;
  image: string; active: boolean;
}

interface ContentState {
  posts: ContentPost[]; cases: ContentCase[]; testimonials: ContentTestimonial[];
  adBanner: AdBanner; heroBanner: HeroBanner; popupAd: PopupAd;
  addPost: (p: ContentPost) => void; updatePost: (id: string, p: Partial<ContentPost>) => void; deletePost: (id: string) => void;
  addCase: (c: ContentCase) => void; updateCase: (id: string, c: Partial<ContentCase>) => void; deleteCase: (id: string) => void;
  addTestimonial: (t: ContentTestimonial) => void; updateTestimonial: (id: string, t: Partial<ContentTestimonial>) => void; deleteTestimonial: (id: string) => void;
  updateAdBanner: (d: Partial<AdBanner>) => void;
  updateHeroBanner: (d: Partial<HeroBanner>) => void;
  updatePopupAd: (d: Partial<PopupAd>) => void;
  resetContent: () => void;
}

const STORAGE_KEY = 'paraa-content-v6';
const defaultAd: AdBanner = { id: 'ad-1', title: '', image: '', link: '', active: false };
const defaultHero: HeroBanner = { title: '', description: '', buttonText: 'Learn More', buttonLink: '', image: '', active: false };
const defaultPopup: PopupAd = { title: '', description: '', buttonText: 'Learn More', buttonLink: '', image: '', active: false };

function load() {
  try { const r = localStorage.getItem(STORAGE_KEY); if (r) { const d = JSON.parse(r); if (d?.posts && d?.cases && d?.testimonials) return d; } } catch {} return null;
}
function save(s: any) { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); } catch {} }

const seedPosts: ContentPost[] = articles100.map((a) => ({
  id: a.id, title: a.title, slug: a.slug, excerpt: a.excerpt, content: '', image: a.image,
  category: a.category, tags: a.tags, date: a.date, readTime: a.readTime, status: 'published' as const,
}));
const seedCases: ContentCase[] = defaultCases.map((c) => ({
  id: c.id, title: c.title, slug: c.id, client: c.client, industry: c.industry, services: c.services,
  resultValue: c.results[0].value, resultDesc: c.results[0].description, image: c.image, story: c.story, fullContent: '',
  testimonialQuote: c.testimonial?.quote || '', testimonialAuthor: c.testimonial?.author || '',
  testimonialRole: c.testimonial?.role || '', duration: c.duration, status: 'published' as const,
}));
const seedTest: ContentTestimonial[] = defaultTestimonials.map((t) => ({
  id: t.id, quote: t.quote, author: t.author, role: t.role, company: t.company, rating: t.rating, status: 'published' as const,
}));

const stored = load();

export const useContentStore = create<ContentState>((set) => ({
  posts: stored?.posts ?? seedPosts,
  cases: stored?.cases ?? seedCases,
  testimonials: stored?.testimonials ?? seedTest,
  adBanner: stored?.adBanner ?? defaultAd,
  heroBanner: stored?.heroBanner ?? defaultHero,
  popupAd: stored?.popupAd ?? defaultPopup,

  addPost: (p) => set((s) => { const n = { ...s, posts: [p, ...s.posts] }; save(n); return { posts: n.posts }; }),
  updatePost: (id, d) => set((s) => { const n = { ...s, posts: s.posts.map((p) => p.id === id ? { ...p, ...d } : p) }; save(n); return { posts: n.posts }; }),
  deletePost: (id) => set((s) => { const n = { ...s, posts: s.posts.filter((p) => p.id !== id) }; save(n); return { posts: n.posts }; }),
  addCase: (c) => set((s) => { const n = { ...s, cases: [c, ...s.cases] }; save(n); return { cases: n.cases }; }),
  updateCase: (id, d) => set((s) => { const n = { ...s, cases: s.cases.map((c) => c.id === id ? { ...c, ...d } : c) }; save(n); return { cases: n.cases }; }),
  deleteCase: (id) => set((s) => { const n = { ...s, cases: s.cases.filter((c) => c.id !== id) }; save(n); return { cases: n.cases }; }),
  addTestimonial: (t) => set((s) => { const n = { ...s, testimonials: [t, ...s.testimonials] }; save(n); return { testimonials: n.testimonials }; }),
  updateTestimonial: (id, d) => set((s) => { const n = { ...s, testimonials: s.testimonials.map((t) => t.id === id ? { ...t, ...d } : t) }; save(n); return { testimonials: n.testimonials }; }),
  deleteTestimonial: (id) => set((s) => { const n = { ...s, testimonials: s.testimonials.filter((t) => t.id !== id) }; save(n); return { testimonials: n.testimonials }; }),
  updateAdBanner: (d) => set((s) => { const ad = { ...s.adBanner, ...d }; const n = { ...s, adBanner: ad }; save(n); return { adBanner: ad }; }),
  updateHeroBanner: (d) => set((s) => { const h = { ...s.heroBanner, ...d }; const n = { ...s, heroBanner: h }; save(n); return { heroBanner: h }; }),
  updatePopupAd: (d) => set((s) => { const p = { ...s.popupAd, ...d }; const n = { ...s, popupAd: p }; save(n); return { popupAd: p }; }),
  resetContent: () => set(() => { const n = { posts: seedPosts, cases: seedCases, testimonials: seedTest, adBanner: defaultAd, heroBanner: defaultHero, popupAd: defaultPopup }; save(n); return n; }),
}));
