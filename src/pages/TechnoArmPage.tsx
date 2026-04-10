import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Cpu, Target, Gauge, Weight, CircleDollarSign, Zap, Shield, Settings, Wrench, Factory, Truck, Droplets, Package, ChevronRight } from 'lucide-react';

export default function TechnoArmPage() {
  const { t, i18n } = useTranslation();
  const isMn = i18n.language === 'mn';

  const specs = [
    { icon: <Weight size={20} />, label: isMn ? 'Ажлах хүч' : 'Payload Capacity', value: '8.0 kg' },
    { icon: <Target size={20} />, label: isMn ? 'Ажлын радиус' : 'Working Radius', value: '650 mm' },
    { icon: <Gauge size={20} />, label: isMn ? 'Нарийвчлал' : 'Repeatability', value: '±0.01 mm' },
    { icon: <Cpu size={20} />, label: isMn ? 'Тэнхлэг' : 'Axes (DOF)', value: '6-Axis' },
    { icon: <Settings size={20} />, label: isMn ? 'Жин' : 'Robot Weight', value: '13+ kg' },
    { icon: <CircleDollarSign size={20} />, label: isMn ? 'Үнэ' : 'Starting Price', value: '~$1,510' },
  ];

  const useCases = [
    { icon: <Droplets size={20} />, title: isMn ? 'Автомашин угаалга' : 'Vehicle Wash Automation', desc: isMn ? '3D LiDAR сканер ашиглан автомашины хэлбэрийг тодорхойлж, хүний оролцоогүйгээр чанартай угаалга хийнэ.' : 'Utilizing 3D LiDAR scanning to map vehicle geometry for autonomous, precision wash cycles without human intervention.' },
    { icon: <Factory size={20} />, title: isMn ? 'Үйлдвэрлэлийн автоматжуулалт' : 'Manufacturing Automation', desc: isMn ? 'Угсралт, гагнуур, будаг шүршилт, чанарын хяналт зэрэг давтагдсан процессуудыг автоматжуулах.' : 'Automate repetitive assembly, welding, painting, and quality inspection processes with consistent precision.' },
    { icon: <Package size={20} />, title: isMn ? 'Сав баглаа боодол' : 'Packaging & Palletizing', desc: isMn ? 'Бүтээгдэхүүнийг автоматаар савлах, ангилах, тавиур дээр байрлуулах ажлыг хурдтай гүйцэтгэнэ.' : 'Rapid automated sorting, packaging, and precise palletizing operations for logistics and warehousing.' },
    { icon: <Truck size={20} />, title: isMn ? 'Хүнсний үйлдвэрлэл' : 'Food Processing', desc: isMn ? 'Хүнсний аюулгүй материалаар хийгдсэн грипперүүдтэй, ариун цэврийн стандарт хангасан автоматжуулалт.' : 'Food-grade gripper attachments with hygienic design for automated food handling and processing lines.' },
  ];

  const advantages = [
    { value: '3-5x', label: isMn ? 'Импортоос хямд' : 'Cheaper Than Import' },
    { value: '100%', label: isMn ? 'Монголд засварлах боломжтой' : 'Locally Serviceable' },
    { value: '2 долоо хоног', label: isMn ? 'Шинэ хэрэгсэл нэмэх хугацаа' : 'Custom Tool Lead Time' },
    { value: '24/7', label: isMn ? 'Техникийн дэмжлэг' : 'Technical Support' },
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-paper overflow-x-hidden">
      <div className="noise-overlay" />

      {/* Back Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-md border-b border-hairline bg-brand-bg/60">
        <Link to="/" className="flex items-center gap-3 text-brand-chalk hover:text-brand-teal transition-colors group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-[10px] uppercase tracking-widest">{isMn ? 'Нүүр хуудас' : 'Back Home'}</span>
        </Link>
        <span className="font-mono text-[10px] text-brand-teal tracking-widest">TECHNO-ARM</span>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.08)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
            <p className="text-xl text-brand-chalk font-light leading-relaxed mb-10 max-w-lg">
              {isMn 
                ? 'Daccom Partners-ийн инженерүүдийн бүрэн зохион бүтээж, туршилтын загварыг амжилттай хийж гүйцэтгэсэн 6 тэнхлэгтэй үйлдвэрлэлийн робот гар. Олон улсын ижил төстэй бүтээгдэхүүнээс 3-5 дахин хямд үнэтэй.'
                : 'A fully in-house designed and prototyped 6-axis industrial robotic arm by Daccom Partners engineers. Delivers comparable performance at 3-5x lower cost than international equivalents.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/#contact" className="btn-outline py-3 px-8 text-[11px] bg-brand-teal text-brand-bg border-brand-teal hover:bg-white hover:text-brand-bg hover:border-white flex items-center gap-2 justify-center">
                {isMn ? 'Үнийн санал авах' : 'Request a Quote'} <ArrowRight size={16} />
              </a>
              <a href="#specs" className="btn-outline py-3 px-8 text-[11px] hover:bg-brand-teal hover:text-brand-bg hover:border-brand-teal flex items-center gap-2 justify-center">
                {isMn ? 'Техникийн үзүүлэлт' : 'View Specifications'}
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-teal/10 to-purple-500/5 rounded-[3rem] blur-2xl" />
              <div className="glass rounded-[3rem] overflow-hidden border-brand-teal/10 relative">
                <img src="/techno-arm-hero.jpg" alt="Techno-Arm Robotic Arm" className="w-full object-cover" />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-brand-bg/80 to-transparent p-8">
                  <p className="font-mono text-[9px] text-brand-teal tracking-widest">{isMn ? 'ТУРШИЛТЫН ЗАГВАР V1.0' : 'PROTOTYPE V1.0'}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specifications */}
      <section id="specs" className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">{isMn ? 'Техникийн' : 'Technical'} <span className="text-brand-teal italic font-serif font-normal">{isMn ? 'үзүүлэлтүүд' : 'Specifications'}</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {specs.map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-3xl text-center group hover:border-brand-teal/30 transition-all"
              >
                <div className="text-brand-teal mb-4 flex justify-center">{spec.icon}</div>
                <p className="text-2xl font-bold text-white mb-2">{spec.value}</p>
                <p className="font-mono text-[9px] text-brand-chalk uppercase tracking-wider">{spec.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Spec images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="glass rounded-[2rem] overflow-hidden">
              <img src="/techno-arm-specs.jpg" alt="Technical specifications" className="w-full object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="glass rounded-[2rem] overflow-hidden">
              <img src="/techno-arm-parts.jpg" alt="Manufacturing process" className="w-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why In-House */}
      <section className="py-24 px-6 md:px-12 lg:px-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-teal/[0.02] to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] text-brand-teal tracking-widest">{isMn ? 'ДАВУУ ТАЛ' : 'COMPETITIVE EDGE'}</span>
            <h2 className="text-4xl md:text-5xl mt-4">{isMn ? 'Яагаад өөрсдөө' : 'Why'} <span className="text-brand-teal italic font-serif font-normal">{isMn ? 'бүтээсэн бэ?' : 'In-House?'}</span></h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {advantages.map((adv, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl text-center border-brand-teal/10 hover:border-brand-teal/30 transition-all">
                <p className="text-3xl md:text-4xl font-bold text-brand-teal mb-3">{adv.value}</p>
                <p className="text-sm text-brand-chalk font-light">{adv.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="glass rounded-[3rem] p-10 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl mb-6">{isMn ? 'Импортын бэрхшээл' : 'The Import Problem'}</h3>
                <div className="space-y-4 text-brand-chalk font-light">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 shrink-0" />
                    <p>{isMn ? '10 кг хүртэл даацтай робот гарны үнэ: $10,000 - $50,000' : 'Robots under 10kg payload: $10,000 - $50,000'}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 shrink-0" />
                    <p>{isMn ? '50 кг хүртэл даацтай: $50,000 - $150,000' : '50kg payload range: $50,000 - $150,000'}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 shrink-0" />
                    <p>{isMn ? 'Тусгай мэргэжлийн ур чадвар шаарддаг, засвар үйлчилгээ хязгаарлагдмал' : 'Requires specialist expertise; limited local repair capability'}</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-3xl mb-6 text-brand-teal">{isMn ? 'Манай шийдэл' : 'Our Solution'}</h3>
                <div className="space-y-4 text-brand-chalk font-light">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-brand-teal mt-1 shrink-0" />
                    <p>{isMn ? 'Робот гарны технологийг бүрэн эзэмшсэн' : 'Full ownership of the robotic arm IP and technology'}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-brand-teal mt-1 shrink-0" />
                    <p>{isMn ? 'Өөрсдийн хэрэглээнд тохируулан хөгжүүлэх боломжтой' : 'Fully customizable to specific client use cases'}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-brand-teal mt-1 shrink-0" />
                    <p>{isMn ? 'Өртөгийн хувьд 3-5 дахин хямд (~$1,510)' : '3-5x cost reduction vs. imports (~$1,510 per unit)'}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-brand-teal mt-1 shrink-0" />
                    <p>{isMn ? 'Монголд бүрэн засвар үйлчилгээ хийх боломжтой' : '100% locally maintainable and repairable'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl">{isMn ? 'Хэрэглээний' : 'Application'} <span className="text-brand-teal italic font-serif font-normal">{isMn ? 'боломжууд' : 'Scenarios'}</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-[2rem] group hover:border-brand-teal/30 transition-all">
                <div className="text-brand-teal mb-4">{uc.icon}</div>
                <h3 className="text-2xl mb-3 group-hover:text-brand-teal transition-colors">{uc.title}</h3>
                <p className="text-brand-chalk font-light leading-relaxed">{uc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto glass rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 to-transparent pointer-events-none" />
          <h2 className="text-4xl md:text-5xl mb-6 relative z-10">{isMn ? 'Таны бизнест робот гар хэрэгтэй юу?' : 'Ready to Automate?'}</h2>
          <p className="text-brand-chalk font-light mb-10 relative z-10 max-w-xl mx-auto">
            {isMn ? 'Манай инженерүүд таны үйлдвэрлэл, үйлчилгээний онцлогт тохирсон робот гарын шийдлийг боловсруулж өгнө.' : 'Our engineers will design a custom robotic arm solution tailored to your specific industrial or commercial needs.'}
          </p>
          <a href="/#contact" className="inline-flex items-center gap-3 py-4 px-10 bg-gradient-to-r from-brand-teal to-cyan-400 text-brand-bg rounded-2xl font-mono text-[11px] font-bold hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all relative z-10">
            {isMn ? 'Холбоо барих' : 'Get in Touch'} <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
