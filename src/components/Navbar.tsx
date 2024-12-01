import { useState } from 'react';
import StarShowerBackground from './StarShowerBackground';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [language, setLanguage] = useState('English');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    setIsDropdownOpen(false);
  };

  return (
    <div className='mt-2'>
      <nav className={styles.navbar}>
        <div className="flex space-x-4">
          <a href="#start" className={styles.navLink}>Start</a>
          <a href="#about-me" className={styles.navLink}>About Me</a>
          <a href="#my-aspirations" className={styles.navLink}>My Aspirations</a>
          <a href="#school-education" className={styles.navLink}>School and Education</a>
          <a href="#jobs" className={styles.navLink}>Jobs</a>
        </div>
        <div className="relative">
          <button onClick={toggleDropdown} className={styles.dropdownButton}>
            {language}
          </button>
          {isDropdownOpen && (
            <div className={styles.dropdownMenu}>
              <a onClick={() => changeLanguage('English')} className={styles.dropdownItem}>English</a>
              <a onClick={() => changeLanguage('Spanish')} className={styles.dropdownItem}>Spanish</a>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;