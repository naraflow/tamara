import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface DemoHomePageProps {
  onNextPage: () => void;
}

export const DemoHomePage: React.FC<DemoHomePageProps> = ({ onNextPage }) => {
  const kpiCards = [
    {
      title: 'Fokus Utama',
      value: 'SLA Menit',
      description: 'Bukan jam. Keluhan kebersihan idealnya selesai kurang dari 30 menit.',
    },
    {
      title: 'Routing Cerdas',
      value: 'Klasifikasi 98% Akurat',
      description: 'Otomatis kirim Work Order (WO) ke Front Office, Housekeeping, atau Engineering.',
    },
    {
      title: 'Outcome',
      value: 'Kepuasan Tamu Meningkat',
      description: 'Mendukung peningkatan GSS (Guest Satisfaction Score) hingga 10%.',
    },
  ];

  const workflowSteps = [
    {
      number: 1,
      title: 'INPUT: Keluhan Tamu melalui WhatsApp',
      description: 'Tamu mengirim pesan keluhan menggunakan bahasa sehari-hari (misal: "AC kamar 501 tidak dingin") ke nomor WA hotel.',
    },
    {
      number: 2,
      title: 'PROSES: Routing Otomatis Kurang dari 60 Detik',
      items: [
        'Klasifikasi Otomatis: Tamara menganalisis keluhan (misal: "AC tidak dingin" menjadi Engineering).',
        'Work Order Cepat: WO (Work Order) otomatis dibuat di sistem CMMS/Task Management.',
        'Notifikasi Real-time: PIC (Teknisi/HK) dan Front Office (FO) menerima notifikasi instan untuk validasi.',
      ],
    },
    {
      number: 3,
      title: 'OUTPUT & OUTCOME: Pelacakan & Kepatuhan SLA',
      items: [
        'Feedback Loop Otomatis: Status penanganan WO dikirim kembali ke tamu via WA (misal: "Teknisi sedang menuju kamar Anda").',
        'Dashboard SLA: Manajer memantau Time-to-WO, Time to Repair (TTR), dan risiko pelanggaran SLA secara real-time.',
        'Eskalasi Otomatis: Peringatan dikirim ke Manajer jika WO melewati 50% atau 100% batas waktu SLA.',
      ],
    },
  ];

  return (
    <div className="space-y-12 p-8">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight">
          Tamara: Agen Resolusi
          <br />
          <span className="text-tamara-primary">Keluhan Tamu Hotel</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Solusi cepat berbasis WhatsApp untuk menjamin kepuasan tamu dan
          kepatuhan Service Level Agreement (SLA) operasional.
        </p>
      </section>

      {/* KPI Cards */}
      <section className="grid md:grid-cols-3 gap-8">
        {kpiCards.map((kpi, index) => (
          <Card key={index} className="p-8 border-l-4 border-l-tamara-primary bg-tamara-50/50 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
            <p className="text-sm font-medium text-tamara-primary mb-2">{kpi.title}</p>
            <h3 className="text-2xl font-bold text-foreground mb-3">{kpi.value}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{kpi.description}</p>
          </Card>
        ))}
      </section>

      {/* Workflow Section */}
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          Alur Kerja (Workflow) Tamara
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
      <section className="text-center py-8">
        <Button
          onClick={onNextPage}
          className="bg-tamara-primary hover:bg-tamara-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          Lanjut ke Simulasi Interaktif (Step 2)
        </Button>
      </section>
    </div>
  );
};
