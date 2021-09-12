import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Head from 'next/head';
import styles from './Layout.module.css'

const Layout = ({
  children,
  title = 'Shift Hyperloop',
  description = 'Shift is an independent non-profit organization founded in Trondheim by students from the Norwegian University of Science and Technology. Our goal is to drive the hyperloop technology forward and be in the forefront of developing the transportation technologies of tomorrow. To achieve our goal we design and build our own pods to compete in The Hyperloop Pod Competition hosted by SpaceX.',
  url = 'https://www.shifthyperloop.com',
  image = 'https://www.shifthyperloop.com/img/Logo(White_RightText).png',
}) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" type="image/png" href="/shift_icon.png" />
        <title>{title}</title>
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
