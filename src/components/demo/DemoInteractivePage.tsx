import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/Badge';

interface DemoInteractivePageProps {
  onNextPage: () => void;
}

interface Message {
  sender: 'bot' | 'user';
  text: string;
}

const chatMessages: Message[] = [
  {
    sender: 'bot',
    text: 'Selamat datang di [Hotel XYZ] 🌸\nKami siap membantu kebutuhan Anda selama menginap.\nSilakan pilih menu:\n\n1. Info Hotel & Fasilitas\n2. Request Housekeeping\n3. Room Service\n4. Keluhan / Complaint\n5. Feedback Pengalaman\n99. Emergency Contact\n0. Kembali ke Menu Utama'
  },
  { sender: 'user', text: '4' },
  {
    sender: 'bot',
    text: 'Mohon maaf atas ketidaknyamanan 🙏\nNomor kamar: ___\nJelaskan keluhan Anda: ___\nUpload foto (opsional).\n\n👉 Laporan langsung dikirim ke Supervisor Duty.'
  },
  { sender: 'user', text: 'Nomor kamar: 101. Keluhan: AC kamar tidak dingin.' },
  {
    sender: 'bot',
    text: 'Terima kasih, laporan keluhan Anda sudah kami terima dan akan segera ditindaklanjuti.\n\n[Tamara Routing]: Keluhan diklasifikasi sebagai Fasilitas Tidak Berfungsi (Engineering) dengan Prioritas Urgent. WO dibuat di CMMS.'
  },
  {
    sender: 'bot',
    text: '[Feedback Loop]: Teknisi Engineering telah ditugaskan dan sedang dalam perjalanan (SLA < 60 Menit).'
  },
];

export const DemoInteractivePage: React.FC<DemoInteractivePageProps> = ({ onNextPage }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  const addMessage = (message: Message) => {
    setMessages(prev => [...prev, message]);
    setTimeout(() => {
      if (chatBodyRef.current) {
        chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
      }
    }, 100);
  };

  const simulateTyping = (duration: number) => {
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), duration);
  };

  const simulateChat = () => {
    if (currentMessageIndex >= chatMessages.length) return;

    const message = chatMessages[currentMessageIndex];

    if (message.sender === 'bot') {
      simulateTyping(1500);
      setTimeout(() => {
        addMessage(message);
        if (currentMessageIndex === 4) {
          // Show notification after complaint is received
          setTimeout(() => setShowNotification(true), 1000);
        }
        setCurrentMessageIndex(prev => prev + 1);
      }, 1500);
    } else {
      setTimeout(() => {
        addMessage(message);
        setCurrentMessageIndex(prev => prev + 1);
      }, 800);
    }
  };

  useEffect(() => {
    if (currentMessageIndex < chatMessages.length) {
      const timer = setTimeout(simulateChat, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentMessageIndex]);

  const resetDemo = () => {
    setMessages([]);
    setCurrentMessageIndex(0);
    setIsTyping(false);
    setShowNotification(false);
  };

  return (
    <div className="space-y-8 p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Live Simulation
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Watch how guests raise complaints and staff receives instant notifications.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Guest WhatsApp Mockup */}
        <Card className="p-6 shadow-xl bg-white">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">
              Guest Side
            </h2>
            <Button variant="ghost" size="sm" onClick={resetDemo} className="text-tamara-primary">
              Reset
            </Button>
          </div>

          <div className="bg-muted rounded-xl overflow-hidden shadow-md">
            {/* WhatsApp Header */}
            <div className="bg-tamara-primary px-4 py-3 text-white">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xs font-semibold">T</span>
                </div>
                <div>
                  <div className="font-medium">Tamara</div>
                  <div className="text-xs text-white/80">Online</div>
                </div>
              </div>
            </div>

            {/* Chat Body */}
            <div
              ref={chatBodyRef}
              className="h-96 p-4 overflow-y-auto bg-gradient-to-b from-muted to-muted/50 space-y-3"
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`max-w-[80%] p-3 rounded-2xl transition-all ${
                    message.sender === 'bot'
                      ? 'bg-card text-card-foreground shadow-sm self-start'
                      : 'bg-tamara-primary text-white shadow-sm self-end ml-auto'
                  }`}
                  style={{
                    marginLeft: message.sender === 'user' ? 'auto' : '0',
                    marginRight: message.sender === 'bot' ? 'auto' : '0',
                  }}
                >
                  <p className="text-sm whitespace-pre-line leading-relaxed">
                    {message.text}
                  </p>
                </div>
              ))}

              {isTyping && (
                <div className="bg-card text-card-foreground p-3 rounded-2xl shadow-sm max-w-[80%]">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.1s'}} />
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.2s'}} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* PIC Notification Mockup */}
        <Card className="p-6 shadow-xl bg-white">
          <h2 className="text-xl font-semibold mb-4">
            Staff Side
          </h2>

          <div className="h-96 bg-tamara-50/30 rounded-lg p-4 space-y-4 overflow-y-auto">
            {/* CMMS Header */}
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <span className="font-semibold text-foreground">Work Orders (Engineering)</span>
              <span className="text-sm text-muted-foreground">
                {new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>

            {/* New Notification */}
            {showNotification && (
              <Card
                className="p-4 bg-tamara-primary text-white shadow-xl animate-slide-in"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">WO Masuk dari Tamara</span>
                  <Badge variant="destructive" size="sm">URGENT</Badge>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-bold">WO #202409-105</span>
                  <span className="text-xs">Baru saja</span>
                </div>
                <div className="space-y-1 text-sm mb-3">
                  <p><strong>Lokasi:</strong> Kamar 101</p>
                  <p><strong>Keluhan:</strong> AC kamar tidak dingin</p>
                  <p><strong>SLA Target:</strong> 60 Menit</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-white text-tamara-primary hover:bg-white/90"
                >
                  Ambil Tugas (Start WO)
                </Button>
              </Card>
            )}

            {/* Other Work Orders */}
            <Card className="p-3 border-l-4 border-l-warning">
              <div className="flex items-center justify-between mb-1">
                <Badge variant="warning" size="sm">Housekeeping - Urgent</Badge>
                <span className="text-xs text-muted-foreground">08:35 AM</span>
              </div>
              <p className="text-sm font-medium">WO #202409-104: Perlu Tambahan Handuk (Kamar 203)</p>
            </Card>

            <Card className="p-3 border-l-4 border-l-muted">
              <div className="flex items-center justify-between mb-1">
                <Badge variant="outline" size="sm">Engineering - Standard</Badge>
                <span className="text-xs text-muted-foreground">07:15 AM</span>
              </div>
              <p className="text-sm font-medium">WO #202409-103: Lampu koridor mati (Lantai 3)</p>
            </Card>

            <p className="text-center text-xs text-muted-foreground mt-auto">
              CMMS App by Naraflow
            </p>
          </div>
        </Card>
      </div>

      <div className="text-center py-8">
        <Button 
          onClick={onNextPage}
          className="bg-tamara-primary hover:bg-tamara-600 text-white px-10 py-7 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          View SLA Dashboard →
        </Button>
      </div>
    </div>
  );
};
