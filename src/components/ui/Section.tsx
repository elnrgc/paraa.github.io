import React from 'react';
import { cn } from '../../utils/cn';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className, id, dark }) => (
  <section id={id} className={cn('py-24 md:py-28 lg:py-32', dark ? 'bg-[#0a0a0a]' : 'bg-black', className)}>
    <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10">
      {children}
    </div>
  </section>
);

export const SectionHeader: React.FC<{ title: string; subtitle?: string; className?: string }> = ({ title, subtitle, className }) => (
  <div className={cn('text-center mb-16 lg:mb-20', className)}>
    <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white mb-5 leading-tight">{title}</h2>
    {subtitle && <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
  </div>
);

export const Wrap: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={cn('mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10', className)}>
    {children}
  </div>
);
