import React from 'react';
import { useTranslation } from 'react-i18next';
import "../../../i18n/client"
import styles from './AchivementsSection.module.css';

const AchivementsSection = () => {
  const { t } = useTranslation();

  const achievements = [
    { key: "graduates" },
    { key: "partners" },
    { key: "practice" },
    { key: "certifications" }
  ];

  return (
    <section >
        <h2 className={styles.achievementTitle}>{t("aboutPage.achievements.title")}</h2>
        <p className={styles.sectionIntro}>{t("aboutPage.achievements.description")}</p>

        <div className={styles.statsGrid}>
          {achievements.map((achievement) => (
            <div className={styles.statItem} key={achievement.key}>
              <span className={styles.statNumber} data-target={t(`aboutPage.achievements.items.${achievement.key}.number`)}>
                {t(`aboutPage.achievements.items.${achievement.key}.number`)}
              </span>
              <span className={styles.statTitle}>
                {t(`aboutPage.achievements.items.${achievement.key}.title`)}
              </span>
              <span className={styles.statDescription}>
                {t(`aboutPage.achievements.items.${achievement.key}.description`)}
              </span>
            </div>
          ))}
        </div>
    </section>
  );
};

export default AchivementsSection;
