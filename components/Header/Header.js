import Link from 'next/link';
import Image from 'next/image';
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
              <div className={styles.logo}>
                <Image
                  src="/images/logo-header.png"
                  alt="Shift Hyperloop logo"
                  height={58}
                  width={224}
                />
              </div>
            </a>
          </Link>
        </div>
        <div className={styles.rightSide}>
          <Link href="/joinus">
            <a>Join the team</a>
          </Link>
          <Link href="/partners">
            <a>Sponsors</a>
          </Link>
          <Link href="/pods">
            <a>The Pods</a>
          </Link>
          <Link href="/posts">
            <a>Newsletters</a>
          </Link>
          <span className={styles.dropDownLink}>
            <Link href="/team/2022">
              <a>Team</a>
            </Link>
            <div className={styles.dropDownItems}>
              <Link href="/team/2022">
                <a>Team 2022</a>
              </Link>
              <Link href="/team/2021">
                <a>Team 2021</a>
              </Link>
              <Link href="/team/2020">
                <a>Team 2020</a>
              </Link>
              <Link href="/team/2019">
                <a>Team 2019</a>
              </Link>
            </div>
          </span>
          <Link href="/contact">
            <a>Contact us</a>
          </Link>
        </div>
        <div
          className={styles.mobileMenuButton}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <MdClose size={30} /> : <GiHamburgerMenu size={30} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
