// src/pages/courses.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import "../i18n/client"
import CourseCard from "../components/CourseCard"; 
import ru from "../i18n/ru.json";

const CoursesPage = () => {
  const { t } = useTranslation();

  return (
    <main className="courses-page">
      <section className="hero">
        <div className="container">
          <h1>{t("courses.title")}</h1>
          <p className="subtitle">{t("courses.subtitle")}</p>
        </div>
      </section>

      <section className="courses-section">
        <div className="container">
          <CourseCard
            title={t("courses.networkEngineer.title")}
            duration={t("courses.networkEngineer.duration")}
            format="Очно"
            price="12'000 сом"
            image="/images/courses/imgNet.jpeg"
          >
            <ul className="course-features">
              <li>{t("courses.networkEngineer.feature1")}</li>
              <li>{t("courses.networkEngineer.feature2")}</li>
              <li>{t("courses.networkEngineer.feature3")}</li>
              <li>{t("courses.networkEngineer.feature4")}</li>
            </ul>
          </CourseCard>

          <CourseCard
            title={t("courses.cybersecurity.title")}
            duration={t("courses.networkEngineer.duration")}
            format="Очно"
            price="12'000 сом"
            image="/images/courses/imgCyberSec.png"
          >
            <ul className="course-features">
              <li>{t("courses.cybersecurity.feature1")}</li>
              <li>{t("courses.cybersecurity.feature2")}</li>
            </ul>
          </CourseCard>

          <CourseCard
            title={t("courses.sysadmin.title")}
            duration={t("courses.sysadmin.duration")}
            format="Очно"
            price="12'000 сом"
            image="/images/courses/imgSysAdm.png"
          >
            <ul className="course-features">
              <li>{t("courses.sysadmin.feature1")}</li>
              <li>{t("courses.sysadmin.feature2")}</li>
              <li>{t("courses.sysadmin.feature3")}</li>
            </ul>
          </CourseCard>
          <CourseCard
            title={t("courses.pcUp.title")}
            duration={t("courses.pcUp.duration")}
            format="Очно"
            price="Договорная"
            image="/images/courses/imgWin.jpeg"
          >
            <ul className="course-features">
              <li>{t("courses.pcUp.feature1")}</li>
              <li>{t("courses.pcUp.feature2")}</li>
              <li>{t("courses.pcUp.feature3")}</li>
            </ul>
          </CourseCard>

          <CourseCard
            title={t("courses.pcIron.title")}
            duration={t("courses.pcIron.duration")}
            format="Очно"
            price="12'000 сом"
            image="/images/courses/imgPc.jpeg"
          >
            <ul className="course-features">
              <li>{t("courses.pcIron.feature1")}</li>
              <li>{t("courses.pcIron.feature2")}</li>
              <li>{t("courses.pcIron.feature3")}</li>
            </ul>
          </CourseCard> 
        

          {/* Остальные курсы — аналогично */}
        </div>
      </section>
      <style jsx>{`  /* Общие стили */
  .courses-page {
    color: #1e293b;
    background: #f8fafc;
    padding-bottom: 60px;
  }

  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .hero {
    background: linear-gradient(135deg, #043570, #1e40af);
    color: white;
    padding: 100px 0;
    text-align: center;
    margin-bottom: 40px;
  }

  .hero h1 {
    font-size: 3rem;
    margin-bottom: 15px;
  }

  .subtitle {
    font-size: 1.5rem;
    opacity: 0.9;
    font-weight: 300;
  }

  /* Секция курсов */
  .courses-section {
    margin-top: 40px;
  }

  .course-features {
    padding-left: 20px;
    margin: 20px 0;
  }

  .course-features li {
    margin-bottom: 12px;
    position: relative;
    list-style-type: none;
  }

  .course-features li::before {
    content: "•";
    color: #043570;
    font-size: 1.5rem;
    position: absolute;
    left: -20px;
    top: -3px;
  }

  @media (max-width: 768px) {
    .hero {
      padding: 70px 0;
    }
    
    .hero h1 {
      text-align: left;
      font-size: 2.2rem;
    }
    
    .subtitle {
      text-align: left;
      font-size: 1.2rem;
    }
  }`
        
        }

      </style>
    </main>
  );
};

export default CoursesPage;
