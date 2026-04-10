import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronRight, Settings, Wind, HardHat, Landmark } from "lucide-react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`}>
      <div className="h-8 md:h-9">
        <svg className="h-full w-auto" viewBox="198 90 360 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <title>Daccom Partners logo</title>
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
    </Link>
  );
}

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center gap-2 p-1 bg-brand-bg-card/50 backdrop-blur-md border border-hairline rounded-full">
      <button
        onClick={() => i18n.changeLanguage('mn')}
        className={`px-3 py-1.5 rounded-full font-mono text-[9px] uppercase tracking-wider transition-all ${
          i18n.language === 'mn' 
            ? 'bg-brand-teal text-brand-bg shadow-[0_0_15px_rgba(6,182,212,0.3)]' 
            : 'text-brand-chalk hover:text-white'
        }`}
      >
        MN
      </button>
      <button
        onClick={() => i18n.changeLanguage('en')}
        className={`px-3 py-1.5 rounded-full font-mono text-[9px] uppercase tracking-wider transition-all ${
          i18n.language === 'en' 
            ? 'bg-brand-teal text-brand-bg shadow-[0_0_15px_rgba(6,182,212,0.3)]' 
            : 'text-brand-chalk hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  );
}

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const getHref = (id: string) => isHome ? id : `/${id}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-md border-b border-hairline bg-brand-bg/40">
      <div className="flex items-center gap-10">
        <Logo />
        <div className="hidden lg:flex items-center gap-8">
          <a href={getHref("#services")} className="font-mono text-[10px] text-brand-chalk hover:text-brand-teal transition-colors tracking-[0.2em]">{t('nav.services')}</a>
          <a href={getHref("#projects")} className="font-mono text-[10px] text-brand-chalk hover:text-brand-teal transition-colors tracking-[0.2em]">{t('nav.projects')}</a>
          
          {/* Products Dropdown */}
          <div className="relative group/products">
            <a href={getHref("#products")} className="font-mono text-[10px] text-brand-chalk hover:text-brand-teal transition-colors tracking-[0.2em] flex items-center gap-1">
              {t('nav.products')}
              <ChevronRight size={10} className="rotate-90 transition-transform group-hover/products:-rotate-90" />
            </a>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover/products:opacity-100 group-hover/products:visible transition-all duration-300 z-50">
              <div className="w-[420px] backdrop-blur-xl bg-brand-bg/95 border border-hairline rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] p-3 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/[0.03] to-transparent pointer-events-none rounded-3xl" />
                
                <Link to="/techno-arm" className="flex items-start gap-4 p-4 rounded-2xl hover:bg-brand-teal/5 transition-all group/item relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center shrink-0 group-hover/item:bg-brand-teal/20 transition-colors">
                    <Settings size={18} className="text-brand-teal" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-medium text-white group-hover/item:text-brand-teal transition-colors">Techno-Arm</p>
                      <span className="font-mono text-[7px] text-brand-teal bg-brand-teal/10 px-1.5 py-0.5 rounded-full">ROBOTICS</span>
                    </div>
                    <p className="text-xs text-brand-chalk font-light leading-relaxed">{i18n.language === 'mn' ? '6 тэнхлэгтэй үйлдвэрлэлийн робот гар' : '6-axis industrial robotic arm'}</p>
                  </div>
                </Link>
                
                <Link to="/airq" className="flex items-start gap-4 p-4 rounded-2xl hover:bg-brand-accent/5 transition-all group/item relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center shrink-0 group-hover/item:bg-brand-accent/20 transition-colors">
                    <Wind size={18} className="text-brand-accent" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-medium text-white group-hover/item:text-brand-accent transition-colors">AirQ</p>
                      <span className="font-mono text-[7px] text-brand-accent bg-brand-accent/10 px-1.5 py-0.5 rounded-full">IoT</span>
                    </div>
                    <p className="text-xs text-brand-chalk font-light leading-relaxed">{i18n.language === 'mn' ? 'Агаарын чанарын ухаалаг мониторинг' : 'Smart air quality monitoring'}</p>
                  </div>
                </Link>
                
                <Link to="/mining-ai" className="flex items-start gap-4 p-4 rounded-2xl hover:bg-orange-400/5 transition-all group/item relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-orange-400/10 flex items-center justify-center shrink-0 group-hover/item:bg-orange-400/20 transition-colors">
                    <HardHat size={18} className="text-orange-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-medium text-white group-hover/item:text-orange-400 transition-colors">Mining AI</p>
                      <span className="font-mono text-[7px] text-orange-400 bg-orange-400/10 px-1.5 py-0.5 rounded-full">{i18n.language === 'mn' ? 'ХӨГЖҮҮЛЖ БУЙ' : 'DEVELOPING'}</span>
                    </div>
                    <p className="text-xs text-brand-chalk font-light leading-relaxed">{i18n.language === 'mn' ? 'Уул уурхайн урьдчилан таамаглах AI' : 'Predictive maintenance for mining'}</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Company Dropdown */}
          <div className="relative group/company">
            <button className="font-mono text-[10px] text-brand-chalk hover:text-brand-teal transition-colors tracking-[0.2em] flex items-center gap-1">
              {i18n.language === 'mn' ? 'КОМПАНИ' : 'COMPANY'}
              <ChevronRight size={10} className="rotate-90 transition-transform group-hover/company:-rotate-90" />
            </button>
            <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover/company:opacity-100 group-hover/company:visible transition-all duration-300 z-50">
               <div className="w-[180px] backdrop-blur-xl bg-brand-bg/95 border border-hairline rounded-2xl p-2 shadow-2xl">
                 <Link to="/insights" className="flex items-center justify-between px-4 py-3 text-[9px] font-mono tracking-[0.2em] text-brand-chalk hover:text-brand-teal hover:bg-brand-teal/5 rounded-xl transition-all group/item">
                    {i18n.language === 'mn' ? 'МЭДЭЭ' : 'INSIGHTS'}
                    <div className="w-1 h-1 bg-brand-teal rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity" />
                 </Link>
                 <Link to="/careers" className="flex items-center justify-between px-4 py-3 text-[9px] font-mono tracking-[0.2em] text-brand-chalk hover:text-brand-teal hover:bg-brand-teal/5 rounded-xl transition-all group/item">
                    {i18n.language === 'mn' ? 'АЖИЛ' : 'CAREERS'}
                    <div className="w-1 h-1 bg-brand-teal rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity" />
                 </Link>
                 <Link to="/faq" className="flex items-center justify-between px-4 py-3 text-[9px] font-mono tracking-[0.2em] text-brand-chalk hover:text-brand-teal hover:bg-brand-teal/5 rounded-xl transition-all group/item">
                    {i18n.language === 'mn' ? 'FAQ' : 'FAQ'}
                    <div className="w-1 h-1 bg-brand-teal rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity" />
                 </Link>
               </div>
            </div>
          </div>

          <a href={getHref("#about")} className="font-mono text-[10px] text-brand-chalk hover:text-brand-teal transition-colors tracking-[0.2em]">{t('nav.about')}</a>
          <a href={getHref("#tools")} className="font-mono text-[10px] tracking-[0.2em] relative group">
            <span className="text-brand-teal group-hover:text-white transition-colors">{t('nav.tools')}</span>
            <span className="absolute -top-1 -right-2 w-1.5 h-1.5 bg-brand-teal rounded-full animate-pulse" />
          </a>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <LanguageSwitcher />
        <a href={getHref("#contact")} className="btn-outline py-2.5 px-6 text-[10px] hover:bg-brand-teal hover:text-brand-bg hover:border-brand-teal">
          {t('nav.contact')}
        </a>
      </div>
    </nav>
  );
}
