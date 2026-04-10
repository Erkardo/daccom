import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronRight, Settings, Wind, HardHat, Landmark } from "lucide-react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-3 group ${className}`}>
      <div className="relative">
        <div className="w-10 h-10 bg-brand-teal rounded-xl rotate-12 group-hover:rotate-0 transition-transform duration-500 flex items-center justify-center">
          <Landmark size={20} className="text-brand-bg -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
        </div>
        <div className="absolute -inset-1 bg-brand-teal/20 blur opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
      </div>
      <div>
        <span className="block font-heading text-xl leading-none tracking-tight">DACCOM</span>
        <span className="block font-mono text-[8px] text-brand-teal tracking-[0.4em] uppercase">Partners</span>
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
