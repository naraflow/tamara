import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import WhatsAppMockup from "@/components/WhatsAppMockup";
import { CheckCircle, MessageSquare, Shield, Package, Star, BarChart3, Clock, Smartphone, Users, Settings, DollarSign, FileText } from "lucide-react";

const Index = () => {
  const [currentLang, setCurrentLang] = useState<'id' | 'en'>('id');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const translations = {
    id: {
      // Navigation
      'nav.features': 'Fitur',
      'nav.how': 'Cara Kerja',
      'nav.roles': 'Peran/Flow',
      'nav.about': 'Tentang',
      'nav.faq': 'FAQ',
      'nav.whatsapp': 'Hubungi via WhatsApp',
      
      // Hero Section
      'hero.title': 'Sistem Operasional Hotel Berbasis WhatsApp',
      'hero.subtitle': 'Standarkan housekeeping, maintenance, front desk, inventory, finance, dan feedback tamu—tanpa aplikasi baru.',
      'hero.compliance': '✅ Compliant: tamu opt-in via QR/booking link • ✅ Low-bandwidth • ✅ Audit trail',
      'cta.whatsapp': 'Hubungi via WhatsApp',
      'cta.learn': 'Pelajari Fitur',
      
      // Features
      'features.title': 'Fitur Utama',
      'features.subtitle': 'Didesain dari alur kerja nyata hotel non-bintang, guest house, dan villa.',
      'features.stdTitle': 'Alur Kerja Terstandar',
      'features.stdText': 'Housekeeping, maintenance, front desk, inventory, finance—semua tercatat rapi, seragam, dan bisa diaudit.',
      'features.rtTitle': 'Laporan Real-time',
      'features.rtText': 'Status kamar, keluhan, dan kas harian tersinkron otomatis—langsung dari WhatsApp.',
      'features.fraudTitle': 'Pencegahan Fraud',
      'features.fraudText': 'Timestamp & user ID di tiap input, foto verifikasi, dan log audit mengurangi kebocoran kas & amenities.',
      'features.invTitle': 'Kontrol Inventaris',
      'features.invText': 'Pemakaian amenities terpantau; threshold stok otomatis memicu reorder untuk di-approve admin.',
      'features.fbTitle': 'Feedback Tamu Organik',
      'features.fbText': 'Tamu opt-in untuk layanan; saat check-out, rating 1–5 + komentar tersimpan dan alert otomatis ke supervisor ≤3.',
      'features.mgrTitle': 'Ringkasan Manajer',
      'features.mgrText': 'Okupansi, ready rooms, cashflow, rating tamu—tersaji otomatis harian (PDF/Excel on demand).',
      
      // How it Works
      'how.title': 'Cara Kerja',
      'how.step1t': 'Tamu Opt-in via QR/Link',
      'how.step1d': 'QR di resepsionis/kamar atau link dari OTA. Tamu memulai chat WhatsApp untuk akses layanan.',
      'how.step2t': 'Staf Input → Supervisor Verifikasi',
      'how.step2d': 'Housekeeping/maintenance/front desk input terstruktur; supervisor approve/reject; notifikasi otomatis.',
      'how.step3t': 'Manager Digest & Insight',
      'how.step3d': 'Ringkasan harian via WA; minta detail PDF/Excel kapan saja; semua ada audit trail.',
      
      // Roles
      'roles.title': 'Peran & Alur Singkat',
      'roles.hk': 'Housekeeping',
      'roles.hkD': 'Update status kamar + foto → kirim ke supervisor → kamar jadi "Ready" setelah approve.',
      'roles.spv': 'Supervisor',
      'roles.spvD': 'Approve/Reject housekeeping; terima keluhan tamu (alert real-time).',
      'roles.mtc': 'Maintenance',
      'roles.mtcD': 'Terima request AC/lampu/keran; update status: proses/selesai/butuh sparepart.',
      'roles.fd': 'Front Desk',
      'roles.fdD': 'Check-in/out, pembayaran, dan trigger feedback saat check-out.',
      'roles.inv': 'Inventory',
      'roles.invD': 'Verifikasi pemakaian amenities; threshold stok memicu reorder untuk persetujuan.',
      'roles.fin': 'Finance & Manager',
      'roles.finD': 'Rekap kas harian; manager menerima ringkasan okupansi & rating; approve biaya besar.',
      
      // Metrics
      'metrics.title': 'Dampak yang Ditargetkan',
      'metrics.m1': 'Waktu respon housekeeping → supervisor',
      'metrics.m2': 'Selisih kas harian (fraud kecil)',
      'metrics.m3': 'Response rate feedback tamu',
      'metrics.m4': 'Cukup WhatsApp—multi-device, low-bandwidth',
      
      // About
      'about.title': 'Tentang Tamara',
      'about.text': 'Kami membantu hotel kecil–menengah naik kelas dengan workflow sederhana namun kuat. Fokus kami: efisiensi operasional, transparansi, dan pengalaman tamu yang konsisten—tanpa membebani staf dengan aplikasi baru.',
      
      // FAQ
      'faq.title': 'Pertanyaan Umum',
      'faq.q1': 'Perlu aplikasi khusus?',
      'faq.a1': 'Tidak. Semua berjalan via WhatsApp. Kami sediakan template, notifikasi, dan dashboard ringkas bila diperlukan.',
      'faq.q2': 'Bagaimana kalau sinyal lemah?',
      'faq.a2': 'Flow didesain low-bandwidth: teks + foto seperlunya. Proses tetap berjalan tanpa aplikasi berat.',
      'faq.q3': 'Bisa untuk multi-hotel?',
      'faq.a3': 'Bisa. Struktur role-based memudahkan scaling dari 10 hingga 200 kamar per properti, lintas cabang.',
      
      // Contact
      'contact.title': 'Siap Tingkatkan Efisiensi Hotel Anda?',
      'contact.text': 'Diskusikan kebutuhan Anda dengan kami. Dapatkan demo alur WhatsApp yang sesuai SOP hotel Anda.',
      
      // Footer
      'footer.tag': 'WhatsApp-first workflow untuk operasional hotel.',
      'footer.links': 'Tautan',
      'footer.contact': 'Kontak',
    },
    en: {
      // Navigation
      'nav.features': 'Features',
      'nav.how': 'How it Works',
      'nav.roles': 'Roles/Flows',
      'nav.about': 'About',
      'nav.faq': 'FAQ',
      'nav.whatsapp': 'WhatsApp us',
      
      // Hero Section
      'hero.title': 'WhatsApp-first Hotel Operations System',
      'hero.subtitle': 'Standardize housekeeping, maintenance, front desk, inventory, finance, and guest feedback—no new app needed.',
      'hero.compliance': '✅ Compliant guest opt-in • ✅ Low-bandwidth • ✅ Full audit trail',
      'cta.whatsapp': 'WhatsApp us',
      'cta.learn': 'See Features',
      
      // Features
      'features.title': 'Key Features',
      'features.subtitle': 'Built from real workflows of budget hotels, guest houses, and villas.',
      'features.stdTitle': 'Standardized Workflows',
      'features.stdText': 'Housekeeping, maintenance, front desk, inventory, finance—recorded neatly, consistently, and auditable.',
      'features.rtTitle': 'Real-time Reporting',
      'features.rtText': 'Room status, complaints, and daily cash sync automatically—from WhatsApp.',
      'features.fraudTitle': 'Anti-fraud Controls',
      'features.fraudText': 'Timestamps & user IDs, photo verification, and audit logs reduce petty cash & amenities leakage.',
      'features.invTitle': 'Inventory Control',
      'features.invText': 'Track amenities usage; stock thresholds trigger reorder for admin approval.',
      'features.fbTitle': 'Organic Guest Feedback',
      'features.fbText': 'Guests opt-in for services; at check-out they rate 1–5 with comments; low ratings alert supervisors.',
      'features.mgrTitle': 'Manager Digest',
      'features.mgrText': 'Occupancy, ready rooms, cash flow, guest ratings—auto daily; PDF/Excel on demand.',
      
      // How it Works
      'how.title': 'How it Works',
      'how.step1t': 'Guest Opt-in via QR/Link',
      'how.step1d': 'QR at lobby/room or OTA link. Guest starts WhatsApp chat to access services.',
      'how.step2t': 'Staff Input → Supervisor Verify',
      'how.step2d': 'Structured inputs; supervisor approve/reject; notifications and routing are automatic.',
      'how.step3t': 'Manager Digest & Insight',
      'how.step3d': 'Daily summary via WhatsApp; request detailed PDF/Excel anytime; full audit trail.',
      
      // Roles
      'roles.title': 'Roles & Quick Flows',
      'roles.hk': 'Housekeeping',
      'roles.hkD': 'Update room status + photo → supervisor → room "Ready" after approval.',
      'roles.spv': 'Supervisor',
      'roles.spvD': 'Approve/Reject housekeeping; receives guest complaints in real time.',
      'roles.mtc': 'Maintenance',
      'roles.mtcD': 'Handle AC/light/tap issues; update status: in-progress/done/needs spare parts.',
      'roles.fd': 'Front Desk',
      'roles.fdD': 'Check-in/out, payments, and trigger guest feedback at check-out.',
      'roles.inv': 'Inventory',
      'roles.invD': 'Verify amenities usage; stock threshold triggers reorder for approval.',
      'roles.fin': 'Finance & Manager',
      'roles.finD': 'Daily cash recap; manager gets occupancy & rating digest; approves large expenses.',
      
      // Metrics
      'metrics.title': 'Targeted Impact',
      'metrics.m1': 'Housekeeping → supervisor response time',
      'metrics.m2': 'Daily cash discrepancy (petty fraud)',
      'metrics.m3': 'Guest feedback response rate',
      'metrics.m4': 'Zero new apps—WhatsApp only',
      
      // About
      'about.title': 'About Tamara',
      'about.text': 'We help small & mid-size hotels level up with simple yet powerful workflows—driving efficiency, transparency, and consistent guest experience without burdening staff with new apps.',
      
      // FAQ
      'faq.title': 'FAQ',
      'faq.q1': 'Do we need a separate app?',
      'faq.a1': 'No. Everything runs on WhatsApp. We provide templates, notifications, and a light dashboard if needed.',
      'faq.q2': 'What about weak signal areas?',
      'faq.a2': 'Flows are designed to be low-bandwidth: mostly text + photos when needed. No heavy app required.',
      'faq.q3': 'Multi-property support?',
      'faq.a3': 'Yes. Role-based structure scales from 10 to 200 rooms per property, across branches.',
      
      // Contact
      'contact.title': 'Ready to Boost Your Hotel\'s Efficiency?',
      'contact.text': 'Tell us your needs. Get a demo flow on WhatsApp tailored to your SOPs.',
      
      // Footer
      'footer.tag': 'WhatsApp-first workflows for hotel operations.',
      'footer.links': 'Links',
      'footer.contact': 'Contact',
    }
  };

  const t = (key: string) => translations[currentLang][key as keyof typeof translations[typeof currentLang]] || key;

  const toggleLanguage = () => {
    setCurrentLang(currentLang === 'id' ? 'en' : 'id');
  };

  const whatsappMessage = currentLang === 'id' 
    ? 'Hai Tim Tamara, saya ingin mencoba demo' 
    : 'Hi Tamara team, I would like to try a demo';
  
  const whatsappUrl = `https://wa.me/6287731771859?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/90 backdrop-blur-sm border-b border-border">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg tamara-gradient text-white flex items-center justify-center font-bold text-sm">
              T
            </div>
            <span className="text-xl sm:text-2xl font-extrabold tamara-text">Tamara</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-muted-foreground hover:text-primary font-medium transition-colors">
              {t('nav.features')}
            </a>
            <a href="#how" className="text-muted-foreground hover:text-primary font-medium transition-colors">
              {t('nav.how')}
            </a>
            <a href="#roles" className="text-muted-foreground hover:text-primary font-medium transition-colors">
              {t('nav.roles')}
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary font-medium transition-colors">
              {t('nav.about')}
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-primary font-medium transition-colors">
              {t('nav.faq')}
            </a>
            <Button asChild className="tamara-gradient">
              <a href={whatsappUrl} target="_blank" rel="noopener">
                <MessageSquare className="w-4 h-4 mr-2" />
                {t('nav.whatsapp')}
              </a>
            </Button>
            <Button variant="outline" onClick={toggleLanguage}>
              {currentLang === 'id' ? 'EN' : 'ID'}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </Button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-card">
            <div className="px-4 py-3 space-y-2">
              <a href="#features" className="block py-2 text-muted-foreground">{t('nav.features')}</a>
              <a href="#how" className="block py-2 text-muted-foreground">{t('nav.how')}</a>
              <a href="#roles" className="block py-2 text-muted-foreground">{t('nav.roles')}</a>
              <a href="#about" className="block py-2 text-muted-foreground">{t('nav.about')}</a>
              <a href="#faq" className="block py-2 text-muted-foreground">{t('nav.faq')}</a>
              <a href={whatsappUrl} target="_blank" rel="noopener" className="block py-2 font-semibold tamara-text">
                {t('nav.whatsapp')}
              </a>
              <Button variant="outline" onClick={toggleLanguage} size="sm" className="mt-2">
                {currentLang === 'id' ? 'EN' : 'ID'}
              </Button>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tamara-text">
              {t('hero.title')}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              {t('hero.subtitle')}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="tamara-gradient">
                <a href={whatsappUrl} target="_blank" rel="noopener">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  {t('cta.whatsapp')}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#features">{t('cta.learn')}</a>
              </Button>
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <div className="flex items-center gap-2 bg-accent/50 rounded-full px-3 py-2">
                <CheckCircle className="w-4 h-4 text-tamara-primary flex-shrink-0" />
                <span className="text-foreground">GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2 bg-accent/50 rounded-full px-3 py-2">
                <CheckCircle className="w-4 h-4 text-tamara-primary flex-shrink-0" />
                <span className="text-foreground">Low Bandwidth</span>
              </div>
              <div className="flex items-center gap-2 bg-accent/50 rounded-full px-3 py-2">
                <CheckCircle className="w-4 h-4 text-tamara-primary flex-shrink-0" />
                <span className="text-foreground">Full Audit Trail</span>
              </div>
            </div>
          </div>
          
          {/* WhatsApp Interactive Mockup */}
          <div className="lg:col-span-5">
            <WhatsAppMockup />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center tamara-text">
            {t('features.title')}
          </h2>
          <p className="mt-3 text-center text-muted-foreground max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="tamara-card">
              <div className="w-10 h-10 rounded-full tamara-gradient text-white flex items-center justify-center mb-4">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('features.stdTitle')}</h3>
              <p className="text-muted-foreground">{t('features.stdText')}</p>
            </Card>
            
            <Card className="tamara-card">
              <div className="w-10 h-10 rounded-full tamara-gradient text-white flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('features.rtTitle')}</h3>
              <p className="text-muted-foreground">{t('features.rtText')}</p>
            </Card>
            
            <Card className="tamara-card">
              <div className="w-10 h-10 rounded-full tamara-gradient text-white flex items-center justify-center mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('features.fraudTitle')}</h3>
              <p className="text-muted-foreground">{t('features.fraudText')}</p>
            </Card>
            
            <Card className="tamara-card">
              <div className="w-10 h-10 rounded-full tamara-gradient text-white flex items-center justify-center mb-4">
                <Package className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('features.invTitle')}</h3>
              <p className="text-muted-foreground">{t('features.invText')}</p>
            </Card>
            
            <Card className="tamara-card">
              <div className="w-10 h-10 rounded-full tamara-gradient text-white flex items-center justify-center mb-4">
                <Star className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('features.fbTitle')}</h3>
              <p className="text-muted-foreground">{t('features.fbText')}</p>
            </Card>
            
            <Card className="tamara-card">
              <div className="w-10 h-10 rounded-full tamara-gradient text-white flex items-center justify-center mb-4">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('features.mgrTitle')}</h3>
              <p className="text-muted-foreground">{t('features.mgrText')}</p>
            </Card>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="how" className="bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center tamara-text">
              {t('how.title')}
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <Card className="p-6 border border-border">
                <p className="text-sm font-semibold tamara-text">01</p>
                <h3 className="text-xl font-semibold mt-1">{t('how.step1t')}</h3>
                <p className="text-muted-foreground mt-2">{t('how.step1d')}</p>
              </Card>
              <Card className="p-6 border border-border">
                <p className="text-sm font-semibold tamara-text">02</p>
                <h3 className="text-xl font-semibold mt-1">{t('how.step2t')}</h3>
                <p className="text-muted-foreground mt-2">{t('how.step2d')}</p>
              </Card>
              <Card className="p-6 border border-border">
                <p className="text-sm font-semibold tamara-text">03</p>
                <h3 className="text-xl font-semibold mt-1">{t('how.step3t')}</h3>
                <p className="text-muted-foreground mt-2">{t('how.step3d')}</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Roles Section */}
        <section id="roles" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center tamara-text">
            {t('roles.title')}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="tamara-card">
              <Users className="w-6 h-6 tamara-text mb-2" />
              <h3 className="font-semibold text-lg">{t('roles.hk')}</h3>
              <p className="text-muted-foreground mt-2">{t('roles.hkD')}</p>
            </Card>
            <Card className="tamara-card">
              <CheckCircle className="w-6 h-6 tamara-text mb-2" />
              <h3 className="font-semibold text-lg">{t('roles.spv')}</h3>
              <p className="text-muted-foreground mt-2">{t('roles.spvD')}</p>
            </Card>
            <Card className="tamara-card">
              <Settings className="w-6 h-6 tamara-text mb-2" />
              <h3 className="font-semibold text-lg">{t('roles.mtc')}</h3>
              <p className="text-muted-foreground mt-2">{t('roles.mtcD')}</p>
            </Card>
            <Card className="tamara-card">
              <Smartphone className="w-6 h-6 tamara-text mb-2" />
              <h3 className="font-semibold text-lg">{t('roles.fd')}</h3>
              <p className="text-muted-foreground mt-2">{t('roles.fdD')}</p>
            </Card>
            <Card className="tamara-card">
              <Package className="w-6 h-6 tamara-text mb-2" />
              <h3 className="font-semibold text-lg">{t('roles.inv')}</h3>
              <p className="text-muted-foreground mt-2">{t('roles.invD')}</p>
            </Card>
            <Card className="tamara-card">
              <DollarSign className="w-6 h-6 tamara-text mb-2" />
              <h3 className="font-semibold text-lg">{t('roles.fin')}</h3>
              <p className="text-muted-foreground mt-2">{t('roles.finD')}</p>
            </Card>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center tamara-text">
              {t('metrics.title')}
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-4">
              <Card className="p-6 text-center">
                <p className="text-4xl font-extrabold tamara-text">50%↓</p>
                <p className="text-muted-foreground mt-1">{t('metrics.m1')}</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="text-4xl font-extrabold tamara-text">&lt;1%</p>
                <p className="text-muted-foreground mt-1">{t('metrics.m2')}</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="text-4xl font-extrabold tamara-text">60%+</p>
                <p className="text-muted-foreground mt-1">{t('metrics.m3')}</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="text-4xl font-extrabold tamara-text">0 App</p>
                <p className="text-muted-foreground mt-1">{t('metrics.m4')}</p>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center tamara-text">
            {t('about.title')}
          </h2>
          <p className="mt-4 text-foreground text-lg text-center">
            {t('about.text')}
          </p>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-card border-y border-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center tamara-text">
              {t('faq.title')}
            </h2>
            <div className="mt-8 space-y-4">
              <details className="group rounded-2xl border border-border p-5 bg-card">
                <summary className="flex items-center justify-between cursor-pointer">
                  <span className="font-semibold">{t('faq.q1')}</span>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </summary>
                <p className="mt-3 text-muted-foreground">{t('faq.a1')}</p>
              </details>
              <details className="group rounded-2xl border border-border p-5 bg-card">
                <summary className="flex items-center justify-between cursor-pointer">
                  <span className="font-semibold">{t('faq.q2')}</span>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </summary>
                <p className="mt-3 text-muted-foreground">{t('faq.a2')}</p>
              </details>
              <details className="group rounded-2xl border border-border p-5 bg-card">
                <summary className="flex items-center justify-between cursor-pointer">
                  <span className="font-semibold">{t('faq.q3')}</span>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </summary>
                <p className="mt-3 text-muted-foreground">{t('faq.a3')}</p>
              </details>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section id="contact" className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tamara-text">
              {t('contact.title')}
            </h2>
            <p className="mt-3 text-muted-foreground text-lg">
              {t('contact.text')}
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="tamara-gradient">
                <a href={whatsappUrl} target="_blank" rel="noopener">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  {t('cta.whatsapp')}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#features">{t('cta.learn')}</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="tamara-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-white/20 text-white flex items-center justify-center font-bold text-sm">
                T
              </div>
              <span className="text-lg font-extrabold">Tamara</span>
            </div>
            <p className="mt-3 text-white/80 text-sm">{t('footer.tag')}</p>
          </div>
          <div>
            <h4 className="font-semibold">{t('footer.links')}</h4>
            <ul className="mt-3 space-y-2 text-white/80 text-sm">
              <li><a href="#features" className="hover:text-white transition-colors">{t('nav.features')}</a></li>
              <li><a href="#how" className="hover:text-white transition-colors">{t('nav.how')}</a></li>
              <li><a href="#roles" className="hover:text-white transition-colors">{t('nav.roles')}</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">{t('nav.about')}</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">{t('nav.faq')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">{t('footer.contact')}</h4>
            <p className="mt-3 text-white/80 text-sm">
              WhatsApp: <a className="underline hover:text-white transition-colors" href="https://wa.me/6287731771859" target="_blank" rel="noopener">+62 877-3177-1859</a>
            </p>
            <p className="text-white/80 text-sm">Email: hello@tamara.ops</p>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-white/70">
            © 2025 Tamara. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;