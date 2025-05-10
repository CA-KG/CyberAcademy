import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import styles from './Slider.module.css'; // Импорт CSS-модуля

interface Slide {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const slides: Slide[] = [
  {
    title: "Учебный центр «Современные технологии»",
    description: "Мы помогаем специалистам получать актуальные знания...",
    buttonText: "подробнее",
    buttonLink: "/about"
  },
  {
    title: "Курсы по кибербезопасности",
    description: "Практическое обучение с экспертами...",
    buttonText: "узнать программу",
    buttonLink: "/courses"
  }
];

const Slider: React.FC = () => {
  return (
    <div className={styles.swiperContainer}>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ 
          clickable: true,
          el: `.${styles.paginationContainer}` // Для кастомной пагинации
        }}
        loop={true}
        speed={800}
        className={styles.mySwiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div className={styles.sliderBlock}>
              <p className={styles.sliderTitle}><span>{slide.title}</span></p>
              <p className={styles.sliderDescription}>{slide.description}</p>
              <a href={slide.buttonLink} className={styles.btn}>{slide.buttonText}</a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Контейнер для пагинации */}
      <div className={styles.paginationContainer}></div>
    </div>
  );
};

export default Slider;