import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { BookOpen, Calendar, Clock, ArrowRight, Activity, Cpu, Brain, Rocket, Search, Filter, Share2, Bookmark, BarChart3, Wind, HardHat, TrendingUp, Zap, ChevronRight, Globe, Users } from 'lucide-react';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import BrochureButton from '../components/BrochureButton';

export default function InsightsPage() {
  const { i18n } = useTranslation();
  const isMn = i18n.language === 'mn';

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const posts = [
    {
      id: 1,
      category: isMn ? 'Судалгаа / AI' : 'Research / AI',
      date: isMn ? '2025.04.10' : 'April 10, 2025',
      time: isMn ? '8 мин' : '8 min read',
      title: isMn ? 'Уул уурхайн дугуйн зардлыг AI-аар оновчлох нь: Case Study' : 'Optimizing Mining Tire OpEx with AI: A Case Study',
      desc: isMn ? 'Predictive AI ашиглан дугуйн наслалтыг хэрхэн 2 дахин нэмэгдүүлж, зардлыг 40% бууруулах боломжтойг манай технологийн жишээн дээр тайлбарлалаа.' : 'Learn how predictive AI models can double tire lifespan and reduce operational costs by 40% through real-world deployment data.',
      img: '/mining-ai-thumb.jpg', // we can use existing or generic paths
      icon: <Brain className="text-orange-400" size={18} />
    },
    {
      id: 2,
      category: isMn ? 'Технологи / IoT' : 'Tech / IoT',
      date: isMn ? '2025.03.22' : 'March 22, 2025',
      time: isMn ? '5 мин' : '5 min read',
      title: isMn ? 'Дотоод орчны агаарын чанар: Бүтээмжийн үл харагдах дайсан' : 'Indoor Air Quality: The Invisible Enemy of Productivity',
      desc: isMn ? 'Harvard-ийн судалгаагаар CO₂ түвшин 1000ppm-ээс давахад хүний сэтгэн бодох чадвар 50% буурдаг байна. AirQ-ийн мэдээлэлд үндэслэн шинжлэх нь.' : 'According to Harvard research, cognitive scores drop 50% when CO₂ levels exceed 1000ppm. An analysis based on AirQ sensor data.',
      img: '/airq-thumb.jpg',
      icon: <Wind className="text-purple-400" size={18} />
    },
    {
      id: 3,
      category: isMn ? 'Робот техник' : 'Robotics',
      date: isMn ? '2025.02.15' : 'February 15, 2025',
      time: isMn ? '12 мин' : '12 min read',
      title: isMn ? 'Techno-Arm: Монголд бүтээсэн анхны аж үйлдвэрийн робот гар' : 'Techno-Arm: Mongolia\'s First Industrial Robotic Arm',
      desc: isMn ? 'Прототипээс эхлээд бодит үйлдвэрлэл хүртэлх зам. Бид яагаад өөрсдөө робот хийхээр шийдсэн бэ?' : 'From prototype to real-world industrial application. Exploring the technical challenges and the reasoning behind building our own hardware.',
      img: '/robot-thumb.jpg',
      icon: <Cpu className="text-brand-teal" size={18} />
    }
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-paper overflow-x-hidden">
      <div className="noise-overlay" />
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute inset-x-0 top-0 h-[800px] bg-gradient-to-b from-brand-accent/5 to-transparent pointer-events-none" />
      </div>

      <Navbar />
      <BrochureButton />

      {/* Hero Section */}
      <section className="relative pt-48 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="font-mono text-[10px] text-brand-teal tracking-widest uppercase mb-6 block">{isMn ? 'МЭДЛЭГ ХУВААЛЦАХ' : 'SHARING KNOWLEDGE'}</span>
            <h1 className="text-6xl md:text-8xl font-heading mb-8 leading-[0.9] tracking-tighter">
              {isMn ? 'Бидний' : 'Our'} <br/>
              <span className="text-brand-teal italic font-serif font-normal">{isMn ? 'Эрэл хайгуул' : 'Insights'}</span>
            </h1>
            <p className="text-xl text-brand-chalk font-light max-w-2xl leading-relaxed">
              {isMn 
                ? 'Технологийн чиг хандлага, инженерчлэлийн судалгаа, манай багийн хамгийн сүүлийн үеийн мэдээ мэдээллүүдийг эндээс уншиж танилцаарай.'
                : 'Scientific engineering research, technical updates, and the latest news from our labs and pilot projects.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post, i) => (
              <motion.article key={post.id} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.15 }}
                className="flex flex-col h-full group"
              >
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden glass mb-8 border-white/5 group-hover:border-brand-teal/20 transition-all duration-500">
                  <div className="absolute inset-0 bg-brand-bg/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-brand-teal flex items-center justify-center text-brand-bg scale-90 group-hover:scale-100 transition-transform duration-500">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                  <div className="absolute top-6 left-6 z-20">
                     <div className="px-3 py-1 bg-brand-bg/80 backdrop-blur-md rounded-full text-[9px] font-mono text-brand-teal border border-brand-teal/20 tracking-widest">
                       {post.category}
                     </div>
                  </div>
                  <div className="w-full h-full bg-gradient-to-br from-brand-bg/50 to-brand-bg flex items-center justify-center opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700">
                     <div className="scale-[2] opacity-30 mt-[-20%]">{post.icon}</div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-brand-chalk/40 font-mono text-[9px] tracking-widest mb-4">
                    <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={12} /> {post.time}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading mb-4 group-hover:text-brand-teal transition-colors tracking-tight leading-tight">
                    <a href="#">{post.title}</a>
                  </h3>
                  <p className="text-brand-chalk text-base font-light leading-relaxed mb-8 flex-1">
                    {post.desc}
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-brand-teal font-mono text-[10px] tracking-widest group-hover:gap-4 transition-all uppercase">
                    {isMn ? 'Дэлгэрэнгүй' : 'Read Full Article'} <ChevronRight size={14} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex justify-center">
          <div className="w-full max-w-4xl text-center glass p-16 md:p-24 rounded-[3rem] border-white/5 relative overflow-hidden bg-gradient-to-b from-brand-teal/5 to-transparent">
             <div className="absolute top-0 left-0 w-32 h-32 bg-brand-teal/10 blur-[80px] rounded-full" />
             <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-accent/10 blur-[80px] rounded-full" />
             
             <h2 className="text-4xl md:text-6xl mb-12">{isMn ? 'Технологийн мэдээ' : 'Get Technical'} <br/> <span className="text-brand-teal italic font-serif font-normal">{isMn ? 'авах' : 'Updates'}</span></h2>
             
             <div className="max-w-md mx-auto relative">
                <input 
                  type="email" 
                  placeholder={isMn ? 'Имэйл хаягаа оруулна уу' : 'Enter your email address'}
                  className="w-full bg-brand-bg/50 border border-white/10 rounded-2xl py-5 px-8 text-sm text-white focus:outline-none focus:border-brand-teal transition-all mb-4"
                />
                <button className="w-full btn-primary py-5 rounded-2xl text-[12px] uppercase">
                  {isMn ? 'Бүртгүүлэх' : 'Subscribe to Journal'}
                </button>
             </div>
             <p className="mt-8 text-brand-chalk/30 font-mono text-[9px] tracking-widest uppercase">
               {isMn ? 'Долоо хоног бүр шинэ мэдээлэл' : 'New technical insights every week'}
             </p>
          </div>
        </div>
      </section>

      <footer className="py-24 px-6 md:px-12 lg:px-24 border-t border-hairline bg-brand-bg-secondary relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="flex items-center gap-4">
             <Landmark className="text-brand-teal" size={32} />
             <div>
               <span className="font-heading text-xl text-white block">DACCOM</span>
               <span className="font-mono text-[8px] text-brand-teal tracking-[0.4em] uppercase">Partners</span>
             </div>
          </div>
          <div>
             <a href="#" className="font-mono text-[9px] text-brand-chalk/40 hover:text-brand-teal transition-colors tracking-widest">{isMn ? 'МАШИНУУД' : 'ROBOTS'}</a>
             <span className="mx-4 text-brand-chalk/20">/</span>
             <a href="#" className="font-mono text-[9px] text-brand-chalk/40 hover:text-brand-teal transition-colors tracking-widest">IoT</a>
             <span className="mx-4 text-brand-chalk/20">/</span>
             <a href="#" className="font-mono text-[9px] text-brand-chalk/40 hover:text-brand-teal transition-colors tracking-widest">AI</a>
          </div>
          <p className="text-brand-chalk/30 font-mono text-[9px] tracking-widest uppercase">
             ULAANBAATAR, MONGOLIA © 2025
          </p>
        </div>
      </footer>
    </div>
  );
}

// Landmark re-import check
import { Landmark } from 'lucide-react';
