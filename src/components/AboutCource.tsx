import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './AboutCource.module.css';
import '../i18n/client.ts';


const AboutCourse = () => {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const advantages = [
    {
      title: t('course.title'),
      msg: t('course.msg'),
      image: "/images/img.png",
      buttons: [
        {
          text: t('course.apply'),
          onClick: () => (window.location.href = "/apply"),
        },
        {
          text: t('course.all'),
          onClick: () => {
            const section = document.getElementById("our-cource");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          },
        },
      ],
    },
  ];

  return (
    <div className={styles.advantagesContainer}>
      {advantages.map((advantage, index) => (
        <div key={index} className={styles.advantageItem}>
          <div className={styles.textContentWrapper}>
            <h2 className={styles.title}>{advantage.title}</h2>
            <p
              className={styles.msg}
              dangerouslySetInnerHTML={{
                __html: advantage.msg.replace(/\n/g, "<br />"),
              }}
            ></p>
            <div className={styles.buttons}>
              {advantage.buttons.map((button, btnIndex) => (
                <button key={btnIndex} onClick={button.onClick}>
                  {button.text}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.imageBlock}>
            <img
              src={advantage.image}
              alt="Курсы IT"
              className={styles.previewImage}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutCourse;