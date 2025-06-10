import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from '../i18n/ru.json';
import ky from '../i18n/ky.json';


const savedLang = typeof window !== 'undefined' ? localStorage.getItem('lang') : null;

if (!i18n.isInitialized) {
  
  i18n
    .use(initReactI18next)
    .init({
      lng: savedLang || 'ru',
      fallbackLng: 'ru',
      resources: {
        ru: { translation: ru },
        ky: { translation: ky },
      },
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
    });

    
}

export default i18n;
