import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Rocket, TrendingUp, Building2, Crown, Eye, Megaphone, Film, BarChart3 } from 'lucide-react';
import { Button } from '../components/ui/Button';

const W = 'mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10';

interface SubPage {
  id: string;
  title: string;
  points: string[];
}

interface PkgFamily {
  id: string;
  name: string;
  icon: React.FC<{className?:string}>;
  color: string;
  plans: { name: string; price: number; duration: string }[];
  overview: SubPage;
  media: SubPage;
  marketing: SubPage;
  production: SubPage;
  levels: SubPage;
}

const data: Record<string, PkgFamily> = {
  growth: {
    id:'growth', name:'Growth', icon:Rocket, color:'from-emerald-500/20 to-green-600/20',
    plans:[{name:'Growth',price:4000,duration:'1 Month'},{name:'Growth Plus',price:5000,duration:'1 Month'}],
    overview:{id:'overview',title:'Growth Overview',points:[
      'Built for new brands, startups, and businesses entering the market.',
      'Focuses on building a clean, professional, and organized social media presence from the start.',
      'Ideal for businesses that need structure instead of random posting.',
      'Creates a strong first impression and a consistent brand presence.',
      'Helps introduce products or services in a clear and professional way.',
      'Especially useful for brands still testing their audience and positioning.',
      'Provides a practical foundation before moving into more advanced marketing stages.',
      'The right starting point for brands that want to launch with confidence and direction.',
    ]},
    media:{id:'media',title:'Growth Media',points:[
      'Establishes a clear visual presence from the start.',
      'Content is organized to make the page look active, consistent, and professional.',
      'Posting is structured to avoid inconsistency and create a stable online rhythm.',
      'Visual direction is kept simple, clean, and suitable for early-stage brand building.',
      'Content types introduce the brand, explain services, and attract attention.',
      'Page layout and publishing flow feel intentional rather than improvised.',
      'Basic visual consistency is maintained across all posted content.',
      'Creates a polished digital starting point for future growth.',
    ]},
    marketing:{id:'marketing',title:'Growth Marketing',points:[
      "Begins with defining the brand's core message and value.",
      'Content raises awareness and helps the audience understand the offering.',
      'Messaging is directed toward the right audience, not broad and unfocused.',
      'Tone of voice is relevant, approachable, and easy to understand.',
      'Early engagement ideas encourage interaction and visibility.',
      'Content communicates benefits, not just visuals.',
      'Initial performance signals identify what captures attention best.',
      'Turns the account from a simple page into the beginning of a marketing channel.',
    ]},
    production:{id:'production',title:'Growth Production',points:[
      "Essential design work tailored to a new brand's launch stage.",
      'Visual content explains services, products, and brand identity clearly.',
      'Short-form video content or reels support initial reach.',
      'Production style focuses on clarity, order, and accessibility.',
      'A simple but effective visual framework for ongoing content use.',
      'Core ideas transformed into ready-to-publish visual content.',
      'Each asset suits the chosen platform and audience style.',
      'Practical, attractive content that supports a cost-efficient brand launch.',
    ]},
    levels:{id:'levels',title:'Growth Plan Levels',points:[
      'Growth is ideal for businesses that need a solid and professional starting point.',
      'Growth Plus is designed for brands that want a stronger launch and more momentum.',
      'Both plans are suited for small to mid-sized businesses entering or shaping their market.',
      'Both are short-term plans, best for focused, fast-start execution.',
      'Growth works well when the primary goal is setup, consistency, and brand introduction.',
      'Growth Plus is better when the brand wants stronger visual energy and broader content.',
      'Both plans include posting and content management as a standard service.',
      'The natural next step after this package family is Professional.',
    ]},
  },
  professional: {
    id:'professional', name:'Professional', icon:TrendingUp, color:'from-blue-500/20 to-indigo-600/20',
    plans:[{name:'Professional',price:6500,duration:'1 Month'},{name:'Professional+',price:8000,duration:'2 Months'}],
    overview:{id:'overview',title:'Professional Overview',points:[
      'Designed for brands that have moved beyond the startup phase.',
      'Focuses on creating a stronger and more refined brand image online.',
      'About more than presence — it is about professionalism and positioning.',
      'Transforms a basic page into a more serious and convincing digital front.',
      'Ideal for businesses with some visibility but need more structure.',
      'Content serves brand credibility more intentionally.',
      'Makes the business appear more established and trusted.',
      'A strong next step for brands ready to improve quality and communication.',
    ]},
    media:{id:'media',title:'Professional Media',points:[
      'Media execution becomes more polished and aligned with brand identity.',
      'Content diversified across posts, reels, and stories strategically.',
      'Publishing calendar supports consistency while reducing repetition.',
      'Service and product presentation is more attractive and professional.',
      'Visual storytelling is given a stronger role in communication.',
      'Greater attention to content hierarchy and layout across the page.',
      'Media flow balanced between educational, interactive, and promotional.',
      'Improves how the brand looks and feels to current and future customers.',
    ]},
    marketing:{id:'marketing',title:'Professional Marketing',points:[
      'Focuses on clearer, stronger, and more persuasive messaging.',
      'Content developed to build trust rather than just create awareness.',
      'Topics highlight expertise, value, and competitive advantages.',
      'Offers and services presented to support customer decision-making.',
      'Audience connection improved through content that speaks to real needs.',
      'Strategy becomes more sales-aware while remaining brand-focused.',
      'Performance reviewed to understand which messages are most effective.',
      'Prepares the business for measurable growth in higher-level plans.',
    ]},
    production:{id:'production',title:'Professional Production',points:[
      'Production quality elevated compared to entry-level packages.',
      'Designs are cleaner, stronger, and aligned with professional standards.',
      'Short-form videos more engaging and efficient in delivering messages.',
      'Visual output improved in identity, clarity, and execution quality.',
      'Content assets designed to support a more reliable and polished image.',
      'Production balances modern presentation with practical communication.',
      'Creative execution varied enough to serve multiple objectives.',
      'More cohesive and market-ready content presence overall.',
    ]},
    levels:{id:'levels',title:'Professional Plan Levels',points:[
      'Professional is ideal for a stronger brand upgrade in one month.',
      'Professional+ offers a longer execution period and deeper consistency.',
      'The main difference is duration, content stability, and development room.',
      'Professional is excellent for accounts that exist but lack refinement.',
      'Professional+ is more suitable for stronger continuity and progress.',
      'Fits businesses with good products that need better presentation.',
      'Both plans include full posting and content management support.',
      'The natural next step after this family is Advanced.',
    ]},
  },
  advanced: {
    id:'advanced', name:'Advanced', icon:TrendingUp, color:'from-violet-500/20 to-purple-600/20',
    plans:[{name:'Advanced',price:10000,duration:'2 Months'}],
    overview:{id:'overview',title:'Advanced Overview',points:[
      'Built for brands ready to move from presence into real growth.',
      'Supports businesses that need a stronger content system with performance goals.',
      'Improves not only appearance, but also content impact.',
      'Ideal for brands seeking broader reach and measurable progression.',
      'Two-month structure allows testing, learning, and improving.',
      'Well suited for brands that want content to support visibility and demand.',
      'Content begins to play a more direct role in conversion and expansion.',
      'A powerful bridge between professional presence and commercial scaling.',
    ]},
    media:{id:'media',title:'Advanced Media',points:[
      'Media planning becomes more strategic across a longer timeline.',
      'Content distributed between awareness, engagement, value, and promotion.',
      'Supports development of recurring content series instead of isolated posts.',
      'Digital presence organized to support expansion and stronger recognition.',
      'Audience experience improved through clearer structure and flow.',
      'Different content formats connected to support one another.',
      'Random posting replaced with consistency, alignment, and direction.',
      'Media execution handled with growth objectives in mind.',
    ]},
    marketing:{id:'marketing',title:'Advanced Marketing',points:[
      'Strategy refined to support visibility, demand, and conversion.',
      'Audience analysis more intentional, focusing on buying behavior.',
      'Content addresses actual pain points and decision-making triggers.',
      'Messaging emphasizes value, credibility, and differentiation.',
      'Content mapped to different stages of the customer journey.',
      'Topics selected for strategic impact, not just routine posting.',
      'Creates stronger alignment between content and campaign potential.',
      'Marketing by content becomes more mature and commercially relevant.',
    ]},
    production:{id:'production',title:'Advanced Production',points:[
      'Production stronger in creative variety and visual sophistication.',
      'Short-form video improved to be more dynamic and campaign-supportive.',
      'Design assets reflect a more developed and confident brand presence.',
      'Content produced to serve trust, education, and promotion goals.',
      'Execution optimized for stronger engagement and retention.',
      'Visual assets organized for smart reuse and consistency.',
      'Production details strengthened to increase perceived value.',
      'Final output balances creativity with marketing performance.',
    ]},
    levels:{id:'levels',title:'Advanced Plan Positioning',points:[
      'Ideal for businesses that want structured, visible growth.',
      'Sits between foundational professionalism and larger commercial levels.',
      'Two-month duration gives space to test, optimize, and strengthen.',
      'Especially useful for brands already seeing traction.',
      'Suits businesses that need more mature content production.',
      'If the goal goes beyond page improvement, this package fits well.',
      'The next natural move after this stage is Business.',
      'Made for brands that want content to drive real market momentum.',
    ]},
  },
  business: {
    id:'business', name:'Business', icon:Building2, color:'from-amber-500/20 to-orange-600/20',
    plans:[{name:'Business',price:12500,duration:'2 Months'},{name:'Business Plus',price:15000,duration:'3 Months'}],
    overview:{id:'overview',title:'Business Overview',points:[
      'Designed for established companies that need content tied to growth.',
      'Focuses on strengthening presence while supporting commercial objectives.',
      'Ideal for businesses that need more than standard content management.',
      'Content becomes part of the public image, not just promotional activity.',
      'Especially useful for brands with multiple services or product lines.',
      'Turns content into a steady tool for visibility, trust, and demand.',
      'Approaches social presence from a commercial and structured perspective.',
      'The right stage for companies moving from presence to real market influence.',
    ]},
    media:{id:'media',title:'Business Media',points:[
      'Media management expands to support day-to-day business communication.',
      'Publishing systems maintain strong visibility across a longer period.',
      'Services and products presented in a commercially effective way.',
      'Content formats diversified to keep the brand active and relevant.',
      'Visual identity maintained at a higher level for established companies.',
      'Content flow designed to support campaigns and seasonal activity.',
      'A stable and professional visual presence across all outputs.',
      'Built not just for activity, but for strategic brand progression.',
    ]},
    marketing:{id:'marketing',title:'Business Marketing',points:[
      'Strategy balances awareness, trust, and customer demand.',
      'Content built to support buying decisions through value communication.',
      'Messaging developed for stronger market credibility and authority.',
      'Competitive strengths highlighted more clearly and strategically.',
      'Promotions and seasonal opportunities integrated effectively.',
      'Focus shifts toward better-quality leads, not just more visibility.',
      'Performance monitored to improve positioning and message clarity.',
      'Strategy supports both brand strength and revenue communication.',
    ]},
    production:{id:'production',title:'Business Production',points:[
      'Production elevated to reflect established business standards.',
      'Designs and videos developed with stronger creative maturity.',
      'Content assets support campaigns, launches, and corporate messaging.',
      'Execution quality improved to compete in a more demanding market.',
      'Visual materials prepared for ongoing use across longer content cycles.',
      'Creative output balances promotional energy with brand stability.',
      'Production details refined to increase perceived value.',
      'Final output supports business growth, not just visual presence.',
    ]},
    levels:{id:'levels',title:'Business Plan Levels',points:[
      'Business is ideal for a strong two-month strategic content plan.',
      'Business Plus offers deeper continuity over three months.',
      'Difference lies in duration, breadth, and room for refinement.',
      'Suits active businesses with real growth goals.',
      'Business Plus is stronger for sustained and stable implementation.',
      'Both are built for companies wanting content tied to business expansion.',
      'This stage is best for brands beyond early testing phases.',
      'The natural next step from this level is Enterprise.',
    ]},
  },
  enterprise: {
    id:'enterprise', name:'Enterprise', icon:Crown, color:'from-[#22c55e]/20 to-emerald-700/20',
    plans:[{name:'Enterprise',price:17500,duration:'3 Months'},{name:'Enterprise Plus',price:20000,duration:'3 Months'},{name:'Executive',price:22500,duration:'3 Months'},{name:'Elite',price:25000,duration:'3 Months'}],
    overview:{id:'overview',title:'Enterprise Overview',points:[
      'Built for large brands and high-level business operations.',
      'Focuses on long-term presence, strong positioning, and premium perception.',
      'Content becomes part of the brand authority and business identity.',
      'Suited for companies requiring stronger planning and higher standards.',
      'Media, marketing, and production treated as a fully integrated system.',
      'Objective is not just visibility, but lasting influence and market control.',
      'Designed for brands needing high-end consistency and strategic communication.',
      'Every package in this family supports leadership-level digital presence.',
    ]},
    media:{id:'media',title:'Enterprise Media',points:[
      'Media management handled with an institutional and long-range approach.',
      'Digital presence shaped to reflect the size and position of the brand.',
      'Content planning more advanced in structure, sequence, and timing.',
      'Publishing systems support multiple objectives simultaneously.',
      'Identity, campaigns, and announcements tied together smoothly.',
      'Visual consistency maintained across diverse content types.',
      'Presence becomes more refined, established, and recognizable.',
      'Built to remain stable while allowing flexibility and updates.',
    ]},
    marketing:{id:'marketing',title:'Enterprise Marketing',points:[
      'Marketing strategy is deeper, stronger, and more position-driven.',
      'Content shapes market perception and reinforces brand value at scale.',
      'Messaging supports trust, reputation, expansion, and authority.',
      'Content plays a role in both immediate campaigns and long-term relationships.',
      'Communication structured for multiple customer journey stages.',
      'Performance reviewed strategically to guide ongoing improvement.',
      'Brand differentiation communicated with greater clarity.',
      'Content becomes a strategic asset supporting institutional growth.',
    ]},
    production:{id:'production',title:'Enterprise Production',points:[
      'Production executed at a premium level matching high-value expectations.',
      'Design quality stronger, more refined, suited for large-scale presence.',
      'Video and reel production elevated in visual style and communication impact.',
      'Creative assets developed for campaigns, launches, and market presence.',
      'Output quality performs across multiple platforms and contexts.',
      'Overall impression more polished, credible, and leadership-aligned.',
      'Production systems organized to maintain quality throughout.',
      'Final result supports a premium and commanding digital image.',
    ]},
    levels:{id:'levels',title:'Enterprise Plan Levels',points:[
      'Enterprise is ideal for a strong three-month content system.',
      'Enterprise Plus offers more depth and broader execution power.',
      'Executive is built for companies or leaders needing elevated presentation.',
      'Elite is the highest package for top-tier execution across all areas.',
      'Custom Plan is for clients needing a unique scope or budget structure.',
      'This family is for businesses seeking leadership presence.',
      'As level increases, so do strategic depth and customization.',
      'If a business requires a non-standard solution, the Custom Plan provides full adaptability.',
    ]},
  },
};

