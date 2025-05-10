import styles from './AboutCource.module.css';

const AboutCourse = () => {
  const advantages = [
    {
      title: "ЗНАНИЕ С ГАРАНТИЕЙ!",
      msg: "ИЗУЧАЙТЕ КИБЕРБЕЗОПАСНОСТЬ У НАС\nСТАНЬТЕ ЭКСПЕРТОМ В СВОЕЙ ОБЛАСТИ",
      image: "/images/img.png", // ← обязательно укажи путь к картинке
      buttons: [
        {
          text: "ЗАПИСАТЬСЯ НА КУРС",
          onClick: () => (window.location.href = "/apply"),
        },
        {
          text: "ВСЕ КУРСЫ",
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
