
import React from 'react';
import { useTranslation } from 'react-i18next';
import "../../../i18n/client"
import styles from './CTASection.module.css';

const CTASection =()=>{

    const {t} = useTranslation();
    return(
<section id="contact">
      <div className="container">
        <div className={styles.ctaContent}>
          <h5 className={styles.ctaTitle}>{t('aboutPage.cta.title')}</h5>
          <p className={styles.ctaDesc}>{t('aboutPage.cta.desc')}</p>
          <a href="/apply" className={styles.ctaButton}>{t('aboutPage.cta.btnTitle')}</a>
        </div>
      </div>
    </section>
    );
}
export default CTASection;
