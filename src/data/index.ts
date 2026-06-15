import type { FAQ, Testimonial, BlogPost, AnalyticsData } from '../types';

export const services = [
  {
    id: 'marketing',
    name: 'Marketing',
    slug: 'marketing',
    icon: 'Megaphone',
    tagline: 'MARKETING',
    shortDescription: "We don't do generic campaigns. We create culturally intelligent marketing that speaks to people, not demographics.",
    description: "We don't do generic campaigns. We create culturally intelligent marketing that speaks to people, not demographics, ensuring your message cuts through the noise.",
    features: ['Campaign Strategy', 'Social Media', 'Influencer Relations', 'Media Planning'],
    benefits: ['Culturally relevant campaigns', 'Data-driven strategy', 'Authentic audience connection', 'Measurable ROI'],
    process: [
      { step: 1, title: 'Research', description: 'Deep dive into your audience, culture, and competitive landscape' },
      { step: 2, title: 'Strategy', description: 'Craft a culturally intelligent marketing plan that resonates' },
      { step: 3, title: 'Execute', description: 'Launch campaigns across the right channels at the right time' },
      { step: 4, title: 'Optimize', description: 'Measure, learn, and continuously improve performance' },
    ],
  },
  {
    id: 'production',
    name: 'Production',
    slug: 'production',
    icon: 'Film',
    tagline: 'PRODUCTION',
    shortDescription: 'From concept to execution. Photography, videography, and motion graphics with obsessive attention to detail.',
    description: 'From concept to execution. We handle photography, videography, and motion graphics with obsessive attention to detail and cinematic precision.',
    features: ['Photography', 'Videography', 'Motion Graphics', '3D Visualization'],
    benefits: ['Cinematic quality', 'End-to-end production', 'Obsessive attention to detail', 'Story-driven content'],
    process: [
      { step: 1, title: 'Concept', description: 'Develop the creative concept and visual direction' },
      { step: 2, title: 'Pre-Production', description: 'Plan every detail — casting, locations, equipment' },
      { step: 3, title: 'Shoot', description: 'Execute with precision and cinematic quality' },
      { step: 4, title: 'Post', description: 'Edit, color grade, and deliver the final product' },
    ],
  },
  {
    id: 'creative',
    name: 'Creative',
    slug: 'creative',
    icon: 'Palette',
    tagline: 'CREATIVE',
    shortDescription: 'Words matter. We craft brand voices that are distinct, memorable, and culturally resonant.',
    description: 'Words matter. We craft brand voices that are distinct, memorable, and culturally resonant. From taglines to manifestos, we make you unforgettable.',
    features: ['Brand Voice & Tone', 'Copywriting & Naming', 'Logo & Brand Design', 'Art Direction', 'Packaging Design', 'Visual Systems', 'Content Strategy'],
    benefits: ['Distinct brand identity', 'Culturally resonant voice', 'Memorable visual systems', 'Strategic content direction'],
    process: [
      { step: 1, title: 'Discover', description: 'Understand your brand DNA, audience, and aspirations' },
      { step: 2, title: 'Define', description: 'Establish voice, tone, visual language, and brand rules' },
      { step: 3, title: 'Design', description: 'Create logos, systems, packaging, and brand assets' },
      { step: 4, title: 'Deliver', description: 'Hand off complete brand guidelines and asset libraries' },
    ],
  },
  {
    id: 'digital',
    name: 'Digital',
    slug: 'digital',
    icon: 'Monitor',
    tagline: 'DIGITAL',
    shortDescription: 'We build digital experiences that are fast, beautiful, and functionally flawless.',
    description: 'We build digital experiences that are fast, beautiful, and functionally flawless. From apps to websites, we design products people actually want to use.',
    features: ['Web Design & Development', 'App Design (UI/UX)', 'E-commerce Solutions', 'Digital Products'],
    benefits: ['Blazing fast performance', 'Beautiful interfaces', 'User-centered design', 'Scalable architecture'],
    process: [
      { step: 1, title: 'Wireframe', description: 'Map out user flows and information architecture' },
      { step: 2, title: 'Design', description: 'Create stunning, intuitive interfaces' },
      { step: 3, title: 'Develop', description: 'Build with clean code and modern technology' },
      { step: 4, title: 'Launch', description: 'Deploy, test, and ensure everything is flawless' },
    ],
  },
];

