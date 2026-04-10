import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Calculator, AlertTriangle, BrainCircuit, Wind, CheckCircle2, ArrowRight, Loader2, Sparkles, TrendingUp, Gauge, RotateCcw, Zap } from 'lucide-react';

/* ============================================================ */
/*  SMART TOOLS – Premium AI Assessment Suite                    */
/* ============================================================ */

export default function SmartTools() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('roi');

  const tabs = [
    { id: 'roi',       icon: <Calculator size={16} />,     label: t('tools.tabs.roi') },
    { id: 'risk',      icon: <AlertTriangle size={16} />,  label: t('tools.tabs.risk') },
    { id: 'readiness', icon: <BrainCircuit size={16} />,   label: t('tools.tabs.readiness') },
    { id: 'airq',      icon: <Wind size={16} />,           label: t('tools.tabs.airq') },
  ];

  return (
    <section className="py-40 px-6 md:px-12 lg:px-24 relative overflow-hidden" id="tools">
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(6,182,212,0.06)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.04)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-teal/30 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Sparkles size={14} className="text-brand-teal" />
            <span className="font-mono text-[10px] text-brand-teal tracking-widest">{t('tools.badge')}</span>
            <Sparkles size={14} className="text-brand-teal" />
          </div>
          <h2 className="text-5xl md:text-7xl mb-6">
            {t('tools.title')} <span className="text-brand-teal italic font-serif font-normal">{t('tools.title_italic')}</span>
          </h2>
          <p className="text-brand-chalk font-light max-w-2xl mx-auto leading-relaxed text-lg">
            {t('tools.description')}
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-mono text-[10px] uppercase tracking-wider transition-all duration-500 relative overflow-hidden ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-brand-teal to-cyan-400 text-brand-bg shadow-[0_0_30px_rgba(6,182,212,0.25)] font-bold'
                  : 'bg-brand-bg-card/30 backdrop-blur-md border border-hairline text-brand-chalk hover:text-white hover:border-brand-teal/50 hover:bg-brand-bg-card/50'
              }`}
            >
              {activeTab === tab.id && (
                <motion.div layoutId="activeGlow" className="absolute inset-0 bg-gradient-to-r from-brand-teal to-cyan-400 rounded-2xl" style={{ zIndex: -1 }} />
              )}
              {tab.icon} {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tool Container – main glass card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          {/* Glow ring behind the card */}
          <div className="absolute -inset-[1px] bg-gradient-to-br from-brand-teal/20 via-transparent to-purple-500/10 rounded-[3.5rem] blur-sm pointer-events-none" />

          <div className="glass rounded-[3rem] p-8 md:p-14 min-h-[560px] border-brand-teal/10 relative overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.6)]">
            {/* Ambient blobs inside */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-teal/[0.03] blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/[0.02] blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute inset-0 grid-pattern opacity-[0.04] pointer-events-none" />
            
            <AnimatePresence mode="wait">
              {activeTab === 'roi'       && <ROICalculator key="roi" />}
              {activeTab === 'risk'      && <RiskEstimator key="risk" />}
              {activeTab === 'readiness' && <ReadinessAssessment key="readiness" />}
              {activeTab === 'airq'      && <AirQCalculator key="airq" />}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================ */
/*  1. ROI CALCULATOR                                            */
/* ============================================================ */
function ROICalculator() {
  const { t } = useTranslation();
  const [employees, setEmployees] = useState(15);
  const [salary, setSalary] = useState(2.5);
  const [errorRate, setErrorRate] = useState(5);
  const [hoursPerDay, setHoursPerDay] = useState(8);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleCalculate = () => {
    setLoading(true);
    setTimeout(() => {
      const annualSalaryCost = employees * salary * 12;
      const automationRate = 0.45 + (errorRate * 0.01);
      const automatedSavings = annualSalaryCost * automationRate;
      const errorCostReduction = (annualSalaryCost * (errorRate / 100)) * 0.85;
      const overtimeSavings = employees * salary * 0.15 * (hoursPerDay > 8 ? (hoursPerDay - 8) / 8 : 0) * 12;
      const totalSavings = automatedSavings + errorCostReduction + overtimeSavings;
      const paybackMonths = Math.round(((employees * 12) / totalSavings) * 12);
      const efficiencyGain = Math.min(65, Math.round(automationRate * 100 + errorRate * 2));
      
      setResult({
        savings: totalSavings.toFixed(1),
        roiTime: `${paybackMonths}`,
        efficiency: `+${efficiencyGain}%`,
        breakdown: {
          labor: automatedSavings.toFixed(1),
          error: errorCostReduction.toFixed(1),
          overtime: overtimeSavings.toFixed(1),
        },
      });
      setLoading(false);
    }, 2200);
  };

  if (result) {
    return (
      <ResultView 
        title={t('tools.roi.title')}
        data={[
          { label: t('tools.roi.result.savings'), value: `${result.savings}`, unit: "сая ₮ / MNT M", accent: true  },
          { label: t('tools.roi.result.roi_time'), value: `${result.roiTime}`, unit: "сар / months" },
          { label: t('tools.roi.result.efficiency'), value: result.efficiency, unit: "Бүтээмж / Gain" },
        ]}
        cta={t('tools.roi.result.cta')}
        onReset={() => setResult(null)}
        extraContent={
          <div className="grid grid-cols-3 gap-3 mt-4">
            <MiniStat label="Хөдөлмөр" value={`${result.breakdown.labor}M`} />
            <MiniStat label="Алдаа" value={`${result.breakdown.error}M`} />
            <MiniStat label="Илүү цаг" value={`${result.breakdown.overtime}M`} />
          </div>
        }
      />
    );
  }

  return (
    <ToolLayout title={t('tools.roi.title')} desc={t('tools.roi.desc')} loading={loading} onCalculate={handleCalculate} btnText={t('tools.roi.calc_btn')}>
      <RangeSlider label={t('tools.roi.employees')} value={employees} min={1} max={200} suffix=" хүн" onChange={setEmployees} />
      <RangeSlider label={t('tools.roi.avg_salary')} value={salary} min={0.5} max={15} step={0.1} suffix="M ₮" onChange={setSalary} />
      <RangeSlider label={t('tools.roi.error_rate')} value={errorRate} min={0} max={25} suffix="%" onChange={setErrorRate} />
      <RangeSlider label="Өдрийн ажлын цаг / Daily hours" value={hoursPerDay} min={4} max={16} suffix=" цаг" onChange={setHoursPerDay} />
    </ToolLayout>
  );
}

/* ============================================================ */
/*  2. RISK ESTIMATOR                                            */
/* ============================================================ */
function RiskEstimator() {
  const { t } = useTranslation();
  const [q1, setQ1] = useState('2');
  const [q2, setQ2] = useState(3);
  const [q3, setQ3] = useState('2');
  const [costPerHour, setCostPerHour] = useState(5);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleCalculate = () => {
    setLoading(true);
    setTimeout(() => {
      let riskScore = 0;
      if (q1 === '3') riskScore += 35; else if (q1 === '2') riskScore += 18; else riskScore += 5;
      riskScore += Math.min(35, q2 * 7);
      if (q3 === '2') riskScore += 30; else if (q3 === '1') riskScore += 12; else riskScore += 3;

      let level = t('tools.risk.result.risk_low');
      let color = '#22c55e';
      if (riskScore > 60) { level = t('tools.risk.result.risk_high'); color = '#ef4444'; } 
      else if (riskScore > 30) { level = t('tools.risk.result.risk_med'); color = '#eab308'; }

      const annualLoss = (q2 * 24 * costPerHour * 1.3).toFixed(1);

      setResult({ level, color, score: riskScore, annualLoss });
      setLoading(false);
    }, 2200);
  };

  if (result) {
    return (
      <ResultView 
        title={t('tools.risk.title')}
        data={[
          { label: t('tools.risk.result.risk_level'), value: result.level, unit: `${result.score}% Score`, colorOverride: result.color },
          { label: "Жилийн алдагдал / Annual Loss", value: `${result.annualLoss}`, unit: "сая ₮ / MNT M" },
        ]}
        note={t('tools.risk.result.recommendation')}
        cta={t('tools.risk.result.cta')}
        onReset={() => setResult(null)}
        gauge={{ value: result.score, color: result.color }}
      />
    );
  }

  return (
    <ToolLayout title={t('tools.risk.title')} desc={t('tools.risk.desc')} loading={loading} onCalculate={handleCalculate} btnText={t('tools.risk.calc_btn')}>
      <OptionPicker label={t('tools.risk.q1')} value={q1} onChange={setQ1} options={[
        { value: '1', label: t('tools.risk.q1_o1') },
        { value: '2', label: t('tools.risk.q1_o2') },
        { value: '3', label: t('tools.risk.q1_o3') },
      ]} />
      <RangeSlider label={t('tools.risk.q2')} value={q2} min={0} max={12} suffix=" удаа" onChange={setQ2} />
      <OptionPicker label={t('tools.risk.q3')} value={q3} onChange={setQ3} options={[
        { value: '1', label: t('tools.risk.q3_o1') },
        { value: '2', label: t('tools.risk.q3_o2') },
        { value: '3', label: t('tools.risk.q3_o3') },
      ]} />
      <RangeSlider label="Зогсолтын цагийн зардал / Downtime cost (M₮/hr)" value={costPerHour} min={1} max={50} suffix="M ₮" onChange={setCostPerHour} />
    </ToolLayout>
  );
}

/* ============================================================ */
/*  3. AI READINESS ASSESSMENT                                   */
/* ============================================================ */
function ReadinessAssessment() {
  const { t } = useTranslation();
  const [q1, setQ1] = useState('2');
  const [q2, setQ2] = useState('2');
  const [q3, setQ3] = useState('2');
  const [q4, setQ4] = useState('2');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleCalculate = () => {
    setLoading(true);
    setTimeout(() => {
      let score = 0;
      const vals = [q1, q2, q3, q4];
      vals.forEach(v => { if (v === '3') score += 25; else if (v === '2') score += 13; else score += 4; });

      let verdict = "";
      let color = "#22c55e";
      if (score >= 75) { verdict = "Бүрэн бэлэн / Highly Ready"; color = "#22c55e"; }
      else if (score >= 45) { verdict = "Дунджид бэлэн / Moderately Ready"; color = "#eab308"; }
      else { verdict = "Нэмэлт бэлтгэл шаарда / Needs Preparation"; color = "#ef4444"; }

      setResult({ score, verdict, color });
      setLoading(false);
    }, 2200);
  };

  if (result) {
    return (
      <ResultView 
        title={t('tools.readiness.title')}
        data={[
          { label: t('tools.readiness.result.score'), value: `${result.score}`, unit: "/100 Оноо", accent: true },
          { label: "Дүгнэлт / Verdict", value: result.verdict, unit: "", colorOverride: result.color, smallValue: true },
        ]}
        note={t('tools.readiness.result.message')}
        cta={t('tools.readiness.result.cta')}
        onReset={() => setResult(null)}
        gauge={{ value: result.score, color: result.color }}
      />
    );
  }

  return (
    <ToolLayout title={t('tools.readiness.title')} desc={t('tools.readiness.desc')} loading={loading} onCalculate={handleCalculate} btnText={t('tools.readiness.calc_btn')}>
      <OptionPicker label={t('tools.readiness.q1')} value={q1} onChange={setQ1} options={[
        { value: '1', label: t('tools.readiness.q1_o1') },
        { value: '2', label: t('tools.readiness.q1_o2') },
        { value: '3', label: t('tools.readiness.q1_o3') },
      ]} />
      <OptionPicker label={t('tools.readiness.q2')} value={q2} onChange={setQ2} options={[
        { value: '1', label: t('tools.readiness.q2_o1') },
        { value: '2', label: t('tools.readiness.q2_o2') },
        { value: '3', label: t('tools.readiness.q2_o3') },
      ]} />
      <OptionPicker label="IT багийн хэмжээ / IT team capacity?" value={q3} onChange={setQ3} options={[
        { value: '1', label: 'Байхгүй / None' },
        { value: '2', label: '1-3 хүн / 1-3 people' },
        { value: '3', label: '4+ хүн / 4+ people' },
      ]} />
      <OptionPicker label="Удирдлагын AI дэмжлэг / Leadership buy-in?" value={q4} onChange={setQ4} options={[
        { value: '1', label: 'Хязгаарлагдмал / Limited' },
        { value: '2', label: 'Дунд зэрэг / Moderate' },
        { value: '3', label: 'Бүрэн дэмжсэн / Full support' },
      ]} />
    </ToolLayout>
  );
}

/* ============================================================ */
/*  4. AIRQ CALCULATOR                                           */
/* ============================================================ */
function AirQCalculator() {
  const { t } = useTranslation();
  const [area, setArea] = useState(120);
  const [people, setPeople] = useState(15);
  const [vent, setVent] = useState('2');
  const [ceilingH, setCeilingH] = useState(3);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleCalculate = () => {
    setLoading(true);
    setTimeout(() => {
      const volume = area * ceilingH;
      const co2PerPerson = 40; // litres CO2/hr per person
      const ambientCO2 = 400; // ppm outdoor
      const criticalCO2 = 1000; // ppm

      let ventFactor = 1;
      if (vent === '1') ventFactor = 0.3;
      else if (vent === '2') ventFactor = 0.7;

      // Time in hours for CO2 to reach 1000ppm
      const roomAirLitres = volume * 1000;
      const ppmRise = (co2PerPerson * people * ventFactor) / roomAirLitres * 1e6;
      const hoursToLimit = Math.max(0.5, (criticalCO2 - ambientCO2) / ppmRise);
      
      // Productivity decline based on studies
      const steadyStateCO2 = ambientCO2 + (co2PerPerson * people * ventFactor * 4) / roomAirLitres * 1e6;
      const prodLoss = Math.min(35, Math.max(3, ((steadyStateCO2 - 600) / 1000) * 20));
      const annualCost = (people * 2.5 * 12 * prodLoss / 100).toFixed(1);

      setResult({ 
        co2Time: hoursToLimit.toFixed(1),
        loss: prodLoss.toFixed(0),
        annualCost,
        steadyCO2: Math.round(steadyStateCO2),
      });
      setLoading(false);
    }, 2200);
  };

  if (result) {
    return (
      <ResultView 
        title={t('tools.airq.title')}
        data={[
          { label: t('tools.airq.result.co2'), value: `${result.co2Time}`, unit: "цаг / hours", accent: true },
          { label: t('tools.airq.result.loss'), value: `-${result.loss}%`, unit: "Бүтээмж / Output" },
          { label: "CO₂ тогтвортой түвшин", value: `${result.steadyCO2}`, unit: "ppm" },
        ]}
        note={t('tools.airq.result.recommendation')}
        cta={t('tools.airq.result.cta')}
        onReset={() => setResult(null)}
        extraContent={
          <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl">
            <p className="font-mono text-[10px] text-red-400 uppercase tracking-wider mb-1">Жилийн алдагдал / Annual Productivity Loss</p>
            <p className="text-2xl text-red-400 font-bold">{result.annualCost} <span className="text-sm font-normal">сая ₮</span></p>
          </div>
        }
      />
    );
  }

  return (
    <ToolLayout title={t('tools.airq.title')} desc={t('tools.airq.desc')} loading={loading} onCalculate={handleCalculate} btnText={t('tools.airq.calc_btn')}>
      <RangeSlider label={t('tools.airq.area')} value={area} min={15} max={1000} step={5} suffix=" м²" onChange={setArea} />
      <RangeSlider label={t('tools.airq.people')} value={people} min={1} max={200} suffix=" хүн" onChange={setPeople} />
      <RangeSlider label="Таазны өндөр / Ceiling height" value={ceilingH} min={2.5} max={6} step={0.1} suffix=" м" onChange={setCeilingH} />
      <OptionPicker label={t('tools.airq.ventilation')} value={vent} onChange={setVent} options={[
        { value: '1', label: `${t('tools.airq.no')} – Байгалийн / Natural` },
        { value: '2', label: 'Энгийн / Basic HVAC' },
        { value: '3', label: `${t('tools.airq.yes')} – Сайн / Modern HVAC` },
      ]} />
    </ToolLayout>
  );
}


/* ============================================================ */
/*  SHARED UI COMPONENTS                                         */
/* ============================================================ */

function ToolLayout({ title, desc, loading, onCalculate, btnText, children }: any) {
  return (
    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.4 }}>
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <Zap size={20} className="text-brand-teal" />
          <h3 className="text-2xl md:text-3xl font-heading">{title}</h3>
        </div>
        <p className="text-brand-chalk font-light mb-10 ml-8">{desc}</p>
        
        <div className="space-y-7 mb-12">
          {children}
        </div>

        <button 
          onClick={onCalculate}
          disabled={loading}
          className={`w-full py-5 rounded-2xl font-mono text-[11px] font-bold flex items-center justify-center gap-3 transition-all duration-500 relative overflow-hidden group ${
            loading 
              ? 'bg-brand-bg-card border border-brand-teal/30 text-brand-teal' 
              : 'bg-gradient-to-r from-brand-teal to-cyan-400 text-brand-bg hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] hover:scale-[1.02] active:scale-[0.98]'
          }`}
        >
          {!loading && <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />}
          {loading ? <LoadingSequence /> : <>{btnText} <ArrowRight size={18} /></>}
        </button>
      </div>
    </motion.div>
  );
}

function LoadingSequence() {
  const [step, setStep] = useState(0);
  const steps = ['Өгөгдөл цуглуулж байна...', 'AI модель ачаалж байна...', 'Шинжилгээ хийж байна...', 'Үр дүн бэлтгэж байна...'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setStep(prev => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-3">
      <Loader2 size={18} className="animate-spin" />
      <span className="transition-all">{steps[step]}</span>
      <div className="flex gap-1">
        {[0, 1, 2, 3].map(i => (
          <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i <= step ? 'bg-brand-teal' : 'bg-white/20'}`} />
        ))}
      </div>
    </div>
  );
}

