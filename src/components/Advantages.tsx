import React from 'react';
import styles from './Advantages.module.css'; 
import { useTranslation } from 'react-i18next';
import '../i18n/client.ts';



const Advantages = () => {
  const {t}  = useTranslation()
  const columns = [
    {
      title: t("advantages.title1"),
      items: t("advantages.items1", { returnObjects: true }) as string[],
    },
    {
      title: t("advantages.title2"),
      items: t("advantages.items2", { returnObjects: true }) as string[],
    },
    {
      title: t("advantages.title3"),
      items: t("advantages.items3", { returnObjects: true }) as string[],
    }
  ];
  

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{t("advantages.mainTitle")}</h2>
      <div className={styles.columnsContainer}>
        {columns.map((column, index) => (
          <div key={index} className={styles.column}>
            <h3 className={styles.columnTitle}>{column.title}</h3>
            <ul className={styles.list}>
            {Array.isArray(column.items) ? (
    column.items.map((item, itemIndex) => (
      <li key={itemIndex} className={styles.listItem}>{item}</li>
    ))
  ) : (
    <li className={styles.listItem}>Загрузка...</li>
  )}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;