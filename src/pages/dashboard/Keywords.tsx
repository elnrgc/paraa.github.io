import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  Filter,
  Download,
  RefreshCw
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { keywords, stats } from '../../data';

export const Keywords: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);

  const filteredKeywords = keywords.filter((kw) =>
    kw.keyword.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleKeyword = (id: string) => {
    setSelectedKeywords((prev) =>
      prev.includes(id) ? prev.filter((k) => k !== id) : [...prev, id]
    );
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
          <h1 className="text-2xl font-bold text-white mb-1">Keyword Research</h1>
          <p className="text-neutral-400">
            Track and research keywords for your content strategy.
          </p>
        </div>
        <Button leftIcon={<Plus className="w-4 h-4" />}>
          Research Keywords
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
            <p className="text-neutral-400 text-sm mb-1">Total Keywords</p>
            <p className="text-3xl font-bold text-white">{stats.totalKeywords}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <p className="text-neutral-400 text-sm mb-1">Ranking Keywords</p>
            <p className="text-3xl font-bold text-[#22c55e]">{stats.rankedKeywords}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <p className="text-neutral-400 text-sm mb-1">Avg. Position</p>
            <p className="text-3xl font-bold text-white">{stats.averagePosition}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <p className="text-neutral-400 text-sm mb-1">Total Volume</p>
            <p className="text-3xl font-bold text-white">
              {keywords.reduce((sum, kw) => sum + kw.volume, 0).toLocaleString()}
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Filters & Search */}
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
                  placeholder="Search keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  leftIcon={<Search className="w-5 h-5" />}
                />
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" leftIcon={<Filter className="w-4 h-4" />}>
                  Filter
                </Button>
                <Button variant="outline" leftIcon={<Download className="w-4 h-4" />}>
                  Export
                </Button>
                <Button variant="outline" leftIcon={<RefreshCw className="w-4 h-4" />}>
                  Refresh
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Keywords Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>
              {selectedKeywords.length > 0
                ? `${selectedKeywords.length} selected`
                : `${filteredKeywords.length} keywords`}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-neutral-800">
                    <th className="text-left py-3 px-4">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-neutral-700 bg-neutral-800"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedKeywords(filteredKeywords.map((kw) => kw.id));
                          } else {
                            setSelectedKeywords([]);
                          }
                        }}
                      />
                    </th>
                    <th className="text-left text-neutral-400 text-sm font-medium py-3 px-4">
                      Keyword
                    </th>
                    <th className="text-left text-neutral-400 text-sm font-medium py-3 px-4">
                      Volume
                    </th>
                    <th className="text-left text-neutral-400 text-sm font-medium py-3 px-4">
                      Difficulty
                    </th>
                    <th className="text-left text-neutral-400 text-sm font-medium py-3 px-4">
                      Position
                    </th>
                    <th className="text-left text-neutral-400 text-sm font-medium py-3 px-4">
                      Change
                    </th>
                    <th className="text-left text-neutral-400 text-sm font-medium py-3 px-4">
                      URL
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredKeywords.map((keyword) => (
                    <tr
                      key={keyword.id}
                      className="border-b border-neutral-800/50 hover:bg-neutral-800/30"
                    >
                      <td className="py-3 px-4">
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-neutral-700 bg-neutral-800"
                          checked={selectedKeywords.includes(keyword.id)}
                          onChange={() => toggleKeyword(keyword.id)}
                        />
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-white font-medium">{keyword.keyword}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-neutral-400">
                          {keyword.volume.toLocaleString()}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <Badge
                          variant={
                            keyword.difficulty < 30
                              ? 'success'
                              : keyword.difficulty < 60
                              ? 'warning'
                              : 'danger'
                          }
                        >
                          {keyword.difficulty}
                        </Badge>
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
                      <td className="py-3 px-4">
                        <span className="text-neutral-500 text-sm">{keyword.url}</span>
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
