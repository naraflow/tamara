import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/Badge';

export const DemoDashboardPage: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState('ALL');

  const tickets = [
    {
      id: 'WO24-101',
      room: '305',
      description: 'Butuh tambahan handuk & sabun',
      department: 'HK',
      priority: 'High',
      status: 'Completed',
      slaMinutes: 30,
      elapsed: 25
    },
    {
      id: 'WO24-102',
      room: '110',
      description: 'Kesalahan biaya minibar',
      department: 'FO',
      priority: 'Standard',
      status: 'In Progress',
      slaMinutes: 240,
      elapsed: 150
    },
    {
      id: 'WO24-103',
      room: '401',
      description: 'AC kamar tidak dingin',
      department: 'ENG',
      priority: 'Urgent',
      status: 'In Progress',
      slaMinutes: 60,
      elapsed: 45
    },
    {
      id: 'WO24-104',
      room: '502',
      description: 'Suara konstruksi keras',
      department: 'FO',
      priority: 'Critical',
      status: 'Open',
      slaMinutes: 10,
      elapsed: 8
    },
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      'Open': 'default',
      'In Progress': 'warning',
      'Completed': 'success',
      'Breached': 'destructive'
    } as const;
    return variants[status as keyof typeof variants] || 'default';
  };

  const getPriorityBadge = (priority: string) => {
    const variants = {
      'Critical': 'destructive',
      'Urgent': 'warning',
      'High': 'warning',
      'Standard': 'default'
    } as const;
    return variants[priority as keyof typeof variants] || 'default';
  };

  const getSLAProgress = (elapsed: number, total: number) => {
    const percentage = (elapsed / total) * 100;
    const remaining = total - elapsed;
    return { percentage, remaining };
  };

  const filteredTickets = selectedDept === 'ALL' 
    ? tickets 
    : tickets.filter(t => t.department === selectedDept);

  const kpiData = {
    timeToWO: 45, // seconds
    completionRateHK: 96, // %
    timeToRepairENG: 55, // minutes
    classificationAccuracy: 98.5, // %
    guestSatisfaction: 4.7 // /5
  };

  return (
    <div className="space-y-8 p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          SLA Dashboard
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Monitor response times and track service level compliance in real-time.
        </p>
      </div>

      {/* KPI Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Key Metrics</h2>
        <div className="grid md:grid-cols-5 gap-6">
          <Card className="p-6 text-center bg-gradient-to-br from-tamara-50 to-white border-0 shadow-lg">
            <div className="text-3xl font-bold text-tamara-primary mb-2">{kpiData.timeToWO}s</div>
            <div className="text-sm text-muted-foreground">Median Time-to-WO</div>
          </Card>
          <Card className="p-6 text-center bg-success-soft border-l-4 border-l-success">
            <div className="text-3xl font-bold text-success mb-2">{kpiData.completionRateHK}%</div>
            <div className="text-sm text-muted-foreground">HK Completion Rate</div>
          </Card>
          <Card className="p-6 text-center bg-warning-soft border-l-4 border-l-warning">
            <div className="text-3xl font-bold text-warning mb-2">{kpiData.timeToRepairENG}m</div>
            <div className="text-sm text-muted-foreground">Avg Time-to-Repair (ENG)</div>
          </Card>
          <Card className="p-6 text-center bg-tamara-50/50 border-l-4 border-l-tamara-primary">
            <div className="text-3xl font-bold text-tamara-primary mb-2">{kpiData.classificationAccuracy}%</div>
            <div className="text-sm text-muted-foreground">AI Classification Accuracy</div>
          </Card>
          <Card className="p-6 text-center bg-success-soft border-l-4 border-l-success">
            <div className="text-3xl font-bold text-success mb-2">{kpiData.guestSatisfaction}/5</div>
            <div className="text-sm text-muted-foreground">Guest Satisfaction</div>
          </Card>
        </div>
      </section>

      {/* Work Orders Section */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">Live Work Orders</h2>
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedDept('ALL')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedDept === 'ALL' 
                  ? 'bg-tamara-primary text-white' 
                  : 'bg-muted text-muted-foreground hover:bg-tamara-100'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedDept('HK')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedDept === 'HK' 
                  ? 'bg-tamara-primary text-white' 
                  : 'bg-muted text-muted-foreground hover:bg-tamara-100'
              }`}
            >
              Housekeeping
            </button>
            <button
              onClick={() => setSelectedDept('ENG')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedDept === 'ENG' 
                  ? 'bg-tamara-primary text-white' 
                  : 'bg-muted text-muted-foreground hover:bg-tamara-100'
              }`}
            >
              Engineering
            </button>
            <button
              onClick={() => setSelectedDept('FO')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedDept === 'FO' 
                  ? 'bg-tamara-primary text-white' 
                  : 'bg-muted text-muted-foreground hover:bg-tamara-100'
              }`}
            >
              Front Office
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {filteredTickets.map((ticket) => {
            const { percentage, remaining } = getSLAProgress(ticket.elapsed, ticket.slaMinutes);
            const isRisky = percentage > 80;
            
            return (
              <Card key={ticket.id} className={`p-6 ${isRisky ? 'border-l-4 border-l-destructive' : ''}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <h3 className="font-bold text-lg">{ticket.id}</h3>
                    <Badge variant={getStatusBadge(ticket.status)} size="sm">
                      {ticket.status}
                    </Badge>
                    <Badge variant={getPriorityBadge(ticket.priority)} size="sm">
                      {ticket.priority}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {ticket.department} | Kamar {ticket.room}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-tamara-primary">
                      {remaining}m
                    </div>
                    <div className="text-xs text-muted-foreground">Remaining</div>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">{ticket.description}</p>
                
                {/* SLA Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>SLA Progress</span>
                    <span>{Math.round(percentage)}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        percentage > 90 ? 'bg-destructive' : 
                        percentage > 75 ? 'bg-warning' : 
                        'bg-success'
                      }`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Summary Section */}
      <section>
        <Card className="p-8 bg-gradient-to-br from-tamara-50 to-white border-0 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">What You Get</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-tamara-primary rounded-full mt-2" />
              <span>Real-time SLA tracking prevents service delays</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-tamara-primary rounded-full mt-2" />
              <span>Automatic escalation improves guest satisfaction</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-tamara-primary rounded-full mt-2" />
              <span>WhatsApp integration makes it simple for everyone</span>
            </li>
          </ul>
        </Card>
      </section>
    </div>
  );
};
