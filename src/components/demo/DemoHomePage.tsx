import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import demoHeroIllustration from '@/assets/demo-hero-illustration.png';

interface DemoHomePageProps {
  onNextPage: () => void;
}

export const DemoHomePage: React.FC<DemoHomePageProps> = ({ onNextPage }) => {
  const kpiCards = [
    {
      title: 'Respons Cepat',
      value: '< 30 menit',
      description: 'Permintaan housekeeping diselesaikan dengan cepat.',
    },
    {
      title: 'Routing Pintar',
      value: '98% akurat',
      description: 'Penugasan departemen otomatis.',
    },
    {
      title: 'Kepuasan Tamu',
      value: 'Naik 10%',
      description: 'Layanan lebih baik, tamu lebih puas.',
    },
  ];

  const workflowSteps = [
    {
      number: 1,
      title: 'Tamu Melaporkan Keluhan',
      description: 'Tamu mengirim keluhan via WhatsApp dengan bahasa sehari-hari. Contoh: "AC di kamar 501 tidak dingin."',
    },
    {
      number: 2,
      title: 'Routing Otomatis',
      items: [
        'AI mengklasifikasi masalah (contoh: "masalah AC" → Engineering)',
        'Work Order dibuat otomatis di sistem Anda',
        'Staf menerima notifikasi instan',
      ],
    },
    {
      number: 3,
      title: 'Update Real-Time',
      items: [
        'Tamu mendapat update status via WhatsApp',
        'Manager memantau kepatuhan SLA di dashboard',
        'Eskalasi otomatis untuk tugas yang terlambat',
      ],
    },
  ];

  return (
    <div className="space-y-16 p-8">
      {/* Hero Section */}
      <section className="text-center py-16">
        <div className="max-w-4xl mx-auto mb-8">
          <img 
            src={demoHeroIllustration} 
            alt="Ilustrasi sistem operasional hotel Tamara" 
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>
        <h1 className="text-5xl font-bold mb-6">
          Tamara
        </h1>
        <p className="text-2xl text-tamara-primary font-semibold mb-4">
          Sistem Penanganan Keluhan Tamu Hotel
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Penanganan keluhan instan melalui WhatsApp. Sederhana. Cepat. Efektif.
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
          Cara Kerja
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
          Lihat Demo Interaktif →
        </Button>
      </section>
    </div>
  );
};
