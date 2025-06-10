// src/i18n/initServerI18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from '../i18n/ru.json';
import ky from '../i18n/ky.json';

export async function initServerI18n(lang: string) {
  const i18nInstance = i18n.createInstance(); // 🔄 новый экземпляр

  await i18nInstance
    .use(initReactI18next)
    .init({
      lng: lang,
      fallbackLng: 'ru',
      resources: {
        ru: { translation: ru },
        ky: { translation: ky },
      },
      interpolation: { escapeValue: false },
      react: { useSuspense: false },
    });

  return i18nInstance;
}
