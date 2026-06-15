import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Type, BarChart3, FileText, Link as LinkIcon, Hash, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card, CardContent } from '../components/ui/Card';
import { Link } from 'react-router-dom';

const tools = [
  { id: 'word-counter', name: 'Word Counter', icon: Type, description: 'Count words, characters, sentences, and paragraphs in your text.', category: 'Content' },
  { id: 'keyword-density', name: 'Keyword Density Checker', icon: Hash, description: 'Analyze keyword density and frequency in your content.', category: 'SEO' },
  { id: 'readability', name: 'Readability Checker', icon: FileText, description: 'Check the readability score of your content using multiple algorithms.', category: 'Content' },
  { id: 'headline-analyzer', name: 'Headline Analyzer', icon: Sparkles, description: 'Analyze your headlines for emotional impact and SEO effectiveness.', category: 'Content' },
  { id: 'slug-generator', name: 'URL Slug Generator', icon: LinkIcon, description: 'Generate SEO-friendly URL slugs from any title or text.', category: 'SEO' },
  { id: 'meta-generator', name: 'Meta Tag Generator', icon: FileText, description: 'Generate optimized meta titles and descriptions for your pages.', category: 'SEO' },
  { id: 'backlink-checker', name: 'Backlink Checker', icon: LinkIcon, description: 'Check the backlink profile of any website.', category: 'Link Building' },
  { id: 'domain-authority', name: 'Domain Authority Checker', icon: BarChart3, description: 'Check the domain authority score of any website.', category: 'SEO' },
  { id: 'serp-simulator', name: 'SERP Simulator', icon: Search, description: 'Preview how your page will look in Google search results.', category: 'SEO' },
  { id: 'robots-generator', name: 'Robots.txt Generator', icon: FileText, description: 'Generate a robots.txt file for your website.', category: 'Technical' },
  { id: 'sitemap-generator', name: 'Sitemap Generator', icon: FileText, description: 'Generate an XML sitemap for your website.', category: 'Technical' },
  { id: 'schema-generator', name: 'Schema Markup Generator', icon: FileText, description: 'Generate structured data markup for your pages.', category: 'Technical' },
];

const categories = ['All', 'SEO', 'Content', 'Link Building', 'Technical'];

export const FreeTools: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = tools.filter((tool) => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || tool.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#22c55e]" />
            <span className="text-neutral-400 text-sm">100% Free</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Free SEO Tools
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Powerful SEO tools to help you optimize your website. No signup required.
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <Input
            placeholder="Search tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            leftIcon={<Search className="w-5 h-5" />}
          />
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#22c55e] text-black'
                    : 'bg-neutral-800 text-neutral-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card hover className="h-full cursor-pointer">
                  <CardContent>
                    <div className="w-12 h-12 bg-[#22c55e]/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#22c55e]" />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-white font-semibold">{tool.name}</h3>
                    </div>
                    <p className="text-neutral-400 text-sm mb-4">{tool.description}</p>
                    <span className="text-xs px-2 py-1 bg-neutral-800 text-neutral-400 rounded">{tool.category}</span>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Need More Power?</h3>
          <p className="text-neutral-400 mb-6">Get access to all premium SEO features with RankPill.</p>
          <Link to="/signup">
            <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Start Free Trial
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
