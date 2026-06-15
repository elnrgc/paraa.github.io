import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Modal } from '../../components/ui/Modal';
import { articles, stats } from '../../data';

export const Articles: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'published':
        return <CheckCircle className="w-4 h-4 text-[#22c55e]" />;
      case 'scheduled':
        return <Clock className="w-4 h-4 text-blue-500" />;
      case 'draft':
        return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Articles</h1>
          <p className="text-neutral-400">
            Manage your AI-generated content and publishing schedule.
          </p>
        </div>
        <Button
          leftIcon={<Plus className="w-4 h-4" />}
          onClick={() => setShowCreateModal(true)}
        >
          Create Article
        </Button>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <Card>
          <CardContent>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#22c55e]" />
              </div>
              <div>
                <p className="text-neutral-400 text-sm">Total Articles</p>
                <p className="text-2xl font-bold text-white">{stats.totalArticles}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-[#22c55e]" />
              </div>
              <div>
                <p className="text-neutral-400 text-sm">Published</p>
                <p className="text-2xl font-bold text-[#22c55e]">{stats.publishedArticles}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center">
                <Eye className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="text-neutral-400 text-sm">Total Views</p>
                <p className="text-2xl font-bold text-white">
                  {articles.reduce((sum, a) => sum + a.views, 0).toLocaleString()}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-yellow-500" />
              </div>
              <div>
                <p className="text-neutral-400 text-sm">Scheduled</p>
                <p className="text-2xl font-bold text-white">
                  {articles.filter((a) => a.status === 'scheduled').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardContent>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  leftIcon={<Search className="w-5 h-5" />}
                />
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" leftIcon={<Filter className="w-4 h-4" />}>
                  Filter
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Articles Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {filteredArticles.map((article) => (
          <Card key={article.id} hover>
            <CardContent>
              <div className="flex items-start justify-between mb-4">
                <Badge
                  variant={
                    article.status === 'published'
                      ? 'success'
                      : article.status === 'scheduled'
                      ? 'info'
                      : 'warning'
                  }
                >
                  {getStatusIcon(article.status)}
                  <span className="ml-1 capitalize">{article.status}</span>
                </Badge>
                <button className="p-1 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>

              <h3 className="text-white font-medium mb-2 line-clamp-2">
                {article.title}
              </h3>

              <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
                <span>{article.wordCount.toLocaleString()} words</span>
                <span>Score: {article.score}</span>
              </div>

              {article.status === 'published' && (
                <div className="flex items-center gap-4 text-sm text-neutral-400">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{article.views.toLocaleString()}</span>
                  </div>
                  <span>|</span>
                  <span>{article.clicks} clicks</span>
                </div>
              )}

              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-neutral-800">
                <Button variant="ghost" size="sm" leftIcon={<Eye className="w-4 h-4" />}>
                  View
                </Button>
                <Button variant="ghost" size="sm" leftIcon={<Edit className="w-4 h-4" />}>
                  Edit
                </Button>
                <Button variant="ghost" size="sm" leftIcon={<Trash2 className="w-4 h-4" />}>
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Create Article Modal */}
      <Modal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        title="Create New Article"
        size="lg"
      >
        <div className="space-y-4">
          <Input
            label="Target Keyword"
            placeholder="Enter your main keyword..."
          />
          <Input
            label="Article Title (Optional)"
            placeholder="AI will generate if left empty..."
          />
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-1.5">
              Article Length
            </label>
            <select className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-2.5 text-white">
              <option>Short (1,500 words)</option>
              <option>Medium (2,500 words)</option>
              <option>Long (3,500+ words)</option>
            </select>
          </div>
          <div className="flex items-center gap-3 pt-4">
            <Button variant="outline" onClick={() => setShowCreateModal(false)}>
              Cancel
            </Button>
            <Button leftIcon={<Plus className="w-4 h-4" />}>
              Generate Article
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
