import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Calculator, AlertTriangle, BrainCircuit, Wind, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';

export default function SmartTools() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('roi');

  const tabs = [
    { id: 'roi', icon: <Calculator size={18} />, label: t('tools.tabs.roi') },
    { id: 'risk', icon: <AlertTriangle size={18} />, label: t('tools.tabs.risk') },
    { id: 'readiness', icon: <BrainCircuit size={18} />, label: t('tools.tabs.readiness') },
    { id: 'airq', icon: <Wind size={18} />, label: t('tools.tabs.airq') }
  ];

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden" id="tools">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-brand-teal" />
            <span className="font-mono text-[10px] text-brand-teal tracking-widest">{t('tools.badge')}</span>
            <div className="w-8 h-[1px] bg-brand-teal" />
          </div>
          <h2 className="text-4xl md:text-6xl mb-6">
            {t('tools.title')} <span className="text-brand-teal italic font-serif font-normal">{t('tools.title_italic')}</span>
          </h2>
          <p className="text-brand-chalk font-light max-w-2xl mx-auto leading-relaxed">
            {t('tools.description')}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-mono text-[10px] uppercase tracking-wider transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-brand-teal text-brand-bg shadow-[0_0_20px_rgba(6,182,212,0.3)]'
                  : 'glass text-brand-chalk hover:text-white hover:border-brand-teal/50'
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Tool Component */}
        <div className="glass rounded-[3rem] p-8 md:p-12 min-h-[500px] border-brand-teal/20 relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-teal/5 blur-[100px] rounded-full pointer-events-none" />
          
          <AnimatePresence mode="wait">
            {activeTab === 'roi' && <ROICalculator key="roi" />}
            {activeTab === 'risk' && <RiskEstimator key="risk" />}
            {activeTab === 'readiness' && <ReadinessAssessment key="readiness" />}
            {activeTab === 'airq' && <AirQCalculator key="airq" />}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------
// 1. ROI CALCULATOR
// -----------------------------------------------------
function ROICalculator() {
  const { t } = useTranslation();
  const [employees, setEmployees] = useState(15);
  const [salary, setSalary] = useState(2.5);
  const [errorRate, setErrorRate] = useState(5);
  
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleCalculate = () => {
    setLoading(true);
    setTimeout(() => {
      const annualSalaryCost = employees * salary * 12;
      const automatedSavings = annualSalaryCost * 0.45; // Assume 45% efficiency gain
      const errorCostReduction = (annualSalaryCost * (errorRate / 100)) * 0.8;
      const totalSavings = automatedSavings + errorCostReduction;
      
      setResult({
        savings: totalSavings.toFixed(1),
        roiTime: "8-12",
        efficiency: "+45%"
      });
      setLoading(false);
    }, 1500);
  };

  if (result) {
    return (
      <ResultView 
        title={t('tools.roi.title')}
        data={[
          { label: t('tools.roi.result.savings'), value: `${result.savings} ₮`, unit: "сая / millions" },
          { label: t('tools.roi.result.roi_time'), value: `${result.roiTime}`, unit: "сар / months" },
          { label: t('tools.roi.result.efficiency'), value: result.efficiency, unit: "Өсөлт / Increase" }
        ]}
        cta={t('tools.roi.result.cta')}
        onReset={() => setResult(null)}
      />
    );
  }

  return (
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
      <div className="max-w-2xl mx-auto">
        <h3 className="text-3xl font-heading mb-2">{t('tools.roi.title')}</h3>
        <p className="text-brand-chalk font-light mb-10">{t('tools.roi.desc')}</p>
        
        <div className="space-y-8 mb-10">
          <SliderInput 
            label={t('tools.roi.employees')} value={employees} min={1} max={100} 
            onChange={(e: any) => setEmployees(Number(e.target.value))} 
          />
          <SliderInput 
            label={t('tools.roi.avg_salary')} value={salary} min={0.5} max={10} step={0.1}
            onChange={(e: any) => setSalary(Number(e.target.value))} 
          />
          <SliderInput 
            label={t('tools.roi.error_rate')} value={errorRate} min={0} max={20} 
            onChange={(e: any) => setErrorRate(Number(e.target.value))} 
          />
        </div>

        <AnalyzeButton loading={loading} onClick={handleCalculate} text={t('tools.roi.calc_btn')} />
      </div>
    </motion.div>
  );
}

