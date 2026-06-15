import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search,
  FileText,
  MousePointerClick,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Plus
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Button } from '../../components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { stats, analyticsData, articles, keywords } from '../../data';

const statCards = [
  {
    label: 'Keywords Tracked',
    value: stats.totalKeywords,
    change: '+3',
    changeType: 'positive' as const,
    icon: Search,
    href: '/dashboard/keywords'
  },
  {
    label: 'Articles Published',
    value: stats.publishedArticles,
    change: '+12',
    changeType: 'positive' as const,
    icon: FileText,
    href: '/dashboard/articles'
  },
  {
    label: 'Total Clicks',
    value: stats.totalClicks.toLocaleString(),
    change: '+18%',
    changeType: 'positive' as const,
    icon: MousePointerClick,
    href: '/dashboard/analytics'
  },
  {
    label: 'Domain Rating',
    value: stats.domainRating,
    change: '+2',
    changeType: 'positive' as const,
    icon: TrendingUp,
    href: '/dashboard/backlinks'
  }
];

export const DashboardHome: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-[#22c55e]/20 to-emerald-600/20 border border-[#22c55e]/30 rounded-xl p-6"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">Welcome back! 👋</h1>
            <p className="text-neutral-400">
              Your SEO is running on autopilot. Here's what's happening today.
            </p>
          </div>
          <Link to="/dashboard/articles">
            <Button leftIcon={<Plus className="w-4 h-4" />}>
              Create Article
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={stat.href}>
                <Card hover className="h-full">
                  <CardContent>
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-neutral-400 text-sm mb-1">{stat.label}</p>
                        <p className="text-3xl font-bold text-white">{stat.value}</p>
                        <div className="flex items-center gap-1 mt-2">
                          {stat.changeType === 'positive' ? (
                            <ArrowUpRight className="w-4 h-4 text-[#22c55e]" />
                          ) : (
                            <ArrowDownRight className="w-4 h-4 text-red-500" />
                          )}
                          <span className={stat.changeType === 'positive' ? 'text-[#22c55e]' : 'text-red-500'}>
                            {stat.change}
                          </span>
                          <span className="text-neutral-500 text-sm">vs last week</span>
                        </div>
                      </div>
                      <div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#22c55e]" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Charts & Tables */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Traffic Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Traffic Overview</CardTitle>
                <select className="bg-neutral-800 text-white text-sm px-3 py-1.5 rounded-lg border border-neutral-700">
                  <option>Last 14 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                </select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={analyticsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis
                      dataKey="date"
                      stroke="#666"
                      tick={{ fill: '#666', fontSize: 12 }}
                      tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    />
                    <YAxis stroke="#666" tick={{ fill: '#666', fontSize: 12 }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1a1a1a',
                        border: '1px solid #333',
                        borderRadius: '8px'
                      }}
                      labelStyle={{ color: '#fff' }}
                    />
                    <Line
                      type="monotone"
                      dataKey="clicks"
                      stroke="#22c55e"
                      strokeWidth={2}
                      dot={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="impressions"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#22c55e] rounded-full" />
                  <span className="text-neutral-400 text-sm">Clicks</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  <span className="text-neutral-400 text-sm">Impressions</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Publishing Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Publishing Calendar</CardTitle>
                <Link to="/dashboard/articles" className="text-[#22c55e] text-sm hover:underline">
                  View all
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {articles.slice(0, 5).map((article) => (
                  <div
                    key={article.id}
                    className="flex items-center justify-between p-3 bg-neutral-800/50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-neutral-500" />
                      <div>
                        <p className="text-white text-sm font-medium line-clamp-1">
                          {article.title}
                        </p>
                        <p className="text-neutral-500 text-xs">
                          {article.wordCount.toLocaleString()} words
                        </p>
                      </div>
                    </div>
                    <Badge
                      variant={
                        article.status === 'published'
                          ? 'success'
                          : article.status === 'scheduled'
                          ? 'info'
                          : 'default'
                      }
                    >
                      {article.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Top Keywords */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Top Performing Keywords</CardTitle>
              <Link to="/dashboard/keywords" className="text-[#22c55e] text-sm hover:underline">
                View all
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-neutral-800">
                    <th className="text-left text-neutral-400 text-sm font-medium py-3 px-4">Keyword</th>
                    <th className="text-left text-neutral-400 text-sm font-medium py-3 px-4">Volume</th>
                    <th className="text-left text-neutral-400 text-sm font-medium py-3 px-4">Position</th>
                    <th className="text-left text-neutral-400 text-sm font-medium py-3 px-4">Change</th>
                  </tr>
                </thead>
                <tbody>
                  {keywords.slice(0, 5).map((keyword) => (
                    <tr key={keyword.id} className="border-b border-neutral-800/50 hover:bg-neutral-800/30">
                      <td className="py-3 px-4">
                        <span className="text-white">{keyword.keyword}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-neutral-400">{keyword.volume.toLocaleString()}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-white font-medium">#{keyword.position}</span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-1">
                          {keyword.change > 0 ? (
                            <>
                              <ArrowUpRight className="w-4 h-4 text-[#22c55e]" />
                              <span className="text-[#22c55e]">+{keyword.change}</span>
                            </>
                          ) : keyword.change < 0 ? (
                            <>
                              <ArrowDownRight className="w-4 h-4 text-red-500" />
                              <span className="text-red-500">{keyword.change}</span>
                            </>
                          ) : (
                            <span className="text-neutral-500">-</span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};
