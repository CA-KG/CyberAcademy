import React, { useEffect, useRef } from 'react';
import styles from './TeachersSection.module.css';


const TeachersSection = () => {
  const teachers = [
    {
      id: 1,
      name: "Кожонов М.",
      specialty: "Директор по ИТ-архитектуре",
      experience: "Опыт преподавания: более 4 лет",
      image: "/images/teachers/techerTest.png"
    },
    {
      id: 2,
      name: "Жалилов Г.",
      specialty: "Руководитель сектора информационной безопасности",
      experience: "Опыт в ИТ и ИБ: более 7 лет",
      image: "/images/teachers/techerTest.png"
    },
    {
      id: 3,
      name: "Мамажанов А.",
      specialty: "Менеджер по информационной безопасности",
      experience: "Опыт в ИТ и ИБ: более 5 лет",
      image: "/images/teachers/techerTest.png"
    },
    {
      id: 4,
      name: "Раимкулов Б",
      specialty: "Заведующий сектором внешней безопасности и анализа",
      experience: "Опыт в ИТ и ИБ: более 5 лет",
      image: "/images/teachers/techerTest.png"
    },
    {
      id: 5,
      name: "Беребин А",
      specialty: "Ведущий специалист отдела информационной безопасности",
      experience: "9 лет опыта",
      image: "/images/teachers/techerTest.png"
    },
    {
      id: 6,
      name: "Гурьев А",
      specialty: "Специалист управления информационной безопасности",
      experience: "9 лет опыта",
      image: "/images/teachers/techerTest.png"
    },
    {
      id: 7,
      name: "Конушова К.",
      specialty: "Специалист управления информационной безопасности",
      experience: "9 лет опыта",
      image: "/images/teachers/techerTest.png"
    }
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const scrollSpeed = 1; // Скорость прокрутки (пикселей за кадр)
  const pauseOnHover = true; // Пауза при наведении

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const scrollWrapper = scrollWrapperRef.current;
    if (!scrollContainer || !scrollWrapper) return;

    let animationFrameId: number;
    let isPaused = false;
    let direction = 1; // -1 = влево, 1 = вправо

    const autoScroll = () => {
      if (isPaused) {
        animationFrameId = requestAnimationFrame(autoScroll);
        return;
      }

      // Проверяем достижение границ
      if (scrollContainer.scrollLeft <= 0) {
        direction = 1; // Меняем направление
      } else if (scrollContainer.scrollLeft >= scrollWrapper.scrollWidth - scrollContainer.clientWidth) {
        direction = -1; // Меняем направление
      }

      scrollContainer.scrollLeft += direction * scrollSpeed;
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    // Запускаем автопрокрутку
    animationFrameId = requestAnimationFrame(autoScroll);

    // Обработчики для паузы при наведении
    const handleMouseEnter = () => pauseOnHover && (isPaused = true);
    const handleMouseLeave = () => pauseOnHover && (isPaused = false);

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className={styles.teachersSection}>
      <h2 className={styles.sectionTitle}>Наши преподаватели</h2>
      <p className={styles.sectionSubtitle}>Профессионалы с практическим опытом работы</p>
      
      <div 
        className={styles.teachersContainer} 
        ref={scrollContainerRef}
      >
        <div 
          className={styles.teachersScrollWrapper} 
          ref={scrollWrapperRef}
        >
          {teachers.map((teacher) => (
            <div key={teacher.id} className={styles.teacherCard}>
              <div className={styles.teacherImageContainer}>
                <img 
                  src={teacher.image} 
                  alt={teacher.name} 
                  className={styles.teacherImage}
                />
              </div>
              <div className={styles.teacherInfo}>
                <h3 className={styles.teacherName}>{teacher.name}</h3>
                <p className={styles.teacherSpecialty}>{teacher.specialty}</p>
                <p className={styles.teacherExperience}>{teacher.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Добавленный блок с дополнительной информацией */}
      <div className={styles.teachersFooter}>
        <p className={styles.teachersDescription}>
          Все наши преподаватели - практикующие специалисты с опытом работы в ведущих компаниях. 
          Они не только преподают, но и продолжают работать над реальными проектами, 
          что позволяет делиться с вами самыми актуальными знаниями.
        </p>
        <a 
  href="/teachers" 
  className={styles.moreButton}
  role="button"
>
  Узнать больше
</a>
      </div>
    </section>
  );
  
};

export default TeachersSection;