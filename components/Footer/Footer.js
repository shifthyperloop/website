import Head from 'next/head';
import styles from './Footer.module.css';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import React from 'react';

const linkStyle = {
  marginRight: 15,
};

const Footer = () => (
  <>
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.sponsors}>
          <a
            className={styles.sponsor}
            href="https://hevoldgroup.no/"
            target="_blank"
          >
            <img
              src="/images/partners/footer/Hevold.png"
              alt="Hevold Group"
            />
          </a>
          <a
            className={styles.sponsor}
            href="https://no.ramboll.com"
            target="_blank">
            <img
              src="/images/partners/footer/Ramboll.png"
              alt="Ramboll"
            />
          </a>
          <a
            className={styles.sponsor}
            href="https://alvaindustries.com"
            target="_blank"
          >
            <img
              src="/images/partners/footer/Alva.svg"
              alt="Alva"
            />
          </a>
          <a
            className={styles.sponsor}
            href="https://www.hydro.com/no-NO/"
            target="_blank"
          >
            <img
              src="/images/partners/footer/Hydro.png"
              alt="Hydro"
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
        <p className={styles.copyright}>
          Copyright &copy; Shift 2021
        </p>
      </div>
    </footer>
  </>
);

export default Footer;