export const pricingPlans = [
  { id: 'growth', name: 'Growth', price: 4000, duration: '1 MONTH', posting: true },
  { id: 'growth-plus', name: 'Growth Plus', price: 5000, duration: '1 MONTH', posting: true },
  { id: 'professional', name: 'Professional', price: 6500, duration: '1 MONTH', posting: true },
  { id: 'professional-plus', name: 'Professional+', price: 8000, duration: '2 MONTHS', posting: true },
  { id: 'advanced', name: 'Advanced', price: 10000, duration: '2 MONTHS', posting: true },
  { id: 'business', name: 'Business', price: 12500, duration: '2 MONTHS', posting: true },
  { id: 'business-plus', name: 'Business Plus', price: 15000, duration: '3 MONTHS', posting: true },
  { id: 'enterprise', name: 'Enterprise', price: 17500, duration: '3 MONTHS', posting: true },
  { id: 'enterprise-plus', name: 'Enterprise Plus', price: 20000, duration: '3 MONTHS', posting: true },
  { id: 'executive', name: 'Executive', price: 22500, duration: '3 MONTHS', posting: true },
  { id: 'elite', name: 'Elite', price: 25000, duration: '3 MONTHS', posting: true },
];

export const caseStudies = [
  {
    id: 'case-1', title: 'Brand Identity Overhaul', client: 'Tech Startup', industry: 'Technology',
    services: ['Creative', 'Digital'],
    results: [{ metric: 'Brand Recognition', value: '+280%', description: 'increase in brand recognition' }],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    story: 'A complete brand transformation that repositioned a local tech startup as a regional leader, resulting in 280% increase in brand recognition.',
    testimonial: { quote: 'Paraa didn\'t just redesign our brand — they redefined who we are.', author: 'CEO', role: 'Founder' },
    duration: '3 months',
  },
  {
    id: 'case-2', title: 'Cinematic Product Launch', client: 'Luxury Brand', industry: 'Luxury',
    services: ['Production', 'Marketing'],
    results: [{ metric: 'Launch Engagement', value: '2.5M+', description: 'views in first week' }],
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80',
    story: 'A cinematic product launch campaign that generated 2.5M+ views in the first week through storytelling that resonated with the Iraqi audience.',
    testimonial: { quote: 'The production quality was world-class. People thought it was an international campaign.', author: 'Marketing Director', role: 'Head of Marketing' },
    duration: '2 months',
  },
  {
    id: 'case-3', title: 'Social Media Domination', client: 'F&B Chain', industry: 'Food & Beverage',
    services: ['Marketing', 'Production'],
    results: [{ metric: 'Followers Growth', value: '+450%', description: 'organic follower growth' }],
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    story: 'Transformed a local F&B chain\'s social media from generic posts to culturally relevant content that grew their following by 450%.',
    testimonial: { quote: 'They understood our audience better than we did.', author: 'Owner', role: 'Founder' },
    duration: '6 months',
  },
  {
    id: 'case-4', title: 'E-commerce Platform', client: 'Retail Brand', industry: 'E-commerce',
    services: ['Digital', 'Creative'],
    results: [{ metric: 'Online Sales', value: '+320%', description: 'increase in online revenue' }],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    story: 'Designed and developed a full e-commerce experience that increased online revenue by 320% within the first quarter.',
    testimonial: { quote: 'The website pays for itself every single week.', author: 'Operations Manager', role: 'COO' },
    duration: '4 months',
  },
  {
    id: 'case-5', title: 'National Campaign', client: 'Telecom Company', industry: 'Telecom',
    services: ['Marketing', 'Production', 'Creative'],
    results: [{ metric: 'Campaign Reach', value: '10M+', description: 'people reached nationwide' }],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
    story: 'A nationwide integrated campaign across TV, digital, and outdoor that reached over 10 million people and became a cultural talking point.',
    testimonial: { quote: 'Paraa turned our brief into a movement.', author: 'Brand Manager', role: 'Senior Manager' },
    duration: '5 months',
  },
  {
    id: 'case-6', title: 'Real Estate Branding', client: 'Development Company', industry: 'Real Estate',
    services: ['Creative', 'Production', 'Digital'],
    results: [{ metric: 'Pre-sales', value: '+200%', description: 'increase in pre-sale inquiries' }],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    story: 'Complete branding, 3D visualization, and digital platform for a premium real estate development that drove 200% more pre-sale inquiries.',
    testimonial: { quote: 'The 3D renders sold the project before a single brick was laid.', author: 'Director', role: 'Managing Director' },
    duration: '4 months',
  },
];

