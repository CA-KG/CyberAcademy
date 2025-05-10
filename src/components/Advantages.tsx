import React from 'react';
import styles from './Advantages.module.css';

const Advantages = () => {
  const columns = [
    {
      title: 'Экспертные преподаватели',
      items: [
        'Преподаватели с 10+ годами опыта',
        'Действующие специалисты из топовых компаний',
        'Авторы профессиональных стандартов'
      ]
    },
    {
      title: 'Практическое обучение',
      items: [
        '80% времени - практические задания',
        'Работа на реальном оборудовании',
        'Лаборатории с современной техникой'
      ]
    },
    {
      title: 'Карьерные перспективы',
      items: [
        'Помощь в составлении резюме',
        'Доступ к закрытым вакансиям',
        'Подготовка к собеседованиям'
      ]
    }
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>ПОЧЕМУ СТОИТ УЧИТЬСЯ У НАС?</h2>
      <div className={styles.columnsContainer}>
        {columns.map((column, index) => (
          <div key={index} className={styles.column}>
            <h3 className={styles.columnTitle}>{column.title}</h3>
            <ul className={styles.list}>
              {column.items.map((item, itemIndex) => (
                <li key={itemIndex} className={styles.listItem}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;