import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({ children, className, hover = false, padding = 'md' }) => {
  const pad = { none: '', sm: 'p-5', md: 'p-6 sm:p-7', lg: 'p-8 sm:p-9' };
  return (
    <div className={cn('bg-neutral-900 border border-neutral-800 rounded-2xl', pad[padding], hover && 'transition-all duration-300 hover:border-neutral-700 hover:shadow-lg hover:shadow-black/20', className)}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={cn('mb-5', className)}>{children}</div>
);

export const CardTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <h3 className={cn('text-lg font-semibold text-white', className)}>{children}</h3>
);

export const CardDescription: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <p className={cn('text-sm text-neutral-400 mt-1.5', className)}>{children}</p>
);

export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={cn('', className)}>{children}</div>
);

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={cn('mt-5 pt-5 border-t border-neutral-800', className)}>{children}</div>
);
