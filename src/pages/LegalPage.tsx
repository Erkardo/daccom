import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Shield, Lock, FileText, ChevronRight, Scale, Gavel, Eye, Database, Globe, ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BrochureButton from '../components/BrochureButton';

export default function LegalPage() {
  const { i18n } = useTranslation();
  const isMn = i18n.language === 'mn';
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>('privacy');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-paper overflow-x-hidden pt-32">
      <div className="noise-overlay" />
      <Navbar />
      <BrochureButton />

      <div className="max-w-4xl mx-auto px-6 pb-32 relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-brand-teal/60 hover:text-brand-teal transition-colors mb-12 font-mono text-[9px] tracking-widest uppercase">
          <ArrowLeft size={14} /> {isMn ? 'Буцах' : 'Back'}
        </Link>
        
        <header className="mb-16">
          <h1 className="text-5xl md:text-7xl font-heading mb-8">{isMn ? 'Хууль эрх зүй' : 'Legal'} <span className="text-brand-teal italic font-serif font-normal">{isMn ? 'мэдээлэл' : 'Center'}</span></h1>
          <div className="flex gap-4 border-b border-white/5">
            <button 
              onClick={() => setActiveTab('privacy')}
              className={`pb-4 px-2 font-mono text-[10px] tracking-widest transition-all relative ${activeTab === 'privacy' ? 'text-brand-teal' : 'text-brand-chalk hover:text-white'}`}
            >
              {isMn ? 'НУУЦЛАЛЫН БОДЛОГО' : 'PRIVACY POLICY'}
              {activeTab === 'privacy' && <motion.div layoutId="legalTab" className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-teal" />}
            </button>
            <button 
              onClick={() => setActiveTab('terms')}
              className={`pb-4 px-2 font-mono text-[10px] tracking-widest transition-all relative ${activeTab === 'terms' ? 'text-brand-teal' : 'text-brand-chalk hover:text-white'}`}
            >
              {isMn ? 'ҮЙЛЧИЛГЭЭНИЙ НӨХЦӨЛ' : 'TERMS OF SERVICE'}
              {activeTab === 'terms' && <motion.div layoutId="legalTab" className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-teal" />}
            </button>
          </div>
        </header>

        <div className="glass p-8 md:p-16 rounded-[3rem] border-white/5 bg-white/[0.01]">
          {activeTab === 'privacy' ? (
            <article className="prose prose-invert max-w-none space-y-12">
              <section>
                <div className="flex items-center gap-3 text-brand-teal mb-4">
                  <Eye size={20} />
                  <h2 className="text-2xl m-0">{isMn ? '1. Өгөгдөл цуглуулах' : '1. Data Collection'}</h2>
                </div>
                <p className="text-brand-chalk leading-relaxed font-light">
                  {isMn 
                    ? 'Бид таныг вэб сайтаар зочлох, мэдээлэл илгээх үед зөвхөн шаардлагатай мэдээллийг цуглуулна. Үүнд нэр, имэйл хаяг болон төхөөрөмжийн мэдээлэл багтана.'
                    : 'We collect information you provide directly to us, such as when you submit an inquiry form. This includes your name, email address, and any metadata required for technical support.'}
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 text-brand-teal mb-4">
                  <Database size={20} />
                  <h2 className="text-2xl m-0">{isMn ? '2. Өгөгдлийн аюулгүй байдал' : '2. Data Security'}</h2>
                </div>
                <p className="text-brand-chalk leading-relaxed font-light">
                  {isMn 
                    ? 'Daccom Partners нь цуглуулсан өгөгдлийг дэлхийн стандарт аюулгүй байдлын протоколуудаар хамгаална. Бид таны зөвшөөрөлгүй мэдээллийг гуравдагч талд худалдахгүй.'
                    : "We implement industry-standard encryption and security measures to protect your data. We do not sell your personal information to third parties under any circumstances."}
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 text-brand-teal mb-4">
                  <Shield size={20} />
                  <h2 className="text-2xl m-0">{isMn ? '3. AI болон IoT өгөгдөл' : '3. AI & IoT Data'}</h2>
                </div>
                <p className="text-brand-chalk leading-relaxed font-light">
                  {isMn 
                    ? 'Манай AirQ болон Mining AI төхөөрөмжүүдийн цуглуулсан техникийн өгөгдөл нь зөвхөн системийг сайжруулахад ашиглагдах бөгөөд хувь хүний нууцад хамааралгүй болно.'
                    : 'Technical data collected by our AirQ and Mining AI systems is used solely for performance optimization and predictive analysis, ensuring full anonymity.'}
                </p>
              </section>
            </article>
          ) : (
            <article className="prose prose-invert max-w-none space-y-12">
              <section>
                <div className="flex items-center gap-3 text-brand-teal mb-4">
                  <Scale size={20} />
                  <h2 className="text-2xl m-0">{isMn ? '1. Оюуны өмч' : '1. Intellectual Property'}</h2>
                </div>
                <p className="text-brand-chalk leading-relaxed font-light">
                  {isMn 
                    ? 'Энэхүү вэб сайт болон түүнд агуулагдах бүх контент, загвар, технологийн шийдлүүд нь Daccom Partners LLC-ийн өмч болно.'
                    : 'All content, designs, and technological solutions provided on this website are the intellectual property of Daccom Partners LLC unless otherwise stated.'}
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 text-brand-teal mb-4">
                  <Gavel size={20} />
                  <h2 className="text-2xl m-0">{isMn ? '2. Үйлчилгээний хязгаарлалт' : '2. Usage Limitations'}</h2>
                </div>
                <p className="text-brand-chalk leading-relaxed font-light">
                  {isMn 
                    ? 'Хэрэглэгч манай системүүдийг зөвхөн зориулалтын дагуу ашиглах үүрэгтэй. Бусдын системд нэвтрэх, кодыг хуулбарлахыг хориглоно.'
                    : 'Users agree to utilize our services and information only for intended professional purposes. Reverse engineering or unauthorized distribution of our systems is strictly prohibited.'}
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 text-brand-teal mb-4">
                  <Globe size={20} />
                  <h2 className="text-2xl m-0">{isMn ? '3. Хариуцлагын хязгаар' : '3. Liability'}</h2>
                </div>
                <p className="text-brand-chalk leading-relaxed font-light">
                  {isMn 
                    ? 'Бид системийн тасралтгүй ажиллагааг хангахыг хичээх боловч гэнэтийн техникийн саатлаас үүдсэн хохиролд хариуцлага хүлээхгүй.'
                    : 'While we strive for maximum uptime and accuracy, Daccom Partners is not liable for indirect damages resulting from temporary system interruptions or technical downtime.'}
                </p>
              </section>
            </article>
          )}
        </div>

        <div className="mt-16 text-center">
          <p className="text-brand-chalk/40 text-sm mb-4">{isMn ? 'Сүүлд шинэчлэгдсэн: 2025.04.10' : 'Last Updated: April 10, 2025'}</p>
          <a href="mailto:legal@daccompartners.com" className="text-brand-teal hover:underline font-mono text-[9px] tracking-widest">
            legal@daccompartners.com
          </a>
        </div>
      </div>
    </div>
  );
}
