export const projects = [
  { id: 'proj-1', name: 'Brand Identity Campaign', client: 'TechCo Iraq', clientId: 'c1', services: ['Creative', 'Digital'], status: 'active' as const, progress: 75, startDate: '2025-10-01', dueDate: '2025-12-30', budget: 8000, team: [{ id: 't1', name: 'Ali', avatar: '', role: 'Creative Director' }], analytics: { traffic: '+250%', leads: '+120', roi: '340%' }, description: 'Full brand identity and website' },
  { id: 'proj-2', name: 'Social Media Management', client: 'Food Chain', clientId: 'c2', services: ['Marketing', 'Production'], status: 'active' as const, progress: 45, startDate: '2025-11-01', dueDate: '2026-02-01', budget: 12500, team: [{ id: 't2', name: 'Sara', avatar: '', role: 'Strategist' }], analytics: { traffic: '+180%', leads: '+85', roi: '280%' }, description: 'Full social media strategy and content' },
  { id: 'proj-3', name: 'Product Launch Video', client: 'Luxury Brand', clientId: 'c3', services: ['Production'], status: 'completed' as const, progress: 100, startDate: '2025-08-01', dueDate: '2025-10-01', budget: 15000, team: [{ id: 't3', name: 'Omar', avatar: '', role: 'Director' }], analytics: { traffic: '+320%', leads: '+200', roi: '450%' }, description: 'Cinematic product launch campaign' },
];

export const clients = [
  { id: 'c1', name: 'Ahmad Kareem', email: 'ahmad@techco.iq', phone: '+964 770 123 4567', company: 'TechCo Iraq', projects: ['proj-1'], status: 'active' as const, joinDate: '2025-10-01' },
  { id: 'c2', name: 'Fatima Al-Bayati', email: 'fatima@foodchain.iq', phone: '+964 771 234 5678', company: 'Food Chain', projects: ['proj-2'], status: 'active' as const, joinDate: '2025-11-01' },
  { id: 'c3', name: 'Mustafa Nouri', email: 'mustafa@luxbrand.iq', phone: '+964 772 345 6789', company: 'Luxury Brand', projects: ['proj-3'], status: 'active' as const, joinDate: '2025-08-01' },
];

export const keywords = [
  { id: 'kw-1', keyword: 'creative agency iraq', volume: 2400, difficulty: 35, position: 2, change: 3, url: '/' },
  { id: 'kw-2', keyword: 'branding agency baghdad', volume: 1800, difficulty: 28, position: 1, change: 1, url: '/' },
  { id: 'kw-3', keyword: 'video production iraq', volume: 3200, difficulty: 42, position: 4, change: -1, url: '/production' },
  { id: 'kw-4', keyword: 'social media marketing iraq', volume: 5600, difficulty: 55, position: 3, change: 2, url: '/marketing' },
  { id: 'kw-5', keyword: 'web design baghdad', volume: 1500, difficulty: 32, position: 2, change: 0, url: '/digital' },
];

export const articles = [
  { id: 'a1', title: 'Why Production Matters in the Age of AI', status: 'published' as const, score: 92, wordCount: 2800, publishedAt: '2025-12-15', views: 3200, clicks: 210 },
  { id: 'a2', title: 'The Art of Branding: More Than a Logo', status: 'published' as const, score: 88, wordCount: 3500, publishedAt: '2025-12-10', views: 2100, clicks: 145 },
  { id: 'a3', title: 'Content That Cuts Through the Noise', status: 'scheduled' as const, score: 85, wordCount: 2200, views: 0, clicks: 0 },
  { id: 'a4', title: 'Lessons from Good Ad Matter', status: 'draft' as const, score: 78, wordCount: 1800, views: 0, clicks: 0 },
];

export const backlinks = [
  { id: 'bl-1', domain: 'goodadmatter.com', url: '#', domainRating: 72, status: 'verified' as const, type: 'dofollow' as const, createdAt: '2025-12-10' },
  { id: 'bl-2', domain: 'creativebloq.com', url: '#', domainRating: 85, status: 'verified' as const, type: 'dofollow' as const, createdAt: '2025-12-08' },
  { id: 'bl-3', domain: 'adsoftheworld.com', url: '#', domainRating: 78, status: 'pending' as const, type: 'dofollow' as const, createdAt: '2025-12-15' },
];

export const integrations = [
  { id: 'ig', name: 'Instagram', icon: 'Camera', description: 'Manage Instagram content', connected: true },
  { id: 'fb', name: 'Facebook', icon: 'Globe', description: 'Manage Facebook pages', connected: true },
  { id: 'tt', name: 'TikTok', icon: 'Film', description: 'Manage TikTok content', connected: false },
  { id: 'yt', name: 'YouTube', icon: 'Play', description: 'Manage YouTube channel', connected: false },
  { id: 'ga', name: 'Google Analytics', icon: 'BarChart', description: 'Track website analytics', connected: true },
];
