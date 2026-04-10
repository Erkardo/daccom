import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function BrochureButton() {
  const { i18n } = useTranslation();
  
  return (
    <Link 
      to="/brochure" 
      className="fixed bottom-8 right-8 z-[45] flex items-center gap-2.5 px-5 py-3 bg-brand-bg/80 backdrop-blur-xl border border-brand-teal/20 rounded-full text-brand-teal hover:bg-brand-teal hover:text-brand-bg hover:border-brand-teal transition-all duration-300 group shadow-[0_0_30px_rgba(6,182,212,0.1)] hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]"
    >
      <BookOpen size={16} className="group-hover:scale-110 transition-transform" />
      <span className="font-mono text-[9px] tracking-widest hidden sm:inline">
        {i18n.language === 'mn' ? 'ДИЖИТАЛ БРОШУР' : 'DIGITAL BROCHURE'}
      </span>
    </Link>
  );
}