export const testimonials: Testimonial[] = [
  { id: 't1', quote: 'Paraa didn\'t just deliver a campaign — they delivered a cultural moment. The kind of work that makes people stop scrolling.', author: 'Ahmad Al-Rawi', role: 'CEO', company: 'Zain Iraq', rating: 5 },
  { id: 't2', quote: 'Working with Paraa feels like having an in-house creative team that actually gets the Iraqi market. They\'re obsessed with quality.', author: 'Sara Hassan', role: 'Marketing Director', company: 'Carrefour Iraq', rating: 5 },
  { id: 't3', quote: 'The production quality is insane. Every frame looks like it belongs in a cinema. They don\'t cut corners.', author: 'Omar Khalil', role: 'Brand Manager', company: 'Pepsi Iraq', rating: 5 },
  { id: 't4', quote: 'They built us a website that actually converts. Not just pretty — functional, fast, and our customers love it.', author: 'Noor Al-Din', role: 'Founder', company: 'Miswag', rating: 5 },
  { id: 't5', quote: 'Art direction that speaks Arabic but thinks global. That\'s what Paraa brings to the table.', author: 'Lina Mahmoud', role: 'Creative Lead', company: 'Asiacell', rating: 5 },
];

export const faqs: FAQ[] = [
  { id: 'f1', question: 'What makes Paraa different from other agencies?', answer: 'We\'re not a traditional agency. We\'re a creative partner. We combine cultural intelligence with world-class production quality. Every project gets the same obsessive attention to detail — whether it\'s a social media post or a national campaign.' },
  { id: 'f2', question: 'What industries do you work with?', answer: 'We work across all industries — from telecom and real estate to F&B and luxury brands. Our approach is universal: understand the audience, craft the message, execute with precision. If you have a brand that needs to communicate, we can help.' },
  { id: 'f3', question: 'How long does a typical project take?', answer: 'It depends on scope. A brand identity takes 4-8 weeks. A campaign can be 2-6 weeks. A website 6-12 weeks. We\'ll give you a clear timeline during our first conversation. We don\'t rush — but we don\'t waste time either.' },
  { id: 'f4', question: 'Do you work with clients outside Baghdad?', answer: 'Absolutely. We\'re based in Baghdad but we serve clients across Iraq — Basra, Erbil, Sulaymaniyah, Babel, and Karbala. We also work with international brands entering the Iraqi market.' },
  { id: 'f5', question: 'Why is production still important in the age of AI?', answer: 'Because art is in the process. AI can generate images, but it can\'t capture a real moment, direct a real actor, or feel the energy on set. The human touch in production creates authenticity that audiences feel instinctively. That\'s irreplaceable.' },
  { id: 'f6', question: 'Can we customize a package?', answer: 'Yes. While we have structured packages from $4,000 to $25,000+, every brand is unique. We offer fully customized plans tailored to your specific needs, timeline, and budget. Let\'s talk about what you need.' },
  { id: 'f7', question: 'What does "posting" mean in your packages?', answer: 'Posting means we handle your entire social media content calendar — creation, scheduling, and publishing. We don\'t just make content and hand it off. We manage your presence so you can focus on your business.' },
  { id: 'f8', question: 'How do we get started?', answer: 'Join our waiting list. We\'ll reach out to schedule a discovery call where we learn about your brand, goals, and challenges. From there, we\'ll propose a tailored approach and timeline. Simple.' },
];

