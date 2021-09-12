import Link from 'next/link';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import styles from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={`${styles.header} ${menuOpen ? styles.open : ''}`}>
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <Link href="/">
            <a>
              <img src="/images/logo-header.png" alt="Shift Hyperloop logo" />
            </a>
          </Link>
        </div>
        <div className={styles.rightSide}>
          <a href="/joinus">Join the team</a>
          <a id="spons" href="/partners">
            Partners
          </a>
          <a id="newsltr" href="/posts">
            Newsletters
          </a>
          <span className={styles.dropDownLink}>
          <a href="/team2021">Team</a>
          <div className={styles.dropDownItems}>
            <a href="/team2021">Team 2021</a>
            <a href="/team2020">Team 2020</a>
            <a href="/team2019">Team 2019</a>
          </div>
        </span>
          <a href="/contact">Contact us</a>
        </div>
        <div className={styles.mobileMenuButton} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <MdClose size={30} /> : <GiHamburgerMenu size={30} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
