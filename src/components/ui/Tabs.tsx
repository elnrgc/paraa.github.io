import React, { useState } from 'react';
import { cn } from '../../utils/cn';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
  variant?: 'default' | 'pills' | 'underline';
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultTab,
  className,
  variant = 'default'
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const variantStyles = {
    default: {
      container: 'bg-neutral-900 p-1 rounded-lg',
      tab: 'rounded-md',
      active: 'bg-neutral-800 text-white',
      inactive: 'text-neutral-400 hover:text-white'
    },
    pills: {
      container: 'gap-2',
      tab: 'rounded-full',
      active: 'bg-[#22c55e] text-black',
      inactive: 'text-neutral-400 hover:text-white hover:bg-neutral-800'
    },
    underline: {
      container: 'border-b border-neutral-800',
      tab: 'border-b-2 -mb-px',
      active: 'border-[#22c55e] text-white',
      inactive: 'border-transparent text-neutral-400 hover:text-white'
    }
  };

  const styles = variantStyles[variant];

  return (
    <div className={className}>
      {/* Tab List */}
      <div className={cn('flex', styles.container)}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors',
              styles.tab,
              activeTab === tab.id ? styles.active : styles.inactive
            )}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};