function RangeSlider({ label, value, min, max, step = 1, suffix = '', onChange }: any) {
  const percentage = ((value - min) / (max - min)) * 100;
  
  return (
    <div className="space-y-3 group">
      <div className="flex justify-between items-center">
        <label className="font-mono text-[10px] text-brand-chalk uppercase tracking-wider leading-tight max-w-[70%]">{label}</label>
        <div className="flex items-center gap-1 px-3 py-1.5 bg-brand-teal/10 border border-brand-teal/20 rounded-xl">
          <span className="text-brand-teal font-bold text-sm tabular-nums">{value}</span>
          <span className="text-brand-teal/60 text-[10px]">{suffix}</span>
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 h-1.5 rounded-full bg-brand-bg-card w-full" />
        <div 
          className="absolute top-1/2 -translate-y-1/2 left-0 h-1.5 rounded-full bg-gradient-to-r from-brand-teal to-cyan-400 transition-all"
          style={{ width: `${percentage}%` }}
        />
        <input 
          type="range" min={min} max={max} step={step} value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-1.5 bg-transparent appearance-none cursor-pointer relative z-10 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-[0_0_15px_rgba(6,182,212,0.5)] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-brand-teal [&::-webkit-slider-thumb]:cursor-grab [&::-webkit-slider-thumb]:active:cursor-grabbing [&::-webkit-slider-thumb]:hover:scale-125 [&::-webkit-slider-thumb]:transition-transform"
        />
      </div>
    </div>
  );
}

