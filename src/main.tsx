import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import TechnoArmPage from './pages/TechnoArmPage.tsx';
import AirQPage from './pages/AirQPage.tsx';
import MiningAIPage from './pages/MiningAIPage.tsx';
import BrochurePage from './pages/BrochurePage.tsx';
import CareersPage from './pages/CareersPage.tsx';
import InsightsPage from './pages/InsightsPage.tsx';
import LegalPage from './pages/LegalPage.tsx';
import FAQPage from './pages/FAQPage.tsx';
import './index.css';
import './i18n/config';

function ScrollToTop() {
  const { pathname } = window.location;
  if (typeof window !== 'undefined') {
    window.scrollTo(0, 0);
  }
  return null;
}

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/techno-arm" element={<TechnoArmPage />} />
        <Route path="/airq" element={<AirQPage />} />
        <Route path="/mining-ai" element={<MiningAIPage />} />
        <Route path="/brochure" element={<BrochurePage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/legal" element={<LegalPage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
);
