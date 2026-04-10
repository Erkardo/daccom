import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Briefcase, MapPin, Clock, ArrowRight, Zap, Target, Users, Globe, Rocket, Shield, Cpu, Code, BarChart3, ChevronRight, Bookmark, Landmark, MessageSquare } from 'lucide-react';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import BrochureButton from '../components/BrochureButton';

export default function CareersPage() {
  const { t, i18n } = useTranslation();
  const isMn = i18n.language === 'mn';

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const jobs = [
    {
      id: 1,
      title: isMn ? 'Embedded Software Engineer' : 'Embedded Software Engineer',
      dept: isMn ? 'Инженер техник' : 'Engineering',
      location: isMn ? 'Улаанбаатар' : 'Ulaanbaatar',
      type: isMn ? 'Бүтэн цаг' : 'Full-time',
      desc: isMn ? 'Робот гар болон IoT мэдрэгчийн програмчлал, C/C++, RTOS дээр ажиллах туршлагатай.' : 'Develop firmware for robotic arms and IoT sensors. Experience with C/C++ and RTOS required.',
      tags: ['C/C++', 'RTOS', 'ARM']
    },
    {
      id: 2,
      title: isMn ? 'AI / ML Engineer' : 'AI / ML Engineer',
      dept: isMn ? 'Дата шинжилгээ' : 'Data Science',
      location: isMn ? 'Алсын зайнаас / Улаанбаатар' : 'Remote / Ulaanbaatar',
      type: isMn ? 'Бүтэн цаг' : 'Full-time',
      desc: isMn ? 'Уул уурхайн өгөгдөл дээр суурилсан predictive загварууд хөгжүүлэх, PyTorch/TensorFlow.' : 'Build predictive models for mining data. Proficiency in PyTorch or TensorFlow.',
      tags: ['PyTorch', 'Computer Vision', 'NPT']
    },
    {
      id: 3,
      title: isMn ? 'Mechanical Design Engineer' : 'Mechanical Design Engineer',
      dept: isMn ? 'Робот техник' : 'Robotics',
      location: isMn ? 'Улаанбаатар' : 'Ulaanbaatar',
      type: isMn ? 'Бүтэн цаг' : 'Full-time',
      desc: isMn ? 'Робот эд анги, грипперүүдийн 3D дизайн, CAD загварчлал, материалын судалгаа.' : '3D design for robotic components and grippers. CAD modeling and material sourcing.',
      tags: ['SolidWorks', 'CAD', '3D Printing']
    }
  ];

  const perks = [
    { icon: <Rocket size={24} />, title: isMn ? 'Өсөх боломж' : 'High Growth', desc: isMn ? 'Дэлхийн түвшний технологи хөгжүүлж буй багт ажиллаж, мэргэжлийн хувьд хурдтай өснө.' : 'Join a team building world-class hardware and grow rapidly at the frontier of tech.' },
    { icon: <Zap size={24} />, title: isMn ? 'Инновацилаг орчин' : 'Cutting Edge', desc: isMn ? 'Бид зөвхөн хэрэглэгч биш, бүтээгчид. Хамгийн сүүлийн үеийн багаж, технологийг ашиглана.' : 'We don\'t just use tech; we build it. Work with the latest tools and internal frameworks.' },
    { icon: <Users size={24} />, title: isMn ? 'Нээлттэй соёл' : 'Open Culture', desc: isMn ? 'Шатлан захирах ёсгүй, бүх санааг нээлттэй сонсож, хамтдаа хөгжинө.' : 'Flat hierarchy where every voice matters. We value curiosity and outcome over hours.' },
    { icon: <Globe size={24} />, title: isMn ? 'Олон улсын төслүүд' : 'Global Projects', desc: isMn ? 'Монголын төдийгүй олон улсын зах зээлд гарах төслүүд дээр ажиллах боломж.' : 'Opportunity to work on projects targeting both local and international markets.' }
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-paper overflow-x-hidden">
      <div className="noise-overlay" />
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0A0A0B_100%)] opacity-80" />
      </div>

      <Navbar />
      <BrochureButton />

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-teal/5 rounded-full blur-[150px] -z-10" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-teal/20 bg-brand-teal/5 mb-6">
              <span className="font-mono text-[10px] text-brand-teal tracking-widest">{isMn ? 'CAREERS' : 'CAREERS'}</span>
              <div className="w-1.5 h-1.5 bg-brand-teal rounded-full animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-8xl font-heading mb-8 leading-[0.9] tracking-tight">
              {isMn ? 'Ирээдүйг хамтдаа' : 'Build the Future'} <br />
              <span className="text-brand-teal italic font-serif font-normal">{isMn ? 'бүтээлцье' : 'With Us'}</span>
            </h1>
            <p className="text-xl text-brand-chalk font-light max-w-2xl leading-relaxed">
              {isMn 
                ? 'Бид Монголын технологийн салбарт шинэ стандарт тогтоож, дэлхийд өрсөлдөхүйц техник болон програм хангамжийн шийдэл боловсруулж байна.'
                : "We're setting new standards in tech, building hardware and software solutions that compete on the global stage from Mongolia."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((perk, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-[2rem] border-white/5 hover:border-brand-teal/30 transition-all group">
                <div className="text-brand-teal mb-6 group-hover:scale-110 transition-transform w-12 h-12 bg-brand-teal/10 rounded-2xl flex items-center justify-center">
                  {perk.icon}
                </div>
                <h3 className="text-2xl mb-4 group-hover:text-brand-teal transition-colors">{perk.title}</h3>
                <p className="text-brand-chalk text-sm font-light leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="font-mono text-[10px] text-brand-teal tracking-widest uppercase">{isMn ? 'Нээлттэй ажлын байрууд' : 'Open Positions'}</span>
              <h2 className="text-4xl md:text-6xl mt-4">{isMn ? 'Манай багт' : 'Join Our'} <span className="text-brand-teal italic font-serif font-normal">{isMn ? 'нэгдээрэй' : 'Mission'}</span></h2>
            </div>
            <div className="text-brand-chalk font-mono text-[10px] mb-2">
              {isMn ? 'НИЙТ' : 'TOTAL'} {jobs.length} {isMn ? 'АЖЛЫН БАЙР' : 'ROLES'}
            </div>
          </div>

          <div className="space-y-6">
            {jobs.map((job, i) => (
              <motion.div key={job.id} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass p-8 md:p-12 rounded-[2.5rem] group hover:border-brand-teal/30 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-brand-teal/10 text-brand-teal rounded-full font-mono text-[9px] border border-brand-teal/20 tracking-wider">
                      {job.dept}
                    </span>
                    <div className="flex items-center gap-2 text-brand-chalk/50 font-mono text-[9px] tracking-wider">
                      <MapPin size={12} /> {job.location}
                    </div>
                    <div className="flex items-center gap-2 text-brand-chalk/50 font-mono text-[9px] tracking-wider">
                      <Clock size={12} /> {job.type}
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl mb-6 group-hover:text-brand-teal transition-colors tracking-tight">
                    {job.title}
                  </h3>
                  <p className="text-brand-chalk text-lg font-light leading-relaxed max-w-2xl mb-8">
                    {job.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-mono text-brand-teal/60 border border-brand-teal/10 rounded-md px-2 py-0.5">#{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="shrink-0">
                  <a href={`mailto:info@daccompartners.com?subject=Job Application: ${job.title}`} 
                    className="inline-flex items-center gap-3 py-4 px-10 bg-brand-teal text-brand-bg rounded-2xl font-mono text-[11px] font-bold hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] hover:scale-[1.02] transition-all whitespace-nowrap">
                    {isMn ? 'Анкет илгээх' : 'Apply Now'} <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-brand-chalk/60 text-sm mb-6">
              {isMn ? 'Хэрэв таны хайж буй ажлын байр байхгүй бол бидэнд анкет/CV-ээ илгээнэ үү.' : "Don't see a role that fits? Send us your CV as a general application."}
            </p>
            <a href="mailto:info@daccompartners.com" className="text-brand-teal hover:underline font-mono text-[10px] tracking-widest">
              info@daccompartners.com
            </a>
          </div>
        </div>
      </section>

      {/* Culture Image / CTA */}
      <section className="py-24 px-6 md:px-12 lg:px-24 mb-24">
        <div className="max-w-7xl mx-auto glass rounded-[3rem] p-12 md:p-24 relative overflow-hidden bg-gradient-to-br from-brand-teal/10 via-transparent to-brand-accent/5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/10 blur-[100px] -z-10 rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/10 blur-[100px] -z-10 rounded-full" />
          
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-7xl mb-12">{isMn ? 'Бид зөвхөн код' : "We're not just"} <br/> <span className="text-brand-teal italic font-serif font-normal">{isMn ? 'биш, бодит байдлыг' : 'coding software.'}</span> <br/> {isMn ? 'өөрчилж байна.' : 'We building reality.'}</h2>
            <p className="text-xl text-brand-chalk font-light mb-12">
              {isMn 
                ? 'Бид чипнээс авахуулаад робот хүртэл, датагаас авахуулаад AI хүртэл цогц шийдлийг өөрсдийн гараар босож байна.'
                : 'From chips to robots, from raw data to intelligence, we build the full stack ourselves. Join the movement.'}
            </p>
            <a href="mailto:info@daccompartners.com" className="btn-primary py-5 px-12 text-[12px] inline-flex items-center gap-3">
              {isMn ? 'Бидэнтэй нэгдэх' : 'Connect with Us'} <MessageSquare size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Link Footer */}
      <footer className="py-24 px-6 md:px-12 lg:px-24 border-t border-hairline bg-brand-bg-secondary relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-4">
             <Landmark className="text-brand-teal" size={32} />
             <div>
               <span className="font-heading text-xl text-white block">DACCOM</span>
               <span className="font-mono text-[8px] text-brand-teal tracking-[0.4em] uppercase">Partners</span>
             </div>
          </div>
          <p className="text-brand-chalk/30 font-mono text-[9px] tracking-widest text-center md:text-left">
            ULAANBAATAR, MONGOLIA © 2025 ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>
    </div>
  );
}

// Note: Landmark and MessageSquare are imported above in the fixed chunk
