import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Cpu, Target, Gauge, Weight, CircleDollarSign, Zap, Shield, Settings, Wrench, Factory, Truck, Droplets, Package, ChevronRight, Eye, Layers, Code, Cog, GraduationCap, Globe, Users, TrendingUp, Clock, BarChart3, ArrowUpRight } from 'lucide-react';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import BrochureButton from '../components/BrochureButton';

export default function TechnoArmPage() {
  const { t, i18n } = useTranslation();
  const isMn = i18n.language === 'mn';

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const specs = [
    { icon: <Weight size={20} />, label: isMn ? 'Ажлах хүч' : 'Payload', value: '8.0 kg' },
    { icon: <Target size={20} />, label: isMn ? 'Ажлын радиус' : 'Reach', value: '650 mm' },
    { icon: <Gauge size={20} />, label: isMn ? 'Нарийвчлал' : 'Repeatability', value: '±0.01 mm' },
    { icon: <Cpu size={20} />, label: isMn ? 'Тэнхлэг' : 'Axes (DOF)', value: '6-Axis' },
    { icon: <Settings size={20} />, label: isMn ? 'Жин' : 'Weight', value: '13+ kg' },
    { icon: <CircleDollarSign size={20} />, label: isMn ? 'Эхлэх үнэ' : 'Starting At', value: '~$1,510' },
  ];

  const useCases = [
    { icon: <Droplets size={20} />, title: isMn ? 'Автомашин угаалга' : 'Vehicle Wash Automation', desc: isMn ? '3D LiDAR сканер ашиглан автомашины хэлбэрийг тодорхойлж, хүний оролцоогүйгээр чанартай угаалга. Нэг циклд 8-12 минут, 70% ус хэмнэлт.' : '3D LiDAR scanning maps vehicle geometry for autonomous wash, 8-12 min cycles, 70% water savings.', impact: isMn ? 'Ус 70% хэмнэнэ' : '70% Water Saved' },
    { icon: <Factory size={20} />, title: isMn ? 'Үйлдвэрлэлийн автоматжуулалт' : 'Manufacturing Automation', desc: isMn ? 'Угсралт, гагнуур, будаг шүршилт, чанарын хяналт. 24/7 тасралтгүй ажиллах боломжтой, хүний алдааг арилгана.' : 'Assembly, welding, painting, inspection. 24/7 operation eliminates human error in repetitive tasks.', impact: isMn ? 'Бүтээмж +45%' : '+45% Throughput' },
    { icon: <Package size={20} />, title: isMn ? 'Сав баглаа боодол' : 'Packaging & Palletizing', desc: isMn ? 'Бүтээгдэхүүнийг ангилах, савлах, тавиур дээр байрлуулах. Цагт 1200+ ширхэг боловсруулах хурдтай.' : 'Sorting, packaging, palletizing at 1200+ units/hour with consistent placement accuracy.', impact: isMn ? '1200+ ш/цаг' : '1200+ Units/hr' },
    { icon: <Truck size={20} />, title: isMn ? 'Хүнсний үйлдвэрлэл' : 'Food & Beverage', desc: isMn ? 'Хүнсний аюулгүй байдлын стандарт хангасан, IP67 хамгаалалттай грипперүүдтэй.' : 'IP67-rated food-safe grippers with hygienic design meeting industry compliance standards.', impact: isMn ? 'IP67 хамгаалалт' : 'IP67 Rated' },
    { icon: <Eye size={20} />, title: isMn ? 'Чанарын хяналт' : 'Quality Inspection', desc: isMn ? 'AI Vision системтэй хослуулан бүтээгдэхүүний гажигийг 0.1мм нарийвчлалтай илрүүлэх.' : 'Paired with AI Vision to detect product defects at 0.1mm resolution with machine learning classification.', impact: isMn ? '99.9% нарийвчлал' : '99.9% Accuracy' },
    { icon: <Wrench size={20} />, title: isMn ? 'Засвар үйлчилгээ' : 'Maintenance Tasks', desc: isMn ? 'Аюултай орчинд хүний оронд ажиллах, хүнд эд ангийг зөөж байрлуулах.' : 'Deploy in hazardous environments for heavy component handling and precision maintenance tasks.', impact: isMn ? 'Аюулгүй байдал' : 'Zero Risk' },
  ];

  const howItWorks = [
    { step: '01', title: isMn ? 'Хэрэгцээ судлах' : 'Needs Assessment', desc: isMn ? 'Инженерүүд таны үйлдвэрлэлийн процессыг бичлэгээр хянаж, автоматжуулах боломжтой ажлуудыг тодорхойлно.' : 'Our engineers visit your site, record processes, and identify automation opportunities with the highest ROI.', icon: <GraduationCap size={24} /> },
    { step: '02', title: isMn ? 'Ажлын хэрэгсэл загварчлах' : 'End-Effector Design', desc: isMn ? 'Тухайн ажилд тохирсон тусгай грипер, хэрэгслийг 3D хэвлэх технологиор 2 долоо хоногт бэлтгэнэ.' : 'Custom grippers and tooling designed via 3D printing and CNC machining, delivered in 2 weeks.', icon: <Cog size={24} /> },
    { step: '03', title: isMn ? 'Програмчлал & Туршилт' : 'Programming & Testing', desc: isMn ? 'Робот гарыг ажлын орчинд суурилуулж, бодит нөхцөлд туршиж, нарийн тохируулна.' : 'Deploy on-site, program motion paths, and rigorously test under real production conditions.', icon: <Code size={24} /> },
    { step: '04', title: isMn ? 'Хүлээлгэн өгөх & Сургалт' : 'Handoff & Training', desc: isMn ? 'Таны ажилчдад робот гарыг удирдах, засварлах бүрэн сургалт өгнө. 24/7 алсын тусламж.' : 'Full operator training for your staff with 24/7 remote support and maintenance documentation.', icon: <Users size={24} /> },
  ];

  const globalComparison = [
    { name: 'Universal Robots (UR3e)', country: isMn ? 'Дани' : 'Denmark', payload: '3 kg', price: '$25,000+', reach: '500mm' },
    { name: 'KUKA LBR iiwa', country: isMn ? 'Герман' : 'Germany', payload: '7 kg', price: '$50,000+', reach: '800mm' },
    { name: 'Franka Emika Panda', country: isMn ? 'Герман' : 'Germany', payload: '3 kg', price: '$20,000+', reach: '855mm' },
    { name: 'Dobot CR5', country: isMn ? 'Хятад' : 'China', payload: '5 kg', price: '$15,000+', reach: '900mm' },
    { name: 'Techno-Arm', country: isMn ? '🇲🇳 Монгол' : '🇲🇳 Mongolia', payload: '8 kg', price: '~$1,510', reach: '650mm', highlight: true },
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-paper overflow-x-hidden">
      <div className="noise-overlay" />
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0A0A0B_100%)] opacity-80" />
      </div>

      {/* Nav */}
      <Navbar />
      <BrochureButton />


      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.08)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-teal/20 bg-brand-teal/5 mb-6">
              <Zap size={12} className="text-brand-teal" />
              <span className="font-mono text-[10px] text-brand-teal tracking-widest">{isMn ? 'МОНГОЛД ЗОХИОН БҮТЭЭСЭН' : 'ENGINEERED IN MONGOLIA'}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading mb-6 leading-[0.9]">
              Techno-Arm <br/>
              <span className="text-brand-teal italic font-serif font-normal text-4xl md:text-5xl">
                {isMn ? 'Үйлдвэрлэлийн Робот Гар' : 'Industrial Robotic Arm'}
              </span>
            </h1>
            <p className="text-xl text-brand-chalk font-light leading-relaxed mb-8 max-w-lg">
              {isMn 
                ? 'Daccom Partners-ийн инженерүүдийн бүрэн зохион бүтээж, туршилтын загварыг амжилттай хийж гүйцэтгэсэн 6 тэнхлэгтэй үйлдвэрлэлийн робот гар. Олон улсын ижил төстэй бүтээгдэхүүнээс 3-5 дахин хямд.'
                : 'A fully in-house designed and prototyped 6-axis industrial robotic arm. Delivers comparable performance at 3-5x lower cost than international equivalents like Universal Robots and KUKA.'}
            </p>
            {/* Key value badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                { v: '8kg', l: isMn ? 'Даац' : 'Payload' },
                { v: '6-Axis', l: isMn ? 'Тэнхлэг' : 'DOF' },
                { v: '±0.01mm', l: isMn ? 'Нарийвчлал' : 'Precision' },
                { v: '~$1.5K', l: isMn ? 'Эхлэх үнэ' : 'From' },
              ].map((b, i) => (
                <div key={i} className="px-4 py-2 bg-brand-bg-card/50 border border-hairline rounded-2xl">
                  <span className="text-brand-teal font-bold text-sm">{b.v}</span>
                  <span className="text-brand-chalk text-[10px] ml-2">{b.l}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/#contact" className="btn-outline py-3.5 px-10 text-[11px] bg-brand-teal text-brand-bg border-brand-teal hover:bg-white hover:text-brand-bg hover:border-white flex items-center gap-2 justify-center font-bold">
                {isMn ? 'Үнийн санал авах' : 'Request a Quote'} <ArrowRight size={16} />
              </a>
              <a href="#how-it-works" className="btn-outline py-3.5 px-10 text-[11px] hover:bg-brand-teal hover:text-brand-bg hover:border-brand-teal flex items-center gap-2 justify-center">
                {isMn ? 'Хэрхэн ажилладаг' : 'How It Works'}
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-teal/10 to-purple-500/5 rounded-[3rem] blur-2xl" />
              <div className="glass rounded-[3rem] overflow-hidden border-brand-teal/10 relative">
                <img src="/airq-dashboard.jpg" alt="Techno-Arm Robotic Arm" className="w-full object-cover" />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-brand-bg to-transparent p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-mono text-[9px] text-brand-teal tracking-widest mb-1">{isMn ? 'ТУРШИЛТЫН ЗАГВАР' : 'WORKING PROTOTYPE'}</p>
                      <p className="text-white text-sm">V1.0 — 2025</p>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/20 border border-green-500/30 rounded-full">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="font-mono text-[9px] text-green-400">{isMn ? 'АЖИЛЛАЖ БАЙНА' : 'OPERATIONAL'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specifications */}
      <section id="specs" className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] text-brand-teal tracking-widest">{isMn ? 'ТЕХНИКИЙН МЭДЭЭЛЭЛ' : 'TECHNICAL DATA'}</span>
            <h2 className="text-4xl md:text-5xl mt-4">{isMn ? 'Техникийн' : 'Technical'} <span className="text-brand-teal italic font-serif font-normal">{isMn ? 'үзүүлэлтүүд' : 'Specifications'}</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {specs.map((spec, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="glass p-6 rounded-3xl text-center group hover:border-brand-teal/30 transition-all">
                <div className="text-brand-teal mb-3 flex justify-center">{spec.icon}</div>
                <p className="text-2xl font-bold text-white mb-1">{spec.value}</p>
                <p className="font-mono text-[8px] text-brand-chalk uppercase tracking-wider">{spec.label}</p>
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="glass rounded-[2rem] overflow-hidden relative group">
              <img src="/techno-arm-specs.jpg" alt="Technical specifications" className="w-full object-cover" />
              <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-brand-bg/80 backdrop-blur-sm rounded-xl">
                <p className="font-mono text-[8px] text-brand-teal">{isMn ? 'ХЭМЖЭЭСИЙН ЗУРАГ' : 'DIMENSIONAL DRAWING'}</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="glass rounded-[2rem] overflow-hidden relative group">
              <img src="/techno-arm-parts.jpg" alt="Manufacturing" className="w-full object-cover" />
              <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-brand-bg/80 backdrop-blur-sm rounded-xl">
                <p className="font-mono text-[8px] text-brand-teal">{isMn ? 'ЭДЛЭЛ & ҮЙЛДВЭРЛЭЛ' : 'COMPONENTS & MANUFACTURING'}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works — UR-inspired step-by-step */}
      <section id="how-it-works" className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-teal/[0.02] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] text-brand-teal tracking-widest">{isMn ? 'ХЭРЭГЖҮҮЛЭЛТ' : 'IMPLEMENTATION'}</span>
            <h2 className="text-4xl md:text-5xl mt-4">{isMn ? 'Хэрхэн' : 'How It'} <span className="text-brand-teal italic font-serif font-normal">{isMn ? 'ажилладаг вэ?' : 'Works'}</span></h2>
            <p className="text-brand-chalk font-light mt-4 max-w-xl mx-auto">{isMn ? 'Санаанаас эхлээд бодит автоматжуулалтад хүртэл 4 алхамтай.' : 'From initial consultation to full automation in 4 clear steps.'}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="glass p-8 rounded-[2rem] relative group hover:border-brand-teal/30 transition-all">
                <div className="absolute top-6 right-6 text-brand-teal/10 text-6xl font-heading">{s.step}</div>
                <div className="text-brand-teal mb-6">{s.icon}</div>
                <h3 className="text-xl mb-3 group-hover:text-brand-teal transition-colors">{s.title}</h3>
                <p className="text-brand-chalk font-light text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Comparison Table */}
      <section className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] text-brand-teal tracking-widest">{isMn ? 'ОЛОН УЛСТАЙ ХАРЬЦУУЛСАН' : 'GLOBAL COMPARISON'}</span>
            <h2 className="text-4xl md:text-5xl mt-4">{isMn ? 'Дэлхийн жишигтэй' : 'Benchmarked Against'} <span className="text-brand-teal italic font-serif font-normal">{isMn ? 'зэрэгцүүлэхэд' : 'The Best'}</span></h2>
          </div>
          <div className="glass rounded-[2rem] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-hairline">
                    <th className="font-mono text-[9px] text-brand-chalk uppercase tracking-wider px-6 py-5">{isMn ? 'Бүтээгдэхүүн' : 'Product'}</th>
                    <th className="font-mono text-[9px] text-brand-chalk uppercase tracking-wider px-6 py-5">{isMn ? 'Улс' : 'Origin'}</th>
                    <th className="font-mono text-[9px] text-brand-chalk uppercase tracking-wider px-6 py-5">{isMn ? 'Даац' : 'Payload'}</th>
                    <th className="font-mono text-[9px] text-brand-chalk uppercase tracking-wider px-6 py-5">{isMn ? 'Радиус' : 'Reach'}</th>
                    <th className="font-mono text-[9px] text-brand-chalk uppercase tracking-wider px-6 py-5">{isMn ? 'Үнэ' : 'Price'}</th>
                  </tr>
                </thead>
                <tbody>
                  {globalComparison.map((row, i) => (
                    <tr key={i} className={`border-b border-hairline/50 transition-colors ${row.highlight ? 'bg-brand-teal/5' : 'hover:bg-white/[0.02]'}`}>
                      <td className={`px-6 py-4 text-sm ${row.highlight ? 'text-brand-teal font-bold' : 'text-white'}`}>{row.name}</td>
                      <td className="px-6 py-4 text-sm text-brand-chalk">{row.country}</td>
                      <td className="px-6 py-4 text-sm text-brand-chalk">{row.payload}</td>
                      <td className="px-6 py-4 text-sm text-brand-chalk">{row.reach}</td>
                      <td className={`px-6 py-4 text-sm font-bold ${row.highlight ? 'text-brand-teal' : 'text-white'}`}>{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Why In-House */}
      <section className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] text-brand-teal tracking-widest">{isMn ? 'ДАВУУ ТАЛ' : 'COMPETITIVE EDGE'}</span>
            <h2 className="text-4xl md:text-5xl mt-4">{isMn ? 'Яагаад өөрсдөө' : 'Why'} <span className="text-brand-teal italic font-serif font-normal">{isMn ? 'бүтээсэн бэ?' : 'Build In-House?'}</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { value: '3-5x', label: isMn ? 'Импортоос хямд' : 'Cheaper vs Import' },
              { value: '100%', label: isMn ? 'Монголд засварлах боломжтой' : 'Locally Serviceable' },
              { value: '2 wk', label: isMn ? 'Шинэ хэрэгсэл нэмэх' : 'Custom Tooling Time' },
              { value: '24/7', label: isMn ? 'Техникийн дэмжлэг' : 'Technical Support' },
            ].map((adv, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl text-center border-brand-teal/10 hover:border-brand-teal/30 transition-all">
                <p className="text-3xl md:text-4xl font-bold text-brand-teal mb-2">{adv.value}</p>
                <p className="text-sm text-brand-chalk font-light">{adv.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="glass rounded-[3rem] p-10 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl mb-6">{isMn ? 'Импортын бэрхшээл' : 'The Import Problem'}</h3>
                <div className="space-y-4 text-brand-chalk font-light">
                  {[
                    isMn ? '10 кг даацтай робот гарны үнэ: $10,000 - $50,000' : 'Entry-level cobots: $10,000 - $50,000',
                    isMn ? 'Засвар үйлчилгээ зөвхөн гадаадаас' : 'Maintenance requires foreign technicians',
                    isMn ? 'Нэмэлт хэрэгсэл захиалахад 2-3 сар хүлээх' : '2-3 month lead time for custom tooling',
                    isMn ? 'Оюуны өмчөө хянах боломжгүй' : 'No control over IP or customization',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 shrink-0" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-3xl mb-6 text-brand-teal">{isMn ? 'Манай шийдэл' : 'Our Advantage'}</h3>
                <div className="space-y-4 text-brand-chalk font-light">
                  {[
                    isMn ? 'Робот гарны технологийг бүрэн эзэмшсэн — 100% IP ownership' : 'Full IP ownership — we own every component design',
                    isMn ? '2 долоо хоногт шинэ хэрэгсэл нэмж боловсруулах' : 'Custom end-effectors delivered in 2 weeks',
                    isMn ? 'Монголд бүрэн засвар, шинэчлэл хийх боломжтой' : 'Fully serviceable locally, no foreign dependency',
                    isMn ? 'Хэрэглэгчийн онцлогт тохируулан зориулсан хөгжүүлэлт' : 'Bespoke development for each client\'s specific use case',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-brand-teal mt-1 shrink-0" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] text-brand-teal tracking-widest">{isMn ? 'ХЭРЭГЛЭЭ' : 'APPLICATIONS'}</span>
            <h2 className="text-4xl md:text-5xl mt-4">{isMn ? 'Хэрэглээний' : 'Application'} <span className="text-brand-teal italic font-serif font-normal">{isMn ? 'боломжууд' : 'Scenarios'}</span></h2>
            <p className="text-brand-chalk font-light mt-4 max-w-lg mx-auto">{isMn ? 'Universal Robots-ийн загвараар — бид бүтээгдэхүүн биш, шийдэл санал болгоно.' : 'Like Universal Robots — we don\'t sell hardware, we deliver solutions.'}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((uc, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="glass p-8 rounded-[2rem] group hover:border-brand-teal/30 transition-all flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-brand-teal">{uc.icon}</div>
                  <span className="font-mono text-[9px] text-brand-teal bg-brand-teal/10 px-2 py-1 rounded-full">{uc.impact}</span>
                </div>
                <h3 className="text-xl mb-3 group-hover:text-brand-teal transition-colors">{uc.title}</h3>
                <p className="text-brand-chalk font-light text-sm leading-relaxed flex-1">{uc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-4xl mx-auto glass rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-teal/5 blur-[120px] rounded-full" />
          <span className="font-mono text-[10px] text-brand-teal tracking-widest relative z-10">{isMn ? 'ДАРААГИЙН АЛХАМ' : 'NEXT STEP'}</span>
          <h2 className="text-4xl md:text-5xl mb-6 mt-4 relative z-10">{isMn ? 'Таны бизнест робот гар хэрэгтэй юу?' : 'Ready to Automate?'}</h2>
          <p className="text-brand-chalk font-light mb-10 relative z-10 max-w-xl mx-auto">
            {isMn ? 'Манай инженерүүд таны үйлдвэрлэл, үйлчилгээний онцлогт тохирсон робот гарын шийдлийг бэлтгэнэ. Эхний зөвлөгөө үнэгүй.' : 'Our engineering team will design a custom solution for your specific needs. First consultation is free.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a href="/#contact" className="inline-flex items-center gap-3 py-4 px-10 bg-gradient-to-r from-brand-teal to-cyan-400 text-brand-bg rounded-2xl font-mono text-[11px] font-bold hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] hover:scale-[1.02] transition-all">
              {isMn ? 'Үнийн санал авах' : 'Request a Quote'} <ArrowRight size={16} />
            </a>
            <a href="/#contact" className="inline-flex items-center gap-3 py-4 px-10 border border-hairline text-white rounded-2xl font-mono text-[11px] hover:border-brand-teal/50 hover:bg-white/5 transition-all">
              {isMn ? 'Дэмо хүсэх' : 'Schedule a Demo'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
