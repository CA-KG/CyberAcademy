import styles from './CoursesSection.module.css';


interface Course {
  title: string;
  description: string;
  duration: string;
  level: string;
  bgImage: string;
}

const CoursesSection = () => {
  const courses: Course[] = [
    {
      title: "Сетевой инженер",
      description: "Полный курс по проектированию и настройке сетей",
      duration: "3 месяца",
      level: "Начальный → Профессионал",
      bgImage: "/images/courses/imgNet.jpeg"
    },
    {
      title: "Администрирование Linux",
      description: "Освоение серверных технологий на Linux",
      duration: "2.5 месяца",
      level: "Средний → Продвинутый",
      bgImage: "/images/courses/imglinux.jpeg"
    },
    {
      title: "Базы данных",
      description: "SQL, NoSQL и оптимизация запросов",
      duration: "2 месяца",
      level: "Начальный → Средний",
      bgImage: "/images/courses/imgSql.jpeg"
    },
    {
      title: "Windows Server",
      description: "Развертывание и управление серверами Windows",
      duration: "2 месяца",
      level: "Начальный → Средний",
      bgImage: "/images/courses/imgWin.jpeg"
    },
    {
      title: "Компьютерное железо",
      description: "Архитектура ПК и серверного оборудования",
      duration: "1.5 месяца",
      level: "Начальный",
      bgImage: "/images/courses/imgPc.jpeg"
    }
  ];

  return (
    <section className={styles.coursesSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Наши курсы</h2>
        <p className={styles.subtitle}>Профессиональная подготовка IT-специалистов</p>
        
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
                <span className={styles.level}>
                  <span className={styles.metaIcon}>📊</span>
                  {course.level}
                </span>
              </div>
              <button className={styles.detailsButton}  
              onClick={()=>window.location.href = "/courses"}>
                Подробнее о курсе
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;