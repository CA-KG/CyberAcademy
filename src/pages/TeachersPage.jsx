// src/pages/courses.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import "../i18n/client"


const TeachersPage =()=>{

    const {t} = useTranslation();

    const teachers = [
        {
          id: 1,
          name: "Кожонов М.",
          specialty: t('teacher1.specialty'),
          experience: t('teacher1.experience'),
          image: "/images/teachers/techerTest.png"
        },
        {
            id: 2,
            name: "Жалилов Г.",
            specialty: t('teacher2.specialty'),
            experience: t('teacher2.experience'),
            image: "/images/teachers/techerTest.png"
          },
          {
            id: 3,
            name: "Мамажанов А.",
            specialty: t('teacher3.specialty'),
            experience: t('teacher3.experience'),
            image: "/images/teachers/techerTest.png"
          },
          {
            id: 4,
            name: "Раимкулов Б",
            specialty: t('teacher4.specialty'),
            experience: t('teacher4.experience'),
            image: "/images/teachers/techerTest.png"
          },
          {
            id: 5,
            name: "Беребин А",
            specialty: t('teacher5.specialty'),
            experience: t('teacher5.experience'),
            image: "/images/teachers/techerTest.png"
          },
          {
            id: 6,
            name: "Гурьев А",
            specialty: t('teacher6.specialty'),
            experience: t('teacher6.experience'),
            image: "/images/teachers/techerTest.png"
          },
          {
            id: 7,
            name: "Конушова К.",
            specialty: t('teacher7.specialty'),
            experience: t('teacher7.experience'),
            image: "/images/teachers/techerTest.png"
          }
      ];
    return(
<main className="teachers-page">
    <section className="hero">
      <div className="container">
        <h1>{t('header.teachers')}</h1>
        <p className="subtitle">{t('teachersSection.teahcersTitle')}</p>
      </div>
    </section>

    <section className="teachers-section">
      <div className="container">
        <div className="teachers-grid">
          {teachers.map(teacher => (
            <div className="teacher-card">
              <div className="teacher-image">
                <img 
                  src={teacher.image} 
                  alt={teacher.name}
                  loading="lazy"
                  width="300"
                  height="300"
                />
              </div>
              <div className="teacher-info">
                <h3>{teacher.name}</h3>
                <div className="specialty">{teacher.specialty}</div>
                <div className="experience">{teacher.experience}</div>
                <div className="social-links">
                  <a href="#" aria-label="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"/>
                    </svg>
                  </a>
                 
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="cta">
      <div className="container">
        <h2>{t('teachersSection.actionText')}</h2>
        <a href="/apply" className="cta-button">{t('teachersSection.actionBtn')}</a>
      </div>
    </section>
    <style jsx>{`
<style>
  /* Общие стили */
  .teachers-page {
    color: #1e293b;
    background: #f8fafc;
    padding-bottom: 60px;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* Герой */
  .hero {
    background: linear-gradient(135deg, #2563eb, #1e40af);
    color: white;
    padding: 100px 0;
    text-align: center;
    margin-bottom: 40px;
  }

  .hero h1 {
    font-size: 2.8rem;
    margin-bottom: 15px;
  }

  .subtitle {
    font-size: 1.4rem;
    opacity: 0.9;
    font-weight: 300;
  }

  /* Сетка преподавателей */
  .teachers-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
    margin: 60px 0;
  }

  .teacher-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 6px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .teacher-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(0,0,0,0.15);
  }

  .teacher-image {
    height: 250px;
    overflow: hidden;
  }

  .teacher-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
  }

  .teacher-card:hover .teacher-image img {
    transform: scale(1.05);
  }

  .teacher-info {
    padding: 25px;
  }

  .teacher-info h3 {
    color: #1e40af;
    font-size: 1.5rem;
    margin: 0 0 10px 0;
  }

  .specialty {
    font-weight: 600;
    color: #334155;
    margin-bottom: 8px;
  }

  .experience {
    color: #64748b;
    font-size: 0.95rem;
    margin-bottom: 15px;
  }

  .social-links {
    display: flex;
    gap: 15px;
  }

  .social-links a {
    color: #64748b;
    transition: color 0.3s;
  }

  .social-links a:hover {
    color: #2563eb;
  }

  /* CTA */
  .cta {
    text-align: center;
    padding: 80px 0;
    background: #1e40af;
    color: white;
    margin-top: 40px;
  }

  .cta h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  .cta-button {
    display: inline-block;
    background: white;
    color: #1e40af;
    padding: 14px 32px;
    border-radius: 50px;
    font-weight: bold;
    text-decoration: none;
    font-size: 1.1rem;
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.2);
  }

  /* Адаптивность */
  @media (max-width: 768px) {
    .hero {
      padding: 70px 0;
    }
    
    .hero h1 {
      text-align: left;
      font-size: 40px;
    }
    
    .subtitle {
      text-align: left;
      font-size: 24px;
    }
    
    .teachers-grid {
      grid-template-columns: 1fr;
      margin: 40px 0;
    }
    
    .teacher-image {
      height: 200px;
    }
  }
</style>`}</style>
  </main>
    );
}
export default TeachersPage;
