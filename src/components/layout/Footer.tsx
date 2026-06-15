import React from 'react';
import { Link } from 'react-router-dom';

const W = 'mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10';

const Col: React.FC<{ title: string; items: { label: string; href: string; external?: boolean; tag?: string }[] }> = ({ title, items }) => (
  <div>
    <h3 className="text-white font-semibold text-sm mb-5">{title}</h3>
    <ul className="space-y-3">
      {items.map((l) => (
        <li key={l.label}>
          {l.external ? (
            <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white text-sm transition-colors inline-flex items-center gap-2">
              {l.label}
              {l.tag && <span className="text-[10px] px-1.5 py-0.5 bg-[#22c55e]/20 text-[#22c55e] rounded font-semibold">{l.tag}</span>}
            </a>
          ) : (
            <Link to={l.href} className="text-neutral-400 hover:text-white text-sm transition-colors inline-flex items-center gap-2">
              {l.label}
              {l.tag && <span className="text-[10px] px-1.5 py-0.5 bg-[#22c55e]/20 text-[#22c55e] rounded font-semibold">{l.tag}</span>}
            </Link>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export const Footer: React.FC = () => (
  <footer className="border-t border-neutral-800 bg-black">
    <div className={`${W} py-16 lg:py-20`}>
      {/* Hook Text */}
      <div className="mb-14 lg:mb-16">
        <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-snug max-w-2xl">
          Your creative and strategic partner in the heart of Baghdad.{' '}
          <span className="text-neutral-500">Crafting brands that move with culture and scale through automation.</span>
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-6 mb-14">
        {/* Brand */}
        <div className="col-span-2 sm:col-span-3 lg:col-span-1 mb-4 lg:mb-0">
          <Link to="/" className="inline-block mb-5">
            <span className="text-white font-extrabold text-2xl tracking-tight">paraa<span className="text-neutral-500">.</span></span>
          </Link>
          <p className="text-neutral-400 text-sm leading-relaxed max-w-xs mb-4">
            Creative agency & production house. Baghdad, Iraq.
          </p>
          <div className="space-y-2">
            <a href="mailto:info@paraa.art" className="text-[#22c55e] text-sm hover:underline block">info@paraa.art</a>
            <a href="https://wa.me/9647734981968" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white text-sm transition-colors block">+964 773 498 1968</a>
          </div>
        </div>

        {/* Services */}
        <Col title="Services" items={[
          { label: 'Marketing', href: '/services/marketing' },
          { label: 'Production', href: '/services/production' },
          { label: 'Creative', href: '/services/creative' },
          { label: 'Digital', href: '/services/digital' },
        ]} />

        {/* Packages */}
        <Col title="Packages" items={[
          { label: 'Growth', href: '/packages/growth' },
          { label: 'Professional', href: '/packages/professional' },
          { label: 'Advanced', href: '/packages/advanced' },
          { label: 'Business', href: '/packages/business' },
          { label: 'Enterprise', href: '/packages/enterprise' },
        ]} />

        {/* Partnerships */}
        <Col title="Partnerships" items={[
          { label: 'Become a Partner', href: '/partner', tag: 'New' },
          { label: 'Agency Co-Production', href: '/co-production', tag: 'New' },
        ]} />

        {/* Company */}
        <Col title="Company" items={[
          { label: 'Our Work', href: '/work' },
          { label: 'Blog', href: '/blog' },
          { label: 'Contact', href: '/contact' },
          { label: 'Join Waiting List', href: '/waitlist' },
        ]} />

        {/* Legal */}
        <Col title="Legal" items={[
          { label: 'Privacy Policy', href: '/privacy-policy' },
          { label: 'Terms & Conditions', href: '/terms-and-conditions' },
        ]} />
      </div>

      {/* Bottom bar */}
      <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/company/paraa_art/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors" aria-label="LinkedIn">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.064 2.064 0 1 1 0-4.128 2.064 2.064 0 0 1 0 4.128zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/paraa.art/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors" aria-label="Instagram">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
          </a>
          {/* WhatsApp */}
          <a href="https://wa.me/9647734981968" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors" aria-label="WhatsApp">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
        </div>

        <p className="text-neutral-500 text-sm">© 2026 Paraa. All rights reserved.</p>

        <p className="text-neutral-600 text-xs">Baghdad · Basra · Erbil · Sulaymaniyah · Babel · Karbala</p>
      </div>
    </div>
  </footer>
);
