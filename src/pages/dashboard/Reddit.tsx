import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, TrendingUp, Users, Search, ExternalLink } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';

const subreddits = [
  { name: 'r/SEO', members: '125K', relevance: 95 },
  { name: 'r/marketing', members: '450K', relevance: 88 },
  { name: 'r/startups', members: '890K', relevance: 75 },
  { name: 'r/Entrepreneur', members: '1.2M', relevance: 70 },
  { name: 'r/smallbusiness', members: '380K', relevance: 82 }
];

const opportunities = [
  {
    id: 1,
    title: 'Best SEO tools for small businesses?',
    subreddit: 'r/smallbusiness',
    upvotes: 45,
    comments: 23,
    posted: '2 hours ago',
    relevance: 'High'
  },
  {
    id: 2,
    title: 'How do you automate your content marketing?',
    subreddit: 'r/marketing',
    upvotes: 128,
    comments: 67,
    posted: '5 hours ago',
    relevance: 'High'
  },
  {
    id: 3,
    title: 'Looking for AI content writing tools',
    subreddit: 'r/Entrepreneur',
    upvotes: 34,
    comments: 41,
    posted: '8 hours ago',
    relevance: 'Medium'
  }
];

export const Reddit: React.FC = () => {
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
          <h1 className="text-2xl font-bold text-white mb-1">Reddit Marketing</h1>
          <p className="text-neutral-400">
            Find and engage in relevant Reddit discussions to drive traffic.
          </p>
        </div>
        <Button leftIcon={<Search className="w-4 h-4" />}>
          Find Opportunities
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
              <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p className="text-neutral-400 text-sm">Tracked Subreddits</p>
                <p className="text-2xl font-bold text-white">5</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="text-neutral-400 text-sm">Opportunities Found</p>
                <p className="text-2xl font-bold text-white">23</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <p className="text-neutral-400 text-sm">Engaged Posts</p>
                <p className="text-2xl font-bold text-white">12</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <ExternalLink className="w-5 h-5 text-purple-500" />
              </div>
              <div>
                <p className="text-neutral-400 text-sm">Traffic Driven</p>
                <p className="text-2xl font-bold text-white">1.2K</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Tracked Subreddits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Tracked Subreddits</CardTitle>
                <Button variant="ghost" size="sm">Add</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {subreddits.map((sub) => (
                  <div
                    key={sub.name}
                    className="flex items-center justify-between p-3 bg-neutral-800/50 rounded-lg"
                  >
                    <div>
                      <p className="text-white font-medium">{sub.name}</p>
                      <p className="text-neutral-500 text-sm">{sub.members} members</p>
                    </div>
                    <Badge variant={sub.relevance >= 80 ? 'success' : 'warning'}>
                      {sub.relevance}%
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:col-span-2"
        >
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Engagement Opportunities</CardTitle>
                <div className="flex items-center gap-2">
                  <Input
                    placeholder="Search..."
                    className="w-48"
                    leftIcon={<Search className="w-4 h-4" />}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {opportunities.map((opp) => (
                  <div
                    key={opp.id}
                    className="p-4 bg-neutral-800/50 rounded-lg hover:bg-neutral-800 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h4 className="text-white font-medium mb-1">{opp.title}</h4>
                        <div className="flex items-center gap-3 text-sm text-neutral-500">
                          <span className="text-orange-500">{opp.subreddit}</span>
                          <span>•</span>
                          <span>{opp.posted}</span>
                        </div>
                      </div>
                      <Badge
                        variant={opp.relevance === 'High' ? 'success' : 'warning'}
                      >
                        {opp.relevance}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-neutral-400">
                        <span>⬆️ {opp.upvotes}</span>
                        <span>💬 {opp.comments}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          View Post
                        </Button>
                        <Button size="sm">
                          Generate Reply
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};
