import styles from './Footer.module.css';
import { FaTelegramPlane, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import '../i18n/client.ts';
import { useTranslation } from 'react-i18next';


const Footer = () => {
  const {t} = useTranslation();
  return (
    <footer className={styles.footer}>
       <div className={styles.logoContainer}>
  <img src="/images/logo33.svg" alt="Логотип" className={styles.logoImage} />
</div>
      <div className={styles.container}>

        <div className={styles.column}>
        <h2 className={styles.mainTitle}>{t('footer.main')}</h2>
<ul className={styles.menuList}>
  <li><a href="/about">{t('footer.aboutUs')}</a></li>
  <li><a href="#advantages">{t('footer.adv')}</a></li>
  <li><a href="#faq">FAQ</a></li>
</ul>
        </div>

        {/* Вторая колонка - Все курсы */}
        <div className={styles.column}>
          <h2 className={styles.mainTitle}>{t('footer.courses')}</h2>
          <ul className={styles.menuList}>
            <li><a href='/courses'>Сетевой Инженер</a></li>
            <li><a href='/courses'>КИБЕРБЕЗОПАСНОСТЬ</a></li>
            <li><a href='/courses'>СИСТЕМНЫЙ АДМИНИСТРАТОР</a></li>
            <li><a href='/courses'>Повышение квалификации</a></li>
            <li><a href='/courses'>Компьютерное железо</a></li>
          </ul>
        </div>

        {/* Третья колонка - Адреса */}
        <div className={styles.column}>
          <h2 className={styles.mainTitle}>{t('footer.address')}</h2>
          <ul className={styles.addressList}>
            <li>
              <p> КР, г. Бишкек, ул. Байтик Баатыра 7/1</p>
            </li>
          </ul>
        </div>

        {/* Четвертая колонка - Контакты */}
        <div className={styles.column}>
          <h2 className={styles.mainTitle}>{t('footer.contacts')}</h2>
          <ul className={styles.contactList}>
            <li>+996 (504) 950 750</li>
          </ul>

          <p className={styles.email}>cyberacademy793@gmail.com</p>
        </div>
        
        
      </div>
      <div className={styles.socialIcons}>
  <a href="https://t.me/usonchik513" target="_blank" rel="noopener noreferrer">
    <FaTelegramPlane />
  </a>
  <a href="https://wa.me/501617666" target="_blank" rel="noopener noreferrer">
    <FaWhatsapp />
  </a>
  <a href="https://instagram.com/cyberacademy_kg" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </a>
</div>

    </footer>
  );
};

export default Footer;