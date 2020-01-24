import React, { Component } from 'react';
import Header from './Header';
import Head from 'next/head';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="layout">
        <Header />
        {children}
        <Head>
          <link rel="shortcut icon" type="image/png" href="/shift_icon.png" />
        </Head>
        <style jsx global>{`
          :root {
            --width: 1200px;
          }
          body {
            margin: 0px;
            color: #ddd;
            font-family: 'Roboto Condensed', sans-serif;
            line-height: 1.5;
            background-color: #01030c;
          }
          a {
            color: #ddd;
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
