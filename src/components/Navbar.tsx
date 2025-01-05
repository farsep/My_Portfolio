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

  const getLanguageLabel = (currentLanguage: string, targetLanguage: string) => {
    const labels: { [key: string]: { [key: string]: string } } = {
      English: { English: 'English', Spanish: 'Spanish', Russian: 'Russian' },
      Spanish: { English: 'Ingles', Spanish: 'Español', Russian: 'Ruso' },
      Russian: { English: 'Английский', Spanish: 'Испанский', Russian: 'Русский' },
    };
    return labels[currentLanguage][targetLanguage];
  };

  return (
      <div className='mt-2'>
        <nav className={styles.navbar}>
          <div className="flex space-x-4">
            <a className={styles.navLink}>
              {language === 'English' ? 'My Message' : language === 'Spanish' ? 'Mi Mensaje' : 'Мое Сообщение'}
            </a>
          </div>
          <div className="relative">
            <button onClick={toggleDropdown} className={styles.dropdownButton}>
              {getLanguageLabel(language, language)}
            </button>
            {isDropdownOpen && (
                <div className={styles.dropdownMenu}>
                  <a onClick={() => { changeLanguage('English'); setIsDropdownOpen(false); }} className={styles.dropdownItem}>
                    {getLanguageLabel(language, 'English')}
                  </a>
                  <a onClick={() => { changeLanguage('Spanish'); setIsDropdownOpen(false); }} className={styles.dropdownItem}>
                    {getLanguageLabel(language, 'Spanish')}
                  </a>
                  <a onClick={() => { changeLanguage('Russian'); setIsDropdownOpen(false); }} className={styles.dropdownItem}>
                    {getLanguageLabel(language, 'Russian')}
                  </a>
                </div>
            )}
          </div>
        </nav>
      </div>
  );
};

export default Navbar;