import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: require('./en.json'),
  },
  am: {
    translation: require('./am.json'),
  },
};

i18n
  .use(initReactI18next) // Initializes i18next with react-i18next
  .init({
    compatibilityJSON: 'v3',
    resources,
    lng: 'en', // Set the default language (can be overridden later)
    fallbackLng: 'en',            // Other i18next options (optional)
    interpolation: {
      escapeValue: false 
    },
    react: {
      useSuspense:false,
   }
  });

export default i18n;