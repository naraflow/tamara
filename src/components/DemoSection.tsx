import { useState } from 'react';
import { DemoNavigation } from './demo/DemoNavigation';
import { DemoHomePage } from './demo/DemoHomePage';
import { DemoInteractivePage } from './demo/DemoInteractivePage';
import { DemoDashboardPage } from './demo/DemoDashboardPage';

export const DemoSection = () => {
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
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
      <DemoNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="min-h-[600px]">
        {renderActiveTab()}
      </div>
    </div>
  );
};
