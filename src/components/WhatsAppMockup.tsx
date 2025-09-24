import { useState, useEffect } from "react";

interface Message {
  sender: 'bot' | 'user' | 'bot-carousel';
  text?: string;
  items?: Array<{
    image: string;
    title: string;
    price: string;
  }>;
}

const WhatsAppMockup = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const conversationFlow: Message[] = [
    { 
      sender: 'bot', 
      text: 'Selamat datang di [Hotel XYZ] 🌸\nKami siap membantu kebutuhan Anda selama menginap.\nSilakan pilih menu:\n\n1. Info Hotel & Fasilitas\n2. Request Housekeeping\n3. Room Service\n4. Keluhan / Complaint\n5. Feedback Pengalaman\n99. Emergency Contact\n0. Kembali ke Menu Utama' 
    },
    { sender: 'user', text: '1' },
    { 
      sender: 'bot', 
      text: 'Info Hotel & Fasilitas\n\nWifi: SSID = HotelXYZ | Password = hotel123\nSarapan: 06:30–10:00 di resto lt.1\nKolam renang: 07:00–19:00\nLaundry: Hubungi housekeeping (menu 2)\n\n👉 Ketik 0 untuk kembali ke Menu Utama\n👉 Ketik 99 untuk Emergency Contact' 
    },
    { sender: 'user', text: '0' },
    { sender: 'bot', text: 'Kembali ke Menu Utama' },
    { sender: 'user', text: '2' },
    { 
      sender: 'bot', 
      text: 'Silakan isi permintaan housekeeping Anda.\nNomor kamar: ___ \nJenis permintaan: (contoh: extra towel, clean up, ganti linen)\nUpload foto (opsional).\n\n👉 Laporan dikirim ke Supervisor Housekeeping.' 
    },
    { sender: 'user', text: 'Nomor kamar: 101. Jenis permintaan: extra towel, clean up' },
    { sender: 'bot', text: 'Laporan Anda sudah diterima dan akan segera diproses. Terima kasih!' },
    { sender: 'user', text: '3' },
    { 
      sender: 'bot', 
      text: 'Menu Room Service:\n1. Pesan Makanan\n2. Pesan Minuman\n3. Layanan Tambahan\n\n👉 Pilih nomor sesuai kebutuhan.' 
    },
    { sender: 'user', text: '1' },
    { sender: 'bot', text: 'Silakan pilih makanan dari menu di bawah ini:' },
    {
      sender: 'bot-carousel',
      items: [
        { image: '/api/placeholder/160/100', title: 'Nasi Goreng', price: 'Rp 45.000' },
        { image: '/api/placeholder/160/100', title: 'Mie Goreng', price: 'Rp 40.000' },
        { image: '/api/placeholder/160/100', title: 'Sate Ayam', price: 'Rp 55.000' }
      ]
    },
    { sender: 'user', text: 'Pesan: Nasi Goreng - Rp 45.000' },
    { sender: 'bot', text: 'Baik, pesanan Anda: Nasi Goreng (Rp 45.000). Total: Rp 45.000. Apakah Anda ingin melanjutkan ke pembayaran?' },
    { sender: 'user', text: 'Ya' },
    { sender: 'bot', text: 'Pembayaran Anda berhasil! Pesanan Anda sedang diproses. Terima kasih!' },
    { sender: 'user', text: '5' },
    { 
      sender: 'bot', 
      text: 'Terima kasih sudah menginap di [Hotel XYZ] 🙏\nMohon beri rating pengalaman Anda (1–5):\n1 = Sangat buruk | 5 = Sangat baik' 
    },
    { sender: 'user', text: '5' },
    { sender: 'bot', text: 'Terima kasih atas apresiasi Anda 😊\nMohon komentar singkat (opsional).' },
    { sender: 'user', text: 'Kamar bersih, staf ramah.' },
    { sender: 'bot', text: 'Terima kasih atas feedback Anda 🌸\nSaran Anda sangat membantu kami meningkatkan layanan.' }
  ];

  useEffect(() => {
    const sendNextMessage = () => {
      if (messageIndex < conversationFlow.length) {
        const message = conversationFlow[messageIndex];
        
        if (message.sender === 'bot' || message.sender === 'bot-carousel') {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, message]);
            setMessageIndex(prev => prev + 1);
          }, Math.random() * 1000 + 800);
        } else {
          setTimeout(() => {
            setMessages(prev => [...prev, message]);
            setMessageIndex(prev => prev + 1);
          }, Math.random() * 300 + 400);
        }
      } else {
        // Reset conversation after delay
        setTimeout(() => {
          setMessages([]);
          setMessageIndex(0);
        }, 3000);
      }
    };

    const timer = setTimeout(sendNextMessage, 100);
    return () => clearTimeout(timer);
  }, [messageIndex, conversationFlow.length]);

  const TypingIndicator = () => (
    <div className="flex items-center gap-1 p-3 bg-white rounded-2xl rounded-bl-sm max-w-fit shadow-sm">
      <div className="flex gap-1">
        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden max-w-md mx-auto">
      {/* WhatsApp Header */}
      <div className="bg-[#075e54] text-white p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">
          T
        </div>
        <div>
          <div className="font-semibold">Tamara</div>
          <div className="text-xs text-green-200">Online</div>
        </div>
      </div>

      {/* Chat Body */}
      <div 
        className="h-80 overflow-y-auto p-4 space-y-3"
        style={{ backgroundColor: '#e5ddd5' }}
      >
        {messages.map((message, index) => (
          <div key={index} className="animate-fade-in">
            {message.sender === 'bot-carousel' ? (
              <div className="max-w-[80%] bg-white rounded-2xl rounded-bl-sm p-3 shadow-sm">
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {message.items?.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex-shrink-0 w-32 bg-gray-50 rounded-lg overflow-hidden">
                      <div className="w-full h-16 bg-gradient-to-r from-tamara-100 to-tamara-primary flex items-center justify-center text-white text-xs font-semibold">
                        {item.title}
                      </div>
                      <div className="p-2 text-center">
                        <div className="text-xs font-medium">{item.title}</div>
                        <div className="text-xs text-tamara-primary font-semibold">{item.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div
                className={`max-w-[80%] p-3 rounded-2xl shadow-sm ${
                  message.sender === 'bot'
                    ? 'bg-white rounded-bl-sm'
                    : 'bg-[#dcf8c6] rounded-br-sm ml-auto'
                }`}
              >
                <p className="text-sm whitespace-pre-line">{message.text}</p>
              </div>
            )}
          </div>
        ))}
        {isTyping && <TypingIndicator />}
      </div>

      {/* Chat Footer Info */}
      <div className="p-3 bg-gray-50 border-t text-center">
        <p className="text-xs text-gray-500">Demo Workflow - Live on WhatsApp</p>
      </div>
    </div>
  );
};

export default WhatsAppMockup;