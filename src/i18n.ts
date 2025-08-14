import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: { translation: { tagline: "Where innovation meets perfection", cta: "Start your project" } },
  fr: { translation: { tagline: "Là où l'innovation rencontre la perfection", cta: "Démarrer votre projet" } },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
