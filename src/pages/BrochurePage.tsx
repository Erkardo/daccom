import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, Settings, Wind, HardHat, CheckCircle2, Globe, ArrowRight, Zap, Shield, BarChart3, Cpu, Activity, Gauge, Target, Users, Building2, Heart, GraduationCap, Mail, Phone, MapPin, TrendingUp, Rocket, Sun, Moon, Maximize2, Share2, QrCode, X, Copy, Check } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function BrochurePage() {
  const { t, i18n } = useTranslation();
  const isMn = i18n.language === 'mn';
  const brochureRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isPresenting, setIsPresenting] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 9;

  useEffect(() => { 
    window.scrollTo(0, 0); 
  }, [isPresenting]);

  // Keyboard navigation for presentation mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isPresenting) return;
      if (e.key === 'ArrowRight' || e.key === ' ') {
        setCurrentPage(prev => Math.min(prev + 1, totalPages - 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentPage(prev => Math.max(prev - 1, 0));
      } else if (e.key === 'Escape') {
        setIsPresenting(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPresenting]);

  const handlePrint = () => {
    window.print();
  };

  const togglePresentation = () => {
    setIsPresenting(!isPresenting);
    setCurrentPage(0);
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`min-h-screen transition-all duration-700 ${theme === 'dark' ? '' : 'brochure-theme-light'}`} style={{ backgroundColor: 'var(--brochure-bg)', color: 'var(--brochure-text)' }}>
      {/* Screen-only toolbar */}
      <div className={`print:hidden fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-md border-b transition-all ${theme === 'dark' ? 'border-white/10 bg-[#0a0a0b]/80' : 'border-slate-200 bg-white/80'}`}>
        <div className="flex items-center gap-6">
          <Link to="/" className={`flex items-center gap-3 transition-colors group ${theme === 'dark' ? 'text-white/60 hover:text-cyan-400' : 'text-slate-500 hover:text-cyan-600'}`}>
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-[10px] uppercase tracking-widest">{isMn ? 'Нүүр хуудас' : 'Back to Site'}</span>
          </Link>
          
          <div className={`h-4 w-[1px] ${theme === 'dark' ? 'bg-white/10' : 'bg-slate-200'}`} />
          
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2 rounded-lg transition-all ${theme === 'dark' ? 'hover:bg-white/5 text-white/40 hover:text-cyan-400' : 'hover:bg-slate-100 text-slate-400 hover:text-cyan-600'}`}
              title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button 
              onClick={togglePresentation}
              className={`p-2 rounded-lg transition-all ${theme === 'dark' ? 'hover:bg-white/5 text-white/40 hover:text-cyan-400' : 'hover:bg-slate-100 text-slate-400 hover:text-cyan-600'}`}
              title="Presentation Mode"
            >
              <Maximize2 size={18} />
            </button>
            <button 
              onClick={() => setShowShareModal(true)}
              className={`p-2 rounded-lg transition-all ${theme === 'dark' ? 'hover:bg-white/5 text-white/40 hover:text-cyan-400' : 'hover:bg-slate-100 text-slate-400 hover:text-cyan-600'}`}
              title="Share / QR Code"
            >
              <Share2 size={18} />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={handlePrint} className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-mono text-[10px] font-bold transition-all shadow-lg ${theme === 'dark' ? 'bg-cyan-400 text-[#0a0a0b] hover:bg-white' : 'bg-slate-900 text-white hover:bg-cyan-600'}`}>
            <Download size={14} />
            {isMn ? 'PDF татах' : 'Download PDF'}
          </button>
        </div>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
          <div className={`w-full max-w-sm p-8 rounded-3xl shadow-2xl relative transition-all animate-in fade-in zoom-in duration-300 ${theme === 'dark' ? 'bg-[#121214] border border-white/10' : 'bg-white border border-slate-200'}`}>
            <button 
              onClick={() => setShowShareModal(false)}
              className={`absolute top-6 right-6 p-2 rounded-full transition-colors ${theme === 'dark' ? 'hover:bg-white/5 text-white/40' : 'hover:bg-slate-100 text-slate-400'}`}
            >
              <X size={20} />
            </button>

            <div className="text-center mb-8">
              <div className={`w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center ${theme === 'dark' ? 'bg-cyan-400/10 text-cyan-400' : 'bg-cyan-50 text-cyan-600'}`}>
                <QrCode size={32} />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                {isMn ? 'Ухаалаг түгээлт' : 'Smart Share'}
              </h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-white/40' : 'text-slate-500'}`}>
                {isMn ? 'Хэнд ч, хаанаас ч амархан үзүүл.' : 'Show it easily to anyone, anywhere.'}
              </p>
            </div>

            {/* Simulated QR Code for now (would use a library like qrcode.react in real app) */}
            <div className={`w-48 h-48 mx-auto mb-8 p-4 rounded-2xl flex items-center justify-center border-2 transition-all ${theme === 'dark' ? 'bg-white border-transparent' : 'bg-white border-slate-100 shadow-inner'}`}>
               <svg className="w-full h-full text-slate-900" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm13-2h3v2h-3v-2zm-3 0h2v3h-2v-3zm3 3h3v2h-3v-2zm-3 3h2v2h-2v-2zm3-3h3v2h-3v-2zm-3 3h2v2h-2v-2zM13 13h2v2h-2v-2zm0 3h2v2h-2v-2zm3 0h2v2h-2v-2z" />
               </svg>
            </div>

            <div className="space-y-3">
              <button 
                onClick={handleCopyLink}
                className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all font-mono text-[10px] tracking-widest ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10 text-white' : 'bg-slate-50 hover:bg-slate-100 text-slate-900'}`}
              >
                {isMn ? 'ЛИНК ХУУЛБАХ' : 'COPY BROADCAST LINK'}
                {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} className={theme === 'dark' ? 'text-white/20' : 'text-slate-400'} />}
              </button>
              <a 
                href={`mailto:?subject=Daccom Partners Digital Brochure&body=Please view our digital brochure here: ${window.location.href}`}
                className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all font-mono text-[10px] tracking-widest ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10 text-white' : 'bg-slate-50 hover:bg-slate-100 text-slate-900'}`}
              >
                {isMn ? 'ИМЭЙЛЭЭР ИЛГЭЭХ' : 'SHARE VIA EMAIL'}
                <Mail size={16} className={theme === 'dark' ? 'text-white/20' : 'text-slate-400'} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Presentation Controls */}
      {isPresenting && (
        <>
          <div className="fixed top-8 right-8 z-[200] flex items-center gap-4">
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-3 bg-black/40 backdrop-blur-md rounded-full text-white/60 hover:text-white transition-colors border border-white/10"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => {
                setIsPresenting(false);
                if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
              }}
              className="p-3 bg-black/40 backdrop-blur-md rounded-full text-white/60 hover:text-white transition-colors border border-white/10"
            >
              <X size={20} />
            </button>
          </div>

          <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 0))}
            className={`fixed left-8 top-1/2 -translate-y-1/2 z-[150] p-4 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white/40 hover:text-white transition-all border border-white/5 ${currentPage === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          >
            <ArrowLeft size={24} />
          </button>

          <button 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages - 1))}
            className={`fixed right-8 top-1/2 -translate-y-1/2 z-[150] p-4 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white/40 hover:text-white transition-all border border-white/5 ${currentPage === totalPages - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          >
            <ArrowRight size={24} />
          </button>

          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[150] flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-2 h-2 rounded-full transition-all ${currentPage === i ? 'bg-cyan-400 w-6' : 'bg-white/20 hover:bg-white/40'}`}
              />
            ))}
          </div>
        </>
      )}

      {/* Brochure content */}
      <div 
        ref={brochureRef} 
        className={`brochure-content transition-all duration-500 ${!isPresenting ? 'pt-20 print:pt-0' : 'h-screen w-screen overflow-hidden'}`}
      >
        <div 
          className={`transition-transform duration-700 ease-in-out ${isPresenting ? 'flex h-screen w-screen' : 'flex flex-col items-center space-y-8 pb-32'}`}
          style={isPresenting ? { transform: `translateX(-${currentPage * 100}%)`, width: `${totalPages * 100}%` } : {}}
        >

        {/* ═══════════════════════════════════════════════════════════════ */}
            {/* PAGE 1: COVER */}
            <div className={`brochure-page relative shrink-0 overflow-hidden flex items-center justify-center ${isPresenting ? 'w-screen h-screen border-none rounded-none' : 'shadow-xl shadow-cyan-900/10'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0b] via-[#0d1117] to-[#0a0a0b] page-bg-gradient transition-all duration-700" />
          {/* Background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-400/5 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px]" />
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          </div>
          
          <div className="relative z-10 text-center px-12 max-w-3xl">
            {/* Logo */}
            <div className="mb-16 flex justify-center">
              <svg className="h-12 w-auto" viewBox="198 90 360 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.55" stroke="#3B82F6" strokeWidth="1">
                  <line x1="223" y1="165" x2="293" y2="165" />
                  <line x1="223" y1="165" x2="258" y2="108" />
                  <line x1="293" y1="165" x2="258" y2="108" />
                  <line x1="223" y1="165" x2="293" y2="108" strokeWidth="0.5" opacity="0.4" />
                </g>
                <circle cx="223" cy="165" r="24" fill="#1D4ED8" />
                <circle cx="223" cy="165" r="5" fill="white" opacity="0.3" />
                <circle cx="258" cy="108" r="17" stroke="#1D4ED8" strokeWidth="2.5" />
                <circle cx="258" cy="108" r="4" fill="#1D4ED8" />
                <circle cx="293" cy="165" r="14" fill="#06B6D4" />
                <circle cx="293" cy="165" r="4" fill="white" opacity="0.35" />
                <circle cx="268" cy="139" r="3.5" fill="#06B6D4" opacity="0.85" />
                <line x1="332" y1="92" x2="332" y2="192" stroke="#334155" strokeWidth="1" />
                <text x="352" y="158" fill="#EDE9DF" style={{ fontFamily: 'Manrope, sans-serif', fontSize: '41px', fontWeight: 800 }}>DACCOM</text>
                <text x="354" y="183" fill="#94A8BE" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', fontWeight: 500 }}>PARTNERS</text>
              </svg>
            </div>

            <div className="w-16 h-[1px] bg-cyan-400/30 mx-auto mb-8" />
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[0.95] tracking-tight" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {isMn ? 'Технологи. Инноваци.' : 'Technology. Innovation.'}
              <br />
              <span className="italic font-normal text-cyan-400" style={{ fontFamily: 'EB Garamond, serif' }}>
                {isMn ? 'Шийдэл.' : 'Solutions.'}
              </span>
            </h1>
            
            <p className="text-white/50 text-lg font-light max-w-lg mx-auto mb-12 leading-relaxed">
              {isMn 
                ? 'Дэвшилтэт технологиор бизнесийн бодит асуудлыг шийдвэрлэнэ. Робот гар, IoT мониторинг, AI урьдчилсан мэдэгдэх систем.'
                : 'Solving real business problems through advanced technology. Robotics, IoT monitoring, and AI predictive systems.'}
            </p>

            <div className="flex items-center justify-center gap-8 text-white/30 font-mono text-[9px] tracking-widest">
              <span>ROBOTICS</span>
              <div className="w-1 h-1 bg-cyan-400 rounded-full" />
              <span>IoT</span>
              <div className="w-1 h-1 bg-cyan-400 rounded-full" />
              <span>AI / ML</span>
              <div className="w-1 h-1 bg-cyan-400 rounded-full" />
              <span>HARDWARE</span>
            </div>

            {/* Bottom info */}
            <div className="absolute bottom-12 left-12 right-12 flex items-end justify-between">
              <div className="text-left">
                <p className="font-mono text-[8px] text-white/20 tracking-widest mb-1">{isMn ? 'КОМПАНИЙН ТАНИЛЦУУЛГА' : 'COMPANY OVERVIEW'}</p>
                <p className="font-mono text-[8px] text-white/20 tracking-widest">2025</p>
              </div>
              <div className="text-right">
                <p className="font-mono text-[8px] text-white/20 tracking-widest mb-1">ULAANBAATAR, MONGOLIA</p>
                <p className="font-mono text-[8px] text-white/20 tracking-widest">daccompartners.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* PAGE 2: ABOUT US */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <div className={`brochure-page relative shrink-0 bg-[#0a0a0b] px-12 py-16 flex flex-col justify-between ${isPresenting ? 'w-screen h-screen border-none rounded-none' : 'shadow-xl shadow-cyan-900/10'}`}>
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-cyan-400" />
              <span className="font-mono text-[9px] text-cyan-400 tracking-widest">01 — {isMn ? 'ТУХАЙ' : 'ABOUT US'}</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {isMn ? 'Бид хэн бэ?' : 'Who We Are'}
            </h2>
            <p className="text-white/50 text-base font-light max-w-2xl leading-relaxed mb-12">
              {isMn 
                ? 'Daccom Partners нь Монголд суурилсан технологийн компани бөгөөд робот техник, IoT, хиймэл оюун ухааны салбарт шийдэл боловсруулж байна. Бид зөвхөн програм хангамж бус, техник хангамжийг ч хамтад нь хөгжүүлдэг өвөрмөц давуу талтай.'
                : 'Daccom Partners is a Mongolia-based deep-tech company building solutions across robotics, IoT, and artificial intelligence. We uniquely develop both hardware and software in-house.'}
            </p>

            {/* Key numbers */}
            <div className="grid grid-cols-4 gap-6 mb-16">
              {[
                { val: '3', label: isMn ? 'Үндсэн бүтээгдэхүүн' : 'Core Products' },
                { val: '100%', label: isMn ? 'Монголд хөгжүүлсэн' : 'Built In Mongolia' },
                { val: '24/7', label: isMn ? 'Техник дэмжлэг' : 'Tech Support' },
                { val: 'HW+SW', label: isMn ? 'Хосолсон шийдэл' : 'Full Stack' },
              ].map((item, i) => (
                <div key={i} className="border border-white/10 rounded-2xl p-6 text-center">
                  <p className="text-2xl font-bold text-cyan-400 mb-1">{item.val}</p>
                  <p className="font-mono text-[8px] text-white/40 uppercase tracking-wider">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Services */}
            <h3 className="font-mono text-[9px] text-white/30 tracking-widest mb-6">{isMn ? 'ҮЙЛЧИЛГЭЭ' : 'WHAT WE DO'}</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Settings size={18} />, title: isMn ? 'Робот техник' : 'Robotics & Automation', desc: isMn ? 'Үйлдвэрлэлийн автоматжуулалт, робот гарны зохион бүтээлт' : 'Industrial automation, robotic arm design & deployment' },
                { icon: <Activity size={18} />, title: isMn ? 'IoT шийдлүүд' : 'IoT Solutions', desc: isMn ? 'Мэдрэгчээс бодит цагийн дашбоард хүртэл бүрэн систем' : 'End-to-end systems from sensors to real-time dashboards' },
                { icon: <Cpu size={18} />, title: isMn ? 'Хиймэл оюун' : 'AI & Machine Learning', desc: isMn ? 'Урьдчилан таамаглах, оновчлох, шинжлэх системүүд' : 'Predictive analytics, optimization & pattern recognition' },
                { icon: <Shield size={18} />, title: isMn ? 'Техник хангамж' : 'Custom Hardware', desc: isMn ? 'Мэдрэгч, хянагч, эд ангийг өөрсдөө бүтээнэ' : 'Proprietary sensors, controllers & component manufacturing' },
              ].map((s, i) => (
                <div key={i} className="border border-white/5 rounded-xl p-5 bg-white/[0.02]">
                  <div className="text-cyan-400 mb-3">{s.icon}</div>
                  <p className="text-white text-sm font-medium mb-1">{s.title}</p>
                  <p className="text-white/40 text-xs leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Page number */}
          <div className="flex items-center justify-between mt-8">
            <p className="font-mono text-[8px] text-white/15 tracking-widest">DACCOM PARTNERS — COMPANY OVERVIEW 2025</p>
            <p className="font-mono text-[8px] text-white/15">02</p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* PAGE 3: TECHNO-ARM */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <div className={`brochure-page relative shrink-0 bg-[#0a0a0b] px-12 py-16 flex flex-col justify-between ${isPresenting ? 'w-screen h-screen border-none rounded-none' : 'shadow-xl shadow-cyan-900/10'}`}>
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-cyan-400" />
              <span className="font-mono text-[9px] text-cyan-400 tracking-widest">02 — TECHNO-ARM</span>
            </div>

            <div className="grid grid-cols-2 gap-12 mb-10">
              <div>
                <h2 className="text-4xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Techno-Arm
                  <br />
                  <span className="italic font-normal text-cyan-400 text-2xl" style={{ fontFamily: 'EB Garamond, serif' }}>
                    {isMn ? 'Үйлдвэрлэлийн робот гар' : 'Industrial Robotic Arm'}
                  </span>
                </h2>
                <p className="text-white/50 text-sm font-light leading-relaxed mb-6">
                  {isMn 
                    ? 'Daccom Partners-ийн инженерүүдийн бүрэн зохион бүтээж, туршилтын загварыг амжилттай хийж гүйцэтгэсэн 6 тэнхлэгтэй үйлдвэрлэлийн робот гар. Олон улсын ижил төстэй бүтээгдэхүүнээс 3-5 дахин хямд.'
                    : 'A fully in-house designed 6-axis industrial robotic arm. Delivers comparable performance at 3-5x lower cost than Universal Robots, KUKA, and Franka Emika.'}
                </p>
                
                {/* Key advantages */}
                <div className="space-y-2">
                  {[
                    isMn ? '100% өөрсдийн оюуны өмч' : '100% proprietary IP ownership',
                    isMn ? 'Монголд бүрэн засвар үйлчилгээтэй' : 'Fully serviceable locally in Mongolia',
                    isMn ? '2 долоо хоногт шинэ хэрэгсэл нэмэх боломжтой' : 'Custom end-effectors in 2 weeks',
                    isMn ? '24/7 техникийн дэмжлэг' : '24/7 technical support',
                  ].map((adv, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 size={12} className="text-cyan-400 shrink-0" />
                      <span className="text-white/60 text-xs">{adv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="rounded-2xl overflow-hidden border border-white/10 relative">
                <img src="/airq-dashboard.jpg" alt="Techno-Arm" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0a0a0b] to-transparent p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="font-mono text-[8px] text-green-400">{isMn ? 'АЖИЛЛАЖ БАЙНА' : 'OPERATIONAL'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Specs & Comparison */}
            <div className="grid grid-cols-2 gap-8">
              {/* Specs */}
              <div>
                <h3 className="font-mono text-[9px] text-white/30 tracking-widest mb-4">{isMn ? 'ТЕХНИКИЙН ҮЗҮҮЛЭЛТ' : 'SPECIFICATIONS'}</h3>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { v: '8.0 kg', l: isMn ? 'Даац' : 'Payload' },
                    { v: '650 mm', l: isMn ? 'Радиус' : 'Reach' },
                    { v: '±0.01mm', l: isMn ? 'Нарийвчлал' : 'Precision' },
                    { v: '6-Axis', l: isMn ? 'Тэнхлэг' : 'DOF' },
                    { v: '13+ kg', l: isMn ? 'Жин' : 'Weight' },
                    { v: '~$1,510', l: isMn ? 'Эхлэх үнэ' : 'Starting' },
                  ].map((spec, i) => (
                    <div key={i} className="border border-white/5 rounded-lg p-3 text-center bg-white/[0.02]">
                      <p className="text-sm font-bold text-cyan-400">{spec.v}</p>
                      <p className="font-mono text-[7px] text-white/30 uppercase tracking-wider mt-0.5">{spec.l}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Comparison table */}
              <div>
                <h3 className="font-mono text-[9px] text-white/30 tracking-widest mb-4">{isMn ? 'ҮНИЙН ХАРЬЦУУЛАЛТ' : 'PRICE COMPARISON'}</h3>
                <div className="border border-white/10 rounded-xl overflow-hidden text-xs">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left px-3 py-2 font-mono text-[7px] text-white/30 uppercase tracking-wider">{isMn ? 'Бүтээгдэхүүн' : 'Product'}</th>
                        <th className="text-right px-3 py-2 font-mono text-[7px] text-white/30 uppercase tracking-wider">{isMn ? 'Үнэ' : 'Price'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: 'Universal Robots UR3e', price: '$25,000+' },
                        { name: 'KUKA LBR iiwa', price: '$50,000+' },
                        { name: 'Franka Emika Panda', price: '$20,000+' },
                        { name: 'Dobot CR5', price: '$15,000+' },
                        { name: 'Techno-Arm', price: '~$1,510', hl: true },
                      ].map((r, i) => (
                        <tr key={i} className={`border-b border-white/5 ${r.hl ? 'bg-cyan-400/5' : ''}`}>
                          <td className={`px-3 py-2 ${r.hl ? 'text-cyan-400 font-medium' : 'text-white/50'}`}>{r.name}</td>
                          <td className={`px-3 py-2 text-right font-bold ${r.hl ? 'text-cyan-400' : 'text-white/70'}`}>{r.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-8">
            <p className="font-mono text-[8px] text-white/15 tracking-widest">DACCOM PARTNERS — TECHNO-ARM</p>
            <p className="font-mono text-[8px] text-white/15">03</p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* PAGE 4: AIRQ */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <div className={`brochure-page relative shrink-0 bg-[#0a0a0b] px-12 py-16 flex flex-col justify-between ${isPresenting ? 'w-screen h-screen border-none rounded-none' : 'shadow-xl shadow-cyan-900/10'}`}>
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-purple-400" />
              <span className="font-mono text-[9px] text-purple-400 tracking-widest">03 — AIRQ</span>
            </div>

            <div className="grid grid-cols-2 gap-12 mb-10">
              {/* Image first */}
              <div className="rounded-2xl overflow-hidden border border-white/10 relative">
                <img src="/techno-arm-hero.jpg" alt="AirQ Dashboard" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0a0a0b] to-transparent p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="font-mono text-[8px] text-green-400">LIVE — airq.mn</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  AirQ
                  <br />
                  <span className="italic font-normal text-purple-400 text-2xl" style={{ fontFamily: 'EB Garamond, serif' }}>
                    {isMn ? 'Ухаалаг агаарын хяналт' : 'Smart Air Quality'}
                  </span>
                </h2>
                <p className="text-white/50 text-sm font-light leading-relaxed mb-6">
                  {isMn 
                    ? 'Дотоод орчны агаарын чанарыг бодит цагт хянах, CO₂ хэмжээ хэтрэхэд автоматаар агааржуулалтыг удирдах IoT систем.'
                    : 'Real-time indoor air quality monitoring with automated ventilation control when CO₂ levels exceed thresholds.'}
                </p>

                {/* Sensors */}
                <h3 className="font-mono text-[9px] text-white/30 tracking-widest mb-3">{isMn ? 'МЭДРЭГЧҮҮД' : 'SENSORS'}</h3>
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {['CO₂', 'PM2.5', 'TEMP', 'HUM', 'VOC', 'O₃'].map((s, i) => (
                    <div key={i} className="border border-purple-400/10 rounded-lg px-3 py-2 text-center bg-purple-400/[0.03]">
                      <p className="text-xs font-bold text-purple-400">{s}</p>
                    </div>
                  ))}
                </div>

                {/* Problem stat */}
                <div className="border border-red-400/20 rounded-xl p-4 bg-red-400/[0.03]">
                  <p className="text-red-400 font-mono text-[8px] tracking-widest mb-2">{isMn ? 'СУДАЛГААНЫ ҮР ДҮН' : 'RESEARCH INSIGHT'}</p>
                  <p className="text-white/60 text-xs leading-relaxed">
                    {isMn 
                      ? 'Harvard: CO₂ 1000ppm-ээс давахад шийдвэр гаргах чадвар 50% буурдаг. AirQ автоматаар агааржуулалтыг удирдна.'
                      : 'Harvard: cognitive function drops 50% when CO₂ exceeds 1000ppm. AirQ auto-triggers ventilation to maintain optimal air.'}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Deployment sectors */}
            <h3 className="font-mono text-[9px] text-white/30 tracking-widest mb-4">{isMn ? 'АШИГЛАЛТЫН САЛБАРУУД' : 'DEPLOYMENT SECTORS'}</h3>
            <div className="grid grid-cols-4 gap-4">
              {[
                { icon: <GraduationCap size={18} />, label: isMn ? 'Сургууль' : 'Schools', stat: isMn ? '+20% суралцах' : '+20% Learning' },
                { icon: <Building2 size={18} />, label: isMn ? 'Оффис' : 'Offices', stat: isMn ? '+25% бүтээмж' : '+25% Productivity' },
                { icon: <Heart size={18} />, label: isMn ? 'Эмнэлэг' : 'Healthcare', stat: isMn ? 'Халдвар хяналт' : 'Infection Control' },
                { icon: <HardHat size={18} />, label: isMn ? 'Үйлдвэр' : 'Industrial', stat: 'OSHA' },
              ].map((d, i) => (
                <div key={i} className="border border-white/5 rounded-xl p-4 bg-white/[0.02] text-center">
                  <div className="text-purple-400 flex justify-center mb-2">{d.icon}</div>
                  <p className="text-white text-xs font-medium mb-1">{d.label}</p>
                  <p className="font-mono text-[7px] text-purple-400">{d.stat}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mt-8">
            <p className="font-mono text-[8px] text-white/15 tracking-widest">DACCOM PARTNERS — AIRQ</p>
            <p className="font-mono text-[8px] text-white/15">04</p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* PAGE 5: MINING AI */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <div className={`brochure-page relative shrink-0 bg-[#0a0a0b] px-12 py-16 flex flex-col justify-between ${isPresenting ? 'w-screen h-screen border-none rounded-none' : 'shadow-xl shadow-cyan-900/10'}`}>
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-orange-400" />
              <span className="font-mono text-[9px] text-orange-400 tracking-widest">04 — MINING AI</span>
            </div>

            <div className="grid grid-cols-2 gap-12 mb-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-400/20 bg-orange-400/5 mb-4">
                  <HardHat size={10} className="text-orange-400" />
                  <span className="font-mono text-[8px] text-orange-400 tracking-widest">{isMn ? 'ТУРШИЛТЫН ҮЕ' : 'PILOT PHASE'}</span>
                </div>
                <h2 className="text-4xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Mining AI
                  <br />
                  <span className="italic font-normal text-orange-400 text-2xl" style={{ fontFamily: 'EB Garamond, serif' }}>
                    {isMn ? 'Дугуйн ухаалаг AI' : 'Tire Intelligence AI'}
                  </span>
                </h2>
                <p className="text-white/50 text-sm font-light leading-relaxed mb-6">
                  {isMn 
                    ? 'Уул уурхайн хүнд даацын машины дугуйн сенсорыг өөрсдөө хөгжүүлж, хиймэл оюунаар боловсруулан зардлыг 50% хүртэл бууруулна.'
                    : 'Proprietary tire sensors + AI analytics for heavy mining vehicles. Reducing the 2nd largest mining OpEx by up to 50%.'}
                </p>

                {/* The problem */}
                <div className="border border-orange-400/20 rounded-xl p-4 bg-orange-400/[0.03] mb-6">
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <p className="text-xl font-bold text-orange-400">#2</p>
                      <p className="font-mono text-[7px] text-white/30">{isMn ? 'ТОМ ЗАРДАЛ' : 'LARGEST COST'}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-orange-400">40%</p>
                      <p className="font-mono text-[7px] text-white/30">{isMn ? 'НАСЛАЛТ АЛДАГДАЛ' : 'LIFE LOST'}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-orange-400">$2M+</p>
                      <p className="font-mono text-[7px] text-white/30">{isMn ? 'ЖИЛ/ФЛОТ' : 'YEAR/FLEET'}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sensors */}
              <div>
                <h3 className="font-mono text-[9px] text-white/30 tracking-widest mb-4">{isMn ? 'ӨӨРСДИЙН МЭДРЭГЧҮҮД' : 'PROPRIETARY SENSORS'}</h3>
                <div className="space-y-3 mb-6">
                  {[
                    { name: 'TPMS', spec: '0-200 PSI ±0.5%', why: isMn ? 'Даралт ↓10% = Наслалт ↓15%' : '↓10% Pressure = ↓15% Life' },
                    { name: isMn ? 'Температур' : 'Thermal', spec: '-40°C to +150°C', why: isMn ? '>95°C = Тэсрэх аюул' : '>95°C = Blowout Risk' },
                    { name: isMn ? 'Элэгдэл' : 'Tread Depth', spec: '0-80mm ±0.1mm', why: isMn ? 'Оновчтой солилт = 20% хэмнэлт' : 'Optimal Timing = 20% Saved' },
                    { name: isMn ? 'Ачаалал' : 'Load Cell', spec: '0-500T ±1%', why: isMn ? '+10% ачаалал = -20% наслалт' : '+10% Load = -20% Life' },
                  ].map((s, i) => (
                    <div key={i} className="border border-orange-400/10 rounded-lg p-3 bg-orange-400/[0.02] flex items-center justify-between">
                      <div>
                        <p className="text-white text-xs font-medium">{s.name}</p>
                        <p className="font-mono text-[7px] text-white/30">{s.spec}</p>
                      </div>
                      <span className="font-mono text-[7px] text-orange-400 bg-orange-400/10 px-2 py-1 rounded-md">{s.why}</span>
                    </div>
                  ))}
                </div>

                {/* Expected Impact */}
                <h3 className="font-mono text-[9px] text-white/30 tracking-widest mb-3">{isMn ? 'ХҮЛЭЭГДЭЖ БУЙ ҮР ДҮН' : 'EXPECTED IMPACT'}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { v: '30-50%', l: isMn ? 'Зардал ↓' : 'Cost ↓' },
                    { v: '80%', l: isMn ? 'Зогсолт ↓' : 'Downtime ↓' },
                    { v: '2x', l: isMn ? 'Наслалт ↑' : 'Lifespan ↑' },
                    { v: '<6mo', l: 'ROI' },
                  ].map((m, i) => (
                    <div key={i} className="border border-orange-400/10 rounded-lg p-3 text-center bg-orange-400/[0.02]">
                      <p className="text-lg font-bold text-orange-400">{m.v}</p>
                      <p className="font-mono text-[7px] text-white/30 uppercase">{m.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-8">
            <p className="font-mono text-[8px] text-white/15 tracking-widest">DACCOM PARTNERS — MINING AI</p>
            <p className="font-mono text-[8px] text-white/15">05</p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* PAGE 6: RESEARCH */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <div className={`brochure-page relative shrink-0 bg-[#0a0a0b] px-12 py-16 flex flex-col justify-between ${isPresenting ? 'w-screen h-screen border-none rounded-none' : 'shadow-xl shadow-cyan-900/10'}`}>
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-cyan-400" />
              <span className="font-mono text-[9px] text-cyan-400 tracking-widest">06 — RESEARCH</span>
            </div>

            <div className="grid grid-cols-12 gap-12">
              <div className="col-span-5">
                <h2 className="text-4xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  {isMn ? 'Судалгаа & Инноваци' : 'Research & Innovation'}
                </h2>
                <p className="text-white/50 text-sm font-light leading-relaxed mb-8">
                  {isMn 
                    ? 'Бид технологийн хөгжлийг зөвхөн хэрэглэх бус, шинээр бүтээж байна. Манай R&D лаборатори AI болон Mechatronics-ийн уулзвар дээр нарийн шинжилгээ хийдэг.'
                    : 'We don’t just apply technology; we invent it. Our R&D lab operates at the intersection of AI and Mechatronics, pushing the boundaries of what’s possible in Mongolia.'}
                </p>
                <div className="space-y-4">
                  {[
                    { t: isMn ? 'AI Vision алгоритм' : 'AI Vision Algorithms', d: isMn ? '99.9% нарийвчлалтай чанарын хяналт' : '99.9% accuracy in QC tasks' },
                    { t: isMn ? 'Custom IoT протокол' : 'Custom IoT Protocols', d: isMn ? 'Сүлжээгүй орчинд LoRa ашиглан дамжуулах' : 'Optimized data transmission in remote sites' },
                    { t: isMn ? 'Мехатроник дизайн' : 'Mechatronic Design', d: isMn ? 'Хөнгөн бөгөөд бат бөх робот эд ангиуд' : 'Lightweight, high-torque component design' },
                  ].map((r, i) => (
                    <div key={i} className="group">
                      <p className="text-cyan-400 text-xs font-bold mb-1">{r.t}</p>
                      <p className="text-white/30 text-[10px]">{r.d}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-7 grid grid-cols-2 gap-4">
                {[
                  { title: isMn ? 'Уул уурхайн AI' : 'Mining AI Research', desc: isMn ? 'Дугуйн элэгдлийг 80% нарийвчлалтай таамаглав.' : '80% accuracy in tire fatigue prediction.' },
                  { title: isMn ? 'Робот гар V2' : 'Robotic Arm V2', desc: isMn ? 'Шинэ үеийн илүү хөнгөн эд ангиуд.' : 'Next-gen lightweight structural trials.' },
                  { title: isMn ? 'Агаарын дата' : 'Air Data Analysis', desc: isMn ? 'CO2 болон бүтээмжийн хамаарлыг батлав.' : 'Correlating CO2 levels with worker output.' },
                  { title: isMn ? 'IoT LoRa' : 'IoT LoRa Mesh', desc: isMn ? '5км радиус дахь ухаалаг сүлжээ.' : 'Smart mesh networking across 5km radii.' },
                ].map((item, i) => (
                  <div key={i} className="border border-white/5 rounded-2xl p-6 bg-white/[0.02]">
                    <div className="w-8 h-8 rounded-lg bg-cyan-400/10 flex items-center justify-center mb-4 text-cyan-400">
                      <BarChart3 size={16} />
                    </div>
                    <p className="text-white text-sm font-medium mb-2">{item.title}</p>
                    <p className="text-white/40 text-[11px] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-8">
            <p className="font-mono text-[8px] text-white/15 tracking-widest">DACCOM — RESEARCH & INSIGHTS</p>
            <p className="font-mono text-[8px] text-white/15">06</p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* PAGE 7: PARTNERSHIP */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <div className={`brochure-page relative shrink-0 bg-[#0a0a0b] px-12 py-16 flex flex-col justify-between ${isPresenting ? 'w-screen h-screen border-none rounded-none' : 'shadow-xl shadow-cyan-900/10'}`}>
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-brand-teal" />
              <span className="font-mono text-[9px] text-brand-teal tracking-widest">07 — PARTNERSHIP</span>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: 'Manrope, sans-serif' }}>
                 {isMn ? 'Хамтран ажиллах' : 'Partnership'} <span className="italic font-normal text-brand-teal" style={{ fontFamily: 'EB Garamond, serif' }}>{isMn ? 'замнал' : 'Journey'}</span>
              </h2>
              <p className="text-white/50 text-sm font-light max-w-2xl mx-auto">
                {isMn 
                  ? 'Бид түншүүдтэйгээ урт хугацааны, үр өгөөжтэй харилцааг эрхэмлэдэг. Санаанаас эхлээд бодит үр дүн хүртэлх 4 алхам.'
                  : 'We value long-term, high-impact relationships. Here is how we transform your challenges into technological competitive advantages.'}
              </p>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {[
                { step: '01', icon: <Target size={20} />, title: isMn ? 'Оношилгоо' : 'Audit & Discovery', desc: isMn ? 'Бизнесийн асуудлыг тодорхойлж, боломжит шийдлийг гаргана.' : 'Identifying operational bottlenecks and ROI opportunities.' },
                { step: '02', icon: <Cpu size={20} />, title: isMn ? 'Туршилт' : 'Proof of Concept', desc: isMn ? 'Бага зардлаар шийдлийн үр ашгийг бодит өгөгдлөөр батална.' : 'Validating the solution with a low-cost, data-driven pilot.' },
                { step: '03', icon: <Rocket size={20} />, title: isMn ? 'Нэвтрүүлэлт' : 'Implementation', desc: isMn ? 'Системийг бүрэн хэмжээгээр суурилуулж, ажилчдыг сургана.' : 'Full-scale deployment and staff training for autonomy.' },
                { step: '04', icon: <TrendingUp size={20} />, title: isMn ? 'Дэмжлэг' : 'Scale & Support', desc: isMn ? '24/7 техникийн хяналт болон AI алгоритмын байнгын шинэчлэл.' : '24/7 support and continuous AI algorithm optimization.' },
              ].map((item, i) => (
                <div key={i} className="border border-white/5 rounded-[2rem] p-8 bg-white/[0.01] relative flex flex-col items-center text-center group">
                  <div className="absolute top-6 right-6 font-mono text-[10px] text-brand-teal/20">{item.step}</div>
                  <div className="text-brand-teal mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <p className="text-white text-base font-bold mb-3">{item.title}</p>
                  <p className="text-white/30 text-xs leading-relaxed">{item.desc}</p>
                  {i < 3 && <div className="absolute top-1/2 -right-2 translate-y-[-50%] text-white/10 hidden lg:block"><ArrowRight size={16} /></div>}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mt-8">
            <p className="font-mono text-[8px] text-white/15 tracking-widest">DACCOM — ENGAGEMENT MODEL</p>
            <p className="font-mono text-[8px] text-white/15">07</p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* PAGE 8: RELIABILITY */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <div className={`brochure-page relative shrink-0 bg-[#0a0a0b] px-12 py-16 flex flex-col justify-between ${isPresenting ? 'w-screen h-screen border-none rounded-none' : 'shadow-xl shadow-cyan-900/10'}`}>
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-cyan-400" />
              <span className="font-mono text-[9px] text-cyan-400 tracking-widest">08 — RELIABILITY</span>
            </div>

            <div className="grid grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  {isMn ? 'Найдвартай ажиллагаа' : 'Assuring Reliability'}
                </h2>
                <p className="text-white/50 text-sm font-light leading-relaxed mb-10">
                  {isMn 
                    ? 'Бид төхөөрөмжөө зөвхөн борлуулаад зогсохгүй, түүний хэвийн ажиллагааг 24/7 хариуцна. Түгээмэл асуултуудын товч хариулт.'
                    : 'We don’t just sell hardware; we take responsibility for its uptime. Here are answers to the most common stakeholder concerns.'}
                </p>
                <div className="space-y-6">
                  {[
                    { q: isMn ? 'Засвар үйлчилгээ?' : 'Maintenance & Tech Support?', a: isMn ? 'Монголд өөрсдийн инженерүүд 12-24 цагийн дотор газар дээр нь очих боломжтой.' : 'In-house Mongolian engineers deployed within 12-24 hours if remote resolution fails.' },
                    { q: isMn ? 'Аюулгүй байдал?' : 'System & Data Security?', a: isMn ? 'Бүх өгөгдөл шифрлэгдсэн бөгөөд зөвхөн түнш байгууллага харах эрхтэй.' : 'Military-grade encryption for all sensor streams. Partner owns the data.' },
                    { q: isMn ? 'Тоног төхөөрөмжийн баталгаа?' : 'Hardware Warranty?', a: isMn ? 'Үндсэн эд ангиуд 2 жилийн бүрэн баталгаатай.' : '2-year full replacement warranty for core proprietary components.' },
                  ].map((f, i) => (
                    <div key={i} className="border-l-2 border-cyan-400/20 pl-6">
                      <p className="text-white text-sm font-bold mb-2">{f.q}</p>
                      <p className="text-white/30 text-[11px] leading-relaxed italic">{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-center">
                 <div className="glass p-10 rounded-[3rem] border-brand-teal/10 bg-gradient-to-br from-brand-teal/5 to-transparent relative">
                   <div className="absolute top-[-20px] left-[-20px] w-16 h-16 bg-cyan-400/10 blur-xl rounded-full" />
                   <h3 className="text-2xl font-bold text-white mb-6">{isMn ? 'Яагаад бид гэж?' : 'Why Partner With Us?'}</h3>
                   <div className="space-y-4">
                     {[
                       { v: '3-5x', l: isMn ? 'Зардлын давуу тал' : 'Cost Advantage' },
                       { v: '100%', l: isMn ? 'Дотоодын инженерчлэл' : 'Local Engineering' },
                       { v: '24/7', l: isMn ? 'Бодит цагийн хяналт' : 'Real-time Monitoring' },
                       { v: 'AI-First', l: isMn ? 'Ухаалаг шийдэл' : 'Intelligence Embedded' },
                     ].map((m, i) => (
                       <div key={i} className="flex items-center justify-between border-b border-white/5 pb-2">
                         <span className="text-white/40 text-xs">{m.l}</span>
                         <span className="text-brand-teal font-bold text-sm tracking-tight">{m.v}</span>
                       </div>
                     ))}
                   </div>
                 </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-8">
            <p className="font-mono text-[8px] text-white/15 tracking-widest">DACCOM — FAQ & TRUST</p>
            <p className="font-mono text-[8px] text-white/15">08</p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* PAGE 9: TEAM */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <div className={`brochure-page relative shrink-0 px-12 py-16 flex flex-col justify-between ${isPresenting ? 'w-screen h-screen border-none rounded-none bg-gradient-to-br from-[#0a0a0b] via-[#0d1117] to-[#0a0a0b]' : 'shadow-xl shadow-cyan-900/10 bg-gradient-to-br from-[#0a0a0b] via-[#0d1117] to-[#0a0a0b]'}`}>
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-cyan-400" />
              <span className="font-mono text-[9px] text-cyan-400 tracking-widest">09 — {isMn ? 'БАГ & ХОЛБОО БАРИХ' : 'TEAM & CONTACT'}</span>
            </div>

            <h2 className="text-4xl font-bold text-white mb-8 leading-tight" style={{ fontFamily: 'Manrope, sans-serif' }}>
              {isMn ? 'Манай баг' : 'Our Team'}
            </h2>

            {/* Team members */}
            <div className="grid grid-cols-3 gap-8 mb-12">
              {[
                { name: 'Dr. R. Amartuvshin', role: isMn ? 'Технологийн захирал' : 'CTO', bio: isMn ? 'Япон улсад Ph.D хамгаалсан. Робот техник, мехатроникийн тэргүүлэх эрдэмтэн.' : 'Ph.D. in Mechatronics from Japan. Leading scientist in robotics.', img: '/amartuvshin.jpg' },
                { name: 'S. Erdenebat', role: isMn ? 'Гүйцэтгэх захирал' : 'CEO', bio: isMn ? 'Startup Mongolia-н үүсгэн байгуулагч. Стратеги болон экосистемийн хөгжүүлэгч.' : 'Founder of Startup Mongolia. Expert in strategy & ecosystem development.', img: '/erdenebat.jpg' },
                { name: 'Ts. Munkhtsogt', role: isMn ? 'Бүтээгдэхүүн хариуцсан захирал' : 'CPO', bio: isMn ? 'UBCab-г үүсгэн байгуулагч. Систем болон бүтээгдэхүүн хөгжүүлэлтийн эксперт.' : 'Founder of UBCab. Expert in product development & systems.', img: '/munkhtsogt.jpg' },
              ].map((m, i) => (
                <div key={i} className="text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/10 mx-auto mb-4 scale-90">
                    <img src={m.img} alt={m.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <p className="text-white font-medium text-sm mb-1">{m.name}</p>
                  <p className="font-mono text-[7px] text-cyan-400 uppercase tracking-wider mb-2">{m.role}</p>
                  <p className="text-white/40 text-[10px] leading-relaxed">{m.bio}</p>
                </div>
              ))}
            </div>

            {/* Contact & CTA */}
            <div className="grid grid-cols-2 gap-8">
              <div className="border border-white/10 rounded-2xl p-6 bg-white/[0.02] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 blur-[80px] rounded-full" />
                <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  {isMn ? 'Холбоо барих' : 'Get in Touch'}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail size={14} className="text-cyan-400 shrink-0" />
                    <span className="text-white/60 text-xs">info@daccompartners.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe size={14} className="text-cyan-400 shrink-0" />
                    <span className="text-white/60 text-xs">daccompartners.com</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-white/60 text-xs">
                      {isMn ? 'Улаанбаатар, Монгол' : 'Ulaanbaatar, Mongolia'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="border border-cyan-400/20 rounded-2xl p-6 bg-cyan-400/[0.03] flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 blur-[80px] rounded-full" />
                <h3 className="text-xl font-bold text-white mb-3 relative z-10" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  {isMn ? 'Хамтран ажиллах' : "Let's Build Together"}
                </h3>
                <p className="text-white/50 text-xs font-light mb-4 relative z-10">
                   {isMn ? 'Шинэ боломжуудын талаар ярилцъя.' : "Let's discuss the right solution for your business."}
                </p>
                <div className="flex items-center gap-2 text-brand-teal font-mono text-[10px] relative z-10">
                  <span>{isMn ? 'ХОЛБОГДОХ' : 'CONTACT US'}</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-4">
              <svg className="h-6 w-auto" viewBox="198 90 360 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="223" cy="165" r="24" fill="#1D4ED8" />
                <circle cx="258" cy="108" r="17" stroke="#1D4ED8" strokeWidth="2.5" />
                <circle cx="293" cy="165" r="14" fill="#06B6D4" />
                <text x="352" y="158" fill="#EDE9DF" style={{ fontFamily: 'Manrope, sans-serif', fontSize: '41px', fontWeight: 800 }}>DACCOM</text>
                <text x="354" y="183" fill="#94A8BE" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', fontWeight: 500 }}>PARTNERS</text>
              </svg>
              <p className="font-mono text-[8px] text-white/15">09</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