const tabs = [
  { key: 'overview', label: 'Overview', icon: Eye },
  { key: 'media', label: 'Media', icon: Film },
  { key: 'marketing', label: 'Marketing', icon: Megaphone },
  { key: 'production', label: 'Production', icon: Film },
  { key: 'levels', label: 'Plan Levels', icon: BarChart3 },
];

export const PackageFamily: React.FC<{ familyId: string; tabId?: string }> = ({ familyId, tabId = 'overview' }) => {
  const f = data[familyId];
  if (!f) return <Navigate to="/packages" replace />;

  const Icon = f.icon;
  const currentTab = (f as any)[tabId] as SubPage | undefined;
  if (!currentTab) return <Navigate to={`/packages/${familyId}`} replace />;

  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className={W}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center`}>
              <Icon className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white">{f.name} Package</h1>
              <div className="flex flex-wrap gap-2 mt-2">
                {f.plans.map((p) => (
                  <span key={p.name} className="text-xs px-3 py-1 bg-neutral-800 text-neutral-300 rounded-lg">{p.name} — ${p.price.toLocaleString()} — {p.duration}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-neutral-800 pb-4">
          {tabs.map((t) => {
            const TIcon = t.icon;
            const active = t.key === tabId;
            return (
              <Link key={t.key} to={t.key === 'overview' ? `/packages/${familyId}` : `/packages/${familyId}/${t.key}`}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${active ? 'bg-[#22c55e] text-black' : 'text-neutral-400 hover:text-white hover:bg-neutral-800'}`}>
                <TIcon className="w-4 h-4" />
                {t.label}
              </Link>
            );
          })}
        </div>

        {/* Content */}
        <motion.div key={tabId} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">{currentTab.title}</h2>
          <div className="space-y-4">
            {currentTab.points.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}
                className="flex items-start gap-4 bg-neutral-900 border border-neutral-800 rounded-xl p-5 hover:border-neutral-600 transition-colors">
                <span className="text-[#22c55e] font-bold text-sm mt-0.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-neutral-300 leading-relaxed">{p}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/waitlist"><Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>Get This Package</Button></Link>
          <Link to="/contact"><Button variant="outline" size="lg">Talk to Our Team</Button></Link>
        </div>
      </div>
    </div>
  );
};

