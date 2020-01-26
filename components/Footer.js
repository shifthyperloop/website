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
        <div className="main-sponsor">
          <a href="https://no.ramboll.com" target="_blank">
            <img src="/ramboll_w.png" className="ramboll" alt="Ramboll" />
          </a>
        </div>
        <div className="copyright">
          <p>Copyright &copy; Shift 2020</p>
        </div>
        <div className="facebook">
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
    </footer>
    <style jsx>{`
      .footer {
        box-shadow: 1px 0.3px 10px #888888;
      }
      .container {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        height: 10rem;
        bottom: 0;
        max-width: 1200px;
        margin: auto;
      }
      .ramboll {
        width: 316px;
        margin: auto;
        margin-left: 15px;
      }
      .main-sponsor,
      .copyright,
      .facebook {
        width: 33%;
        text-align: center;
      }
    `}</style>
  </>
);

export default Footer;
