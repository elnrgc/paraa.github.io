import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import { Navbar, Footer } from './components/layout';
import { AdBanner as SiteAdBanner, PopupAdModal } from './components/AdBanner';
import { DashboardLayout } from './components/dashboard/DashboardLayout';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { BlogPostPage } from './pages/BlogPost';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { SignIn, SignUp } from './pages/Auth';
import { PartnerPage } from './pages/Partner';
import { CoProductionPage } from './pages/CoProduction';
import { PackagesIndex } from './pages/Packages';
import { PackageFamily, CustomPlanPage } from './pages/PackageDetail';
import { useParams } from 'react-router-dom';

function FamilyTab({ familyId }: { familyId: string }) {
  const { tab } = useParams<{ tab: string }>();
  return <PackageFamily familyId={familyId} tabId={tab} />;
}
import { DashboardHome, Keywords, Articles, Backlinks, Analytics, Settings, Reddit } from './pages/dashboard';
import { ContentManager } from './pages/dashboard/ContentManager';
import { useAuthStore } from './store/authStore';
import { motion } from 'framer-motion';
import { services, marketingIntegrations } from './data';
import { useContentStore } from './store/contentStore';
import { Button } from './components/ui/Button';
import { ArrowRight, Mail, MapPin, Phone, Check, Send, TrendingUp, Globe, Webhook, Database, Zap } from 'lucide-react';

const W = 'mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuthStore();
  if (!isAuthenticated) return <Navigate to="/waitlist" replace />;
  return <>{children}</>;
};
const ML: React.FC<{ children: React.ReactNode }> = ({ children }) => (<><Navbar /><main className="min-h-screen">{children}</main><Footer /><SiteAdBanner /><PopupAdModal /></>);
const DL: React.FC<{ children: React.ReactNode }> = ({ children }) => (<ProtectedRoute><DashboardLayout>{children}</DashboardLayout></ProtectedRoute>);

