import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Wifi, BarChart3, Shield, Thermometer, Droplets, Wind, Eye, Bell, Smartphone, Globe, Activity, Gauge } from 'lucide-react';

export default function AirQPage() {
  const { i18n } = useTranslation();
  const isMn = i18n.language === 'mn';

  const sensors = [
    { icon: <Wind size={20} />, name: 'CO₂', desc: isMn ? 'Нүүрсхүчлийн хий' : 'Carbon Dioxide', range: '0-5000 ppm' },
    { icon: <Droplets size={20} />, name: 'PM2.5 / PM10', desc: isMn ? 'Нарийн тоос' : 'Particulate Matter', range: '0-500 μg/m³' },
    { icon: <Thermometer size={20} />, name: 'TEMP & HUM', desc: isMn ? 'Температур & Чийгшил' : 'Temperature & Humidity', range: '-40~85°C' },
    { icon: <Activity size={20} />, name: 'VOC', desc: isMn ? 'Дэгдэмхий органик нэгдэл' : 'Volatile Organics', range: '0-500 ppb' },
    { icon: <Eye size={20} />, name: 'O₃ / NO₂ / SO₂', desc: isMn ? 'Хортой хий' : 'Toxic Gases', range: isMn ? 'Олон мэдрэгч' : 'Multi-sensor' },
    { icon: <Gauge size={20} />, name: 'AQI', desc: isMn ? 'Агаарын чанарын индекс' : 'Air Quality Index', range: '0-500' },
  ];

  const features = [
    { icon: <BarChart3 size={22} />, title: isMn ? 'Бодит цагийн Dashboard' : 'Real-Time Dashboard', desc: isMn ? 'airq.mn вэб платформоор дамжуулан бүх мэдрэгчийн өгөгдлийг бодит цагт хянах, шинжлэх боломжтой.' : 'Monitor all sensor data in real-time through the airq.mn web platform with interactive charts and analytics.' },
    { icon: <Bell size={22} />, title: isMn ? 'Ухаалаг дохиолол' : 'Smart Alerts', desc: isMn ? 'CO2 хэмжээ хүлцэх хэмжээнээс давах үед автоматаар мэдэгдэл илгээж, агааржуулалтыг идэвхжүүлнэ.' : 'Automatic notifications when CO₂ exceeds safe thresholds, triggering ventilation systems automatically.' },
    { icon: <Wifi size={22} />, title: isMn ? 'WiFi / LoRa холболт' : 'WiFi / LoRa Connectivity', desc: isMn ? 'Богино болон урт зайд мэдээлэл дамжуулах хоёр төрлийн холболтын сонголттой.' : 'Dual connectivity options: WiFi for short-range and LoRa for long-range industrial deployments.' },
    { icon: <Smartphone size={22} />, title: isMn ? 'Гар утасны апп' : 'Mobile Application', desc: isMn ? 'iOS болон Android дээр ажилладаг аппликэйшнаар хаанаас ч хянах боломжтой.' : 'Cross-platform mobile app for iOS and Android enabling monitoring from anywhere.' },
    { icon: <Shield size={22} />, title: isMn ? 'Өгөгдлийн аюулгүй байдал' : 'Data Security', desc: isMn ? 'TLS/SSL шифрлэлт, GDPR стандартад нийцсэн өгөгдлийн хамгаалалт.' : 'TLS/SSL encryption with GDPR-compliant data handling and storage protocols.' },
    { icon: <Globe size={22} />, title: isMn ? 'Cloud & API' : 'Cloud & Open API', desc: isMn ? 'Нээлттэй API-аар дамжуулан гуравдагч талын системтэй холбогдох боломжтой. Бүх өгөгдлийг Cloud-д хадгална.' : 'Open API for third-party integrations. All data securely stored and accessible via cloud infrastructure.' },
  ];

  const deployments = [
    { label: isMn ? 'Сургууль & Цэцэрлэг' : 'Schools & Kindergartens', stat: isMn ? 'Хүүхдийн эрүүл мэнд хамгаалах' : 'Protect children\'s health' },
    { label: isMn ? 'Оффис & Бизнес төв' : 'Offices & Business Centers', stat: isMn ? 'Бүтээмжийг +25% нэмэгдүүлэх' : '+25% productivity increase' },
    { label: isMn ? 'Уул уурхай & Үйлдвэр' : 'Mining & Manufacturing', stat: isMn ? 'Хөдөлмөрийн аюулгүй байдал' : 'Occupational safety compliance' },
    { label: isMn ? 'Зочид буудал & Ресторан' : 'Hotels & Restaurants', stat: isMn ? 'Зочдын тав тухыг хангах' : 'Guest comfort assurance' },
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
        <span className="font-mono text-[10px] text-brand-teal tracking-widest">AIRQ</span>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(168,85,247,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-400/20 bg-purple-400/5 mb-6">
              <Activity size={12} className="text-purple-400" />
              <span className="font-mono text-[10px] text-purple-400 tracking-widest">IoT & HEALTH TECH</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading mb-6 leading-[0.9]">
              AirQ <br/>
              <span className="text-brand-accent italic font-serif font-normal text-4xl md:text-5xl">
                {isMn ? 'Ухаалаг Агаарын Чанарын Систем' : 'Smart Air Quality System'}
              </span>
            </h1>
            <p className="text-xl text-brand-chalk font-light leading-relaxed mb-10 max-w-lg">
              {isMn 
                ? 'Дотоод орчны агаарын чанарыг бодит цагт хянах, шинжлэх, автоматаар агааржуулалтыг удирдах IoT систем. Daccom Partners-ийн бүрэн хөгжүүлж, амжилттай хэрэгжүүлсэн бүтээгдэхүүн.'
                : 'Real-time indoor air quality monitoring, analysis, and automated ventilation control IoT platform. Fully developed and successfully deployed by Daccom Partners.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://airq.mn" target="_blank" rel="noopener noreferrer" className="btn-outline py-3 px-8 text-[11px] bg-brand-accent text-brand-bg border-brand-accent hover:bg-white hover:text-brand-bg hover:border-white flex items-center gap-2 justify-center">
                {isMn ? 'Шууд үзэх — airq.mn' : 'Live Demo — airq.mn'} <Globe size={16} />
              </a>
              <a href="/#contact" className="btn-outline py-3 px-8 text-[11px] hover:bg-brand-accent hover:text-brand-bg hover:border-brand-accent flex items-center gap-2 justify-center">
                {isMn ? 'Захиалга өгөх' : 'Order Now'}
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/10 to-brand-teal/5 rounded-[3rem] blur-2xl" />
              <div className="glass rounded-[3rem] overflow-hidden border-brand-accent/10 relative">
                <img src="/airq-dashboard.jpg" alt="AirQ Dashboard" className="w-full object-cover" />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-brand-bg/80 to-transparent p-8">
                  <p className="font-mono text-[9px] text-brand-accent tracking-widest">LIVE MONITORING — AIRQ.MN</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sensor Grid */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl">{isMn ? 'Хэмжих' : 'Measurement'} <span className="text-brand-accent italic font-serif font-normal">{isMn ? 'мэдрэгчүүд' : 'Sensors'}</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {sensors.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="glass p-6 rounded-3xl text-center group hover:border-brand-accent/30 transition-all">
                <div className="text-brand-accent mb-3 flex justify-center">{s.icon}</div>
                <p className="text-lg font-bold text-white mb-1">{s.name}</p>
                <p className="font-mono text-[8px] text-brand-chalk uppercase tracking-wider mb-2">{s.desc}</p>
                <p className="text-xs text-brand-accent/70">{s.range}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl">{isMn ? 'Платформын' : 'Platform'} <span className="text-brand-accent italic font-serif font-normal">{isMn ? 'онцлогууд' : 'Features'}</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-[2rem] group hover:border-brand-accent/30 transition-all">
                <div className="text-brand-accent mb-4">{f.icon}</div>
                <h3 className="text-xl mb-3 group-hover:text-brand-accent transition-colors">{f.title}</h3>
                <p className="text-brand-chalk font-light text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment sectors */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl">{isMn ? 'Ашиглалтын' : 'Deployment'} <span className="text-brand-accent italic font-serif font-normal">{isMn ? 'салбарууд' : 'Sectors'}</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deployments.map((d, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-[2rem] text-center border-brand-accent/10 hover:border-brand-accent/30 transition-all">
                <h3 className="text-lg mb-3">{d.label}</h3>
                <p className="text-brand-accent text-sm font-medium">{d.stat}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto glass rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent pointer-events-none" />
          <h2 className="text-4xl md:text-5xl mb-6 relative z-10">{isMn ? 'Агаарын чанарыг хянаж эхлэх' : 'Start Monitoring Air Quality'}</h2>
          <p className="text-brand-chalk font-light mb-10 relative z-10 max-w-xl mx-auto">
            {isMn ? 'Танай оффис, сургууль, үйлдвэрийн агаарын чанарыг бодит цагт хянаж, ажилчдын эрүүл мэнд болон бүтээмжийг хамгаална.' : 'Protect employee health and productivity by monitoring your workspace air quality in real time.'}
          </p>
          <a href="/#contact" className="inline-flex items-center gap-3 py-4 px-10 bg-gradient-to-r from-brand-accent to-purple-400 text-white rounded-2xl font-mono text-[11px] font-bold hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all relative z-10">
            {isMn ? 'AirQ захиалах' : 'Order AirQ'} <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
