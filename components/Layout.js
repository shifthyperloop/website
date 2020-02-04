import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

class Layout extends Component {
  render() {
    const {
      children,
      title = 'Shift Hyperloop',
      description = 'Shift is an independent non-profit organization founded in Trondheim by students from the Norwegian University of Science and Technology. Our goal is to drive the hyperloop technology forward and be in the forefront of developing the transportation technologies of tomorrow. To achieve our goal we design and build our own pods to compete in The Hyperloop Pod Competition hosted by SpaceX.',
      url = 'https://www.shifthyperloop.com',
      image = 'https://www.shifthyperloop.com/img/Logo(White_RightText).png',
    } = this.props;
    return (
      <div className="layout">
        <Head>
          <link rel="shortcut icon" type="image/png" href="/shift_icon.png" />
          <meta property="og:url" content={url} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />
        </Head>
        <Header />
        <div className="content">{children}</div>
        <Footer />
        <style jsx global>{`
          :root {
            --width: 1200px;
          }
          body {
            margin: 0px;
            height: 100%;
            color: #ddd;
            font-family: 'Roboto Condensed', sans-serif;
            line-height: 1.5;
            background-color: #01030c;
            margin-top: 3.5rem;
          }
          a {
            color: #ddd;
          }
          .content {
            flex: 1;
          }
          .layout {
            display: flex;
            flex-direction: column;
            min-height: calc(100vh - 3.5rem);
          }
          .title {
            text-align: center;
          }
          .page-container {
            max-width: var(--width);
            width: 100%;
            margin: auto;
            text-align: center;
          }
        `}</style>
      </div>
    );
  }
}

export default Layout;
