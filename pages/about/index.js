import Layout from '../../components/Layout/Layout';
import React from 'react';
import PageTop from '../../components/PageTop/PageTop';
import styles from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <Layout
      url="https://www.shifthyperloop.com/about"
      title="Shift Hyperloop | About Us"
    >
      <PageTop title="About Us" />
      <div className={styles.container}>
        <p>
          Shift Hyperloop is an independent non-profit organization founded in
          Trondheim by students from the Norwegian University of Science and
          Technology (NTNU). The team currently consists of about 60 members
          from various fields of study. Shift was officially founded 1. February
          2019 by 10 students with the goal of developing a green and efficient
          transportation method, using the engineers of tomorrow. Shift
          Hyperloop takes inspiration from many of the other student
          organisations at NTNU. As such Shift Hyperloop operates on a 1-year
          cycle where each year we enlist a completely new team that are tasked
          with designing and building a hyperloop pod. In 2021 Shift Hyperloop
          will test out our pod for the first time in the European Hyperloop
          Week in Spain, and we hope to test out the pod in SpaceX Hyperloop Pod
          Competition in the future.
        </p>
        <p>
          Shift Hyperloop enjoys a close and mutually beneficial relationship
          with NTNU. Shift consists entirely of NTNU students and gives them an
          opportunity to have a hands-on experience that is normally unavailable
          for engineering students. We also provide the university with
          potential bachelor- and master-theses for graduating students.
        </p>
        <p>
          Shift Hyperloop is primarily an organisation meant to teach and
          educate NTNU students, however we are also students who seek to help
          solve the massive challenges the world is facing. As such you can
          expect to see Shift advocating for green measures and further research
          on how we can combat climate change.
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;
