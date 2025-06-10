import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./FAQ.module.css";
import '../i18n/client.ts';


export default function FAQ() {
  const { t, ready } = useTranslation();

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (!ready) return null; // или загрузочный индикатор

  const faqDataRaw = t('faq.items', { returnObjects: true });
  const faqData = Array.isArray(faqDataRaw) ? faqDataRaw : [];

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <h2 className={styles.title}>{t("faq.title")}</h2>
      {faqData.map((item, index) => (
        <div key={index} className={styles.faqItem}>
          <button
            className={styles.question}
            onClick={() => toggleAnswer(index)}
          >
            {item.question}
            <span className={styles.icon}>
              {activeIndex === index ? "−" : "+"}
            </span>
          </button>
          <div
            className={`${styles.answerWrapper} ${
              activeIndex === index ? styles.open : styles.closed
            }`}
          >
            <div
              className={styles.answer}
              dangerouslySetInnerHTML={{ __html: item.answer }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
