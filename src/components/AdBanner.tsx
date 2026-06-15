import React, { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { useContentStore } from '../store/contentStore';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Small Corner Ad ─── */
export const AdBanner: React.FC = () => {
  const { adBanner } = useContentStore();
  const [hidden, setHidden] = useState(false);
  if (!adBanner.active || !adBanner.image || hidden) return null;
  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="fixed bottom-6 right-6 z-40 max-w-xs w-full">
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
          <a href={adBanner.link} target="_blank" rel="noopener noreferrer" className="block relative group">
            <img src={adBanner.image} alt={adBanner.title} className="w-full h-auto max-h-48 object-cover" />
            {adBanner.link && <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center"><ExternalLink className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" /></div>}
          </a>
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex-1 min-w-0">{adBanner.title && <p className="text-white text-sm font-medium truncate">{adBanner.title}</p>}</div>
            <div className="flex items-center gap-2 shrink-0 ml-3">
              {adBanner.link && <a href={adBanner.link} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-[#22c55e] text-black text-xs font-semibold rounded-lg hover:bg-[#16a34a] transition-colors">Go</a>}
              <button onClick={() => setHidden(true)} className="p-1.5 text-neutral-500 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors" title="Hide"><X className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

/* ─── Wide Hero Banner Ad (on homepage) ─── */
export const HeroBannerAd: React.FC = () => {
  const { heroBanner } = useContentStore();
  if (!heroBanner.active || !heroBanner.image) return null;
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10 py-10">
        <a href={heroBanner.buttonLink || '#'} target={heroBanner.buttonLink ? '_blank' : undefined} rel="noopener noreferrer" className="group block relative rounded-2xl overflow-hidden border border-neutral-800 hover:border-neutral-600 transition-all">
          <img src={heroBanner.image} alt={heroBanner.title} className="w-full h-auto min-h-[180px] max-h-[360px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex items-center">
            <div className="p-8 sm:p-10 lg:p-14 max-w-lg">
              {heroBanner.title && <h3 className="text-white text-2xl sm:text-3xl font-extrabold mb-3 leading-tight">{heroBanner.title}</h3>}
              {heroBanner.description && <p className="text-white/80 text-sm sm:text-base mb-6 leading-relaxed">{heroBanner.description}</p>}
              {heroBanner.buttonText && (
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-[#22c55e] text-black text-sm font-semibold rounded-xl group-hover:bg-[#16a34a] transition-colors">
                  {heroBanner.buttonText} <ExternalLink className="w-4 h-4" />
                </span>
              )}
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

/* ─── Full-Screen Popup Ad ─── */
export const PopupAdModal: React.FC = () => {
  const { popupAd } = useContentStore();
  const [closed, setClosed] = useState(false);
  if (!popupAd.active || closed) return null;
  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setClosed(true)} />
        <motion.div initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ type: 'spring', duration: 0.5 }}
          className="relative w-full max-w-lg bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl z-10">
          {/* Close button */}
          <button onClick={() => setClosed(true)} className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors"><X className="w-5 h-5" /></button>
          {/* Image */}
          {popupAd.image && <img src={popupAd.image} alt={popupAd.title} className="w-full h-auto max-h-[250px] object-cover" />}
          {/* Content */}
          <div className="p-8 sm:p-10 text-center">
            {popupAd.title && <h2 className="text-white text-2xl sm:text-3xl font-extrabold mb-4 leading-tight">{popupAd.title}</h2>}
            {popupAd.description && <p className="text-neutral-400 text-sm sm:text-base mb-8 leading-relaxed max-w-sm mx-auto">{popupAd.description}</p>}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              {popupAd.buttonText && popupAd.buttonLink && (
                <a href={popupAd.buttonLink} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#22c55e] text-black font-semibold rounded-xl hover:bg-[#16a34a] transition-colors text-sm">
                  {popupAd.buttonText} <ExternalLink className="w-4 h-4" />
                </a>
              )}
              <button onClick={() => setClosed(true)} className="px-6 py-3 text-neutral-400 hover:text-white text-sm transition-colors">
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
