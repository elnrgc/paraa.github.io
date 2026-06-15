export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'user' | 'client';
  createdAt: string;
}

export interface Project {
  id: string;
  name: string;
  client: string;
  clientId: string;
  services: string[];
  status: 'active' | 'completed' | 'paused' | 'pending';
  progress: number;
  startDate: string;
  dueDate: string;
  budget: number;
  team: TeamMember[];
  analytics: ProjectAnalytics;
  description?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  avatar: string;
  role: string;
}

export interface ProjectAnalytics {
  traffic: string;
  leads: string;
  roi: string;
  clicks?: number;
  impressions?: number;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  projects: string[];
  status: 'active' | 'inactive';
  joinDate: string;
  avatar?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  services: string[];
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  image: string;
  story: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  duration: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  category: string;
  readTime: string;
  tags: string[];
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  shortDescription: string;
  features: string[];
  benefits: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  rating: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export interface Message {
  id: string;
  from: User;
  to: User;
  content: string;
  timestamp: string;
  read: boolean;
  attachments?: string[];
}

export interface FileItem {
  id: string;
  name: string;
  type: string;
  size: number;
  url: string;
  projectId?: string;
  uploadedBy: string;
  uploadedAt: string;
}

export interface AnalyticsData {
  date: string;
  clicks: number;
  impressions: number;
  traffic: number;
  conversions: number;
}

export interface Keyword {
  id: string;
  keyword: string;
  volume: number;
  difficulty: number;
  position: number;
  change: number;
  url: string;
}

export interface Article {
  id: string;
  title: string;
  status: 'draft' | 'published' | 'scheduled';
  score: number;
  wordCount: number;
  publishedAt?: string;
  views: number;
  clicks: number;
}

export interface Backlink {
  id: string;
  domain: string;
  url: string;
  domainRating: number;
  status: 'verified' | 'pending' | 'rejected';
  type: 'dofollow' | 'nofollow';
  createdAt: string;
}
