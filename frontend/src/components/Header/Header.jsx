import React from "react";
import styles from './Header.module.css'; // Import the CSS Module
import searchIcon from '../../assets/search-icon.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header2}>
        <div className={styles.navLinks}>
          <div className={styles.navSection}>
            <Link to="/" className={styles.finNews}>FIN NEWS</Link>
            <Link to="/myfeed">My Feed</Link>
            <Link to="#">News</Link>
            <Link to="#">Schemes</Link>
            <Link to="#">Newsletter</Link>
          </div>
        </div>
        <div className={styles.actions}>
          <div className={styles.searchContainer}>
            <div className={styles.searchIconWrapper}>
              <input
                type="text"
                placeholder="Search"
                className={styles.searchInput}
              />
              <img src={searchIcon} alt="Search Icon" className={styles.searchIcon} />
            </div>
          </div>
          <button className={styles.loginSignUp}>Login / Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
