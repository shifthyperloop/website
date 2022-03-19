import Layout from '../../components/Layout/Layout';
import React from 'react';
import styles from './AboutPage.module.css';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <Layout
      url="https://www.shifthyperloop.com/about"
      title="Shift Hyperloop | About Us"
    >
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>About us</h1>
        </div>

        <div className={styles.image}>
          <Image
            src="/images/team/2022.jpg"
            alt="hyperloop"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <p>
          Shift Hyperloop is an independent non-profit organization founded in
          Trondheim by students from the Norwegian University of Science and
          Technology (NTNU). The team currently consists of approximately 60
          members from various fields of study. Shift was officially founded 1.
          February 2019 by ten students with the goal of developing a green and
          efficient transportation method based on Hyperloop technology.
        </p>
        <p>
          Shift Hyperloop enjoys a close and mutually beneficial relationship
          with NTNU. Shift consists entirely of NTNU students and gives them an
          opportunity to have a hands-on experience that is normally unavailable
          for engineering students. New students get an excellent opportunity to
          meet others with similar interests, work with more experienced
          students and build interdisciplinary relationships. We also provide
          the university with potential bachelor- and master-theses for
          graduating students.
        </p>
        <p>
          We are primarily an organisation meant to teach and educate NTNU
          students, however we are also students who seek to help solve the
          massive challenges the world is facing. As such you can expect to see
          Shift advocating for green measures and further research on how we can
          combat climate change.
        </p>
        <p>
          In 2022 Shift Hyperloop will test out our pod for the first time in
          the European Hyperloop Week in the Netherlands, where we compete
          against other university-teams from across the world
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;
