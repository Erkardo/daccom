import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Cpu, Activity, Shield, TrendingDown, CircleDollarSign, Truck, HardHat, BarChart3, Wifi, Bell, Gauge, Eye, BrainCircuit, Database, Zap } from 'lucide-react';

export default function MiningAIPage() {
  const { i18n } = useTranslation();
  const isMn = i18n.language === 'mn';

  const painPoints = [
    { value: '#2', label: isMn ? 'Уул уурхайн хамгийн их зардал' : "2nd Largest Mining OpEx", desc: isMn ? 'Дугуйн зардал нь уул уурхайн компаний хоёр дахь том зардал бөгөөд нэг дугуйн үнэ $30,000-80,000 хүрдэг.' : 'Tire costs are the second-largest mining opex. A single OTR tire costs $30,000-$80,000.' },
    { value: '40%', label: isMn ? 'Дугуйн насжилт алдагдал' : "Lost Tire Lifespan", desc: isMn ? 'Зохисгүй ашиглалтаас болж дугуйн ашиглах боломжит наслалтын 40% хүртэлх хэсэг нь алдагддаг.' : "Up to 40% of usable tire life is lost due to improper inflation, alignment, and overloading." },
    { value: '$2M+', label: isMn ? 'Жилийн алдагдал' : "Annual Loss per Fleet", desc: isMn ? 'Нэг уурхайн хүнд машинуудын флотын дугуйн алдагдал жилд $2 саяаас давж гарна.' : 'A single mining fleet can lose over $2M annually from premature tire failures and unplanned downtime.' },
  ];

  const sensorData = [
    { icon: <Gauge size={20} />, name: isMn ? 'Даралтын мэдрэгч' : 'Pressure Sensor', desc: isMn ? 'TPMS – Дугуйн даралтыг бодит цагт хянах' : 'Real-time TPMS monitoring', spec: '0-200 PSI ±0.5%' },
    { icon: <Activity size={20} />, name: isMn ? 'Температурын мэдрэгч' : 'Temperature Sensor', desc: isMn ? 'Дугуйн дотоод температурыг хянах' : 'Internal tire temperature tracking', spec: '-40°C to +150°C' },
    { icon: <TrendingDown size={20} />, name: isMn ? 'Элэгдлийн мэдрэгч' : 'Tread Depth Sensor', desc: isMn ? 'Тасалбарын гүнийг хэмжих' : 'Tread wear measurement', spec: '0-80mm ±0.1mm' },
    { icon: <Truck size={20} />, name: isMn ? 'Ачааны мэдрэгч' : 'Load Cell Sensor', desc: isMn ? 'Ачаалал хэтрэхийг мэдэх' : 'Overload detection', spec: '0-500T ±1%' },
  ];

  const aiCapabilities = [
    { icon: <BrainCircuit size={22} />, title: isMn ? 'Урьдчилан таамаглах AI' : 'Predictive Analytics AI', desc: isMn ? 'Машин сургалтын алгоритмтаар дугуйн элэгдлийг урьдчилан таамаглаж, солих хугацааг оновчтой тодорхойлно.' : 'Machine learning models predict tire wear patterns and determine optimal replacement schedules.' },
    { icon: <Eye size={22} />, title: isMn ? 'Anomaly Detection' : 'Anomaly Detection', desc: isMn ? 'Хэвийн бус өөрчлөлт гарах үед автоматаар дохиолол өгч, ослоос урьдчилан сэргийлнэ.' : 'Real-time anomaly detection triggers instant alerts for abnormal conditions, preventing catastrophic failure.' },
    { icon: <BarChart3 size={22} />, title: isMn ? 'Fleet Intelligence' : 'Fleet Intelligence Dashboard', desc: isMn ? 'Бүх машины дугуйн мэдээллийг нэг дашбоардаас хянаж, оновчтой шийдвэр гаргахад тусална.' : 'Centralized fleet-wide tire health dashboard enabling data-driven operational decisions.' },
    { icon: <Database size={22} />, title: isMn ? 'ROI тайлан' : 'ROI Reporting', desc: isMn ? 'Системийг суурилуулснаар хэмнэж буй зардлыг бодит цагт тооцоолж тайлагнана.' : 'Real-time cost savings tracking and reporting from deployment day one.' },
  ];

  const competitors = [
    { name: 'Bridgestone TireIQ', country: 'Japan', focus: isMn ? 'Дугуйн даралтын мониторинг' : 'Tire pressure monitoring' },
    { name: 'Michelin MEMS', country: 'France', focus: isMn ? 'Ухаалаг дугуйн мэдрэгч' : 'Smart tire sensors' },
    { name: 'Caterpillar MineStar', country: 'USA', focus: isMn ? 'Флотын удирдлагын систем' : 'Fleet management system' },
    { name: 'Hexagon Mining', country: 'Sweden', focus: isMn ? 'Уул уурхайн автоматжуулалт' : 'Mining automation' },
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-paper overflow-x-hidden">
      <div className="noise-overlay" />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-md border-b border-hairline bg-brand-bg/60">
        <Link to="/" className="flex items-center gap-3 text-brand-chalk hover:text-brand-teal transition-colors group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-[10px] uppercase tracking-widest">{isMn ? 'Нүүр хуудас' : 'Back Home'}</span>
        </Link>
        <span className="font-mono text-[10px] text-orange-400 tracking-widest">MINING AI</span>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,146,60,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-400/20 bg-orange-400/5 mb-6">
              <HardHat size={12} className="text-orange-400" />
              <span className="font-mono text-[10px] text-orange-400 tracking-widest">{isMn ? 'ХӨГЖҮҮЛЭЛТИЙН ШАТАНД' : 'IN DEVELOPMENT'}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading mb-6 leading-[0.9]">
              {isMn ? 'Уул Уурхайн' : 'Mining'} <br/>
              <span className="text-orange-400 italic font-serif font-normal">
                {isMn ? 'Урьдчилан Мэдэгдэх AI' : 'Predictive AI'}
              </span>
            </h1>
            <p className="text-xl text-brand-chalk font-light leading-relaxed mb-10 max-w-2xl mx-auto">
              {isMn 
                ? 'Уул уурхайн хүнд даацын машин, тоног төхөөрөмжийн дугуйны сенсорыг хиймэл оюунаар боловсруулж, дугуйн зардлыг бууруулах, ослоос урьдчилан сэргийлэх шийдэл.'
                : "AI-powered tire sensor analytics for heavy mining vehicles. Reduce the second-largest operational cost and prevent catastrophic tire failures through predictive intelligence."}
            </p>
            <a href="/#contact" className="inline-flex items-center gap-3 py-4 px-10 bg-gradient-to-r from-orange-400 to-amber-400 text-brand-bg rounded-2xl font-mono text-[11px] font-bold hover:shadow-[0_0_40px_rgba(251,146,60,0.3)] hover:scale-[1.02] transition-all">
              {isMn ? 'Туршилтын хамтрагч болох' : 'Become a Pilot Partner'} <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] text-orange-400 tracking-widest">{isMn ? 'АСУУДАЛ' : 'THE PROBLEM'}</span>
            <h2 className="text-4xl md:text-5xl mt-4">{isMn ? 'Дугуйн зардал — Далд' : 'Tire Costs — The Hidden'} <span className="text-orange-400 italic font-serif font-normal">{isMn ? 'алдагдал' : 'Drain'}</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painPoints.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="glass p-10 rounded-[2rem] border-orange-400/10 hover:border-orange-400/30 transition-all text-center">
                <p className="text-5xl font-bold text-orange-400 mb-4">{p.value}</p>
                <h3 className="text-xl mb-3">{p.label}</h3>
                <p className="text-brand-chalk font-light text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Sensors */}
      <section className="py-24 px-6 md:px-12 lg:px-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-400/[0.02] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] text-orange-400 tracking-widest">{isMn ? 'ӨӨРСДӨӨ ХИЙСЭН' : 'PROPRIETARY HARDWARE'}</span>
            <h2 className="text-4xl md:text-5xl mt-4">{isMn ? 'Өөрсдийн зохион бүтээсэн' : 'Our Custom-Built'} <span className="text-orange-400 italic font-serif font-normal">{isMn ? 'мэдрэгчүүд' : 'Sensors'}</span></h2>
            <p className="text-brand-chalk font-light mt-4 max-w-xl mx-auto">
              {isMn ? 'Монголын уул уурхайн хатуу нөхцөлд зориулан загварчилж, бүтээсэн бат бөх мэдрэгчүүд.' : 'Ruggedized sensors specifically designed for the harsh conditions of Mongolian mining operations.'}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sensorData.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-[2rem] group hover:border-orange-400/30 transition-all">
                <div className="text-orange-400 mb-4">{s.icon}</div>
                <h3 className="text-lg mb-2 group-hover:text-orange-400 transition-colors">{s.name}</h3>
                <p className="text-brand-chalk font-light text-sm mb-3">{s.desc}</p>
                <p className="font-mono text-[10px] text-orange-400/70 tracking-wider">{s.spec}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl">{isMn ? 'Хиймэл оюуны' : 'AI'} <span className="text-orange-400 italic font-serif font-normal">{isMn ? 'чадамж' : 'Capabilities'}</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiCapabilities.map((cap, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-[2rem] group hover:border-orange-400/30 transition-all flex gap-6">
                <div className="text-orange-400 shrink-0 mt-1">{cap.icon}</div>
                <div>
                  <h3 className="text-xl mb-3 group-hover:text-orange-400 transition-colors">{cap.title}</h3>
                  <p className="text-brand-chalk font-light text-sm leading-relaxed">{cap.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Benchmarks */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl">{isMn ? 'Олон улсын' : 'Global'} <span className="text-orange-400 italic font-serif font-normal">{isMn ? 'жишиг' : 'Benchmarks'}</span></h2>
            <p className="text-brand-chalk font-light mt-4 max-w-lg mx-auto">
              {isMn ? 'Дэлхийн тэргүүлэгч компаниудын ижил чиглэлийн шийдлүүдтэй зэрэгцүүлэн ажиллаж байна.' : 'Operating alongside the same verticals as global industry leaders.'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {competitors.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-2xl border-orange-400/5">
                <p className="text-white font-medium mb-1">{c.name}</p>
                <p className="font-mono text-[9px] text-orange-400 uppercase tracking-wider mb-2">{c.country}</p>
                <p className="text-brand-chalk text-xs font-light">{c.focus}</p>
              </motion.div>
            ))}
          </div>
          <div className="glass rounded-[2rem] p-8 mt-8 border-orange-400/10">
            <div className="flex items-start gap-4">
              <Zap size={20} className="text-orange-400 shrink-0 mt-1" />
              <p className="text-brand-chalk font-light leading-relaxed">
                {isMn 
                  ? 'Daccom Partners нь дээрх олон улсын компаниудын шийдлүүдтэй ижил зарчмаар ажилладаг боловч Монголын уул уурхайн тодорхой нөхцөлд тохирсон, хямд өртөгтэй, орон нутгийн дэмжлэгтэй шийдлийг санал болгодогоороо ялгарна.'
                  : "Daccom Partners differentiates by offering locally developed, cost-efficient solutions specifically calibrated for Mongolian mining conditions, with full local support and customization capability."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expected Impact */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl">{isMn ? 'Хүлээгдэж буй' : 'Expected'} <span className="text-orange-400 italic font-serif font-normal">{isMn ? 'үр дүн' : 'Impact'}</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { val: '30-50%', label: isMn ? 'Дугуйн зардал бууруулах' : 'Tire Cost Reduction' },
              { val: '80%', label: isMn ? 'Гэнэтийн зогсолт бууруулах' : 'Unplanned Downtime Reduction' },
              { val: '2x', label: isMn ? 'Дугуйн насжилт нэмэгдүүлэх' : 'Tire Lifespan Extension' },
              { val: '<6 сар', label: isMn ? 'Хөрөнгө оруулалтын нөхөлт' : 'ROI Payback Period' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl text-center border-orange-400/10 hover:border-orange-400/30 transition-all">
                <p className="text-3xl md:text-4xl font-bold text-orange-400 mb-3">{item.val}</p>
                <p className="text-sm text-brand-chalk font-light">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto glass rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-transparent pointer-events-none" />
          <h2 className="text-4xl md:text-5xl mb-6 relative z-10">{isMn ? 'Туршилтын хамтрагч болох' : 'Join Our Pilot Program'}</h2>
          <p className="text-brand-chalk font-light mb-10 relative z-10 max-w-xl mx-auto">
            {isMn 
              ? 'Бид одоогоор туршилтын үе шатандаа явагдаж байна. Уул уурхайн компаниудыг туршилтын хамтрагчаар урьж байна.'
              : "We're currently in our pilot phase and inviting mining companies to join as early adopter partners."}
          </p>
          <a href="/#contact" className="inline-flex items-center gap-3 py-4 px-10 bg-gradient-to-r from-orange-400 to-amber-400 text-brand-bg rounded-2xl font-mono text-[11px] font-bold hover:shadow-[0_0_40px_rgba(251,146,60,0.3)] hover:scale-[1.02] transition-all relative z-10">
            {isMn ? 'Холбоо барих' : 'Get in Touch'} <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
