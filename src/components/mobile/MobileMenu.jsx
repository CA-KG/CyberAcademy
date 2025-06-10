import { useState, useEffect } from 'react';
import './MobileMenu.css'; // Создайте этот файл для стилей
import ClientText from '../ClientText';
import LanguageDropdown from '../LanguageSwitcher';

export default function MobileMenu({ navItems }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
    document.body.style.overflow = !menuOpen ? 'hidden' : '';
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      document.body.style.overflow = '';
    };
  }, []);

  if (!isMobile) return null;

  return (
    <>
     <LanguageDropdown />
      <button 
        className={`burger ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Меню"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
          {navItems.map((item) => (
  <li key={item.url} className="mobile-nav-item">
    <a 
      href={item.url} 
      className="mobile-nav-link"
      onClick={() => setMenuOpen(false)}
    >
      <ClientText client:load textKey={item.nameKey} />
    </a>
  </li>
))}
            
          </ul>
        </nav>
      </div>
    </>
  );
}