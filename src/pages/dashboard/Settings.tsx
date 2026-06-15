import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Shield, CreditCard, Save, Check, Megaphone, Image, Palette, Monitor, Maximize } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Tabs } from '../../components/ui/Tabs';
import { useAuthStore } from '../../store/authStore';
import { useContentStore } from '../../store/contentStore';
import { useThemeStore } from '../../store/themeStore';

const F: React.FC<{ label: string; value: string; onChange: (v: string) => void; placeholder?: string; textarea?: boolean }> = ({ label, value, onChange, placeholder, textarea }) => (
  <div><label className="text-sm font-medium text-neutral-300 block mb-1.5">{label}</label>
    {textarea ? <textarea rows={3} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-[#22c55e] text-sm resize-y" />
      : <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-[#22c55e] text-sm" />}
  </div>
);

const Toggle: React.FC<{ label: string; desc: string; checked: boolean; onChange: (v: boolean) => void }> = ({ label, desc, checked, onChange }) => (
  <div className="flex items-center justify-between p-4 bg-neutral-800 rounded-xl">
    <div><p className="text-white font-medium">{label}</p><p className="text-neutral-500 text-xs">{desc}</p></div>
    <label className="relative inline-flex items-center cursor-pointer"><input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="sr-only peer" />
      <div className="w-11 h-6 bg-neutral-700 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#22c55e]" /></label>
  </div>
);

export const Settings: React.FC = () => {
  const { user } = useAuthStore();
  const { adBanner, heroBanner, popupAd, updateAdBanner, updateHeroBanner, updatePopupAd, resetContent } = useContentStore();
  const { theme, mode, setTheme, applyPreset, setMode, toggleMode, resetTheme } = useThemeStore();
  const [saved, setSaved] = useState(false);

  // Corner Ad state
  const [ca, setCa] = useState(adBanner);
  // Hero Banner state
  const [hb, setHb] = useState(heroBanner);
  // Popup Ad state
  const [pa, setPa] = useState(popupAd);

  const flash = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

  const presetList = [
    { key: 'default', label: 'Paraa Green', color: '#22c55e' },
    { key: 'midnight', label: 'Midnight Blue', color: '#3b82f6' },
    { key: 'ember', label: 'Ember Orange', color: '#f97316' },
    { key: 'rose', label: 'Rose Red', color: '#f43f5e' },
    { key: 'arctic', label: 'Arctic Cyan', color: '#06b6d4' },
    { key: 'gold', label: 'Royal Gold', color: '#eab308' },
  ];

  const tabs = [
    {
      id: 'appearance', label: 'Appearance', icon: <Palette className="w-4 h-4" />,
      content: (
        <Card><CardHeader><CardTitle>Appearance Settings</CardTitle></CardHeader><CardContent><div className="space-y-8">
          {/* Dark / Light */}
          <div>
            <h4 className="text-white font-medium mb-4">Theme Mode</h4>
            <div className="grid sm:grid-cols-2 gap-3">
              <button onClick={() => setMode('dark')} className={`flex items-center justify-between p-4 rounded-xl border transition-all ${mode === 'dark' ? 'border-white bg-neutral-800' : 'border-neutral-800 hover:border-neutral-600 bg-neutral-900'}`}>
                <div className="text-left"><p className="text-white text-sm font-medium">Dark Mode</p><p className="text-neutral-500 text-xs">Default cinematic</p></div>
                <div className="w-10 h-10 rounded-xl bg-black border border-neutral-700" /></button>
              <button onClick={() => setMode('light')} className={`flex items-center justify-between p-4 rounded-xl border transition-all ${mode === 'light' ? 'border-white bg-neutral-800' : 'border-neutral-800 hover:border-neutral-600 bg-neutral-900'}`}>
                <div className="text-left"><p className="text-white text-sm font-medium">Light Mode</p><p className="text-neutral-500 text-xs">Bright editorial</p></div>
                <div className="w-10 h-10 rounded-xl bg-white border border-neutral-300" /></button>
            </div>
            <div className="mt-3"><Button variant="outline" size="sm" onClick={toggleMode}>Toggle Dark / Light</Button></div>
          </div>
          {/* Presets */}
          <div><h4 className="text-white font-medium mb-4">Theme Presets</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">{presetList.map((p) => (
              <button key={p.key} onClick={() => applyPreset(p.key)} className={`flex items-center gap-3 p-4 rounded-xl border transition-all ${theme.preset === p.key ? 'border-white bg-neutral-800' : 'border-neutral-800 hover:border-neutral-600 bg-neutral-900'}`}>
                <div className="w-8 h-8 rounded-lg" style={{ backgroundColor: p.color }} /><div className="text-left"><p className="text-white text-sm font-medium">{p.label}</p></div></button>
            ))}</div></div>
          {/* Custom Colors */}
          <div><h4 className="text-white font-medium mb-4">Custom Colors</h4>
            <div className="grid sm:grid-cols-2 gap-4">{[
              { label: 'Accent', key: 'accentColor' as const },{ label: 'Background', key: 'bgPrimary' as const },
              { label: 'Card BG', key: 'cardBg' as const },{ label: 'Border', key: 'borderColor' as const },
              { label: 'Text Primary', key: 'textPrimary' as const },{ label: 'Text Secondary', key: 'textSecondary' as const },
            ].map((c) => (
              <div key={c.key} className="flex items-center gap-3">
                <input type="color" value={theme[c.key]} onChange={(e) => setTheme({ [c.key]: e.target.value })} className="w-10 h-10 rounded-lg cursor-pointer border-0 bg-transparent" />
                <div><p className="text-white text-sm">{c.label}</p><p className="text-neutral-500 text-xs font-mono">{theme[c.key]}</p></div></div>
            ))}</div></div>
          {/* Radius */}
          <div><h4 className="text-white font-medium mb-4">Border Radius</h4>
            <div className="flex gap-3">{['8px','12px','16px','20px','24px'].map((r) => (
              <button key={r} onClick={() => setTheme({ borderRadius: r })} className={`px-4 py-2 text-sm rounded-lg border transition-all ${theme.borderRadius === r ? 'border-white bg-neutral-800 text-white' : 'border-neutral-800 text-neutral-400'}`}>{r}</button>
            ))}</div></div>
          <Button variant="outline" onClick={resetTheme}>Reset to Default</Button>
        </div></CardContent></Card>
      ),
    },
    {
      id: 'corner-ad', label: 'Corner Ad', icon: <Megaphone className="w-4 h-4" />,
      content: (
        <Card><CardHeader><CardTitle>Corner Ad Banner</CardTitle></CardHeader><CardContent><div className="space-y-5">
          <p className="text-neutral-400 text-sm">Small banner in the bottom-right corner. Supports images and GIFs.</p>
          <Toggle label="Active" desc="Show corner ad" checked={ca.active} onChange={(v) => setCa({ ...ca, active: v })} />
          <F label="Title" value={ca.title} onChange={(v) => setCa({ ...ca, title: v })} placeholder="Ad title..." />
          <F label="Image / GIF URL" value={ca.image} onChange={(v) => setCa({ ...ca, image: v })} placeholder="https://..." />
          {ca.image && <img src={ca.image} alt="" className="w-full h-40 object-cover rounded-xl border border-neutral-800" />}
          <F label="Link URL (Go button)" value={ca.link} onChange={(v) => setCa({ ...ca, link: v })} placeholder="https://..." />
          <Button onClick={() => { updateAdBanner(ca); flash(); }} leftIcon={saved ? <Check className="w-4 h-4" /> : <Image className="w-4 h-4" />}>{saved ? 'Saved!' : 'Save Corner Ad'}</Button>
        </div></CardContent></Card>
      ),
    },
    {
      id: 'hero-banner', label: 'Wide Banner', icon: <Monitor className="w-4 h-4" />,
      content: (
        <Card><CardHeader><CardTitle>Wide Hero Banner</CardTitle></CardHeader><CardContent><div className="space-y-5">
          <p className="text-neutral-400 text-sm">Full-width banner on homepage with image background, title, description, and CTA button.</p>
          <Toggle label="Active" desc="Show wide banner on homepage" checked={hb.active} onChange={(v) => setHb({ ...hb, active: v })} />
          <F label="Background Image URL" value={hb.image} onChange={(v) => setHb({ ...hb, image: v })} placeholder="https://..." />
          {hb.image && <img src={hb.image} alt="" className="w-full h-40 object-cover rounded-xl border border-neutral-800" />}
          <F label="Title" value={hb.title} onChange={(v) => setHb({ ...hb, title: v })} placeholder="Big headline..." />
          <F label="Description" value={hb.description} onChange={(v) => setHb({ ...hb, description: v })} textarea placeholder="Supporting text..." />
          <div className="grid sm:grid-cols-2 gap-4">
            <F label="Button Text" value={hb.buttonText} onChange={(v) => setHb({ ...hb, buttonText: v })} placeholder="Learn More" />
            <F label="Button Link" value={hb.buttonLink} onChange={(v) => setHb({ ...hb, buttonLink: v })} placeholder="https://..." />
          </div>
          <Button onClick={() => { updateHeroBanner(hb); flash(); }} leftIcon={saved ? <Check className="w-4 h-4" /> : <Monitor className="w-4 h-4" />}>{saved ? 'Saved!' : 'Save Banner'}</Button>
        </div></CardContent></Card>
      ),
    },
    {
      id: 'popup-ad', label: 'Popup Ad', icon: <Maximize className="w-4 h-4" />,
      content: (
        <Card><CardHeader><CardTitle>Full-Screen Popup Ad</CardTitle></CardHeader><CardContent><div className="space-y-5">
          <p className="text-neutral-400 text-sm">Large popup that appears in the center of the screen with image, title, description, and CTA.</p>
          <Toggle label="Active" desc="Show popup on page load" checked={pa.active} onChange={(v) => setPa({ ...pa, active: v })} />
          <F label="Image URL" value={pa.image} onChange={(v) => setPa({ ...pa, image: v })} placeholder="https://..." />
          {pa.image && <img src={pa.image} alt="" className="w-full h-40 object-cover rounded-xl border border-neutral-800" />}
          <F label="Title" value={pa.title} onChange={(v) => setPa({ ...pa, title: v })} placeholder="Special Offer!" />
          <F label="Description" value={pa.description} onChange={(v) => setPa({ ...pa, description: v })} textarea placeholder="Details about the offer..." />
          <div className="grid sm:grid-cols-2 gap-4">
            <F label="Button Text" value={pa.buttonText} onChange={(v) => setPa({ ...pa, buttonText: v })} placeholder="Get Started" />
            <F label="Button Link" value={pa.buttonLink} onChange={(v) => setPa({ ...pa, buttonLink: v })} placeholder="https://..." />
          </div>
          <Button onClick={() => { updatePopupAd(pa); flash(); }} leftIcon={saved ? <Check className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}>{saved ? 'Saved!' : 'Save Popup Ad'}</Button>
        </div></CardContent></Card>
      ),
    },
    {
      id: 'profile', label: 'Profile', icon: <User className="w-4 h-4" />,
      content: (
        <Card><CardHeader><CardTitle>Profile</CardTitle></CardHeader><CardContent><div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Input label="Full Name" defaultValue={user?.name || 'Hassan'} />
            <Input label="Email" type="email" defaultValue={user?.email || ''} />
            <Input label="Company" defaultValue="Paraa Agency" />
            <Input label="Website" defaultValue="paraa.art" />
          </div>
          <Button onClick={flash} leftIcon={saved ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}>{saved ? 'Saved!' : 'Save'}</Button>
        </div></CardContent></Card>
      ),
    },
    {
      id: 'security', label: 'Security', icon: <Shield className="w-4 h-4" />,
      content: (
        <Card><CardHeader><CardTitle>Security</CardTitle></CardHeader><CardContent>
          <div className="space-y-3 max-w-md">
            <Input label="Current Password" type="password" placeholder="••••••••" />
            <Input label="New Password" type="password" placeholder="••••••••" />
            <Button onClick={flash}>Update Password</Button>
          </div>
        </CardContent></Card>
      ),
    },
    {
      id: 'danger', label: 'Reset', icon: <CreditCard className="w-4 h-4" />,
      content: (
        <Card><CardHeader><CardTitle>Danger Zone</CardTitle></CardHeader><CardContent>
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
            <h4 className="text-red-400 font-medium mb-2">Reset Everything</h4>
            <p className="text-neutral-400 text-sm mb-4">Resets all content, ads, and theme to defaults.</p>
            <Button variant="danger" onClick={() => { if (confirm('Reset ALL?')) { resetContent(); resetTheme(); window.location.reload(); } }}>Reset</Button>
          </div>
        </CardContent></Card>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold text-white mb-1">Settings</h1>
        <p className="text-neutral-400">Appearance, ads, profile, and preferences.</p>
      </motion.div>
      <Tabs tabs={tabs} variant="pills" />
    </div>
  );
};
