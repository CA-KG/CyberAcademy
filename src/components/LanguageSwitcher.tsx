import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import RU from 'country-flag-icons/react/3x2/RU';
import KG from 'country-flag-icons/react/3x2/KG';
import styles from './LanguageSwitcher.module.css';
import '../i18n/client.ts';

const languages = [
  { code: 'ru', name: 'Русский', Flag: RU },
  { code: 'ky', name: 'Кыргызча', Flag: KG }
];
const LanguageDropdown: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = i18n.language || 'ru';

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code).then(() => {
      localStorage.setItem('lang', code);
      setIsOpen(false);
    });
  };

  return (
    <div
      ref={dropdownRef}
      className={`${styles.languageSwitcher} ${isOpen ? styles.open : ''}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.currentLanguage}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {React.createElement(
          languages.find(l => l.code === currentLang)?.Flag || RU,
          { className: styles.flag }
        )}
        <span className={styles.label}>
          {currentLang === 'ru' ? 'Рус' : 'Кыр'}
        </span>
        <svg
          className={`${styles.arrow} ${isOpen ? styles.rotated : ''}`}
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
        >
          <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>

      {mounted && isOpen && (
        <div className={styles.dropdown}>
          {languages
            .filter(lang => lang.code !== currentLang)
            .map(lang => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={styles.languageOption}
              >
                {React.createElement(lang.Flag, { className: styles.flag })}
                <span>{lang.name}</span>
              </button>
            ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;