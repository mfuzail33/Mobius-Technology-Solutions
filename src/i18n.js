import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi) // Load translations via HTTP
  .use(LanguageDetector) // Detect language
  .use(initReactI18next) // Pass to react-i18next
  .init({
    supportedLngs: ['en', 'fr', 'es'], // Supported languages
    fallbackLng: 'en', // Default language if a user's language is not available
    detection: {
      order: ['path', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Path to translation files
    },
    react: {
      useSuspense: false,
    }
  });

export default i18n;
