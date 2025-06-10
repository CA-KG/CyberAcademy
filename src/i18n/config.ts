import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from '../i18n/ru.json';
import ky from '../i18n/ky.json';

i18n
  .use(initReactI18next)
  .init({
    lng: 'ru',
    fallbackLng: 'ru',
    resources: {
      ru: { translation: ru },
      ky: { translation: ky },
    },
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });

export default i18n;