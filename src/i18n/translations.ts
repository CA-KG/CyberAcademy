export const translations = {
    ru: {
      header: {
        home: "Главная",
        courses: "Курсы",
        teachers: "Преподаватели",
        about: "О нас",
        contacts: "Контакты"
      },
      buttons: {
        enroll: "Записаться",
        changeLang: "Кыргызча"
      }
    },
    kg: {
      header: {
        home: "Башкы бет",
        courses: "Курстар",
        teachers: "Окутуучулар",
        about: "Биз жөнүндө",
        contacts: "Байланыш"
      },
      buttons: {
        enroll: "Катталуу",
        changeLang: "По-русски"
      }
    }
  };
  
// src/i18n/translations.ts
interface Translations {
    [key: string]: {
      header: {
        home: string;
        courses: string;
        teachers: string;
        about: string;
        contacts: string;
      };
      buttons: {
        enroll: string;
        changeLang: string;
      };
    };
  }
  
  export const translations: Translations = {
    ru: {
      header: {
        home: "Главная",
        courses: "Курсы",
        teachers: "Преподаватели",
        about: "О нас",
        contacts: "Контакты"
      },
      buttons: {
        enroll: "Записаться",
        changeLang: "Кыргызча"
      }
    },
    kg: {
      header: {
        home: "Башкы бет",
        courses: "Курстар",
        teachers: "Окутуучулар",
        about: "Биз жөнүндө",
        contacts: "Байланыш"
      },
      buttons: {
        enroll: "Катталуу",
        changeLang: "По-русски"
      }
    }
  };
  
  export type Locale = keyof typeof translations;