/* ─── SERVICES PAGE ─── */
function ServicesPage() {
  const intIcons: Record<string, React.FC<{ className?: string }>> = { Globe, Webhook, Database, Zap };
  const loc = useLocation();
  useEffect(() => {
    if (loc.hash) {
      const el = document.getElementById(loc.hash.slice(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 200);
    } else {
      window.scrollTo(0, 0);
    }
  }, [loc]);
  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className={W}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">What We Do</h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">Four disciplines. One creative vision. Every project gets obsessive attention to detail.</p>
        </motion.div>
        <div className="space-y-24">
          {services.map((s, i) => (
            <motion.div key={s.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <p className="text-[#22c55e] text-sm font-semibold tracking-widest uppercase mb-4">{s.tagline}</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{s.name}</h2>
                <p className="text-neutral-400 leading-relaxed mb-8">{s.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {s.features.map((f) => (<div key={f} className="flex items-center gap-3"><Check className="w-5 h-5 text-[#22c55e] shrink-0" /><span className="text-neutral-300 text-sm">{f}</span></div>))}
                </div>
              </div>
              <div className="space-y-4">
                {s.process.map((p) => (
                  <div key={p.step} className="flex gap-5 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-600 transition-colors">
                    <div className="w-10 h-10 bg-[#22c55e] text-black font-bold rounded-xl flex items-center justify-center shrink-0">{p.step}</div>
                    <div><h4 className="text-white font-semibold mb-1">{p.title}</h4><p className="text-neutral-400 text-sm">{p.description}</p></div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integrations & Automation Section */}
        <div id="integrations" className="scroll-mt-24 mt-28 lg:mt-32">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-[#22c55e] text-sm font-semibold tracking-widest uppercase mb-4">Integrations & Automation</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">Built to Plug Into Your Stack</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto leading-relaxed">Beyond creative execution, we engineer the technical infrastructure that keeps your brand connected, automated, and scaling without friction.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {marketingIntegrations.map((it, i) => {
              const Icon = intIcons[it.icon] || Globe;
              return (
                <motion.div key={it.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="bg-neutral-900 border border-neutral-800 rounded-2xl p-7 hover:border-neutral-600 hover:-translate-y-1 transition-all">
                  <div className="w-12 h-12 bg-[#22c55e]/10 rounded-xl flex items-center justify-center mb-5"><Icon className="w-6 h-6 text-[#22c55e]" /></div>
                  <h3 className="text-white font-semibold mb-2">{it.name}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{it.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── SERVICE DETAIL PAGE ─── */
function ServiceDetailPage({ serviceId }: { serviceId: string }) {
  const s = services.find((sv) => sv.id === serviceId);
  if (!s) return <Navigate to="/services" replace />;
  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className={W}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-[#22c55e] text-sm font-semibold tracking-widest uppercase mb-4">{s.tagline}</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-7">{s.name}</h1>
          <p className="text-lg text-neutral-400 leading-relaxed mb-10">{s.description}</p>
          <Link to="/waitlist"><Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>Get Started</Button></Link>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20 max-w-4xl mx-auto">
          {s.features.map((f, i) => (
            <motion.div key={f} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl p-7 hover:border-neutral-600 transition-colors">
              <Check className="w-6 h-6 text-[#22c55e] mb-4" /><h3 className="text-white font-medium">{f}</h3>
            </motion.div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-10 text-center">How It Works</h2>
          <div className="space-y-5">
            {s.process.map((p) => (
              <div key={p.step} className="flex gap-5 bg-neutral-900 border border-neutral-800 rounded-2xl p-7">
                <div className="w-12 h-12 bg-[#22c55e] text-black font-bold text-lg rounded-xl flex items-center justify-center shrink-0">{p.step}</div>
                <div><h4 className="text-white font-semibold mb-1">{p.title}</h4><p className="text-neutral-400 text-sm leading-relaxed">{p.description}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── WORK PAGE ─── */
function WorkPage() {
  const { cases } = useContentStore();
  const published = cases.filter((c) => c.status === 'published');
  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className={W}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">Our Work</h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">Real results from real businesses with us.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-7">
          {published.map((c, i) => (
            <motion.div key={c.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
              <Link to={`/work/${c.slug}`} className="group block bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-600 transition-all">
                <div className="relative h-56 overflow-hidden">
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1.5 bg-black/50 backdrop-blur-sm text-white text-xs font-medium rounded-full">{c.industry}</span>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#22c55e] transition-colors">{c.title}</h3>
                  <div className="flex items-center gap-2 mb-4"><TrendingUp className="w-4 h-4 text-[#22c55e]" /><span className="text-[#22c55e] font-semibold">{c.resultValue}</span><span className="text-neutral-500 text-sm">{c.resultDesc}</span></div>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-5 line-clamp-2">{c.story}</p>
                  <div className="flex flex-wrap gap-2">{c.services.map((sv) => <span key={sv} className="text-xs px-3 py-1.5 bg-neutral-800 text-neutral-300 rounded-lg">{sv}</span>)}</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── WAITLIST PAGE ─── */
function WaitlistPage() {
  const [submitted, setSubmitted] = useState(false);
  const [wName, setWName] = useState('');
  const [wEmail, setWEmail] = useState('');
  const [wCompany, setWCompany] = useState('');
  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Waitlist: ${wName}`);
    const body = encodeURIComponent(`New Waitlist Submission\n\nName: ${wName}\nEmail: ${wEmail}\nCompany: ${wCompany || 'Not provided'}\n\nSubmitted from paraa.art`);
    window.open(`mailto:elnrgcy@gmail.com?subject=${subject}&body=${body}`, '_self');
    setSubmitted(true);
  };
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <Link to="/" className="inline-block mb-8"><span className="text-white font-extrabold text-3xl tracking-tight">paraa<span className="text-neutral-500">.</span></span></Link>
          <h1 className="text-3xl font-bold text-white mb-3">Join the Waiting List</h1>
          <p className="text-neutral-400">Be the first to know when we're ready for you.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-[#22c55e]/10 rounded-full flex items-center justify-center mx-auto mb-5"><Check className="w-8 h-8 text-[#22c55e]" /></div>
              <h3 className="text-xl font-bold text-white mb-2">You're on the list!</h3>
              <p className="text-neutral-400 text-sm">We'll reach out soon.</p>
            </div>
          ) : (
            <form onSubmit={handleWaitlist} className="space-y-5">
              <div><label className="text-sm font-medium text-neutral-300 block mb-1.5">Full Name</label><input required value={wName} onChange={(e) => setWName(e.target.value)} placeholder="Your name" className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-[#22c55e]" /></div>
              <div><label className="text-sm font-medium text-neutral-300 block mb-1.5">Email</label><input required type="email" value={wEmail} onChange={(e) => setWEmail(e.target.value)} placeholder="you@company.com" className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-[#22c55e]" /></div>
              <div><label className="text-sm font-medium text-neutral-300 block mb-1.5">Company (optional)</label><input value={wCompany} onChange={(e) => setWCompany(e.target.value)} placeholder="Your company" className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-[#22c55e]" /></div>
              <Button type="submit" fullWidth size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>Join Waiting List</Button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}

/* ─── CONTACT PAGE ─── */
function ContactPage() {
  const [sent, setSent] = useState(false);
  const [cName, setCName] = useState('');
  const [cEmail, setCEmail] = useState('');
  const [cMsg, setCMsg] = useState('');
  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact: ${cName}`);
    const body = encodeURIComponent(`New Contact Message\n\nName: ${cName}\nEmail: ${cEmail}\n\nMessage:\n${cMsg}\n\nSent from paraa.art`);
    window.open(`mailto:elnrgcy@gmail.com?subject=${subject}&body=${body}`, '_self');
    setSent(true);
  };
  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className={W}>
        <div className="text-center mb-16"><h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">Get in Touch</h1><p className="text-lg text-neutral-400 max-w-2xl mx-auto">Let's talk about your next project.</p></div>
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="space-y-5">
            {[{ icon: Mail, title: 'Email', desc: 'info@paraa.art', link: 'mailto:elnrgcy@gmail.com' }, { icon: Phone, title: 'WhatsApp', desc: '+964 773 498 1968', link: 'https://wa.me/9647734981968' }, { icon: MapPin, title: 'Locations', desc: 'Baghdad · Basra · Erbil · Sulaymaniyah · Babel · Karbala' }].map((c) => {
              const I = c.icon;
              const inner = (<div className="flex items-start gap-4"><div className="w-10 h-10 bg-[#22c55e]/10 rounded-xl flex items-center justify-center shrink-0"><I className="w-5 h-5 text-[#22c55e]" /></div><div><h3 className="text-white font-medium mb-1">{c.title}</h3><p className="text-neutral-400 text-sm">{'link' in c && c.link ? <a href={c.link as string} target="_blank" rel="noopener noreferrer" className="text-[#22c55e] hover:underline">{c.desc}</a> : c.desc}</p></div></div>);
              return (<div key={c.title} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">{inner}</div>);
            })}
          </div>
          <div className="lg:col-span-2">
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-7">
              {sent ? (
                <div className="text-center py-12"><Check className="w-12 h-12 text-[#22c55e] mx-auto mb-4" /><h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3><p className="text-neutral-400">We'll get back within 48 hours.</p></div>
              ) : (
                <form onSubmit={handleContact} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div><label className="text-sm font-medium text-neutral-300 block mb-1.5">Name</label><input required value={cName} onChange={(e) => setCName(e.target.value)} placeholder="Your name" className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-[#22c55e]" /></div>
                    <div><label className="text-sm font-medium text-neutral-300 block mb-1.5">Email</label><input required type="email" value={cEmail} onChange={(e) => setCEmail(e.target.value)} placeholder="you@company.com" className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-[#22c55e]" /></div>
                  </div>
                  <div><label className="text-sm font-medium text-neutral-300 block mb-1.5">Message</label><textarea required rows={5} value={cMsg} onChange={(e) => setCMsg(e.target.value)} placeholder="Tell us about your project..." className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-[#22c55e] resize-none" /></div>
                  <Button type="submit" size="lg" leftIcon={<Send className="w-4 h-4" />}>Send Message</Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── PRIVACY ─── */
function PrivacyPage() {
  const sections = [
    { title: '01 — What We Collect', content: 'We only collect what you give us directly — your name, email address, and phone number — when you contact us through the website, WhatsApp, or email. If you reach out via social media, your publicly visible profile information may naturally be accessible to us.' },
    { title: '02 — How We Use It', content: 'We use your information solely to respond to your inquiries, deliver the services you requested, and communicate with you regarding your projects with us. We do not send advertisements, we do not share your data with any third party for commercial purposes, and we have no interest in exploiting your information.' },
    { title: '03 — Do We Share Your Data?', content: 'The short answer: No. We do not sell your data or share it with external parties for marketing or commercial purposes. The only people who may see your data are the internal Paraa team, and only to the extent necessary to complete your work. In exceptional cases such as legal requirements from official Iraqi authorities, we may be obligated to disclose information, but this is beyond our control and we will inform you if possible.' },
    { title: '04 — How Long Do We Keep It?', content: 'We retain your data as long as our professional relationship is active. After the engagement ends, we delete or secure your data within a reasonable period unless you request immediate deletion.' },
    { title: '05 — Your Rights', content: 'You have full rights regarding your data: request a copy of all data we hold about you, correct any inaccurate information, request complete deletion of your data at any time, and stop any marketing communication from us.' },
    { title: '06 — Contact Us', content: 'For any inquiries regarding your data, contact us directly at info@paraa.art — we respond within 48 business hours.' },
  ];
  return (
    <div className="min-h-screen bg-black pt-32 pb-20"><div className={W}><div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-extrabold text-white mb-3">Privacy Policy</h1>
      <p className="text-2xl text-neutral-400 mb-4">Your data is yours. Period.</p>
      <p className="text-neutral-500 text-sm mb-12">Last updated: 2025 — Privacy Policy for Paraa Agency</p>
      <div className="space-y-6 mb-12">
        {['We do not sell your data.', 'We do not share it with commercial parties.', 'We do not use it outside the scope of service.', 'You can request deletion at any time.'].map((t) => (
          <div key={t} className="flex items-center gap-3"><Check className="w-5 h-5 text-[#22c55e] shrink-0" /><span className="text-neutral-300">{t}</span></div>
        ))}
      </div>
      <div className="space-y-5">{sections.map((s) => (<div key={s.title} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-7"><h2 className="text-lg font-semibold text-white mb-3">{s.title}</h2><p className="text-neutral-400 leading-relaxed">{s.content}</p></div>))}</div>
      <div className="mt-16 text-center"><Link to="/signin" className="text-neutral-700 hover:text-neutral-500 text-xs transition-colors">⚙</Link></div>
    </div></div></div>
  );
}

/* ─── TERMS ─── */
function TermsPage() {
  const sections = [
    { title: '1. Paraa as a "Creative Partner"', content: 'Paraa provides its services as a creative and strategic partner to the client, working to develop ideas, visual identities, campaigns, and artistic solutions that serve the client\'s objectives and move with the audience\'s culture.' },
    { title: '2. Ownership of Deliverables & Non-Modification', content: 'All creative deliverables remain the property of Paraa until all agreed financial obligations are fully settled, after which the agreed usage rights transfer to the client. The final creative and artistic outputs delivered by Paraa are the result of an integrated artistic vision. The client or any third party may not modify, alter, or tamper with these outputs (whether designs, copy, videos, or strategies) after final delivery, unless otherwise agreed in writing.' },
    { title: '3. Governing Law & Jurisdiction', content: 'This agreement is governed by and interpreted exclusively in accordance with the laws and legislation in force in the Republic of Iraq. Paraa operates and applies its terms within the Iraqi legal jurisdiction only. Any disputes or legal disagreements arising from this agreement are subject to the exclusive jurisdiction of the competent Iraqi courts in Baghdad.' },
    { title: '4. Confidentiality', content: 'Both parties (Paraa and the client) commit to maintaining the confidentiality of information exchanged during the course of work, including trade secrets, pre-launch strategies, and account data.' },
    { title: '5. Amendments', content: 'Paraa reserves the right to update or amend these terms and conditions in line with the evolution of its services and local laws. The client will be notified of any updates that may apply.' },
  ];
  return (
    <div className="min-h-screen bg-black pt-32 pb-20"><div className={W}><div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-extrabold text-white mb-3">Terms & Conditions</h1>
      <p className="text-neutral-500 text-sm mb-12">Terms and Conditions Agreement for Paraa Agency</p>
      <div className="space-y-5">{sections.map((s) => (<div key={s.title} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-7"><h2 className="text-lg font-semibold text-white mb-3">{s.title}</h2><p className="text-neutral-400 leading-relaxed">{s.content}</p></div>))}</div>
    </div></div></div>
  );
}

/* ─── APP ─── */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ML><Home /></ML>} />
        <Route path="/services" element={<ML><ServicesPage /></ML>} />
        <Route path="/services/marketing" element={<ML><ServiceDetailPage serviceId="marketing" /></ML>} />
        <Route path="/services/production" element={<ML><ServiceDetailPage serviceId="production" /></ML>} />
        <Route path="/services/creative" element={<ML><ServiceDetailPage serviceId="creative" /></ML>} />
        <Route path="/services/digital" element={<ML><ServiceDetailPage serviceId="digital" /></ML>} />
        <Route path="/work" element={<ML><WorkPage /></ML>} />
        <Route path="/packages" element={<ML><PackagesIndex /></ML>} />
        <Route path="/packages/custom" element={<ML><CustomPlanPage /></ML>} />
        <Route path="/packages/growth" element={<ML><PackageFamily familyId="growth" /></ML>} />
        <Route path="/packages/growth/:tab" element={<ML><FamilyTab familyId="growth" /></ML>} />
        <Route path="/packages/professional" element={<ML><PackageFamily familyId="professional" /></ML>} />
        <Route path="/packages/professional/:tab" element={<ML><FamilyTab familyId="professional" /></ML>} />
        <Route path="/packages/advanced" element={<ML><PackageFamily familyId="advanced" /></ML>} />
        <Route path="/packages/advanced/:tab" element={<ML><FamilyTab familyId="advanced" /></ML>} />
        <Route path="/packages/business" element={<ML><PackageFamily familyId="business" /></ML>} />
        <Route path="/packages/business/:tab" element={<ML><FamilyTab familyId="business" /></ML>} />
        <Route path="/packages/enterprise" element={<ML><PackageFamily familyId="enterprise" /></ML>} />
        <Route path="/packages/enterprise/:tab" element={<ML><FamilyTab familyId="enterprise" /></ML>} />
        <Route path="/blog" element={<ML><Blog /></ML>} />
        <Route path="/blog/:slug" element={<ML><BlogPostPage /></ML>} />
        <Route path="/work/:slug" element={<ML><CaseStudyPage /></ML>} />
        <Route path="/contact" element={<ML><ContactPage /></ML>} />
        <Route path="/partner" element={<ML><PartnerPage /></ML>} />
        <Route path="/co-production" element={<ML><CoProductionPage /></ML>} />
        <Route path="/privacy-policy" element={<ML><PrivacyPage /></ML>} />
        <Route path="/terms-and-conditions" element={<ML><TermsPage /></ML>} />
        <Route path="/waitlist" element={<WaitlistPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<DL><DashboardHome /></DL>} />
        <Route path="/dashboard/keywords" element={<DL><Keywords /></DL>} />
        <Route path="/dashboard/articles" element={<DL><Articles /></DL>} />
        <Route path="/dashboard/backlinks" element={<DL><Backlinks /></DL>} />
        <Route path="/dashboard/reddit" element={<DL><Reddit /></DL>} />
        <Route path="/dashboard/analytics" element={<DL><Analytics /></DL>} />
        <Route path="/dashboard/settings" element={<DL><Settings /></DL>} />
        <Route path="/dashboard/content" element={<DL><ContentManager /></DL>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
