/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring, useMotionValue, useTransform, AnimatePresence } from "motion/react";
import { Landmark, Settings, Brain, Zap, Globe, ArrowUpRight, ChevronRight, Play, Cpu, Shield, BarChart3, Rocket, Users, MessageSquare, Mail, Phone, MapPin, CheckCircle2, Trophy, Plane, Building2, Key, Wind, Activity, HardHat, BedDouble, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Custom Cursor Logic
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorScale = useMotionValue(1);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const cursorScaleSpring = useSpring(cursorScale, springConfig);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, .interactive')) {
        cursorScale.set(2.5);
      } else {
        cursorScale.set(1);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-paper selection:bg-brand-teal selection:text-brand-bg relative overflow-x-hidden md:cursor-none">
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[99999] bg-brand-bg flex flex-col items-center justify-center"
          >
            <Logo className="mb-12 animate-pulse scale-150" />
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-brand-teal border-t-transparent rounded-full"
              />
              <span className="font-mono text-[10px] text-brand-teal tracking-[0.3em] uppercase">Системийг ачаалж байна...</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-brand-teal rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: cursorScaleSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-brand-teal rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Noise Texture & Scroll Progress */}
      <div className="noise-overlay" />
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-brand-teal origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Background Decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0A0A0B_100%)] opacity-80" />
        <div className="glow-orb top-[-10%] right-[-5%] w-[800px] h-[800px] bg-brand-teal/10" />
        <div className="glow-orb bottom-[10%] left-[-10%] w-[1000px] h-[1000px] bg-brand-accent/10" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[50] flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-md border-b border-hairline bg-brand-bg/40">
        <div className="flex items-center gap-10">
          <Logo />
          <div className="hidden lg:flex items-center gap-8">
            <a href="#services" className="font-mono text-[10px] text-brand-chalk hover:text-brand-teal transition-colors tracking-[0.2em]">ҮЙЛЧИЛГЭЭ</a>
            <a href="#projects" className="font-mono text-[10px] text-brand-chalk hover:text-brand-teal transition-colors tracking-[0.2em]">ТӨСЛҮҮД</a>
            <a href="#products" className="font-mono text-[10px] text-brand-chalk hover:text-brand-teal transition-colors tracking-[0.2em]">БҮТЭЭГДЭХҮҮН</a>
            <a href="#about" className="font-mono text-[10px] text-brand-chalk hover:text-brand-teal transition-colors tracking-[0.2em]">БИДНИЙ ТУХАЙ</a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <a href="#contact" className="btn-outline py-2.5 px-6 text-[10px] hover:bg-brand-teal hover:text-brand-bg hover:border-brand-teal">
            Холбоо барих
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-teal/20 bg-brand-teal/5 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse" />
                <span className="font-mono text-[9px] text-brand-teal">Deep Tech Innovation 2026</span>
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] mb-10 text-gradient">
                Ирээдүйг <br />
                <span className="text-brand-teal italic font-serif font-normal">автоматжуулна</span>
              </h1>
              <p className="text-xl md:text-2xl text-brand-chalk max-w-2xl mb-12 font-light leading-relaxed">
                Мехатроник, хиймэл оюун ухаан болон роботын технологийг нэгтгэсэн Монголын анхны гүн технологийн платформ.
              </p>
              <div className="flex flex-wrap gap-6">
                <a href="#services" className="px-8 py-4 bg-brand-teal text-brand-bg rounded-full font-mono text-[11px] font-bold flex items-center gap-3 hover:bg-white transition-all group shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]">
                  Хамтран ажиллах <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <a href="#projects" className="px-8 py-4 border border-brand-teal/30 rounded-full font-mono text-[11px] flex items-center gap-3 hover:bg-brand-teal/10 transition-all">
                  Төслүүдтэй танилцах
                </a>
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-5 relative">
            <HeroVisual />
          </div>
        </div>

        {/* Trusted By Marquee */}
        <div className="mt-32 pt-20 border-t border-hairline overflow-hidden relative">
          <p className="font-mono text-[9px] text-brand-chalk/60 text-center mb-12 tracking-[0.4em] uppercase">
            Бидэнд итгэж хамтран ажилладаг байгууллагууд
          </p>
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-24 px-12">
                {[
                  { name: "Teso", logo: "https://www.google.com/s2/favicons?domain=teso.mn&sz=128" },
                  { name: "Barilga.mn", logo: "https://www.google.com/s2/favicons?domain=barilga.mn&sz=128" },
                  { name: "iTrip", logo: "https://www.google.com/s2/favicons?domain=itrip.mn&sz=128" },
                  { name: "Startup Mongolia", logo: "https://www.google.com/s2/favicons?domain=startupmongolia.com&sz=128" },
                  { name: "ITPark", logo: "https://www.google.com/s2/favicons?domain=itpark.mn&sz=128" },
                  { name: "Taliin Khishig Mining", logo: "https://www.google.com/s2/favicons?domain=taliinkhishig.mn&sz=128" }
                ].map((partner) => (
                  <div key={partner.name} className="flex items-center gap-4 opacity-40 hover:opacity-100 transition-all grayscale hover:grayscale-0 cursor-default">
                    <img src={partner.logo} alt={partner.name} className="w-8 h-8 md:w-10 md:h-10 object-contain" />
                    <span className="font-heading text-2xl md:text-3xl tracking-tighter text-brand-paper italic">{partner.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-brand-bg to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-brand-bg to-transparent z-10" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-y border-hairline bg-brand-bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
          {[
            { label: "Хэрэгжүүлсэн төсөл", val: "45+" },
            { label: "Инженерүүдийн баг", val: "20+" },
            { label: "Хэмнэсэн зардал", val: "35%" },
            { label: "Технологийн патент", val: "12" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <p className="text-5xl md:text-7xl font-heading mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-brand-teal/50 group-hover:to-brand-teal transition-all duration-500">{stat.val}</p>
              <p className="font-mono text-[9px] text-brand-chalk tracking-widest uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-b border-hairline overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center relative z-10">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl mb-6">Үндсэн <span className="text-brand-teal italic font-serif font-normal">технологиуд</span></h2>
            <p className="text-brand-chalk font-light leading-relaxed mb-8">
              Бид дэлхийн жишигт нийцсэн, хамгийн сүүлийн үеийн технологийн стекийг ашиглан найдвартай, өндөр хүчин чадалтай системүүдийг хөгжүүлдэг.
            </p>
            <div className="flex flex-wrap gap-3">
              {["C++ / Rust", "Python / TensorFlow", "ROS 2", "Computer Vision", "PLC / SCADA", "IoT / LoRaWAN", "Edge Computing", "Digital Twin"].map(tech => (
                <span key={tech} className="px-4 py-2 rounded-full border border-brand-teal/20 bg-brand-teal/5 text-brand-teal font-mono text-[10px] tracking-wider">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-teal to-brand-accent rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
            <div className="glass rounded-2xl p-6 font-mono text-[10px] md:text-xs text-brand-chalk leading-relaxed overflow-x-auto relative shadow-[0_0_30px_rgba(6,182,212,0.05)] bg-[#0A0A0B]/90">
              <div className="absolute top-0 left-0 w-full h-8 bg-black/40 border-b border-hairline flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                <span className="ml-4 text-[9px] opacity-50">system_core.rs</span>
              </div>
              <div className="pt-8">
                <p><span className="text-pink-500">fn</span> <span className="text-blue-400">initialize_robot_arm</span>(config: <span className="text-yellow-300">ArmConfig</span>) -&gt; <span className="text-yellow-300">Result</span>&lt;(), <span className="text-yellow-300">Error</span>&gt; {'{'}</p>
                <p className="pl-4"><span className="text-brand-teal">let</span> mut controller = <span className="text-yellow-300">Controller</span>::<span className="text-blue-400">new</span>(config.port)?;</p>
                <p className="pl-4">controller.<span className="text-blue-400">calibrate</span>().<span className="text-blue-400">await</span>?;</p>
                <p className="pl-4"><span className="text-brand-teal">if</span> !controller.<span className="text-blue-400">is_ready</span>() {'{'}</p>
                <p className="pl-8"><span className="text-pink-500">return</span> <span className="text-blue-400">Err</span>(<span className="text-yellow-300">Error</span>::<span className="text-blue-400">CalibrationFailed</span>);</p>
                <p className="pl-4">{'}'}</p>
                <p className="pl-4"><span className="text-green-400/70">// Start real-time control loop</span></p>
                <p className="pl-4"><span className="text-yellow-300">ControlLoop</span>::<span className="text-blue-400">spawn</span>(controller);</p>
                <p className="pl-4"><span className="text-blue-400">Ok</span>(())</p>
                <p>{'}'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Services Section */}
      <section id="services" className="py-32 px-6 md:px-12 lg:px-24 bg-brand-bg-secondary relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1px] bg-brand-teal" />
                <span className="font-mono text-[10px] text-brand-teal">Үйл ажиллагаа</span>
              </div>
              <h2 className="text-5xl md:text-7xl">
                Технологийн <br /> цогц <span className="text-brand-accent italic font-normal">экосистем</span>
              </h2>
            </div>
            <p className="text-brand-chalk text-lg max-w-md font-light">
              Бид зөвхөн программ хангамж биш, техник хангамж болон AI-г хослуулсан бодит шийдлүүдийг бүтээдэг.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {[
              {
                className: "md:col-span-8 h-[400px]",
                title: "Үйлдвэрлэлийн Автоматжуулалт",
                desc: "Робот гар, PLC удирдлага болон мехатроникийн нарийн шийдлүүд.",
                icon: <Settings size={40} />,
                visual: <div className="absolute inset-0 grid-pattern opacity-20" />
              },
              {
                className: "md:col-span-4 h-[400px]",
                title: "AI Vision",
                desc: "Компьютер харааны тусламжтай чанарын хяналт.",
                icon: <Brain size={40} />,
                color: "teal"
              },
              {
                className: "md:col-span-4 h-[400px]",
                title: "IoT Systems",
                desc: "Бодит цагийн өгөгдөл цуглуулах, хянах систем.",
                icon: <Globe size={40} />,
                color: "accent"
              },
              {
                className: "md:col-span-8 h-[400px]",
                title: "Predictive Maintenance",
                desc: "Хиймэл оюун ухаанаар эвдрэлийг урьдчилан таамаглах.",
                icon: <BarChart3 size={40} />,
                visual: <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-brand-accent/10 to-transparent" />
              }
            ].map((card, i) => (
              <BentoCard 
                key={i}
                {...card}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects & Success Stories Section */}
      <section id="projects" className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-teal/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-brand-teal" />
              <span className="font-mono text-[10px] text-brand-teal uppercase tracking-widest">Амжилтын түүх</span>
            </div>
            <h2 className="text-4xl md:text-6xl mb-6">
              Бидний хэрэгжүүлсэн <br />
              <span className="text-brand-teal italic font-serif font-normal">онцлох төслүүд</span>
            </h2>
            <p className="text-brand-chalk max-w-2xl font-light leading-relaxed">
              Зах зээлд амжилттай нэвтэрсэн дижитал платформуудаас эхлээд, салбартаа тэргүүлэгч гүн технологийн инновациуд.
            </p>
          </div>

          {/* Award Winners */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-10 md:p-12 rounded-[2rem] relative overflow-hidden group border-yellow-500/20 hover:border-yellow-500/40 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-0 right-0 p-6 md:p-8">
                <div className="flex items-center gap-2 px-4 py-2 bg-yellow-500/10 text-yellow-400 rounded-full border border-yellow-500/20 font-mono text-[10px] uppercase tracking-wider">
                  <Trophy size={14} /> 2025 Шилдэг Инноваци
                </div>
              </div>
              <Wind size={48} className="text-brand-paper mb-8" />
              <h3 className="text-3xl font-heading mb-4 text-white">AirQ</h3>
              <p className="text-brand-chalk font-light leading-relaxed max-w-md">
                Агаарын чанарыг бодит цагт хянах, дүн шинжилгээ хийх, урьдчилан сэргийлэх ухаалаг IoT систем.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass p-10 md:p-12 rounded-[2rem] relative overflow-hidden group border-yellow-500/20 hover:border-yellow-500/40 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-0 right-0 p-6 md:p-8">
                <div className="flex items-center gap-2 px-4 py-2 bg-yellow-500/10 text-yellow-400 rounded-full border border-yellow-500/20 font-mono text-[10px] uppercase tracking-wider">
                  <Trophy size={14} /> 2025 Шилдэг Инноваци
                </div>
              </div>
              <Cpu size={48} className="text-brand-paper mb-8" />
              <h3 className="text-3xl font-heading mb-4 text-white">Techno Arm</h3>
              <p className="text-brand-chalk font-light leading-relaxed max-w-md">
                Үйлдвэрлэлийн процессыг автоматжуулах өндөр нарийвчлалтай, ухаалаг робот гарын шийдэл.
              </p>
            </motion.div>
          </div>

          {/* Digital Platforms */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            {[
              { name: "iTrip.mn", logo: "https://www.google.com/s2/favicons?domain=itrip.mn&sz=128", desc: "Аяллын платформ" },
              { name: "iHotel.mn", logo: "https://www.google.com/s2/favicons?domain=ihotel.mn&sz=128", desc: "Зочид буудлын захиалга" },
              { name: "xRoom.mn", logo: "https://www.google.com/s2/favicons?domain=xroom.mn&sz=128", desc: "Өрөө түрээсийн систем" },
              { name: "MyHotel.mn", logo: "https://www.google.com/s2/favicons?domain=ihotel.mn&sz=128", desc: "Буудлын менежмент" }
            ].map((brand, i) => (
              <motion.div 
                key={brand.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-[2rem] flex flex-col items-center justify-center gap-4 hover:bg-white/5 transition-all group cursor-default text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-bg flex items-center justify-center border border-hairline group-hover:border-brand-teal transition-colors text-brand-chalk overflow-hidden p-3">
                  <img src={brand.logo} alt={brand.name} className="w-full h-full object-contain transition-all duration-500" />
                </div>
                <div>
                  <span className="font-heading font-bold text-xl tracking-tight block mb-1">{brand.name}</span>
                  <span className="font-mono text-[9px] text-brand-chalk/60 uppercase tracking-wider">{brand.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mining AI */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-[2rem] relative overflow-hidden border-brand-accent/20 flex flex-col md:flex-row items-center gap-12 group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex-1 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-accent/10 text-brand-accent rounded-full border border-brand-accent/20 font-mono text-[10px] uppercase tracking-wider mb-6">
                <Activity size={14} /> Хөгжүүлэлтийн шатанд
              </div>
              <h3 className="text-3xl md:text-4xl font-heading mb-4 text-white">Уул уурхайн урьдчилан таамаглах хиймэл оюун</h3>
              <p className="text-brand-chalk text-lg font-light leading-relaxed max-w-2xl">
                Уул уурхайн хүнд машин механизм, тоног төхөөрөмжийн эвдрэлийг урьдчилан таамаглаж, сул зогсолтоос сэргийлэх AI болон IoT-д суурилсан цогц шийдэл.
              </p>
            </div>
            <div className="w-full md:w-1/3 aspect-video bg-brand-bg rounded-2xl border border-hairline relative overflow-hidden flex items-center justify-center shadow-inner">
              <div className="absolute inset-0 grid-pattern opacity-30" />
              <HardHat size={48} className="text-brand-chalk/30" />
              <motion.div
                animate={{ y: ["-100%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent via-brand-accent/20 to-transparent blur-sm"
              />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div className="space-y-1">
                  <div className="w-12 h-1 bg-brand-accent/40 rounded-full" />
                  <div className="w-8 h-1 bg-brand-accent/40 rounded-full" />
                </div>
                <div className="font-mono text-[8px] text-brand-accent/60">ANALYZING...</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="products" className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <ProductSection 
            number="01"
            tag="Robotics"
            title="Техно-Гар"
            desc="Автомашин угаалгын ухаалаг робот систем. Хүний оролцоогүйгээр 3D сканер ашиглан чанартай угаалга гүйцэтгэнэ."
            metrics={[
              { label: "Угаалгын хугацаа", val: "8-12 мин" },
              { label: "Ус хэмнэлт", val: "70%" },
              { label: "Нарийвчлал", val: "99.9%" }
            ]}
            visual={<RobotVisual />}
          />
          <ProductSection 
            number="02"
            tag="IoT & Health"
            title="AirQ"
            desc="Дотоод орчны агаарын чанарыг хянах, автоматаар агааржуулалтыг удирдах ухаалаг IoT систем."
            metrics={[
              { label: "Мэдрэгч", val: "CO2, PM2.5" },
              { label: "Холболт", val: "WiFi/LoRa" },
              { label: "Бүтээмж", val: "+25%" }
            ]}
            visual={<AirQVisual />}
            reverse
          />
        </div>
      </section>

      {/* Process Section */}
      <section id="about" className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1px] bg-brand-teal" />
                <span className="font-mono text-[10px] text-brand-teal">Ажлын явц</span>
              </div>
              <h2 className="text-5xl md:text-7xl mb-12">
                Санааг <span className="text-brand-accent italic font-serif font-normal">бодит</span> <br /> болгох зам
              </h2>
              <div className="space-y-12">
                {[
                  { title: "Судалгаа ба Төлөвлөлт", desc: "Асуудлыг гүнзгий судалж, хамгийн оновчтой технологийн шийдлийг боловсруулна." },
                  { title: "Прототайп Хөгжүүлэлт", desc: "Шийдлийн анхны хувилбарыг техник болон программ хангамжийн түвшинд туршина." },
                  { title: "Үйлдвэрлэл ба Нэвтрүүлэлт", desc: "Бэлэн болсон системийг бодит орчинд суурилуулж, автоматжуулалтыг эхлүүлнэ." }
                ].map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="flex gap-8 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-brand-teal/30 flex items-center justify-center font-heading text-brand-teal group-hover:bg-brand-teal group-hover:text-brand-bg transition-all">
                      0{i + 1}
                    </div>
                    <div>
                      <h4 className="text-2xl mb-3">{step.title}</h4>
                      <p className="text-brand-chalk font-light">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="glass rounded-[3rem] p-12 aspect-square flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 grid-pattern opacity-20" />
                <div className="relative z-10 text-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="w-48 h-48 rounded-full bg-brand-teal/10 border border-brand-teal/20 flex items-center justify-center mb-8 mx-auto"
                  >
                    <Rocket size={64} className="text-brand-teal" />
                  </motion.div>
                  <p className="text-3xl font-heading mb-4">Хурдтай хөгжүүлэлт</p>
                  <p className="text-brand-chalk font-light">Бид Agile арга барилаар <br /> хамгийн богино хугацаанд үр дүнд хүрдэг.</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent/20 blur-[80px] rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-teal/20 blur-[80px] rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-brand-bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl mb-8">Удирдлагын <span className="italic font-normal text-brand-teal">баг</span></h2>
            <p className="text-brand-chalk text-xl max-w-2xl mx-auto font-light">
              Шинжлэх ухааны доктор, технологийн экспертүүд болон бизнесийн стратегичдын нэгдэл.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamCard 
              name="Д-р Р. Амартүвшин"
              role="CTO · Ph.D"
              bio="Япон улсад мехатроник, роботикийн чиглэлээр Ph.D хамгаалсан. МУИС-ийн дэд профессор бөгөөд Монгол дахь роботикийн хөгжилд тэргүүлэх үүрэгтэй оролцож буй эрдэмтэн."
              image="/amartuvshin.jpg"
            />
            <TeamCard 
              name="С. Эрдэнэбат"
              role="CEO"
              bio="Стартап Монгол ТББ-ын үүсгэн байгуулагч, технологийн энтрепренер. Стратеги, хөрөнгө оруулалт болон стартап экосистемийн хөгжилд үнэтэй хувь нэмэр оруулж буй эксперт."
              image="/erdenebat.jpg"
            />
            <TeamCard 
              name="Ц. Мөнхцогт"
              role="CPO"
              bio="UBCab болон Mongol Computing LLC-ийг үүсгэн байгуулагч. Компьютерын инженер мэргэжилтэй, технологийн салбарт 10 гаруй жил ажилласан, бүтээгдэхүүн хөгжүүлэлтийн арвин туршлагатай."
              image="/munkhtsogt.jpg"
            />
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-brand-teal text-brand-bg relative overflow-hidden flex items-center justify-center min-h-[60vh]">
        <div className="absolute inset-0 grid-pattern opacity-10 mix-blend-multiply" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30rem] font-serif text-black/5 leading-none select-none pointer-events-none">
          "
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-serif italic font-medium leading-tight mb-12 text-brand-bg"
          >
            "Технологи бол зөвхөн хэрэгсэл биш, харин Монгол улсын аж үйлдвэрийн ирээдүйг тодорхойлох хамгийн хүчирхэг хөдөлгүүр юм."
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="font-mono text-xs uppercase tracking-[0.3em] font-bold text-brand-bg/80"
          >
            — Daccom Partners
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-[4rem] p-12 md:p-24 relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-teal/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-5xl md:text-7xl mb-8">
                  Төслөө <span className="text-brand-teal italic font-serif font-normal">эхлүүлэхэд</span> <br /> бэлэн үү?
                </h2>
                <p className="text-xl text-brand-chalk mb-12 font-light leading-relaxed">
                  Бид таны бизнесийн онцлогт тохирсон технологийн шийдлийг боловсруулж, ирээдүйн өрсөлдөх чадварыг нэмэгдүүлнэ.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-brand-paper">
                    <div className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center border border-hairline">
                      <Mail size={18} className="text-brand-teal" />
                    </div>
                    <span>info@daccom.mn</span>
                  </div>
                  <div className="flex items-center gap-4 text-brand-paper">
                    <div className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center border border-hairline">
                      <Phone size={18} className="text-brand-teal" />
                    </div>
                    <span>+976 7700 0000</span>
                  </div>
                  <div className="flex items-center gap-4 text-brand-paper">
                    <div className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center border border-hairline">
                      <MapPin size={18} className="text-brand-teal" />
                    </div>
                    <span>Улаанбаатар, Монгол</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-brand-bg-card/30 backdrop-blur-xl p-10 rounded-[2.5rem] border border-brand-teal/20 shadow-[0_0_50px_rgba(6,182,212,0.05)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 to-transparent pointer-events-none" />
                <form className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-mono text-[9px] text-brand-chalk uppercase tracking-widest">Нэр</label>
                      <input type="text" className="w-full bg-brand-bg/50 border border-hairline rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/50 transition-all text-white" placeholder="Таны нэр" />
                    </div>
                    <div className="space-y-2">
                      <label className="font-mono text-[9px] text-brand-chalk uppercase tracking-widest">И-мэйл</label>
                      <input type="email" className="w-full bg-brand-bg/50 border border-hairline rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/50 transition-all text-white" placeholder="email@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[9px] text-brand-chalk uppercase tracking-widest">Мессеж</label>
                    <textarea className="w-full bg-brand-bg/50 border border-hairline rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/50 transition-all h-32 resize-none text-white" placeholder="Төслийн талаар товч..." />
                  </div>
                  <button className="w-full py-4 bg-white text-brand-bg rounded-2xl font-mono text-[11px] font-bold flex items-center justify-center gap-3 hover:bg-brand-teal hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    Илгээх <MessageSquare size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 md:px-12 lg:px-24 border-t border-hairline">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <Logo className="mb-8" />
            <p className="text-brand-chalk text-lg max-w-sm mb-10 font-light">
              Бид Монгол инженерийн ур ухааныг дэлхийн технологийн дэвшилтэй холбож байна.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-hairline flex items-center justify-center text-brand-chalk hover:text-brand-teal hover:border-brand-teal transition-all hover:-translate-y-1">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-hairline flex items-center justify-center text-brand-chalk hover:text-brand-teal hover:border-brand-teal transition-all hover:-translate-y-1">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-hairline flex items-center justify-center text-brand-chalk hover:text-brand-teal hover:border-brand-teal transition-all hover:-translate-y-1">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-hairline flex items-center justify-center text-brand-chalk hover:text-brand-teal hover:border-brand-teal transition-all hover:-translate-y-1">
                <Instagram size={16} />
              </a>
            </div>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-mono text-[10px] text-white mb-8 tracking-[0.2em]">Бүтээгдэхүүн</h4>
              <ul className="space-y-4">
                {["Техно-Гар", "AirQ", "Mining AI", "IoT Platform"].map(link => (
                  <li key={link}><a href="#" className="text-brand-chalk hover:text-brand-teal transition-colors text-sm font-light">{link}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-[10px] text-white mb-8 tracking-[0.2em]">Компани</h4>
              <ul className="space-y-4">
                {["Бидний тухай", "Баг", "Карьер", "Блог"].map(link => (
                  <li key={link}><a href="#" className="text-brand-chalk hover:text-brand-teal transition-colors text-sm font-light">{link}</a></li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-mono text-[10px] text-white mb-8 tracking-[0.2em]">Холбоо барих</h4>
              <p className="text-brand-chalk text-sm font-light mb-4">Улаанбаатар, Монгол</p>
              <p className="text-brand-paper text-sm font-medium">info@daccom.mn</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-hairline flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-mono text-[9px] text-brand-chalk/30">© 2026 DACCOM PARTNERS LLC. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="font-mono text-[9px] text-brand-chalk/30 hover:text-brand-teal transition-colors">Privacy Policy</a>
            <a href="#" className="font-mono text-[9px] text-brand-chalk/30 hover:text-brand-teal transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="h-8 md:h-9">
        <svg className="h-full w-auto" viewBox="198 90 360 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <title>Daccom Partners logo</title>
          <g opacity="0.55" stroke="#3B82F6" strokeWidth="1">
            <line x1="223" y1="165" x2="293" y2="165" />
            <line x1="223" y1="165" x2="258" y2="108" />
            <line x1="293" y1="165" x2="258" y2="108" />
            <line x1="223" y1="165" x2="293" y2="108" strokeWidth="0.5" opacity="0.4" />
          </g>
          <circle cx="223" cy="165" r="24" fill="#1D4ED8" />
          <circle cx="223" cy="165" r="5" fill="white" opacity="0.3" />
          <circle cx="258" cy="108" r="17" stroke="#1D4ED8" strokeWidth="2.5" />
          <circle cx="258" cy="108" r="4" fill="#1D4ED8" />
          <circle cx="293" cy="165" r="14" fill="#06B6D4" />
          <circle cx="293" cy="165" r="4" fill="white" opacity="0.35" />
          <circle cx="268" cy="139" r="3.5" fill="#06B6D4" opacity="0.85" />
          <line x1="332" y1="92" x2="332" y2="192" stroke="#334155" strokeWidth="1" />
          <text x="352" y="158" fill="#EDE9DF" style={{ fontFamily: 'Manrope, sans-serif', fontSize: '41px', fontWeight: 800 }}>DACCOM</text>
          <text x="354" y="183" fill="#94A8BE" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', fontWeight: 500 }}>PARTNERS</text>
        </svg>
      </div>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative w-full aspect-square flex items-center justify-center">
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 border border-brand-teal/10 rounded-full"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-10 border border-brand-accent/10 rounded-full border-dashed"
      />
      <div className="relative z-10 w-64 h-64 glass rounded-3xl flex items-center justify-center overflow-hidden group">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <Cpu size={80} className="text-brand-teal animate-pulse" />
        <div className="absolute bottom-4 left-4 right-4 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-1/2 h-full bg-brand-teal"
          />
        </div>
      </div>
      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-10 p-4 glass rounded-2xl border-brand-teal/20"
      >
        <Zap size={24} className="text-brand-teal" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 left-10 p-4 glass rounded-2xl border-brand-accent/20"
      >
        <Shield size={24} className="text-brand-accent" />
      </motion.div>
    </div>
  );
}

function BentoCard({ title, desc, icon, className = "", color = "white", visual, index = 0 }: any) {
  const colorClass = color === "teal" ? "text-brand-teal" : color === "accent" ? "text-brand-accent" : "text-white";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={`glass p-10 rounded-[2rem] flex flex-col justify-between group overflow-hidden relative ${className}`}
    >
      {visual}
      <div className={`relative z-10 ${colorClass} mb-6`}>
        {icon}
      </div>
      <div className="relative z-10">
        <h3 className="text-3xl mb-4 group-hover:text-brand-teal transition-colors">{title}</h3>
        <p className="text-brand-chalk font-light">{desc}</p>
      </div>
      <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowUpRight size={24} className="text-brand-teal" />
      </div>
    </motion.div>
  );
}

function ProductSection({ number, tag, title, desc, metrics, visual, reverse }: any) {
  return (
    <div className={`flex flex-col lg:flex-row items-center gap-20 mb-48 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      <div className="lg:w-1/2">
        <motion.div
          initial={{ opacity: 0, x: reverse ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="font-heading text-6xl text-brand-teal/20">{number}</span>
            <div className="h-[1px] w-12 bg-brand-teal/30" />
            <span className="font-mono text-[10px] text-brand-teal">{tag}</span>
          </div>
          <h3 className="text-5xl md:text-6xl mb-8">{title}</h3>
          <p className="text-xl text-brand-chalk mb-12 font-light leading-relaxed">
            {desc}
          </p>
          <div className="grid grid-cols-3 gap-8 border-t border-hairline pt-10">
            {metrics.map((m: any, i: number) => (
              <div key={i}>
                <p className="text-2xl text-white mb-2 font-medium">{m.val}</p>
                <p className="font-mono text-[8px] text-brand-chalk tracking-widest">{m.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="lg:w-1/2 w-full">
        <div className="glass rounded-[3rem] aspect-video flex items-center justify-center overflow-hidden relative group">
          <div className="absolute inset-0 grid-pattern opacity-10 group-hover:opacity-20 transition-opacity" />
          {visual}
        </div>
      </div>
    </div>
  );
}

function RobotVisual() {
  return (
    <div className="relative w-48 h-48 flex items-center justify-center">
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 border-2 border-brand-teal/20 rounded-full"
      />
      <div className="w-24 h-24 bg-brand-teal/10 rounded-full flex items-center justify-center animate-pulse">
        <Settings size={40} className="text-brand-teal animate-spin-slow" />
      </div>
      <motion.div 
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[1px] bg-brand-teal/50 shadow-[0_0_15px_rgba(6,182,212,0.5)]"
      />
    </div>
  );
}

function AirQVisual() {
  return (
    <div className="flex items-end gap-2 h-32">
      {[1, 2, 3, 4, 5, 6].map(i => (
        <motion.div 
          key={i}
          animate={{ height: [20, 100, 20] }}
          transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
          className="w-4 bg-brand-accent/40 rounded-full"
        />
      ))}
    </div>
  );
}

function TeamCard({ name, role, bio, image }: any) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="glass p-10 rounded-[2.5rem] group"
    >
      <div className="w-32 h-32 md:w-40 md:h-40 bg-brand-bg rounded-full mb-8 flex items-center justify-center border border-hairline group-hover:border-brand-teal transition-colors overflow-hidden mx-auto md:mx-0">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
        ) : (
          <span className="text-3xl font-heading text-brand-teal/30">{name[0]}</span>
        )}
      </div>
      <h4 className="text-2xl mb-2">{name}</h4>
      <p className="font-mono text-[9px] text-brand-accent mb-6 uppercase tracking-wider">{role}</p>
      <p className="text-brand-chalk font-light leading-relaxed text-sm">{bio}</p>
    </motion.div>
  );
}
