import Image from 'next/image';
import styles from './Footer.module.css';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import React from 'react';

const Footer = () => (
  <>
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.sponsors}>
          <a
            className={styles.sponsor}
            href="https://hevoldgroup.no/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/images/partners/footer/Hevold.png"
              alt="Hevold Group"
              layout="fill"
              objectFit="contain"
            />
          </a>
          <a
            className={styles.sponsor}
            href="https://alvaindustries.com"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/images/partners/footer/Alva.svg"
              alt="Alva"
              layout="fill"
              objectFit="contain"
            />
          </a>
          <a
            className={styles.sponsor}
            href="https://www.hydro.com/no-NO/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/images/partners/footer/Hydro.png"
              alt="Hydro"
              layout="fill"
              objectFit="contain"
            />
          </a>
        </div>
        <div className={styles.socials}>
          <a href="https://www.facebook.com/ShiftHyperloop/">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/shift__hyperloop/">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/shift-hyperloop/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/shifthyperloop">
            <FaGithub />
          </a>
        </div>
        <p className={styles.copyright}>Copyright &copy; Shift 2022</p>
      </div>
    </footer>
  </>
);

export default Footer;
