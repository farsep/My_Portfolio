import { useContext, useState } from 'react';
import styles from '../styles/Navbar.module.css';
import { LanguageContext } from "../context/LanguageContext.tsx";

const Navbar = () => {
  const { language, changeLanguage } = useContext(LanguageContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
      <div className='mt-2'>
        <nav className={styles.navbar}>
          <div className="flex space-x-4">
            <a href="#start" className={styles.navLink}>
              {language === 'English' ? 'Start' : 'Inicio'}
            </a>
            <a href="#about-me" className={styles.navLink}>
              {language === 'English' ? 'About Me' : 'Sobre Mí'}
            </a>
            <a href="#my-aspirations" className={styles.navLink}>
              {language === 'English' ? 'My Aspirations' : 'Mis Aspiraciones'}
            </a>
            <a href="#school-education" className={styles.navLink}>
              {language === 'English' ? 'School and Education' : 'Escuela y Educación'}
            </a>
            <a href="#jobs" className={styles.navLink}>
              {language === 'English' ? 'Jobs' : 'Trabajos'}
            </a>
          </div>
          <div className="relative">
            <button onClick={toggleDropdown} className={styles.dropdownButton}>
              {language}
            </button>
            {isDropdownOpen && (
                <div className={styles.dropdownMenu}>
                  <a onClick={() => changeLanguage('English')} className={styles.dropdownItem}>{language === 'English' ? 'English' : 'Ingles'}</a>
                  <a onClick={() => changeLanguage('Spanish')} className={styles.dropdownItem}>{language === 'English' ? 'Spanish' : 'Español'}</a>
                </div>
            )}
          </div>
        </nav>
      </div>
  );
};

export default Navbar;