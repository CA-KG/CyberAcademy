import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../missionSection/MissionSection.module.css'; 
import "../../../../i18n/client.ts"

const MissionSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className={styles.missionSection}>
      <div className={styles.container}>
        <div className={styles.missionGrid}>
          <div className={styles.missionContent}>
            <h2>{t("aboutPage.mission.title")}</h2>
            <p>{t("aboutPage.mission.description")}</p>
            <ul className={styles.missionList}>
            <li>{t("aboutPage.mission.point1")}</li>
  <li>{t("aboutPage.mission.point2")}</li>
  <li>{t("aboutPage.mission.point3")}</li>
</ul>
          </div>
          <div className={styles.missionImage}>
            <img 
              src="/images/logo.svg" 
              alt={t('mission.imageAlt')} 
              width="600"
              height="400"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;