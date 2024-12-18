import { useContext, useState } from 'react';
import styles from '../styles/Navbar.module.css';
import { LanguageContext } from '../context/LanguageContext.tsx';

const Navbar = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('LanguageContext must be used within a LanguageProvider');
  }
  const { language, changeLanguage } = context;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
      <div className='mt-2'>
        <nav className={styles.navbar}>
          <div className="flex space-x-4">
            <a className={styles.navLink}>
              {language === 'English' ? 'My Message' : 'Mi Mensaje'}
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