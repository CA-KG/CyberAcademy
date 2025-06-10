import { useTranslation } from 'react-i18next';
import style from "../components/TeacherInAbout.module.css"

import '../i18n/client.ts';

export default function Teachers() {
  const { t } = useTranslation();
  
  const teachers = [
    {
      id: 1,
      name: "Кожонов М.",
      specialty: t("teacher1.specialty"),
      experience: t("teacher1.experience"),
      image: "/images/teachers/techerTest.png"
    },
    {
      id: 2,
      name: "Жалилов Г.",
      specialty: t("teacher2.specialty"),
      experience: t("teacher2.experience"),
      image: "/images/teachers/techerTest.png"
    },
    {
      id: 3,
      name: "Мамажанов А.",
      specialty: t("teacher3.specialty"),
      experience: t("teacher3.experience"),
      image: "/images/teachers/techerTest.png"
    },
    {
      id: 4,
      name: "Раимкулов Б.",
      specialty: t("teacher4.specialty"),
      experience: t("teacher4.experience"),
      image: "/images/teachers/techerTest.png"
    },
    {
      id: 5,
      name: "Беребин А.",
      specialty: t("teacher5.specialty"),
      experience: t("teacher5.experience"),
      image: "/images/teachers/techerTest.png"
    },
    {
      id: 6,
      name: "Гурьев А.",
      specialty: t("teacher6.specialty"),
      experience: t("teacher6.experience"),
      image: "/images/teachers/techerTest.png"
    },
    {
      id: 7,
      name: "Конушова К.",
      specialty: t("teacher7.specialty"),
      experience: t("teacher7.experience"),
      image: "/images/teachers/techerTest.png"
    }
  ];
  

  return (
    <section className={style.teamSection}>
      <div className="container">
        <h2 className={style.valuesSection}>{t('teachersSection.title')}</h2>
        <p className={style.sectionIntro}>{t('teachersSection.subtitle')}</p>
        
        <div className={style['teachers-grid']}>
          {teachers.map(teacher => (
            <div className={style['teacher-card']} key={teacher.id}>
              <div className={style['teacher-image']}>
                <img 
                  src={teacher.image} 
                  alt={teacher.name}
                  loading="lazy"
                  width={300}
                  height={300}
                />
                <div className={style['teacher-hover']}>
                  <button className={style['view-profile']} data-teacher-id={teacher.id}>Профиль</button>
                </div>
              </div>
              <div className={style['teacher-info']}>
                <h3>{teacher.name}</h3>
                <div className={style['specialty']}>{teacher.specialty}</div>
                <div className={style['experience']}>{teacher.experience}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}