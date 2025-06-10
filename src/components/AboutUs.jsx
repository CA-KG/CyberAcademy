
import React from 'react';
import styles from './Advantages.module.css'; 
import { useTranslation } from 'react-i18next';
import '../i18n/client.ts';
import About from '../pages/about.astro';


const AboutUs =()=>{

  const {t} = useTranslation();
  return (

<section id="about" class="about-section">
  <div class="floating-circles">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>

  </div>

  <div class="about-container">
    <div class="about-content">
      <h2 class="about-title">{t('aboutUs.title')}</h2>
      <p class="about-text">
       {t('aboutUs.desc')}<span class="highlight">{t('aboutUs.std')}</span> {t('aboutUs.desc2')}
      </p>
      <div class="about-stats">
        <div class="stat-item">
          <span class="stat-number">{t('aboutUs.statNum1')}</span>
          <span class="stat-label">{t('aboutUs.stat1dsc')}</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">{t('aboutUs.statNum2')}%</span>
          <span class="stat-label">{t('aboutUs.stat2dsc')}</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">{t('aboutUs.statNum3')}</span>
          <span class="stat-label">{t('aboutUs.stat3dsc')}</span>
        </div>
      </div>
      <a href="/about" class="about-button">{t('aboutUs.more')}</a>
    </div>
    <div class="about-image">
      <img 
        src="/images/imgTeachers.png" 
        alt="Наша команда" 
        width="600" 
        height="400"
        loading="lazy"
      />
    </div>
  </div>

  <style jsx>
    {`
    
  /* Основные стили секции (остаются без изменений) */
  .about-section {
    width: 100%;
    background: white;
    padding: 5rem 0;
    position: relative; /* Для позиционирования кругов */
    overflow: hidden; /* Чтобы круги не выходили за границы */
  }

  /* Стили для плавающих размытых кругов */
  .floating-circles {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 0; /* Круги под контентом */
  }

  .circle {
    position: absolute;
    border-radius: 50%;
    filter: blur(10px);
    opacity: .15; /* Уменьшаем прозрачность, чтобы не перебивать контент */
    animation: float 15s infinite ease-in-out;
  }

  /* Настройки кругов (цвета, размеры, позиции) */
  .circle:nth-child(1) {
    width: 200px;
    height: 200px;
    background: #0066ff;
    left: 10%;
    top: 20%;
  }

  .circle:nth-child(2) {
    width: 300px;
    height: 300px;
    background: #043570;
    left: 70%;
    top: 50%;
    animation-delay: 3s;
  }

  

  .circle:nth-child(3) {
    width: 150px;
    height: 150px;
    background: #0066ff;
    left: 30%;
    top: 70%;
    animation-delay: 6s;
  }
  .circle:nth-child(4) {
    width: 200px;
    height: 200px;
    background: #043570;
    left: 40%;
    top: 5%;
    animation-delay: 3s;
  }

  /* Анимация движения */
  @keyframes float {
    0%, 100% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(50px, -100px);
    }
    50% {
      transform: translate(-20px, 100px);
    }
    75% {
      transform: translate(30px, 20px);
    }
  }

  /* Остальные стили (без изменений) */
  .about-container {
    max-width: 100%;
    margin: 0 auto;
    padding-left: 200px;
    padding-right: 200px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    position: relative; /* Чтобы контент был поверх кругов */
    z-index: 1; /* Контент над кругами */
  }

  .about-title {
    font-size: 70px;
    color: #043570;
    margin-bottom: 1.5rem;
  }

  .about-text {
    font-size: 20px;
    line-height: 1.8;
    color: #334155;
    margin-bottom: 2rem;
  }

  .highlight {
    color: #0066ff;
    font-weight: 600;
  }

  .about-stats {
    display: flex;
    gap: 2rem;
    margin-bottom: 2.5rem;
  }

  .stat-item {
    text-align: center;
  }

  .stat-number {
    display: block;
    font-size: 50px;
    font-weight: 700;
    color: #043570;
    line-height: 1;
  }

  .stat-label {
    font-size: 0.9rem;
    color: #64748b;
  }

  .about-button {
    display: inline-block;
    margin-top: 80px;
    padding: 0.8rem 2rem;
    background: transparent;
    color: #043570;
    border: 2px solid #043570;
    border-radius: 50px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .about-button:hover {
    background: #043570;
    color: white;
    transform: translateY(-3px);
  }

  .about-image img {
    background: white;
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 1024px) {
    .about-container {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    
    .about-image {
      order: -1;
      max-width: 600px;
      margin: 0 auto;
    }
  }

  @media (max-width: 768px) {
    .about-stats {
      font-size: 18px;
      flex-wrap: wrap;
    }

    .about-title {
      font-size: 40px;
    }

    .about-container {
      max-width: 100%;
      margin: 0 auto;
      padding-left: 2rem;
      padding-right: 2rem;
      display: grid;
      grid-template-columns: 1fr;
      align-items: center;
    }

    .about-image {
      order: -1;
      max-width: 100%;
      margin: 0 auto;
    }

    .about-button {
      width: 80%;
      text-align: center;
    }
  }
`}
  </style>
</section>
  );

}
export default AboutUs;