function OptionPicker({ label, value, onChange, options }: any) {
  return (
    <div className="space-y-3">
      <label className="block font-mono text-[10px] text-brand-chalk uppercase tracking-wider">{label}</label>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {options.map((opt: any) => (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`px-4 py-3.5 rounded-xl text-sm transition-all duration-300 text-left ${
              value === opt.value
                ? 'bg-brand-teal/15 border-2 border-brand-teal text-white shadow-[0_0_15px_rgba(6,182,212,0.1)]'
                : 'bg-brand-bg/40 border border-hairline text-brand-chalk hover:border-brand-teal/40 hover:bg-brand-bg/60'
            }`}
          >
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full border-2 transition-all flex items-center justify-center ${
                value === opt.value ? 'border-brand-teal bg-brand-teal' : 'border-brand-chalk/30'
              }`}>
                {value === opt.value && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
              </div>
              <span className="text-xs font-light">{opt.label}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function MiniStat({ label, value }: any) {
  return (
    <div className="bg-brand-bg/30 border border-hairline rounded-xl p-3 text-center">
      <p className="font-mono text-[8px] text-brand-chalk uppercase tracking-wider mb-1">{label}</p>
      <p className="text-sm text-brand-teal font-medium">{value}</p>
    </div>
  );
}

function AnimatedGauge({ value, color }: { value: number; color: string }) {
  const [animValue, setAnimValue] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimValue(value), 100);
    return () => clearTimeout(timer);
  }, [value]);

  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (animValue / 100) * circumference;
  
  return (
    <div className="relative w-32 h-32 mx-auto my-4">
      <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
        <circle 
          cx="50" cy="50" r="45" fill="none" stroke={color} strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 1.5s ease-out' }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-3xl font-bold" style={{ color }}>{animValue}</span>
      </div>
    </div>
  );
}

function ResultView({ title, data, note, cta, onReset, extraContent, gauge }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto flex flex-col relative z-10"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-brand-teal/10 rounded-xl">
          <CheckCircle2 size={22} className="text-brand-teal" />
        </div>
        <div>
          <p className="font-mono text-[9px] text-brand-teal uppercase tracking-wider">Analysis Complete</p>
          <h3 className="text-xl font-heading">{title}</h3>
        </div>
      </div>

      {/* Gauge (optional) */}
      {gauge && <AnimatedGauge value={gauge.value} color={gauge.color} />}

      {/* Data cards */}
      <div className={`grid grid-cols-1 ${data.length >= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-4 mb-6`}>
        {data.map((item: any, i: number) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 + i * 0.15 }}
            className={`rounded-3xl p-6 backdrop-blur-sm relative overflow-hidden ${
              item.accent 
                ? 'bg-gradient-to-br from-brand-teal/15 to-brand-teal/5 border border-brand-teal/30' 
                : 'bg-brand-bg/40 border border-hairline'
            }`}
          >
            {item.accent && <div className="absolute top-0 right-0 w-20 h-20 bg-brand-teal/10 blur-[30px] rounded-full" />}
            <p className="font-mono text-[9px] text-brand-chalk uppercase tracking-widest mb-3 relative z-10">{item.label}</p>
            <p 
              className={`${item.smallValue ? 'text-lg' : 'text-3xl md:text-4xl'} font-bold mb-1 relative z-10`}
              style={{ color: item.colorOverride || (item.accent ? '#06b6d4' : '#ffffff') }}
            >
              {item.value}
            </p>
            {item.unit && <p className="text-xs text-brand-chalk/50 relative z-10">{item.unit}</p>}
          </motion.div>
        ))}
      </div>

      {extraContent}

      {/* Recommendation Note */}
      {note && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="bg-brand-accent/5 border border-brand-accent/15 rounded-2xl p-5 my-6">
          <div className="flex items-start gap-3">
            <TrendingUp size={18} className="text-brand-accent mt-0.5 shrink-0" />
            <p className="text-brand-chalk text-sm leading-relaxed">{note}</p>
          </div>
        </motion.div>
      )}

      {/* CTA Buttons */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="flex flex-col sm:flex-row gap-3 mt-4">
        <a 
          href="#contact" 
          className="flex-1 py-4 bg-gradient-to-r from-white to-gray-100 text-brand-bg rounded-2xl font-mono text-[11px] font-bold flex items-center justify-center gap-3 transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-[0.98]"
        >
          {cta} <ArrowRight size={16} />
        </a>
        <button 
          onClick={onReset}
          className="py-4 px-8 border border-hairline rounded-2xl font-mono text-[11px] text-brand-chalk hover:bg-white/5 hover:border-brand-teal/30 transition-all flex items-center justify-center gap-2"
        >
          <RotateCcw size={14} /> Reset
        </button>
      </motion.div>
    </motion.div>
  );
}
