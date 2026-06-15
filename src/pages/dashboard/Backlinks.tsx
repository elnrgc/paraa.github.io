import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Link as LinkIcon,
  Plus,
  Search,
  Filter,
  ExternalLink,
  CheckCircle,
  Clock,
  XCircle
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { backlinks, stats } from '../../data';

export const Backlinks: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBacklinks = backlinks.filter((bl) =>
    bl.domain.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="w-4 h-4 text-[#22c55e]" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'rejected':
        return <XCircle className="w-4 h-4 text-red-500" />;
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
          <h1 className="text-2xl font-bold text-white mb-1">Backlink Exchange</h1>
          <p className="text-neutral-400">
            Build quality backlinks through our verified network.
          </p>
        </div>
        <Button leftIcon={<Plus className="w-4 h-4" />}>
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
            <p className="text-neutral-400 text-sm mb-1">Total Backlinks</p>
            <p className="text-3xl font-bold text-white">{stats.totalBacklinks}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <p className="text-neutral-400 text-sm mb-1">Verified</p>
            <p className="text-3xl font-bold text-[#22c55e]">{stats.verifiedBacklinks}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <p className="text-neutral-400 text-sm mb-1">Domain Rating</p>
            <p className="text-3xl font-bold text-white">{stats.domainRating}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <p className="text-neutral-400 text-sm mb-1">Avg. DR of Links</p>
            <p className="text-3xl font-bold text-white">
              {Math.round(backlinks.reduce((sum, bl) => sum + bl.domainRating, 0) / backlinks.length)}
            </p>
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
                  placeholder="Search backlinks..."
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

      {/* Backlinks Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>{filteredBacklinks.length} backlinks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-neutral-800">
                    <th className="text-left text-neutral-400 text-sm font-medium py-3 px-4">
                      Domain
                    </th>
                    <th className="text-left text-neutral-400 text-sm font-medium py-3 px-4">
                      DR
                    </th>
                    <th className="text-left text-neutral-400 text-sm font-medium py-3 px-4">
                      Type
                    </th>
                    <th className="text-left text-neutral-400 text-sm font-medium py-3 px-4">
                      Status
                    </th>
                    <th className="text-left text-neutral-400 text-sm font-medium py-3 px-4">
                      Date
                    </th>
                    <th className="text-left text-neutral-400 text-sm font-medium py-3 px-4">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBacklinks.map((backlink) => (
                    <tr
                      key={backlink.id}
                      className="border-b border-neutral-800/50 hover:bg-neutral-800/30"
                    >
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <LinkIcon className="w-4 h-4 text-neutral-500" />
                          <span className="text-white font-medium">{backlink.domain}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <Badge
                          variant={
                            backlink.domainRating >= 70
                              ? 'success'
                              : backlink.domainRating >= 40
                              ? 'warning'
                              : 'default'
                          }
                        >
                          {backlink.domainRating}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={
                            backlink.type === 'dofollow'
                              ? 'text-[#22c55e]'
                              : 'text-neutral-500'
                          }
                        >
                          {backlink.type}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-1.5">
                          {getStatusIcon(backlink.status)}
                          <span className="text-neutral-400 capitalize">{backlink.status}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-neutral-500">
                          {new Date(backlink.createdAt).toLocaleDateString()}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <a
                          href={backlink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[#22c55e] hover:underline text-sm"
                        >
                          View
                          <ExternalLink className="w-3 h-3" />
                        </a>
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
