import Layout from '../../components/Layout/Layout';
import React from 'react';
import styles from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <Layout
      url="https://www.shifthyperloop.com/abouthyperloop"
      title="Shift Hyperloop | About Hyperloop"
    >
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>About Hyperloop</h1>
        </div>
        <img className={styles.image} src="/images/homePage/Contact-hyperloop.png"></img>
        <p>
            Hyperloop is a technology where a vehicle, called a "pod", moves
            through a tube with low air pressure by levitating over the tracks.
            This minimizes the friction losses, something that makes the
            technology very energy efficient. The technology will make it possible
            to transport humans and cargo at speeds of about 1000 km/h. That makes
            it possible to travel a distance equal to Oslo-Trondheim in under half
            an hour!
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;
