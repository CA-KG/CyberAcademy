import React from 'react';
import { useTranslation } from 'react-i18next';
import "../../../../i18n/client";
import styles from './CoursesSection.module.css';

interface Course {
  key: 'cybersecurity' | 'network' | 'admin';
}

const CoursesSection: React.FC = () => {
    const { t } = useTranslation();

    const courses: Course[] = [
        { key: 'cybersecurity' },
        { key: 'network' },
        { key: 'admin' }
    ];

    return (
        <section id="courses" className={styles.coursesSection}>
            <div className="container">
                <h2 className={styles.valuesSection}>{t('coursSection.courses.title')}</h2>
                <p className={styles.sectionIntro} >{t('coursSection.courses.description')}</p>

                
                <div className={styles.coursesGrid}>
                    {courses.map((course) => {
                        const features: string[] = t(`coursSection.courses.${course.key}.features`, { 
                            returnObjects: true,
                            defaultValue: [] // Fallback на пустой массив
                        }) as string[];

                        return (
                            <div className={styles.courseCard} key={course.key}>
                                <div className={styles.courseHeader}>
                                    <h3>{t(`coursSection.courses.${course.key}.title`)}</h3>
                                    <div className={styles.courseMeta}>
                                        <span>
                                            {t(`coursSection.courses.${course.key}.duration`)}
                                        </span>
                                    </div>
                                </div>
                                <ul className={styles.courseFeatures}>
                                    {features.map((feature: string, i: number) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                                <a href="/courses" className={styles.courseButton}>
                                    {t(`coursSection.courses.${course.key}.more`, 
                                      { defaultValue: "Курс тууралуу маалымат" })}
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default CoursesSection;