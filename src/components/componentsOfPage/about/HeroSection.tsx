import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../../i18n/client';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') || 'ru';
    if (i18n.language !== savedLang) {
      i18n.changeLanguage(savedLang).then(() => setReady(true));
    } else {
      setReady(true);
    }
  }, []);

  if (!ready) return null; // Или <div>Loading...</div>

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroAnimation}>
        <div className={styles.codeLine}></div>
        <div className={styles.codeLine}></div>
        <div className={styles.codeLine}></div>
      </div>
      <div className={styles.shieldIcon}>🛡️</div>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <h1
            className={`hero-title ${styles.title}`}
            dangerouslySetInnerHTML={{ __html: t('aboutPage.hero.title') }}
          />
          <p className={styles.subtitle}>{t('aboutPage.hero.subtitle')}</p>
          <div className={styles.heroButtons}>
            <a href="/courses" className={styles.ctaButton}>
              {t('aboutPage.hero.buttons.courses')}
            </a>
            <a href="/apply" className={`${styles.ctaButton} ${styles.secondary}`}>
              {t('aboutPage.hero.buttons.contact')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
