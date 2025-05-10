import styles from './Footer.module.css';
import { FaTelegramPlane, FaWhatsapp, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className={styles.footer}>
       <div className={styles.logoContainer}>
  <img src="/images/logo33.svg" alt="Логотип" className={styles.logoImage} />
</div>
      <div className={styles.container}>
        {/* Первая колонка - Главная */}
        <div className={styles.column}>
          <h2 className={styles.mainTitle}>ГЛАВНАЯ</h2>
          <ul className={styles.menuList}>
          
            <li><a href="/about" className=''>O НАС</a></li>
            <li><a href="#advantages">ПРЕИМУЩЕСТВА</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        {/* Вторая колонка - Все курсы */}
        <div className={styles.column}>
          <h2 className={styles.mainTitle}>ВСЕ КУРСЫ</h2>
          <ul className={styles.menuList}>
            <li><a href='/courses'>Сетевой Инженер</a></li>
            <li><a href='/courses'>Администрирование Linux</a></li>
            <li><a href='/courses'>Базы данных</a></li>
            <li><a href='/courses'>Windows Server</a></li>
            <li><a href='/courses'>Компьютерное железо</a></li>
          </ul>
        </div>

        {/* Третья колонка - Адреса */}
        <div className={styles.column}>
          <h2 className={styles.mainTitle}>АДРЕС</h2>
          <ul className={styles.addressList}>
            <li>
              <p>УП. ИНВАЛИЗОВА №1, ELI "VICTORY"</p>
            </li>
          </ul>
        </div>

        {/* Четвертая колонка - Контакты */}
        <div className={styles.column}>
          <h2 className={styles.mainTitle}>КОНТАКТЫ</h2>
          <ul className={styles.contactList}>
            <li>+996 (587) 000 000</li>
            <li>+996 (507) 000 000</li>
            <li>+996 (777) 000 000</li>
          </ul>

          <p className={styles.email}>testemail@gmail.com</p>
        </div>
        
        
      </div>
      <div className={styles.socialIcons}>
  <a href="https://t.me/your_channel" target="_blank" rel="noopener noreferrer">
    <FaTelegramPlane />
  </a>
  <a href="https://wa.me/996500000000" target="_blank" rel="noopener noreferrer">
    <FaWhatsapp />
  </a>
  <a href="https://instagram.com/your_account" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </a>
</div>

    </footer>
  );
};

export default Footer;