// -----------------------------------------------------
// 2. RISK ESTIMATOR
// -----------------------------------------------------
function RiskEstimator() {
  const { t } = useTranslation();
  const [q1, setQ1] = useState('1');
  const [q2, setQ2] = useState('2');
  const [q3, setQ3] = useState('1');
  
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleCalculate = () => {
    setLoading(true);
    setTimeout(() => {
      let riskScore = 0;
      if (q1 === '3') riskScore += 40; else if (q1 === '2') riskScore += 20;
      if (Number(q2) > 3) riskScore += 30; else if (Number(q2) > 0) riskScore += 15;
      if (q3 === '2') riskScore += 30; else if (q3 === '1') riskScore += 10;

      let level = t('tools.risk.result.risk_low');
      let color = "text-green-400";
      if (riskScore > 60) {
        level = t('tools.risk.result.risk_high');
        color = "text-red-500";
      } else if (riskScore > 30) {
        level = t('tools.risk.result.risk_med');
        color = "text-yellow-500";
      }

      setResult({ level, color, score: riskScore });
      setLoading(false);
    }, 1500);
  };

  if (result) {
    return (
      <ResultView 
        title={t('tools.risk.title')}
        data={[
          { label: t('tools.risk.result.risk_level'), value: <span className={result.color}>{result.level}</span>, unit: `${result.score}% Эрсдэл` }
        ]}
        note={t('tools.risk.result.recommendation')}
        cta={t('tools.risk.result.cta')}
        onReset={() => setResult(null)}
      />
    );
  }

  return (
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
      <div className="max-w-2xl mx-auto">
        <h3 className="text-3xl font-heading mb-2">{t('tools.risk.title')}</h3>
        <p className="text-brand-chalk font-light mb-10">{t('tools.risk.desc')}</p>
        
        <div className="space-y-6 mb-10">
          <SelectInput label={t('tools.risk.q1')} value={q1} onChange={(e: any) => setQ1(e.target.value)}>
            <option value="1">{t('tools.risk.q1_o1')}</option>
            <option value="2">{t('tools.risk.q1_o2')}</option>
            <option value="3">{t('tools.risk.q1_o3')}</option>
          </SelectInput>
          <SliderInput 
            label={t('tools.risk.q2')} value={q2} min={0} max={10} 
            onChange={(e: any) => setQ2(e.target.value)} 
          />
          <SelectInput label={t('tools.risk.q3')} value={q3} onChange={(e: any) => setQ3(e.target.value)}>
            <option value="1">{t('tools.risk.q3_o1')}</option>
            <option value="2">{t('tools.risk.q3_o2')}</option>
            <option value="3">{t('tools.risk.q3_o3')}</option>
          </SelectInput>
        </div>

        <AnalyzeButton loading={loading} onClick={handleCalculate} text={t('tools.risk.calc_btn')} />
      </div>
    </motion.div>
  );
}

// -----------------------------------------------------
// 3. AI READINESS
// -----------------------------------------------------
function ReadinessAssessment() {
  const { t } = useTranslation();
  const [q1, setQ1] = useState('2');
  const [q2, setQ2] = useState('2');
  
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleCalculate = () => {
    setLoading(true);
    setTimeout(() => {
      let score = 0;
      if (q1 === '3') score += 50; else if (q1 === '2') score += 25;
      if (q2 === '3') score += 50; else if (q2 === '2') score += 25;

      setResult({ score });
      setLoading(false);
    }, 1500);
  };

  if (result) {
    return (
      <ResultView 
        title={t('tools.readiness.title')}
        data={[
          { label: t('tools.readiness.result.score'), value: `${result.score}/100`, unit: "Оноо / Index" }
        ]}
        note={t('tools.readiness.result.message')}
        cta={t('tools.readiness.result.cta')}
        onReset={() => setResult(null)}
      />
    );
  }

  return (
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
      <div className="max-w-2xl mx-auto">
        <h3 className="text-3xl font-heading mb-2">{t('tools.readiness.title')}</h3>
        <p className="text-brand-chalk font-light mb-10">{t('tools.readiness.desc')}</p>
        
        <div className="space-y-6 mb-10">
          <SelectInput label={t('tools.readiness.q1')} value={q1} onChange={(e: any) => setQ1(e.target.value)}>
            <option value="1">{t('tools.readiness.q1_o1')}</option>
            <option value="2">{t('tools.readiness.q1_o2')}</option>
            <option value="3">{t('tools.readiness.q1_o3')}</option>
          </SelectInput>
          <SelectInput label={t('tools.readiness.q2')} value={q2} onChange={(e: any) => setQ2(e.target.value)}>
            <option value="1">{t('tools.readiness.q2_o1')}</option>
            <option value="2">{t('tools.readiness.q2_o2')}</option>
            <option value="3">{t('tools.readiness.q2_o3')}</option>
          </SelectInput>
        </div>

        <AnalyzeButton loading={loading} onClick={handleCalculate} text={t('tools.readiness.calc_btn')} />
      </div>
    </motion.div>
  );
}

