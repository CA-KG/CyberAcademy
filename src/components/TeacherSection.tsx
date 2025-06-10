import React, { useState } from 'react';
import styles from './TeachersSection.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../i18n/client.ts';

const TeachersSection = () => {
  const { t } = useTranslation();

  const teachers = [
    { id: 1, name: "Кожонов М.", specialty: "teacher1.specialty", experience: "teacher1.experience" },
    { id: 2, name: "Жалилов Г.", specialty: "teacher2.specialty", experience: "teacher2.experience" },
    { id: 3, name: "Мамажанов А.", specialty: "teacher3.specialty", experience: "teacher3.experience" },
    { id: 4, name: "Раимкулов Б.", specialty: "teacher4.specialty", experience: "teacher4.experience" },
    { id: 5, name: "Беребин А.", specialty: "teacher5.specialty", experience: "teacher5.experience" },
    { id: 6, name: "Гурьев А.", specialty: "teacher6.specialty", experience: "teacher6.experience" },
    { id: 7, name: "Конушова К.", specialty: "teacher7.specialty", experience: "teacher7.experience" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 3;

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(prev - cardsPerPage, 0));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(prev + cardsPerPage, teachers.length - cardsPerPage));
  };

  const visibleTeachers = teachers.slice(currentIndex, currentIndex + cardsPerPage);

  return (
    <section className={styles.teachersSection}>
      <h2 className={styles.sectionTitle}>{t("teachersSection.title")}</h2>
      <p className={styles.sectionSubtitle}>{t("teachersSection.subtitle")}</p>

      <div className={styles.teachersWrapper}>
        <AnimatePresence mode="wait">
          {visibleTeachers.map(teacher => (
            <motion.div
              key={teacher.id}
              className={styles.teacherCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className={styles.teacherName}>{teacher.name}</h3>
              <p className={styles.teacherSpecialty}>{t(teacher.specialty)}</p>
              <p className={styles.teacherExperience}>{t(teacher.experience)}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div>
        <button className={styles.navButton} onClick={handlePrev} disabled={currentIndex === 0}>
          {t("teachersSection.prev")}
        </button>
        <button
          className={styles.navButton}
          onClick={handleNext}
          disabled={currentIndex + cardsPerPage >= teachers.length}
        >
          {t("teachersSection.next")}
        </button>
      </div>
    </section>
  );
};

export default TeachersSection;
