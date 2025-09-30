import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface DemoHomePageProps {
  onNextPage: () => void;
}

export const DemoHomePage: React.FC<DemoHomePageProps> = ({ onNextPage }) => {
  const kpiCards = [
    {
      title: 'Fast Response',
      value: '< 30 min',
      description: 'Housekeeping requests resolved quickly.',
    },
    {
      title: 'Smart Routing',
      value: '98% accurate',
      description: 'Automatic department assignment.',
    },
    {
      title: 'Guest Satisfaction',
      value: '10% increase',
      description: 'Better service, happier guests.',
    },
  ];

  const workflowSteps = [
    {
      number: 1,
      title: 'Guest Reports Issue',
      description: 'Guests send complaints via WhatsApp in plain language. Example: "AC not working in room 501."',
    },
    {
      number: 2,
      title: 'Auto-Routing',
      items: [
        'AI classifies the issue (e.g., "AC problem" → Engineering)',
        'Work Order created automatically in your system',
        'Staff receives instant notification',
      ],
    },
    {
      number: 3,
      title: 'Real-Time Updates',
      items: [
        'Guest gets status updates via WhatsApp',
        'Manager tracks SLA compliance on dashboard',
        'Automatic escalation for overdue tasks',
      ],
    },
  ];

  return (
    <div className="space-y-16 p-8">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold mb-6">
          Tamara
        </h1>
        <p className="text-2xl text-tamara-primary font-semibold mb-4">
          Hotel Guest Complaint Resolution
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Instant complaint handling through WhatsApp. Simple. Fast. Effective.
        </p>
      </section>

      {/* KPI Cards */}
      <section className="grid md:grid-cols-3 gap-6">
        {kpiCards.map((kpi, index) => (
          <Card key={index} className="p-8 bg-gradient-to-br from-tamara-50 to-white border-0 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
            <p className="text-sm font-semibold text-tamara-600 mb-2 uppercase tracking-wide">{kpi.title}</p>
            <h3 className="text-4xl font-bold text-tamara-primary mb-3">{kpi.value}</h3>
            <p className="text-sm text-muted-foreground">{kpi.description}</p>
          </Card>
        ))}
      </section>

      {/* Workflow Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="space-y-8">
          {workflowSteps.map((step) => (
            <div key={step.number} className="flex items-start space-x-6">
              {/* Step Number */}
              <div className="flex-shrink-0 w-12 h-12 bg-tamara-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                {step.number}
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>

                {step.description ? (
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                ) : (
                  <ul className="space-y-2">
                    {step.items?.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-tamara-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-12">
        <Button
          onClick={onNextPage}
          className="bg-tamara-primary hover:bg-tamara-600 text-white px-10 py-7 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          See Interactive Demo →
        </Button>
      </section>
    </div>
  );
};
