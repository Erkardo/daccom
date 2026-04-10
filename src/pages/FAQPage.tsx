import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronRight, MessageSquare, ArrowRight, Zap, Target, Shield, Cpu, Wind, HardHat, Plus, Minus } from 'lucide-react';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import BrochureButton from '../components/BrochureButton';

interface FAQItemProps {
  key?: number;
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}

function FAQItem({ question, answer, isOpen, toggle }: FAQItemProps) {
  return (
    <div className={`glass rounded-2xl border-white/5 overflow-hidden mb-4 transition-all ${isOpen ? 'border-brand-teal/20' : ''}`}>
      <button 
        onClick={toggle}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="text-xl md:text-2xl font-heading tracking-tight text-white group-hover:text-brand-teal transition-colors pr-8">
          {question}
        </span>
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-brand-teal text-brand-bg rotate-180' : 'bg-white/5 text-brand-chalk'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-8 text-brand-chalk leading-relaxed font-light text-lg max-w-3xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const { i18n } = useTranslation();
  const isMn = i18n.language === 'mn';
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const faqs = [
    {
      question: isMn ? 'Techno-Arm бусад роботуудаас юугаараа ялгаатай вэ?' : 'What makes Techno-Arm different from other robotic arms?',
      answer: isMn 
        ? 'Манай Techno-Arm нь 100% Монголд хөгжүүлэгдсэн тул олон улсын брэндүүдээс 3-5 дахин хямд, мөн засвар үйлчилгээ болон сэлбэг хэрэгслийг шуурхай нийлүүлэх давуу талтай.'
        : 'Techno-Arm is fully developed in-house, making it 3-5x more affordable than international brands while ensuring rapid local maintenance and spare parts availability in Mongolia.'
    },
    {
      question: isMn ? 'AirQ системийг оффисоос гадна ашиглаж болох уу?' : 'Can AirQ be used outside of office environments?',
      answer: isMn 
        ? 'Тийм ээ, AirQ нь сургууль, цэцэрлэг, эмнэлэг болон үйлдвэрлэлийн орчинд ашиглахад зориулагдсан. Мөн IoT мэдрэгчийг тухайн орчны шаардлагаар өөрчлөх боломжтой.'
        : 'Yes, AirQ is designed for schools, hospitals, and industrial settings. The underlying IoT sensors can be customized to monitor specific hazards relevant to your facility.'
    },
    {
      question: isMn ? 'Mining AI төслийн туршилт хэзээ дуусах вэ?' : 'When will the Mining AI pilot phase conclude?',
      answer: isMn 
        ? 'Одоогоор туршилтын эхний шат амжилттай явж байна. Бид 2025 оны 3-р улиралд арилжааны хувилбарыг нэвтрүүлэхээр төлөвлөж байгаа.'
        : 'The initial pilot phase is currently yielding positive results. We plan to launch the commercial version by Q3 2025.'
    },
    {
       question: isMn ? 'Танайх програм хангамжаас гадна техник хангамж хийдэг үү?' : 'Do you develop hardware in addition to software?',
       answer: isMn 
         ? 'Тийм ээ. Бид бол "Deep Tech" компани. Бид төхөөрөмжийн чип, мэдрэгчийг өөрсдөө зохион бүтээж, түүнийгээ удирдах AI програмыг ч хамтад нь хөгжүүлдэг.'
         : 'Absolutely. As a "Deep Tech" firm, we design our own proprietary chips and sensors, and build the AI software that controls them in a unified ecosystem.'
    }
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-paper overflow-x-hidden pt-32">
      <div className="noise-overlay" />
      <Navbar />
      <BrochureButton />

      <section className="max-w-5xl mx-auto px-6 pb-32 relative z-10">
        <header className="text-center mb-24">
          <span className="font-mono text-[10px] text-brand-teal tracking-widest uppercase mb-6 block">{isMn ? 'АСУУЛТ ХАРИУЛТ' : 'KNOWLEDGE BASE'}</span>
          <h1 className="text-6xl md:text-8xl font-heading mb-8">{isMn ? 'Түгээмэл' : 'Common'} <br/> <span className="text-brand-teal italic font-serif font-normal">{isMn ? 'Асуултууд' : 'Questions'}</span></h1>
          <p className="text-xl text-brand-chalk font-light max-w-2xl mx-auto leading-relaxed">
            {isMn 
              ? 'Манай технологи, шийдлүүдийн талаарх хамгийн их асуугддаг асуултуудад хариулахыг хичээлээ.'
              : 'Answers to the most frequent inquiries regarding our technology, implementation, and future roadmap.'}
          </p>
        </header>

        <div className="max-w-4xl mx-auto mb-32">
          {faqs.map((faq, i) => (
            <FAQItem 
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <div className="glass p-12 md:p-24 rounded-[3.5rem] border-white/5 text-center relative overflow-hidden bg-gradient-to-br from-brand-teal/5 to-brand-accent/5">
           <h2 className="text-4xl md:text-6xl mb-8">{isMn ? 'Өөр асуулт байна уу?' : 'Still have questions?'}</h2>
           <p className="text-xl text-brand-chalk font-light mb-12 max-w-xl mx-auto">
             {isMn ? 'Манай инженерүүдтэй шууд холбогдож дэлгэрэнгүй мэдээлэл аваарай.' : 'Connect directly with our engineering team for detailed technical inquiries.'}
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a href="mailto:info@daccompartners.com" className="btn-primary py-5 px-12 text-[12px]">
               {isMn ? 'Бидэнд бичих' : 'Email Our Team'}
             </a>
             <a href="/#contact" className="btn-outline py-5 px-12 text-[12px]">
               {isMn ? 'Уулзалт товлох' : 'Schedule a Demo'}
             </a>
           </div>
        </div>
      </section>

      <footer className="py-24 px-6 md:px-12 lg:px-24 border-t border-hairline bg-brand-bg-secondary">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="flex items-center gap-4">
             <Landmark className="text-brand-teal" size={32} />
             <span className="font-heading text-xl text-white">DACCOM <span className="text-brand-teal font-mono text-[8px] tracking-[0.4em] block uppercase">Partners</span></span>
          </div>
          <p className="text-brand-chalk/30 font-mono text-[9px] tracking-widest uppercase">
             ULAANBAATAR, MONGOLIA — 2025
          </p>
        </div>
      </footer>
    </div>
  );
}

// Landmark re-import check
import { Landmark } from 'lucide-react';
