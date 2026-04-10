import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Cpu, Activity, Shield, TrendingDown, CircleDollarSign, Truck, HardHat, BarChart3, Wifi, Bell, Gauge, Eye, BrainCircuit, Database, Zap, Cog, Radio, Layers, AlertTriangle, Target, Clock, Users, Globe } from 'lucide-react';
import { useEffect } from 'react';

export default function MiningAIPage() {
  const { i18n } = useTranslation();
  const isMn = i18n.language === 'mn';

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const painPoints = [
    { value: '#2', label: isMn ? 'Уул уурхайн 2-р том зардал' : "2nd Largest Mining OpEx", desc: isMn ? 'Дугуйн зардал нь шатахууны дараа хамгийн их зардал. Нэг OTR дугуйн үнэ $30,000-$80,000.' : 'After fuel, tires are the biggest cost. A single OTR tire costs $30,000-$80,000.' },
    { value: '40%', label: isMn ? 'Дугуйн наслалт алдагдал' : "Lost Tire Lifespan", desc: isMn ? 'Зохисгүй даралт, хэт ачаалал, халуун нөхцлөөс болж наслалтын 40% хүртэл алдагддаг.' : "40% of tire life lost to improper inflation, overloading, and thermal degradation." },
    { value: '$2M+', label: isMn ? 'Жилийн алдагдал (нэг флот)' : "Annual Loss / Fleet", desc: isMn ? 'Нэг уурхайн 30-40 хүнд машины флотын дугуйны жилийн алдагдал $2 сая+.' : 'A 30-40 truck fleet loses $2M+ annually from premature failures and unplanned downtime.' },
  ];

  const sensorData = [
    { icon: <Gauge size={22} />, name: 'TPMS', full: isMn ? 'Даралтын мэдрэгч' : 'Pressure Sensor', desc: isMn ? 'Дугуйн дотоод даралтыг бодит цагт хянаж, хэвийн бус уналтыг илрүүлнэ. Даралт бууссан дугуй 25% хурдан элэгддэг.' : 'Real-time tire pressure monitoring. Under-inflated tires wear 25% faster.', spec: '0-200 PSI ±0.5%', why: isMn ? 'Даралт ↓10% = Наслалт ↓15%' : '↓10% Pressure = ↓15% Life' },
    { icon: <Activity size={22} />, name: isMn ? 'Температур' : 'Thermal', full: isMn ? 'Температурын мэдрэгч' : 'Temperature Sensor', desc: isMn ? 'Дугуйн дотоод температур 95°C-аас давахад тэсрэх аюултай. Бодит цагт температурыг хянана.' : "Tires risk blowout above 95°C. Real-time thermal monitoring prevents catastrophic failure.", spec: '-40°C to +150°C', why: isMn ? '>95°C = Тэсрэх аюул' : '>95°C = Blowout Risk' },
    { icon: <TrendingDown size={22} />, name: isMn ? 'Элэгдэл' : 'Tread Depth', full: isMn ? 'Элэгдлийн мэдрэгч' : 'Tread Depth Sensor', desc: isMn ? 'Тасалбарын гүнийг хэмжиж, солих хугацааг AI-аар оновчтой тодорхойлно. Эрт солих алдагдлыг арилгана.' : 'Measure tread depth and use AI to determine optimal replacement timing, preventing premature swaps.', spec: '0-80mm ±0.1mm', why: isMn ? 'Оновчтой солилт = 20% хэмнэлт' : 'Optimal Timing = 20% Saved' },
    { icon: <Truck size={22} />, name: isMn ? 'Ачаалал' : 'Load Cell', full: isMn ? 'Ачааны мэдрэгч' : 'Load Cell Sensor', desc: isMn ? 'Ачаа хэт их ачсан эсэхийг хянаж, дугуйн доголдлоос урьдчилан сэргийлнэ. 10% хэтрэхэд наслалт 20% буурдаг.' : '10% overloading reduces tire life by 20%. Load cells prevent this silently destructive habit.', spec: '0-500T ±1%', why: isMn ? '+10% ачаалал = -20% наслалт' : '+10% Load = -20% Life' },
  ];

  const aiPipeline = [
    { step: '01', title: isMn ? 'Мэдээлэл цуглуулах' : 'Data Ingestion', desc: isMn ? '4 төрлийн мэдрэгчээс 1 секундийн давтамжтай өгөгдөл цуглуулна. Edge Computing-ээр газар дээр нь бэлтгэнэ.' : 'Ingest data from 4 sensor types at 1Hz. Edge computing pre-processes on-site for low-latency analysis.', icon: <Database size={24} /> },
    { step: '02', title: isMn ? 'Pattern Recognition' : 'Pattern Detection', desc: isMn ? 'Machine Learning загвар нь хэвийн ажиллагаатай үеийн pattern-ыг сурч, хэвийн бус өөрчлөлтийг илрүүлнэ.' : 'ML models learn normal operating patterns, then flag anomalies: unusual pressure drops, thermal spikes, uneven wear.', icon: <BrainCircuit size={24} /> },
    { step: '03', title: isMn ? 'Урьдчилсан таамаглал' : 'Predictive Forecast', desc: isMn ? 'Дугуй тус бүрийн үлдсэн наслалтыг тооцоолж, солих оновчтой хугацааг зөвлөнө. ROI тайлан бэлтгэнэ.' : 'Calculate remaining useful life for each tire, recommend optimal replacement timing, and generate ROI reports.', icon: <Target size={24} /> },
    { step: '04', title: isMn ? 'Дохиолол & Арга хэмжээ' : 'Alert & Action', desc: isMn ? 'Шургуу, өндөр, дунд зэрэглэлийн дохиолол. Диспетчер, жолоочид шууд мэдэгдэнэ. Автомат тормозлох систем.' : 'Tiered alerts (critical, high, moderate) to dispatchers and operators. Auto-deploy braking in extreme cases.', icon: <Bell size={24} /> },
  ];

  const competitors = [
    { name: 'Bridgestone TireIQ', country: isMn ? 'Япон' : 'Japan', focus: 'TPMS + Analytics', funding: '$1B+ (Corp)', strength: isMn ? 'Дэлхийн хамгийн том дугуйн брэнд' : 'Global tire market leader' },
    { name: 'Michelin MEMS', country: isMn ? 'Франц' : 'France', focus: isMn ? 'Ухаалаг дугуй RFID' : 'Smart tire RFID', funding: '$500M+ (Corp)', strength: isMn ? 'RFID + дугуйн дотоод мэдрэгч' : 'Embedded RFID + in-tire sensors' },
    { name: 'SYMX.AI', country: isMn ? 'АНУ' : 'USA', focus: isMn ? 'AI тоног төхөөрөмжийн засвар' : 'AI equipment maintenance', funding: '$15M Series A', strength: isMn ? 'Хүнд тоног төхөөрөмжийн predictive AI' : 'Heavy equipment predictive AI' },
    { name: 'Caterpillar MineStar', country: isMn ? 'АНУ' : 'USA', focus: isMn ? 'Флотын бүрэн удирдлага' : 'Full fleet management', funding: '$2B+ (Corp)', strength: isMn ? 'CAT машинтай бүрэн интеграц' : 'Full CAT equipment integration' },
    { name: 'Hexagon Mining', country: isMn ? 'Швед' : 'Sweden', focus: isMn ? 'Уул уурхайн аюулгүй байдал' : 'Mining safety automation', funding: '$500M+ (Corp)', strength: isMn ? 'Бүрэн автономжуулалт' : 'Full mine automation' },
  ];

  const impactMetrics = [
    { val: '30-50%', label: isMn ? 'Дугуйн зардал бууруулах' : 'Tire Cost Reduction', desc: isMn ? 'Оновчтой солилт + урьдчилсан засвар' : 'Optimal timing + prevention' },
    { val: '80%', label: isMn ? 'Гэнэтийн зогсолт бууруулах' : 'Unplanned Downtime ↓', desc: isMn ? 'Урьдчилан мэдэх = урьдчилан арга хэмжээ' : 'Predict → Prevent → Perform' },
    { val: '2x', label: isMn ? 'Дугуйн наслалт нэмэгдүүлэх' : 'Tire Lifespan ↑', desc: isMn ? 'Зөв даралт + ачаалал хяналт' : 'Proper inflation + load control' },
    { val: '<6 мо', label: isMn ? 'Хөрөнгө оруулалтын нөхөлт' : 'ROI Payback', desc: isMn ? 'Нэг флотоос $500K+ хэмнэлт' : '$500K+ savings per fleet' },
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-paper overflow-x-hidden">
      <div className="noise-overlay" />
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0A0A0B_100%)] opacity-80" />
      </div>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-md border-b border-hairline bg-brand-bg/60">
        <Link to="/" className="flex items-center gap-3 text-brand-chalk hover:text-brand-teal transition-colors group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-[10px] uppercase tracking-widest">{isMn ? 'Нүүр хуудас' : 'Back Home'}</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/techno-arm" className="font-mono text-[9px] text-brand-chalk hover:text-brand-teal transition-colors tracking-widest hidden md:block">Techno-Arm →</Link>
          <Link to="/airq" className="font-mono text-[9px] text-brand-chalk hover:text-brand-accent transition-colors tracking-widest hidden md:block">AirQ →</Link>
          <span className="font-mono text-[10px] text-orange-400 tracking-widest font-bold">MINING AI</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,146,60,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-400/20 bg-orange-400/5 mb-6">
              <HardHat size={12} className="text-orange-400" />
              <span className="font-mono text-[10px] text-orange-400 tracking-widest">{isMn ? 'ХӨГЖҮҮЛЭЛТИЙН ШАТАНД' : 'PILOT PHASE'}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading mb-6 leading-[0.9]">
              {isMn ? 'Уул Уурхайн' : 'Mining'} <br/>
              <span className="text-orange-400 italic font-serif font-normal">
                {isMn ? 'Дугуйн Ухаалаг AI' : 'Tire Intelligence AI'}
              </span>
            </h1>
            <p className="text-xl text-brand-chalk font-light leading-relaxed mb-8 max-w-2xl mx-auto">
              {isMn 
                ? 'Уул уурхайн хүнд даацын машины дугуйн сенсорыг өөрсдөө хөгжүүлж, хиймэл оюунаар боловсруулан, уул уурхайн компаний хоёр дахь том зардлыг 50% хүртэл бууруулах шийдэл.'
                : "Proprietary tire sensors + AI analytics for heavy mining vehicles. Reducing the second-largest mining operational cost by up to 50% through predictive intelligence."}
            </p>
            {/* Impact badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {[
                { v: '-50%', l: isMn ? 'Зардал' : 'Cost' },
                { v: '4', l: isMn ? 'Мэдрэгч' : 'Sensors' },
                { v: 'AI', l: isMn ? 'Таамаглал' : 'Predictive' },
                { v: '<6mo', l: 'ROI' },
              ].map((b, i) => (
                <div key={i} className="px-4 py-2 bg-brand-bg-card/50 border border-hairline rounded-2xl">
                  <span className="text-orange-400 font-bold text-sm">{b.v}</span>
                  <span className="text-brand-chalk text-[10px] ml-2">{b.l}</span>
                </div>
              ))}
            </div>
            <a href="/#contact" className="inline-flex items-center gap-3 py-4 px-10 bg-gradient-to-r from-orange-400 to-amber-400 text-brand-bg rounded-2xl font-mono text-[11px] font-bold hover:shadow-[0_0_40px_rgba(251,146,60,0.3)] hover:scale-[1.02] transition-all">
              {isMn ? 'Туршилтын хамтрагч болох' : 'Become a Pilot Partner'} <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] text-red-400 tracking-widest">{isMn ? 'АСУУДАЛ' : 'THE PROBLEM'}</span>
            <h2 className="text-4xl md:text-5xl mt-4">{isMn ? 'Дугуйн зардал —' : 'Tire Costs —'} <span className="text-orange-400 italic font-serif font-normal">{isMn ? 'далд алдагдал' : 'The Hidden Drain'}</span></h2>
            <p className="text-brand-chalk font-light mt-4 max-w-xl mx-auto">{isMn ? 'Ихэнх уул уурхайн компаниуд дугуйн зардлыг хянах чадваргүй байдаг.' : 'Most mining operations have zero visibility into tire health until failure occurs.'}</p>
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
          {/* Visual: the cost chain */}
          <div className="glass rounded-[2rem] p-8 mt-8 border-orange-400/10">
            <div className="flex items-center justify-center flex-wrap gap-4 text-sm text-brand-chalk">
              <span className="px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 font-medium">{isMn ? 'Буруу даралт' : 'Wrong Pressure'}</span>
              <ArrowRight size={16} className="text-orange-400" />
              <span className="px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 font-medium">{isMn ? 'Хурдан элэгдэл' : 'Fast Wear'}</span>
              <ArrowRight size={16} className="text-orange-400" />
              <span className="px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 font-medium">{isMn ? 'Тэсрэлт / Зогсолт' : 'Blowout / Downtime'}</span>
              <ArrowRight size={16} className="text-orange-400" />
              <span className="px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 font-bold">{isMn ? '$80K+ алдагдал' : '$80K+ Loss'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Sensors */}
      <section className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-400/[0.02] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] text-orange-400 tracking-widest">{isMn ? 'ӨӨРСДӨӨ ХИЙСЭН' : 'PROPRIETARY HARDWARE'}</span>
            <h2 className="text-4xl md:text-5xl mt-4">{isMn ? 'Өөрсдийн зохион бүтээсэн' : 'Custom-Built'} <span className="text-orange-400 italic font-serif font-normal">{isMn ? 'мэдрэгчүүд' : 'Sensors'}</span></h2>
            <p className="text-brand-chalk font-light mt-4 max-w-xl mx-auto">
              {isMn ? 'Монголын уул уурхайн хатуу нөхцөлд зориулан загварчилсан бат бөх мэдрэгчүүд. -40°C-д хүртэл ажиллана.' : 'Ruggedized for Mongolian mining conditions. Operational from -40°C to +150°C.'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sensorData.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-[2rem] group hover:border-orange-400/30 transition-all">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-orange-400/10 flex items-center justify-center text-orange-400 shrink-0">{s.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl group-hover:text-orange-400 transition-colors">{s.name}</h3>
                      <span className="font-mono text-[8px] text-orange-400/70 bg-orange-400/10 px-2 py-0.5 rounded-full">{s.spec}</span>
                    </div>
                    <p className="text-xs text-brand-chalk/60 mb-2">{s.full}</p>
                    <p className="text-brand-chalk font-light text-sm leading-relaxed mb-3">{s.desc}</p>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-orange-400/5 border border-orange-400/10 rounded-xl w-fit">
                      <AlertTriangle size={12} className="text-orange-400" />
                      <span className="font-mono text-[9px] text-orange-400">{s.why}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Pipeline */}
      <section className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] text-orange-400 tracking-widest">{isMn ? 'AI PIPELINE' : 'AI PIPELINE'}</span>
            <h2 className="text-4xl md:text-5xl mt-4">{isMn ? 'Хиймэл оюуны' : 'AI'} <span className="text-orange-400 italic font-serif font-normal">{isMn ? 'шинжилгээний зам' : 'Analysis Pipeline'}</span></h2>
            <p className="text-brand-chalk font-light mt-4 max-w-lg mx-auto">{isMn ? 'Мэдрэгчийн өгөгдлөөс эхлээд арга хэмжээ хүртэл — бүх зүйл автоматаар.' : 'From raw sensor data to actionable insight — fully automated.'}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiPipeline.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="glass p-8 rounded-[2rem] relative group hover:border-orange-400/30 transition-all">
                <div className="absolute top-6 right-6 text-orange-400/10 text-5xl font-heading">{s.step}</div>
                <div className="text-orange-400 mb-6">{s.icon}</div>
                <h3 className="text-xl mb-3 group-hover:text-orange-400 transition-colors">{s.title}</h3>
                <p className="text-brand-chalk font-light text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Comparison */}
      <section className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] text-orange-400 tracking-widest">{isMn ? 'ОЛОН УЛСЫН ЖИШИГ' : 'COMPETITIVE LANDSCAPE'}</span>
            <h2 className="text-4xl md:text-5xl mt-4">{isMn ? 'Дэлхийн тоглогчид' : 'Global'} <span className="text-orange-400 italic font-serif font-normal">{isMn ? 'болон бид' : 'Landscape'}</span></h2>
          </div>
          <div className="glass rounded-[2rem] overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-hairline">
                    <th className="font-mono text-[9px] text-brand-chalk uppercase tracking-wider px-6 py-5">{isMn ? 'Компани' : 'Company'}</th>
                    <th className="font-mono text-[9px] text-brand-chalk uppercase tracking-wider px-6 py-5">{isMn ? 'Улс' : 'Origin'}</th>
                    <th className="font-mono text-[9px] text-brand-chalk uppercase tracking-wider px-6 py-5">{isMn ? 'Чиглэл' : 'Focus'}</th>
                    <th className="font-mono text-[9px] text-brand-chalk uppercase tracking-wider px-6 py-5">{isMn ? 'Санхүүжилт' : 'Funding'}</th>
                    <th className="font-mono text-[9px] text-brand-chalk uppercase tracking-wider px-6 py-5">{isMn ? 'Давуу тал' : 'Key Strength'}</th>
                  </tr>
                </thead>
                <tbody>
                  {competitors.map((c, i) => (
                    <tr key={i} className="border-b border-hairline/50 hover:bg-white/[0.02]">
                      <td className="px-6 py-4 text-sm text-white font-medium">{c.name}</td>
                      <td className="px-6 py-4 text-sm text-brand-chalk">{c.country}</td>
                      <td className="px-6 py-4 text-sm text-brand-chalk">{c.focus}</td>
                      <td className="px-6 py-4 text-sm text-brand-chalk">{c.funding}</td>
                      <td className="px-6 py-4 text-sm text-brand-chalk">{c.strength}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="glass rounded-[2rem] p-8 border-orange-400/10">
            <div className="flex items-start gap-4">
              <Zap size={20} className="text-orange-400 shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-medium mb-2">{isMn ? 'Daccom Partners-ийн онцлог давуу тал:' : 'Daccom Partners Unique Advantage:'}</h4>
                <p className="text-brand-chalk font-light leading-relaxed text-sm">
                  {isMn 
                    ? 'Дээрх компаниуд нь корпорацийн хэмжээний шийдлүүд бөгөөд нэвтрүүлэхэд $500K+ зардалтай. Бид Монголын уул уурхайн тодорхой нөхцөлд зориулсан, хямд өртөгтэй, Монголд бүрэн засвар үйлчилгээтэй, шийдлийг санал болгож байна.'
                    : 'The players above offer enterprise-grade solutions costing $500K+ to deploy. We deliver Mongolia-optimized, cost-efficient tire intelligence with full local support and rapid deployment.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expected Impact */}
      <section className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl">{isMn ? 'Хүлээгдэж буй' : 'Expected'} <span className="text-orange-400 italic font-serif font-normal">{isMn ? 'үр дүн' : 'Impact'}</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactMetrics.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl text-center border-orange-400/10 hover:border-orange-400/30 transition-all">
                <p className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">{item.val}</p>
                <p className="text-sm text-white mb-2">{item.label}</p>
                <p className="text-xs text-brand-chalk/60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-4xl mx-auto glass rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-transparent pointer-events-none" />
          <span className="font-mono text-[10px] text-orange-400 tracking-widest relative z-10">{isMn ? 'ТУРШИЛТЫН ҮЕ ШАТ' : 'PILOT PROGRAM'}</span>
          <h2 className="text-4xl md:text-5xl mb-6 mt-4 relative z-10">{isMn ? 'Туршилтын хамтрагч болох' : 'Join Our Pilot Program'}</h2>
          <p className="text-brand-chalk font-light mb-10 relative z-10 max-w-xl mx-auto">
            {isMn 
              ? 'Бид одоо туршилтын үе шатандаа байна. Уул уурхайн компаниудыг анхны хэрэглэгч болохыг урьж байна. Эхний 3 хамтрагчид тусгай нөхцөлөөр.'
              : "We're in pilot phase. Inviting mining companies as early adopter partners. Special conditions for the first 3 partners."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a href="/#contact" className="inline-flex items-center gap-3 py-4 px-10 bg-gradient-to-r from-orange-400 to-amber-400 text-brand-bg rounded-2xl font-mono text-[11px] font-bold hover:shadow-[0_0_40px_rgba(251,146,60,0.3)] hover:scale-[1.02] transition-all">
              {isMn ? 'Холбоо барих' : 'Get in Touch'} <ArrowRight size={16} />
            </a>
            <a href="/#contact" className="inline-flex items-center gap-3 py-4 px-10 border border-hairline text-white rounded-2xl font-mono text-[11px] hover:border-orange-400/50 hover:bg-white/5 transition-all">
              {isMn ? 'Танилцуулга татах' : 'Download Deck'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
