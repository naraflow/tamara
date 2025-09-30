import React from 'react';
import { TamaraIcon } from '@/components/TamaraIcon';
import { cn } from '@/lib/utils';

interface DemoNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'home', label: '1. Pendahuluan & Proses' },
  { id: 'demo', label: '2. Simulasi Interaktif' },
  { id: 'dashboard', label: '3. Dashboard SLA' },
];

export const DemoNavigation: React.FC<DemoNavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="bg-card/80 backdrop-blur-sm border-b border-border rounded-t-2xl">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <TamaraIcon className="w-8 h-8 text-tamara-primary" />
            <span className="text-xl font-semibold text-foreground">
              Tamara Demo
            </span>
          </div>

          {/* Tab Navigation */}
          <div className="flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300',
                  'hover:bg-tamara-100',
                  activeTab === tab.id
                    ? 'bg-tamara-primary text-white shadow-lg'
                    : 'text-muted-foreground'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