// -----------------------------------------------------
// 4. AIRQ CALCULATOR
// -----------------------------------------------------
function AirQCalculator() {
  const { t } = useTranslation();
  const [area, setArea] = useState(100);
  const [people, setPeople] = useState(10);
  const [vent, setVent] = useState('no');
  
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleCalculate = () => {
    setLoading(true);
    setTimeout(() => {
      // Basic math for simulation feel
      const volume = area * 3; // roughly 3m ceiling
      let hoursToLimit = (volume / people) * 0.15;
      if (vent === 'yes') hoursToLimit *= 3;
      
      const prodLoss = vent === 'no' ? Math.min(25, (people/area) * 100) : Math.min(8, (people/area) * 30);

      setResult({ 
        co2Time: hoursToLimit.toFixed(1),
        loss: prodLoss.toFixed(1)
      });
      setLoading(false);
    }, 1500);
  };

  if (result) {
    return (
      <ResultView 
        title={t('tools.airq.title')}
        data={[
          { label: t('tools.airq.result.co2'), value: `${result.co2Time}h`, unit: "Цаг / Hours" },
          { label: t('tools.airq.result.loss'), value: `-${result.loss}%`, unit: "Уналт / Decline" }
        ]}
        note={t('tools.airq.result.recommendation')}
        cta={t('tools.airq.result.cta')}
        onReset={() => setResult(null)}
      />
    );
  }

  return (
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
      <div className="max-w-2xl mx-auto">
        <h3 className="text-3xl font-heading mb-2">{t('tools.airq.title')}</h3>
        <p className="text-brand-chalk font-light mb-10">{t('tools.airq.desc')}</p>
        
        <div className="space-y-8 mb-10">
          <SliderInput label={t('tools.airq.area')} value={area} min={20} max={500} step={10} onChange={(e: any) => setArea(Number(e.target.value))} />
          <SliderInput label={t('tools.airq.people')} value={people} min={1} max={100} onChange={(e: any) => setPeople(Number(e.target.value))} />
          <SelectInput label={t('tools.airq.ventilation')} value={vent} onChange={(e: any) => setVent(e.target.value)}>
            <option value="yes">{t('tools.airq.yes')}</option>
            <option value="no">{t('tools.airq.no')}</option>
          </SelectInput>
        </div>

        <AnalyzeButton loading={loading} onClick={handleCalculate} text={t('tools.airq.calc_btn')} />
      </div>
    </motion.div>
  );
}

// -----------------------------------------------------
// UI HELPERS
// -----------------------------------------------------

function SliderInput({ label, value, min, max, step = 1, onChange }: any) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between font-mono text-[10px] text-brand-chalk uppercase tracking-widest">
        <label>{label}</label>
        <span className="text-brand-teal font-bold">{value}</span>
      </div>
      <input 
        type="range" min={min} max={max} step={step} value={value} onChange={onChange}
        className="w-full h-1.5 bg-brand-bg-card rounded-lg appearance-none cursor-pointer accent-brand-teal"
      />
    </div>
  );
}

function SelectInput({ label, value, onChange, children }: any) {
  return (
    <div className="space-y-3">
      <label className="block font-mono text-[10px] text-brand-chalk uppercase tracking-widest">{label}</label>
      <select 
        value={value} onChange={onChange}
        className="w-full bg-brand-bg/50 border border-hairline rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/50 text-white appearance-none"
      >
        {children}
      </select>
    </div>
  );
}

function AnalyzeButton({ loading, onClick, text }: any) {
  return (
    <button 
      onClick={onClick}
      disabled={loading}
      className={`w-full py-4 rounded-2xl font-mono text-[11px] font-bold flex items-center justify-center gap-3 transition-all ${
        loading 
          ? 'bg-brand-bg-card border border-brand-teal/30 text-brand-teal' 
          : 'bg-brand-teal text-brand-bg hover:bg-white shadow-[0_0_30px_rgba(6,182,212,0.2)]'
      }`}
    >
      {loading ? (
        <><Loader2 size={18} className="animate-spin" /> ANALYZING...</>
      ) : (
        <>{text} <ArrowRight size={18} /></>
      )}
    </button>
  );
}

function ResultView({ title, data, note, cta, onReset }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
      className="max-w-3xl mx-auto flex flex-col h-full"
    >
      <div className="flex items-center gap-3 mb-8 text-brand-teal">
        <CheckCircle2 size={24} />
        <h3 className="text-2xl font-heading">{title} Analysis Complete</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {data.map((item: any, i: number) => (
          <div key={i} className="bg-brand-bg/40 border border-brand-teal/20 rounded-3xl p-8 backdrop-blur-sm">
            <p className="font-mono text-[9px] text-brand-chalk uppercase tracking-widest mb-4">{item.label}</p>
            <p className="text-4xl md:text-5xl text-white font-medium mb-2">{item.value}</p>
            <p className="text-xs text-brand-accent">{item.unit}</p>
          </div>
        ))}
      </div>

      {note && (
        <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-2xl p-6 mb-8">
          <p className="text-brand-chalk text-sm leading-relaxed">{note}</p>
        </div>
      )}

      <div className="mt-auto flex flex-col sm:flex-row gap-4">
        <a href="#contact" className="flex-1 py-4 bg-white text-brand-bg rounded-2xl font-mono text-[11px] font-bold flex items-center justify-center gap-3 transition-all hover:bg-brand-teal hover:text-white shadow-[0_0_30px_rgba(255,255,255,0.2)]">
          {cta} <ArrowRight size={16} />
        </a>
        <button onClick={onReset} className="py-4 px-8 border border-hairline rounded-2xl font-mono text-[11px] text-brand-chalk hover:bg-white/5 transition-colors">
          Reset
        </button>
      </div>
    </motion.div>
  );
}
