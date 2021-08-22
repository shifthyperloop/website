import Link from 'next/link';
import Head from 'next/head';

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
    <footer className="footer">
      <div className="container">
        <div className="flex-column">
          <div className="facebook">
            <div className="copyright">
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
        <div className="main-sponsor">
          <a
            href="https://hevoldgroup.no/"
            target="_blank"
            className="hevold-logo"
          >
            <img
              src="/images/partners/footer/Hevold.png"
              className="hevold"
              alt="Hevold Group"
            />
          </a>
        </div>
        <div className="main-sponsor">
          <a href="https://no.ramboll.com" target="_blank">
            <img
              src="/images/partners/footer/Ramboll.png"
              className="ramboll"
              alt="Ramboll"
            />
          </a>
        </div>
        <div className="main-sponsor">
          <a
            href="https://alvaindustries.com"
            target="_blank"
            className="alva-logo"
          >
            <img
              src="/images/partners/footer/Alva.svg"
              className="alva"
              alt="Alva"
            />
          </a>
        </div>
        <div className="main-sponsor">
          <a
            href="https://www.hydro.com/no-NO/"
            target="_blank"
            className="hydro-logo"
          >
            <img
              src="/images/partners/footer/Hydro.png"
              className="hydro"
              alt="Hydro"
            />
          </a>
        </div>
      </div>
    </footer>
    <style jsx>{`
      .footer {
        background-color: #01020b;
        box-shadow: 2px 2px 10px #1a1a1a;
      }
      .copyright {
        width: 100%;
      }
      .container {
        box-sizing: border-box;
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        bottom: 0;
        margin: auto;
        margin-bottom: 30px;
        left: 0;
        bottom: 0;
        right: 0;
        padding: 16px 8px;
        max-width: 1200px;
      }
      .container > div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }
      .flex-column {
        display: flex;
        flex-direction: column;
      }
      .ramboll {
        width: 50%;
        margin: auto;
        margin-left: 15px;
      }
      .alva {
        width: 50%;
      }
      .alva-logo {
        width: 80%;
      }
      .hevold {
        width: 45%;
      }
      .hevold-logo {
        width: 80%;
      }
      .hydro {
        width: 35%;
      }
      .hydro-logo {
        width: 80%;
      }
      .main-sponsor,
      .flex-column {
        width: 20%;
        text-align: center;
      }
      @media (max-width: 1000px) {
        .flex-column {
          width: 100%;
          margin-bottom: 25px;
        }
        .main-sponsor {
          width: 25%;
        }
      }
    `}</style>
  </>
);

export default Footer;
