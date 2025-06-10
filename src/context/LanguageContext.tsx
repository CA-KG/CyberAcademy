import { createContext, useContext, useState } from 'react';
type Locale = 'ru' | 'kg';

type LanguageContextType = {
  locale: Locale;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState<Locale>('ru');
  
  const toggleLanguage = () => {
    setLocale(prev => prev === 'ru' ? 'kg' : 'ru');
  };

  return (
    <LanguageContext.Provider value={{ locale, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
export default LanguageContext;