import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DemoNavigation } from '@/components/demo/DemoNavigation';
import { DemoHomePage } from '@/components/demo/DemoHomePage';
import { DemoInteractivePage } from '@/components/demo/DemoInteractivePage';
import { DemoDashboardPage } from '@/components/demo/DemoDashboardPage';

const Demo = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'home':
        return <DemoHomePage onNextPage={() => setActiveTab('demo')} />;
      case 'demo':
        return <DemoInteractivePage onNextPage={() => setActiveTab('dashboard')} />;
      case 'dashboard':
        return <DemoDashboardPage />;
      default:
        return <DemoHomePage onNextPage={() => setActiveTab('demo')} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <header className="sticky top-0 z-50 bg-card/90 backdrop-blur-sm border-b border-border">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Button asChild variant="ghost" size="sm">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Home
            </Link>
          </Button>
          <div className="flex items-center gap-3">
            {/* Modern flat design logo */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="8" fill="hsl(var(--tamara-primary))" />
              <path d="M16 10C14.9 10 14 10.9 14 12V14H18V12C18 10.9 17.1 10 16 10Z" fill="white" />
              <path d="M12 16C12 14.9 12.9 14 14 14H18C19.1 14 20 14.9 20 16V20H12V16Z" fill="white" />
              <rect x="10" y="21" width="12" height="2" rx="1" fill="white" />
            </svg>
            <span className="text-xl font-bold text-tamara-primary">Tamara Demo</span>
          </div>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
          <DemoNavigation activeTab={activeTab} onTabChange={setActiveTab} />
          <div className="min-h-[600px]">
            {renderActiveTab()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