/* ─── Custom Plan Page ─── */
export const CustomPlanPage: React.FC = () => (
  <div className="min-h-screen bg-black pt-32 pb-20">
    <div className={W}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#22c55e]/10 border border-[#22c55e]/20 rounded-full mb-8">
          <Sparkles className="w-4 h-4 text-[#22c55e]" /><span className="text-[#22c55e] text-sm font-medium">Fully Tailored</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-7">Custom Plan</h1>
        <p className="text-lg text-neutral-400 leading-relaxed mb-10">Need something unique? We build fully customized plans tailored to your specific needs, timeline, and budget.</p>
      </motion.div>
      <div className="max-w-2xl mx-auto space-y-4 mb-14">
        {[
          'Ideal for businesses that do not fit into a fixed package structure.',
          'Scope is built around actual goals rather than a predefined format.',
          'Can be customized by platform count, content type, and posting frequency.',
          'Timelines adjusted to match short-term campaigns or long-term growth.',
          'Suitable for launches, repositioning, expansion, and seasonal campaigns.',
          'Media, marketing, and production can be scaled independently.',
          'Best option for large brands or businesses with non-traditional requirements.',
          'Every custom plan is designed around budget, schedule, and business goals.',
        ].map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}
            className="flex items-start gap-4 bg-neutral-900 border border-neutral-800 rounded-xl p-5 hover:border-neutral-600 transition-colors">
            <Sparkles className="w-5 h-5 text-[#22c55e] shrink-0 mt-0.5" />
            <p className="text-neutral-300 leading-relaxed">{p}</p>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link to="/waitlist"><Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>Request a Custom Plan</Button></Link>
        <Link to="/contact"><Button variant="outline" size="lg">Talk to Our Team</Button></Link>
      </div>
    </div>
  </div>
);
