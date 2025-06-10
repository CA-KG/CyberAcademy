import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ru: {
        translations: {
          "Каталог курсов": "Каталог курсов",
          "Записаться": "Записаться"
        }
      },
      ky: {
        translations: {
          "Каталог курсов": "Курстардын каталогу",
          "Записаться": "Катталуу"
        }
      }
    },
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;