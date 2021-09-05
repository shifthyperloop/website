import Layout from '../../components/Layout/Layout';
import React from 'react';
import { useRef } from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './ContactUsPage.module.css';
import PageTop from '../../components/PageTop/PageTop';

const ContactUsPage = () => {
  const refName = useRef();
  const refEmail = useRef();
  const refMessage = useRef();
  const submitHandler = () => {
    const data = {
      name: refName.current.value,
      email: refEmail.current.value,
      message: refMessage.current.value,
    };
    const dataURI = Object.entries(data)
      .map(([key, val]) => key + '=' + encodeURIComponent(val))
      .join('&');
    fetch(
      'https://script.google.com/macros/s/AKfycby7djTgeLHEyQVW4ruOEBXsHQoJ5jldANy8_efvayGaB8Acyve1/exec?' +
        dataURI
    )
      .then(() => {
        // Nullstill sjema og si det gikk bra
        refName.current.value = '';
        refEmail.current.value = '';
        refMessage.current.value = '';
      })
      .catch(() => {
        // Si ifra at den feilet
        console.error('Could not fetch');
      });
  };
  return (
    <Layout
      url="https://www.shifthyperloop.com/contact"
      title="Shift Hyperloop | Contact us"
    >
      <div className={styles.container}>
        <PageTop
          title="Contact Us"
        />
        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <h2>Getting in touch is easy!</h2>
            <p>Klæbuveien 153, 7037 Trondheim</p>
            <p>
              <a href="mailto:contact@shifthyperloop.com">
                contact@shifthyperloop.com
              </a>
            </p>
            <p className={styles.some}>
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
            </p>
          </div>
          <div className={styles.contactForm}>
            <div className={styles.name}>
              <input
                type="text"
                name="name"
                autoFocus={true}
                placeholder="Name (optional)"
                className={styles.nameField}
                ref={refName}
              />
            </div>

            <div className={styles.email}>
              <input
                type="text"
                name="email"
                placeholder="Email"
                className={styles.emailField}
                ref={refEmail}
              />
            </div>

            <div className={styles.message}>
              <textarea
                type="text"
                name="message"
                placeholder="Message"
                className={styles.messageField}
                ref={refMessage}
              ></textarea>
            </div>

            <div className={styles.submit}>
              <button
                id="submit-form"
                className={styles.submitForm}
                onClick={submitHandler}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ContactUsPage;
