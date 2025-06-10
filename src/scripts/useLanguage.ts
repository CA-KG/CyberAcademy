import { useState, useEffect } from 'react';

const useLanguage = () => {
  const getInitialLanguage = (): string => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('selectedLanguage') || 'ru';
    }
    return 'ru';
  };

  const [currentLanguage, setCurrentLanguage] = useState<string>(getInitialLanguage);

  const changeLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedLanguage', lang);
    }
  };

  useEffect(() => {
    setCurrentLanguage(getInitialLanguage());
  }, []);

  return { currentLanguage, changeLanguage };
};

export default useLanguage;