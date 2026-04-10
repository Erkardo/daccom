import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Wifi, BarChart3, Shield, Thermometer, Droplets, Wind, Eye, Bell, Smartphone, Globe, Activity, Gauge, Building2, GraduationCap, Heart, TrendingUp, Users, Zap, Lock, Cloud, Layers } from 'lucide-react';
import { useEffect } from 'react';

export default function AirQPage() {
  const { i18n } = useTranslation();
  const isMn = i18n.language === 'mn';

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const sensors = [
    { icon: <Wind size={20} />, name: 'CO₂', desc: isMn ? 'Нүүрсхүчлийн хий' : 'Carbon Dioxide', range: '0–5000 ppm', critical: isMn ? '>1000ppm = Ядрал' : '>1000ppm = Fatigue' },
    { icon: <Droplets size={20} />, name: 'PM2.5', desc: isMn ? 'Нарийн тоос' : 'Fine Particulate', range: '0–500 μg/m³', critical: isMn ? 'WHO: <15 μg/m³' : 'WHO: <15 μg/m³' },
    { icon: <Thermometer size={20} />, name: 'TEMP', desc: isMn ? 'Температур' : 'Temperature', range: '-40~85°C', critical: isMn ? 'Оптимал: 20-24°C' : 'Optimal: 20-24°C' },
    { icon: <Droplets size={20} />, name: 'HUM', desc: isMn ? 'Чийгшил' : 'Humidity', range: '0–100%', critical: isMn ? 'Оптимал: 40-60%' : 'Optimal: 40-60%' },
    { icon: <Activity size={20} />, name: 'VOC', desc: isMn ? 'Дэгдэмхий органик' : 'Volatile Organics', range: '0–500 ppb', critical: isMn ? 'Барилгын материал' : 'Building materials' },
    { icon: <Eye size={20} />, name: 'O₃', desc: isMn ? 'Озон' : 'Ozone', range: '0–500 ppb', critical: isMn ? 'Принтер, копи машин' : 'Printers, copiers' },
  ];

  const howItWorks = [
    { step: '01', title: isMn ? 'Суурилуулалт' : 'Install', desc: isMn ? 'AirQ төхөөрөмжийг ханан дээр эсвэл ширээн дээр байрлуулна. WiFi/LoRa-аар холбоно.' : 'Mount AirQ sensor on wall or desk. Connect via WiFi or LoRa in under 5 minutes.', time: '5 мин' },
    { step: '02', title: isMn ? 'Мэдээлэл цуглуулах' : 'Collect', desc: isMn ? 'Мэдрэгчүүд секундийн давтамжтайгаар агаарын чанарын өгөгдлийг цуглуулж cloud-д дамжуулна.' : 'Sensors capture air quality data every second and transmit to cloud infrastructure.', time: '24/7' },
    { step: '03', title: isMn ? 'AI шинжилгээ' : 'Analyze', desc: isMn ? 'Хиймэл оюун хамаарлыг олж, хүмүүсийн бүтээмж, эрүүл мэндэд үзүүлэх нөлөөллийг тооцно.' : 'AI algorithms detect correlations between air quality and occupant productivity/health.', time: isMn ? 'Бодит цаг' : 'Real-time' },
    { step: '04', title: isMn ? 'Авто удирдлага' : 'Act', desc: isMn ? 'CO₂ гэх мэт индекс хэтрэхэд агааржуулалтыг автоматаар асаах эсвэл дохиолол өгнө.' : 'Auto-trigger ventilation when thresholds exceeded, or send alerts to facility managers.', time: isMn ? 'Автомат' : 'Automatic' },
  ];

  const features = [
    { icon: <BarChart3 size={22} />, title: isMn ? 'Бодит цагийн Dashboard' : 'Real-Time Dashboard', desc: isMn ? 'airq.mn-ээр дамжуулан бүх мэдрэгчийн өгөгдлийг бодит цагт хянах. Trend шинжилгээ, хэвийн бус өөрчлөлтийн дохиолол.' : 'Monitor all sensors via airq.mn with interactive charts, trend analysis, and anomaly detection alerts.' },
    { icon: <Bell size={22} />, title: isMn ? 'Ухаалаг дохиолол' : 'Smart Alerts', desc: isMn ? 'Push notification, email, SMS-ээр аюулын дохиолол. Тохируулж болох threshold утгууд.' : 'Push, email, SMS alerts with customizable thresholds. Never miss a critical air quality event.' },
    { icon: <Wifi size={22} />, title: isMn ? 'WiFi / LoRa' : 'Dual Connectivity', desc: isMn ? 'WiFi — богино зай, LoRa — урт зай (2км хүртэл). Салбар, байрлалаас хамааран сонгох.' : 'WiFi for offices, LoRa (up to 2km) for industrial sites. Choose based on your deployment needs.' },
    { icon: <Cloud size={22} />, title: isMn ? 'Cloud & Open API' : 'Cloud & Open API', desc: isMn ? 'RESTful API-аар гуравдагч системтэй холбогдох. Бүх дата cloud-д аюулгүй хадгалагдана.' : 'RESTful API for third-party integrations. All data securely stored with 99.9% uptime SLA.' },
    { icon: <Lock size={22} />, title: isMn ? 'Аюулгүй байдал' : 'Enterprise Security', desc: isMn ? 'TLS 1.3 шифрлэлт, SOC-2 нийцэл, GDPR стандарт. Байгууллагын түвшний хамгаалалт.' : 'TLS 1.3 encryption, SOC-2 readiness, GDPR compliance. Enterprise-grade data protection.' },
    { icon: <Layers size={22} />, title: isMn ? 'Олон давхарга удирдлага' : 'Multi-Site Management', desc: isMn ? 'Нэг дашбоардаас олон байрлал, олон давхрын мэдрэгчүүдийг хянах.' : 'Manage sensors across multiple floors, buildings, and sites from a single dashboard.' },
  ];

  const deployments = [
    { icon: <GraduationCap size={24} />, label: isMn ? 'Сургууль & Цэцэрлэг' : 'Schools & Kindergartens', stat: isMn ? 'Хүүхдийн эрүүл мэнд хамгаалах' : 'Protect children\'s health', detail: isMn ? 'CO₂ хяналтаар хүүхдийн анхаарал, суралцах чадварыг 20%-аар нэмэгдүүлнэ.' : 'CO₂ monitoring improves student attention and learning capacity by 20%.' },
    { icon: <Building2 size={24} />, label: isMn ? 'Оффис & Бизнес төв' : 'Offices & Business', stat: '+25%', detail: isMn ? 'Ажилчдын бүтээмжийг 25% хүртэл нэмэгдүүлэх шинжлэх ухааны баталгаатай.' : 'Harvard study: +25% cognitive function in well-ventilated offices.' },
    { icon: <Heart size={24} />, label: isMn ? 'Эмнэлэг & Клиник' : 'Healthcare Facilities', stat: isMn ? 'Халдварын хяналт' : 'Infection Control', detail: isMn ? 'Агаараар дамжих өвчлөлийн эрсдэлийг бууруулах, ариутгалын үр дүнг хянах.' : 'Reduce airborne infection risk and monitor sterilization effectiveness.' },
    { icon: <Users size={24} />, label: isMn ? 'Уул уурхай & Үйлдвэр' : 'Mining & Industrial', stat: isMn ? 'Хөдөлмөрийн аюулгүй байдал' : 'OSHA Compliance', detail: isMn ? 'Тоос, хортой хийн түвшинг хянаж хөдөлмөрийн аюулгүй байдлын стандарт хангах.' : 'Monitor dust, toxic gas levels for occupational safety regulation compliance.' },
  ];

  const competitors = [
    { name: 'Airthings', country: isMn ? 'Норвеги' : 'Norway', focus: isMn ? 'B2C + B2B агаарын чанар' : 'B2C + B2B air quality', price: '$299+' },
    { name: 'IQAir AirVisual', country: isMn ? 'Швейцарь' : 'Switzerland', focus: isMn ? 'Гадна агаарын чанарын мэдээлэл' : 'Outdoor AQI data network', price: '$269+' },
    { name: 'uHoo', country: isMn ? 'Сингапур' : 'Singapore', focus: isMn ? 'Дотоод агаарын 9 мэдрэгч' : 'Indoor 9-sensor device', price: '$329+' },
    { name: 'AirQ', country: isMn ? '🇲🇳 Монгол' : '🇲🇳 Mongolia', focus: isMn ? 'B2B IoT, автомат агааржуулалт' : 'B2B IoT, auto-ventilation', price: isMn ? 'Захиалгаар' : 'Custom', highlight: true },
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
          <Link to="/mining-ai" className="font-mono text-[9px] text-brand-chalk hover:text-orange-400 transition-colors tracking-widest hidden md:block">Mining AI →</Link>
          <span className="font-mono text-[10px] text-brand-accent tracking-widest font-bold">AIRQ</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(168,85,247,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-400/20 bg-purple-400/5 mb-6">
              <Activity size={12} className="text-purple-400" />
              <span className="font-mono text-[10px] text-purple-400 tracking-widest">IoT & HEALTH TECH</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading mb-6 leading-[0.9]">
              AirQ <br/>
              <span className="text-brand-accent italic font-serif font-normal text-4xl md:text-5xl">
                {isMn ? 'Ухаалаг Агаарын Хяналт' : 'Smart Air Quality'}
              </span>
            </h1>
            <p className="text-xl text-brand-chalk font-light leading-relaxed mb-8 max-w-lg">
              {isMn 
                ? 'Дотоод орчны агаарын чанарыг бодит цагт хянах, CO₂ хэмжээ хэтрэхэд автоматаар агааржуулалтыг удирдах IoT систем. Daccom Partners-ийн бүрэн хөгжүүлсэн бүтээгдэхүүн.'
                : 'Real-time indoor air quality monitoring with automated ventilation control. A complete IoT solution fully developed by Daccom Partners, live at airq.mn.'}
            </p>
            {/* Impact stats */}
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                { v: '+25%', l: isMn ? 'Бүтээмж' : 'Productivity' },
                { v: '6+', l: isMn ? 'Мэдрэгч' : 'Sensors' },
                { v: '24/7', l: isMn ? 'Хяналт' : 'Monitoring' },
                { v: 'Auto', l: isMn ? 'Удирдлага' : 'Control' },
              ].map((b, i) => (
                <div key={i} className="px-4 py-2 bg-brand-bg-card/50 border border-hairline rounded-2xl">
                  <span className="text-brand-accent font-bold text-sm">{b.v}</span>
                  <span className="text-brand-chalk text-[10px] ml-2">{b.l}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://airq.mn" target="_blank" rel="noopener noreferrer" className="btn-outline py-3.5 px-10 text-[11px] bg-brand-accent text-white border-brand-accent hover:bg-white hover:text-brand-bg hover:border-white flex items-center gap-2 justify-center font-bold">
                {isMn ? 'Шууд үзэх — airq.mn' : 'Live Demo — airq.mn'} <Globe size={16} />
              </a>
              <a href="#how-it-works" className="btn-outline py-3.5 px-10 text-[11px] hover:bg-brand-accent hover:text-white hover:border-brand-accent flex items-center gap-2 justify-center">
                {isMn ? 'Хэрхэн ажилладаг' : 'How It Works'}
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/10 to-brand-teal/5 rounded-[3rem] blur-2xl" />
              <div className="glass rounded-[3rem] overflow-hidden border-brand-accent/10 relative">
                <img src="/airq-dashboard.jpg" alt="AirQ Dashboard" className="w-full object-cover" />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-brand-bg to-transparent p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-mono text-[9px] text-brand-accent tracking-widest mb-1">LIVE MONITORING</p>
                      <p className="text-white text-sm">airq.mn</p>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/20 border border-green-500/30 rounded-full">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="font-mono text-[9px] text-green-400">LIVE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/[0.03] to-transparent pointer-events-none" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <span className="font-mono text-[10px] text-red-400 tracking-widest">{isMn ? 'АСУУДАЛ' : 'THE INVISIBLE PROBLEM'}</span>
                <h2 className="text-3xl md:text-4xl mt-4 mb-6">{isMn ? 'Үл харагдах аюул' : 'What You Can\'t See'} <span className="text-red-400">{isMn ? 'таны бүтээмжийг' : 'Is Killing'}</span> {isMn ? 'устгаж байна' : 'Your Productivity'}</h2>
                <p className="text-brand-chalk font-light leading-relaxed mb-6">
                  {isMn ? 'Harvard болон Syracuse Их сургуулийн судалгаагаар, CO₂ 1000ppm-ээс давах үед ажилчдын шийдвэр гаргах чадвар 50% хүртэл буурдаг. Монголын оффисуудын 80%+ дотроо гэр ахуйн шинж тэмдэгтэй.' 
                    : 'Harvard & Syracuse University research shows: cognitive function drops up to 50% when CO₂ exceeds 1000ppm. Most offices reach this level within 2-3 hours without proper ventilation.'}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { v: '-50%', l: isMn ? 'Шийдвэр гаргах чадвар' : 'Decision-Making', sub: 'CO₂ > 1500ppm' },
                  { v: '-35%', l: isMn ? 'Суралцах чадвар' : 'Learning Ability', sub: 'CO₂ > 1000ppm' },
                  { v: '+40%', l: isMn ? 'Өвчлөл' : 'Sick Days', sub: isMn ? 'Тоосны нөлөө' : 'PM2.5 Exposure' },
                  { v: '2-3h', l: isMn ? 'Хүлцэх хязгаар' : 'Time to 1000ppm', sub: isMn ? 'Агааржуулалтгүй' : 'No ventilation' },
                ].map((stat, i) => (
                  <div key={i} className="bg-brand-bg/50 border border-red-500/10 rounded-2xl p-5 text-center">
                    <p className="text-2xl font-bold text-red-400">{stat.v}</p>
                    <p className="text-xs text-brand-chalk mt-1">{stat.l}</p>
                    <p className="font-mono text-[8px] text-red-400/60 mt-1">{stat.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sensors */}
      <section className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] text-brand-accent tracking-widest">{isMn ? 'МЭДРЭГЧҮҮД' : 'SENSOR ARRAY'}</span>
            <h2 className="text-4xl md:text-5xl mt-4">{isMn ? 'Юу' : 'What We'} <span className="text-brand-accent italic font-serif font-normal">{isMn ? 'хэмждэг вэ?' : 'Measure'}</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {sensors.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="glass p-5 rounded-3xl text-center group hover:border-brand-accent/30 transition-all">
                <div className="text-brand-accent mb-2 flex justify-center">{s.icon}</div>
                <p className="text-lg font-bold text-white mb-0.5">{s.name}</p>
                <p className="font-mono text-[8px] text-brand-chalk uppercase tracking-wider mb-2">{s.desc}</p>
                <p className="text-[10px] text-brand-accent/60">{s.range}</p>
                <div className="mt-2 pt-2 border-t border-hairline/50">
                  <p className="text-[9px] text-brand-accent font-medium">{s.critical}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] text-brand-accent tracking-widest">{isMn ? 'ХЭРХЭН АЖИЛЛАДАГ' : 'HOW IT WORKS'}</span>
            <h2 className="text-4xl md:text-5xl mt-4">{isMn ? 'Суурилуулалтаас' : 'From Install to'} <span className="text-brand-accent italic font-serif font-normal">{isMn ? 'автомат хүртэл' : 'Automation'}</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="glass p-8 rounded-[2rem] relative group hover:border-brand-accent/30 transition-all">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-brand-accent/20 text-5xl font-heading">{s.step}</span>
                  <span className="font-mono text-[9px] text-brand-accent bg-brand-accent/10 px-2 py-1 rounded-full">{s.time}</span>
                </div>
                <h3 className="text-xl mb-3 group-hover:text-brand-accent transition-colors">{s.title}</h3>
                <p className="text-brand-chalk font-light text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl">{isMn ? 'Платформын' : 'Platform'} <span className="text-brand-accent italic font-serif font-normal">{isMn ? 'онцлогууд' : 'Features'}</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="glass p-8 rounded-[2rem] group hover:border-brand-accent/30 transition-all">
                <div className="text-brand-accent mb-4">{f.icon}</div>
                <h3 className="text-xl mb-3 group-hover:text-brand-accent transition-colors">{f.title}</h3>
                <p className="text-brand-chalk font-light text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Comparison */}
      <section className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] text-brand-accent tracking-widest">{isMn ? 'ОЛОН УЛСТАЙ ХАРЬЦУУЛСАН' : 'GLOBAL LANDSCAPE'}</span>
            <h2 className="text-4xl md:text-5xl mt-4">{isMn ? 'Дэлхийн зах зээлд' : 'Our Position in the'} <span className="text-brand-accent italic font-serif font-normal">{isMn ? 'манай байр суурь' : 'Global Market'}</span></h2>
          </div>
          <div className="glass rounded-[2rem] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-hairline">
                    <th className="font-mono text-[9px] text-brand-chalk uppercase tracking-wider px-6 py-5">{isMn ? 'Компани' : 'Company'}</th>
                    <th className="font-mono text-[9px] text-brand-chalk uppercase tracking-wider px-6 py-5">{isMn ? 'Улс' : 'Country'}</th>
                    <th className="font-mono text-[9px] text-brand-chalk uppercase tracking-wider px-6 py-5">{isMn ? 'Чиглэл' : 'Focus'}</th>
                    <th className="font-mono text-[9px] text-brand-chalk uppercase tracking-wider px-6 py-5">{isMn ? 'Үнэ' : 'Price'}</th>
                  </tr>
                </thead>
                <tbody>
                  {competitors.map((c, i) => (
                    <tr key={i} className={`border-b border-hairline/50 transition-colors ${c.highlight ? 'bg-brand-accent/5' : 'hover:bg-white/[0.02]'}`}>
                      <td className={`px-6 py-4 text-sm ${c.highlight ? 'text-brand-accent font-bold' : 'text-white'}`}>{c.name}</td>
                      <td className="px-6 py-4 text-sm text-brand-chalk">{c.country}</td>
                      <td className="px-6 py-4 text-sm text-brand-chalk">{c.focus}</td>
                      <td className={`px-6 py-4 text-sm font-bold ${c.highlight ? 'text-brand-accent' : 'text-white'}`}>{c.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Sectors */}
      <section className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl">{isMn ? 'Ашиглалтын' : 'Deployment'} <span className="text-brand-accent italic font-serif font-normal">{isMn ? 'салбарууд' : 'Sectors'}</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deployments.map((d, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-[2rem] hover:border-brand-accent/30 transition-all flex gap-6">
                <div className="text-brand-accent shrink-0 mt-1">{d.icon}</div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl">{d.label}</h3>
                    <span className="font-mono text-[9px] text-brand-accent bg-brand-accent/10 px-2 py-1 rounded-full">{d.stat}</span>
                  </div>
                  <p className="text-brand-chalk font-light text-sm leading-relaxed">{d.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-4xl mx-auto glass rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent pointer-events-none" />
          <span className="font-mono text-[10px] text-brand-accent tracking-widest relative z-10">{isMn ? 'ДАРААГИЙН АЛХАМ' : 'NEXT STEP'}</span>
          <h2 className="text-4xl md:text-5xl mb-6 mt-4 relative z-10">{isMn ? 'Агаарын чанарыг хянаж эхлэх' : 'Start Monitoring Today'}</h2>
          <p className="text-brand-chalk font-light mb-10 relative z-10 max-w-xl mx-auto">
            {isMn ? 'airq.mn дээр шууд демо үзэх эсвэл манай багтай холбогдоорой.' : 'See the live demo at airq.mn or contact our team for a deployment consultation.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a href="/#contact" className="inline-flex items-center gap-3 py-4 px-10 bg-gradient-to-r from-brand-accent to-purple-400 text-white rounded-2xl font-mono text-[11px] font-bold hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] hover:scale-[1.02] transition-all">
              {isMn ? 'AirQ захиалах' : 'Order AirQ'} <ArrowRight size={16} />
            </a>
            <a href="https://airq.mn" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 py-4 px-10 border border-hairline text-white rounded-2xl font-mono text-[11px] hover:border-brand-accent/50 hover:bg-white/5 transition-all">
              {isMn ? 'Амьд демо үзэх' : 'View Live Demo'} <Globe size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
