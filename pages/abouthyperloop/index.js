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
        We have travelled in the same way for well over a century.  
        Our two ways of transportation: Airplanes and Trains, 
        are either bad for the environment or simply too slow for the modern world.  
        
        </p>
        <p>
        However, in 2013 an alternative was proposed! 
        The “Hyperloop Alpha” concept was revealed to the public.
        The hyperloop would be a high-speed transportation system utilizing near-vacuum tubes 
        in which pressurized vehicles travel. The air resistance and friction would negligent, 
        letting the vehicle travel in speeds of over 1200 km/h while still being energy efficient, 
        environmentally friendly, and more convenient than flying.
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;
