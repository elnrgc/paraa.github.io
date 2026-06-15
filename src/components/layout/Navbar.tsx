import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../utils/cn';
import { motion, AnimatePresence } from 'framer-motion';
import { useThemeStore } from '../../store/themeStore';

const navLinks = [
  { label: 'Services', href: '/services', dropdown: [
    { label: 'Marketing', href: '/services/marketing' },
    { label: 'Production', href: '/services/production' },
    { label: 'Creative', href: '/services/creative' },
    { label: 'Digital', href: '/services/digital' },
  ]},
  { label: 'Work', href: '/work' },
  { label: 'Packages', href: '/packages' },
  { label: 'Partners', href: '#', dropdown: [
    { label: 'Become a Partner', href: '/partner' },
    { label: 'Agency Co-Production', href: '/co-production' },
  ]},
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [dd, setDd] = useState<string | null>(null);
  const { mode } = useThemeStore();
  const loc = useLocation();
  const nav = useNavigate();

  useEffect(() => { const h = () => setScrolled(window.scrollY > 10); window.addEventListener('scroll', h); return () => window.removeEventListener('scroll', h); }, []);
  useEffect(() => { setMobile(false); window.scrollTo(0, 0); }, [loc.pathname]);

  const scrollTo = (href: string) => {
    if (href.startsWith('#') && href.length > 1) {
      if (loc.pathname !== '/') { nav('/'); setTimeout(() => document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' }), 300); }
      else document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled
        ? mode === 'light'
          ? 'bg-white/90 backdrop-blur-md border-b border-neutral-200 shadow-sm'
          : 'bg-black/90 backdrop-blur-md border-b border-neutral-800'
        : 'bg-transparent'
    )}>
      <nav className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-[72px]">
          <Link to="/" className="flex items-center gap-2">
            <span className={cn('font-extrabold text-2xl tracking-tight', mode === 'light' ? 'text-neutral-900' : 'text-white')}>
              paraa<span className="text-neutral-500">.</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <div key={l.label} className="relative" onMouseEnter={() => l.dropdown && setDd(l.label)} onMouseLeave={() => setDd(null)}>
                {l.dropdown ? (
                  <button className={cn('flex items-center gap-1.5 px-4 py-2.5 text-sm transition-colors', mode === 'light' ? 'text-neutral-600 hover:text-neutral-900' : 'text-neutral-300 hover:text-white')}>{l.label}<ChevronDown className="w-4 h-4" /></button>
                ) : l.href.startsWith('#') && l.href.length > 1 ? (
                  <button onClick={() => scrollTo(l.href)} className={cn('px-4 py-2.5 text-sm transition-colors', mode === 'light' ? 'text-neutral-600 hover:text-neutral-900' : 'text-neutral-300 hover:text-white')}>{l.label}</button>
                ) : (
                  <Link to={l.href} className={cn('px-4 py-2.5 text-sm transition-colors block', mode === 'light' ? 'text-neutral-600 hover:text-neutral-900' : 'text-neutral-300 hover:text-white')}>{l.label}</Link>
                )}
                <AnimatePresence>
                  {l.dropdown && dd === l.label && (
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.15 }}
                      className={cn('absolute top-full left-0 mt-2 py-2.5 rounded-xl shadow-2xl min-w-[200px]', mode === 'light' ? 'bg-white border border-neutral-200' : 'bg-neutral-900 border border-neutral-800')}>
                      {l.dropdown.map((d) => <Link key={d.label} to={d.href} className={cn('block px-5 py-3 text-sm transition-colors', mode === 'light' ? 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100' : 'text-neutral-300 hover:text-white hover:bg-neutral-800/80')}>{d.label}</Link>)}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/waitlist"><Button size="sm">Join Waiting List</Button></Link>
          </div>

          <button onClick={() => setMobile(!mobile)} className={cn('lg:hidden p-2.5 transition-colors', mode === 'light' ? 'text-neutral-600 hover:text-neutral-900' : 'text-neutral-400 hover:text-white')}>
            {mobile ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {mobile && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="lg:hidden overflow-hidden">
              <div className={cn('py-5 space-y-1 mt-1 rounded-b-2xl border-t', mode === 'light' ? 'bg-white/95 border-neutral-200' : 'border-neutral-800 bg-black/95')}>
                {navLinks.map((l) => (
                  <div key={l.label}>
                    {l.dropdown ? (
                      <div className="space-y-1">
                        <span className={cn('block px-4 py-3 text-sm font-medium', mode === 'light' ? 'text-neutral-900' : 'text-white')}>{l.label}</span>
                        {l.dropdown.map((d) => <Link key={d.label} to={d.href} className={cn('block px-8 py-2.5 text-sm transition-colors', mode === 'light' ? 'text-neutral-600 hover:text-neutral-900' : 'text-neutral-400 hover:text-white')}>{d.label}</Link>)}
                      </div>
                    ) : l.href.startsWith('#') && l.href.length > 1 ? (
                      <button onClick={() => { scrollTo(l.href); setMobile(false); }} className={cn('block w-full text-left px-4 py-3 text-sm transition-colors', mode === 'light' ? 'text-neutral-700 hover:text-neutral-900' : 'text-neutral-300 hover:text-white')}>{l.label}</button>
                    ) : (
                      <Link to={l.href} className={cn('block px-4 py-3 text-sm transition-colors', mode === 'light' ? 'text-neutral-700 hover:text-neutral-900' : 'text-neutral-300 hover:text-white')}>{l.label}</Link>
                    )}
                  </div>
                ))}
                <div className={cn('pt-5 px-4 mt-3 border-t', mode === 'light' ? 'border-neutral-200' : 'border-neutral-800')}>
                  <Link to="/waitlist" className="block"><Button fullWidth>Join Waiting List</Button></Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
