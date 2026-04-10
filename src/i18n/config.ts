import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationMN from './locales/mn/translation.json';
import translationEN from './locales/en/translation.json';

const resources = {
  mn: {
    translation: translationMN
  },
  en: {
    translation: translationEN
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'mn',
    lng: 'mn', // Force Mongolian as default as requested
    interpolation: {
      escapeValue: false 
    },
    detection: {
      order: ['localStorage', 'cookie', 'navigator'],
      caches: ['localStorage', 'cookie']
    }
  });

export default i18n;
