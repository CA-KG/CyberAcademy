// src/components/CourseProgram.tsx
import { useState } from "react";
import styles from "./CourseProgram.module.css";

interface Module {
  id: number;
  title: string;
  hours: number;
  format: string;
  topics: string[];
}

export default function CourseProgram() {
  const [activeModule, setActiveModule] = useState<number | null>(null);

  const modules: Module[] = [
    {
      id: 1,
      title: "Введение в кибербезопасность",
      hours: 6,
      format: "Лекция",
      topics: [
        "Основные понятия и цели кибербезопасности (2 часа)",
        "Классификация угроз и атак (2 часа)",
        "Ключевые принципы защиты информации (2 часа)",
      ],
    },
    // Добавьте остальные модули из документа
    {
      id: 2,
      title: "Сети: архитектура, протоколы, настройка",
      hours: 24,
      format: "Лекция + практика",
      topics: [
        "Основы построения сетей и архитектура TCP/IP (6 часа)",
        "Протоколы передачи данных (IP, TCP, UDP, ICMP, DNS, DHCP, HTTP, HTTPS) (6 часа)",
        "Настройка и администрирование локальных сетей (4 часа)",
      ],
    },
  ];

  const toggleModule = (id: number) => {
    setActiveModule(activeModule === id ? null : id);
  };

  return (
    <div className={styles.program}>
      {modules.map((module) => (
        <div key={module.id} className={styles.module}>
          <button
            className={styles.moduleHeader}
            onClick={() => toggleModule(module.id)}
          >
            <h3>
              {module.title} ({module.hours} часов)
            </h3>
            <span className={styles.arrow}>
              {activeModule === module.id ? "▼" : "▶"}
            </span>
          </button>
          {activeModule === module.id && (
            <div className={styles.moduleContent}>
              <p>
                <strong>Формат:</strong> {module.format}
              </p>
              <ul>
                {module.topics.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}