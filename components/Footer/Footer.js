import Head from 'next/head';
import styles from './Footer.module.css';

const linkStyle = {
  marginRight: 15,
};

const Footer = () => (
  <>
    <Head>
      <script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.3"
      ></script>
    </Head>
    <div id="fb-root"></div>
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.flexColumn}>
          <div className="facebook">
            <div className={styles.copyright}>
              <p>Copyright &copy; Shift 2021</p>
            </div>
            <div
              className="fb-like"
              data-href="https://www.facebook.com/ShiftHyperloop/"
              data-width="100"
              data-layout="standard"
              data-action="like"
              data-size="small"
              data-share="true"
              data-colorscheme="dark"
            />
          </div>
        </div>
        <div className={styles.mainSponsor}>
          <a
            href="https://hevoldgroup.no/"
            target="_blank"
            className={styles.hevoldLogo}
          >
            <img
              src="/images/partners/footer/Hevold.png"
              className={styles.hevold}
              alt="Hevold Group"
            />
          </a>
        </div>
        <div className={styles.mainSponsor}>
          <a href="https://no.ramboll.com" target="_blank">
            <img
              src="/images/partners/footer/Ramboll.png"
              className={styles.ramboll}
              alt="Ramboll"
            />
          </a>
        </div>
        <div className={styles.mainSponsor}>
          <a
            href="https://alvaindustries.com"
            target="_blank"
            className={styles.alvaLogo}
          >
            <img
              src="/images/partners/footer/Alva.svg"
              className={styles.alva}
              alt="Alva"
            />
          </a>
        </div>
        <div className={styles.mainSponsor}>
          <a
            href="https://www.hydro.com/no-NO/"
            target="_blank"
            className={styles.hydroLogo}
          >
            <img
              src="/images/partners/footer/Hydro.png"
              className={styles.hydro}
              alt="Hydro"
            />
          </a>
        </div>
      </div>
    </footer>
  </>
);

export default Footer;
