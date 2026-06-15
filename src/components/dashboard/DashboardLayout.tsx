import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, Search, FileText, Link as LinkIcon,
  MessageCircle, BarChart3, Settings, LogOut, Menu, X, Bell, ChevronDown, PenTool
} from 'lucide-react';
import { cn } from '../../utils/cn';
import { useAuthStore } from '../../store/authStore';
import { motion, AnimatePresence } from 'framer-motion';

const sidebarLinks = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: PenTool, label: 'Content', href: '/dashboard/content' },
  { icon: Search, label: 'Keywords', href: '/dashboard/keywords' },
  { icon: FileText, label: 'Articles', href: '/dashboard/articles' },
  { icon: LinkIcon, label: 'Backlinks', href: '/dashboard/backlinks' },
  { icon: MessageCircle, label: 'Reddit', href: '/dashboard/reddit' },
  { icon: BarChart3, label: 'Analytics', href: '/dashboard/analytics' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
];

interface DashboardLayoutProps { children: React.ReactNode; }

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  const handleLogout = () => { logout(); navigate('/'); };

  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Sidebar Desktop */}
      <aside className={cn(
        'fixed left-0 top-0 h-full bg-black border-r border-neutral-800 transition-all duration-300 z-40 hidden lg:flex flex-col',
        sidebarOpen ? 'w-[260px]' : 'w-[76px]'
      )}>
        <div className="h-[72px] flex items-center justify-between px-5 border-b border-neutral-800 shrink-0">
          <Link to="/dashboard" className="flex items-center gap-2.5 overflow-hidden">
            {sidebarOpen && <span className="text-white font-extrabold text-xl tracking-tight">paraa<span className="text-neutral-500">.</span></span>}
            {!sidebarOpen && <span className="text-white font-extrabold text-xl">p<span className="text-neutral-500">.</span></span>}
          </Link>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg shrink-0">
            <Menu className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.href;
            return (
              <Link key={link.href} to={link.href}
                className={cn(
                  'flex items-center gap-3.5 px-4 py-3 rounded-xl transition-colors',
                  isActive ? 'bg-[#22c55e] text-black font-semibold' : 'text-neutral-400 hover:text-white hover:bg-neutral-800/80'
                )}>
                <Icon className="w-5 h-5 shrink-0" />
                {sidebarOpen && <span className="text-sm">{link.label}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-neutral-800 shrink-0">
          <button onClick={handleLogout}
            className={cn('flex items-center gap-3.5 w-full px-4 py-3 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800/80 transition-colors', !sidebarOpen && 'justify-center')}>
            <LogOut className="w-5 h-5 shrink-0" />
            {sidebarOpen && <span className="text-sm">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/80 z-40 lg:hidden" onClick={() => setMobileMenuOpen(false)} />
            <motion.aside initial={{ x: -280 }} animate={{ x: 0 }} exit={{ x: -280 }} transition={{ type: 'tween' }}
              className="fixed left-0 top-0 h-full w-[260px] bg-black border-r border-neutral-800 z-50 lg:hidden flex flex-col">
              <div className="h-[72px] flex items-center justify-between px-5 border-b border-neutral-800 shrink-0">
                <Link to="/dashboard" className="flex items-center gap-2.5">
                  <div className="w-9 h-9 bg-[#22c55e] rounded-lg flex items-center justify-center"><span className="text-black font-bold text-lg">R</span></div>
                  <span className="text-white font-extrabold text-xl tracking-tight">paraa<span className="text-neutral-500">.</span></span>
                </Link>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-neutral-400 hover:text-white"><X className="w-5 h-5" /></button>
              </div>
              <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
                {sidebarLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = location.pathname === link.href;
                  return (
                    <Link key={link.href} to={link.href} onClick={() => setMobileMenuOpen(false)}
                      className={cn('flex items-center gap-3.5 px-4 py-3 rounded-xl transition-colors', isActive ? 'bg-[#22c55e] text-black font-semibold' : 'text-neutral-400 hover:text-white hover:bg-neutral-800/80')}>
                      <Icon className="w-5 h-5" />
                      <span className="text-sm">{link.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main */}
      <div className={cn('transition-all duration-300 min-h-screen', sidebarOpen ? 'lg:ml-[260px]' : 'lg:ml-[76px]')}>
        {/* Header */}
        <header className="sticky top-0 z-30 h-[72px] bg-black/80 backdrop-blur-md border-b border-neutral-800">
          <div className="h-full flex items-center justify-between px-5 lg:px-8">
            <div className="flex items-center gap-4">
              <button onClick={() => setMobileMenuOpen(true)} className="p-2.5 text-neutral-400 hover:text-white lg:hidden"><Menu className="w-5 h-5" /></button>
              <h1 className="text-white font-semibold text-lg hidden sm:block">
                {sidebarLinks.find((l) => l.href === location.pathname)?.label || 'Dashboard'}
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative p-2.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-xl">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-[#22c55e] rounded-full" />
              </button>
              <div className="relative">
                <button onClick={() => setUserMenuOpen(!userMenuOpen)} className="flex items-center gap-3 p-2 hover:bg-neutral-800 rounded-xl">
                  <div className="w-9 h-9 bg-gradient-to-br from-[#22c55e] to-emerald-600 rounded-full flex items-center justify-center text-black font-semibold text-sm">
                    {user?.name?.charAt(0) || 'U'}
                  </div>
                  <span className="text-white text-sm hidden sm:block">{user?.name || 'User'}</span>
                  <ChevronDown className="w-4 h-4 text-neutral-400 hidden sm:block" />
                </button>
                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
                      className="absolute right-0 top-full mt-2 w-52 bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl py-2.5 z-50">
                      <Link to="/dashboard/settings" className="block px-5 py-3 text-sm text-neutral-400 hover:text-white hover:bg-neutral-800" onClick={() => setUserMenuOpen(false)}>Settings</Link>
                      <button onClick={handleLogout} className="w-full text-left px-5 py-3 text-sm text-neutral-400 hover:text-white hover:bg-neutral-800">Logout</button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-5 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
};
