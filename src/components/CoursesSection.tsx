import styles from './CoursesSection.module.css';
import { useTranslation } from 'react-i18next';
import '../i18n/client.ts';



interface Course {
  title: string;
  description: string;
  duration: string;
  bgImage: string;
}

const CoursesSection = () => {
  const {t} = useTranslation();
  const courses: Course[] = [
    {
      title: t("courseSection.cyberSec.title"),
      description: t("courseSection.cyberSec.desc"),
      duration: t("courseSection.cyberSec.dur"),
      bgImage: "/images/courses/imgCyberSec.png"
    },
    {
      title:  t("courseSection.sysAdmin.title"),
      description: t("courseSection.sysAdmin.desc"),
      duration: t("courseSection.sysAdmin.dur"),
      bgImage: "/images/courses/imgSysAdm.png"
    },
    {
      title: t("courseSection.netEng.title"),
      description: t("courseSection.netEng.desc"),
      duration: t("courseSection.netEng.dur"),
      bgImage: "/images/courses/imgNet.jpeg"
    },
    {
      title: t("courseSection.upKnIC.title"),
      description: t("courseSection.upKnIC.desc"),
      duration: t("courseSection.upKnIC.dur"),
      bgImage: "/images/courses/imgNetEng.png"
    },
    {
      title: t("courseSection.upKnPC.title"),
      description: t("courseSection.upKnPC.desc"),
      duration: t("courseSection.upKnPC.dur"),
      bgImage: "/images/courses/imgPc.jpeg"
    }
  ];

  return (
    <section className={styles.coursesSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('courseSection.title')}</h2>
        <p className={styles.subtitle}>{t('courseSection.desc')}</p>
        
        <div className={styles.coursesGrid}>
          {courses.map((course, index) => (
            <div 
              key={index} 
              className={styles.courseCard}
              style={{
                '--bg-image': `url(${course.bgImage})`
              } as React.CSSProperties}
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.courseTitle}>{course.title}</h3>
              </div>
              <p className={styles.courseDesc}>{course.description}</p>
              <div className={styles.meta}>
                <span className={styles.duration}>
                  <span className={styles.metaIcon}>⏱️</span> 
                  {course.duration}
                </span>
               
              </div>
              <button className={styles.detailsButton}  
              onClick={()=>window.location.href = "/courses"}>
                {t('courseSection.more')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;