export const blogPosts: BlogPost[] = [
  { id: 'p1', title: 'Why Production Still Matters in the Age of AI', slug: 'production-matters-ai-age', content: '', excerpt: 'AI can generate images. But it can\'t capture a real moment. Art is in the process — and that\'s why human production will always matter.', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80', author: { name: 'Paraa Team', avatar: '' }, date: '2025-12-15', category: 'Production', readTime: '8 min read', tags: ['Production', 'AI', 'Creative'] },
  { id: 'p2', title: 'The Art of Branding: More Than Just a Logo', slug: 'art-of-branding', content: '', excerpt: 'Your brand isn\'t your logo. It\'s the feeling people get when they interact with you. Here\'s how to build one that actually means something.', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80', author: { name: 'Paraa Team', avatar: '' }, date: '2025-12-10', category: 'Branding', readTime: '12 min read', tags: ['Branding', 'Identity', 'Strategy'] },
  { id: 'p3', title: 'Content That Cuts Through the Noise', slug: 'content-cuts-through-noise', content: '', excerpt: 'Everyone\'s posting. Nobody\'s connecting. Here\'s how to create content that people actually stop for — inspired by the best in the game.', image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80', author: { name: 'Paraa Team', avatar: '' }, date: '2025-12-05', category: 'Content', readTime: '10 min read', tags: ['Content', 'Social Media', 'Strategy'] },
  { id: 'p4', title: 'Lessons from Good Ad Matter: What Makes an Ad Great', slug: 'lessons-good-ad-matter', content: '', excerpt: 'Breaking down what separates forgettable ads from unforgettable ones. Spoiler: it\'s not the budget. It\'s the idea.', image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80', author: { name: 'Paraa Team', avatar: '' }, date: '2025-12-01', category: 'Advertising', readTime: '15 min read', tags: ['Advertising', 'Creative', 'Inspiration'] },
];

export const analyticsData: AnalyticsData[] = [
  { date: '2025-11-01', clicks: 120, impressions: 4500, traffic: 350, conversions: 12 },
  { date: '2025-11-02', clicks: 145, impressions: 5200, traffic: 420, conversions: 15 },
  { date: '2025-11-03', clicks: 168, impressions: 5800, traffic: 490, conversions: 18 },
  { date: '2025-11-04', clicks: 189, impressions: 6200, traffic: 520, conversions: 22 },
  { date: '2025-11-05', clicks: 210, impressions: 7200, traffic: 620, conversions: 25 },
  { date: '2025-11-06', clicks: 235, impressions: 7800, traffic: 680, conversions: 28 },
  { date: '2025-11-07', clicks: 267, impressions: 8800, traffic: 780, conversions: 33 },
  { date: '2025-11-08', clicks: 289, impressions: 9200, traffic: 850, conversions: 35 },
];

export const stats = {
  totalProjects: 150,
  happyClients: 80,
  teamMembers: 35,
  citiesCovered: 6,
  totalKeywords: 27,
  rankedKeywords: 18,
  totalArticles: 45,
  publishedArticles: 38,
  totalClicks: 12500,
  totalImpressions: 458000,
  averagePosition: 4.2,
  domainRating: 42,
  totalBacklinks: 86,
  verifiedBacklinks: 72,
};

export const locations = ['Baghdad', 'Basra', 'Erbil', 'Sulaymaniyah', 'Babel', 'Karbala'];

export const marketingIntegrations = [
  { id: 'web', name: 'Custom Web Solutions', icon: 'Globe', desc: 'Tailored websites & platforms built to your exact technical specifications.' },
  { id: 'api', name: 'Webhooks & APIs', icon: 'Webhook', desc: 'Seamless data flow connecting your tools, platforms, and internal systems.' },
  { id: 'crm', name: 'Notion & CRM Workflows', icon: 'Database', desc: 'Organized pipelines and content workflows synced with your operations.' },
  { id: 'auto', name: 'Automation (n8n & Zapier)', icon: 'Zap', desc: 'Hands-off automation that scales publishing and repetitive tasks.' },
];

export { projects, clients, keywords, articles, backlinks, integrations } from './dashboard';
