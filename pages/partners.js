import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import TopImage from '../components/TopImage';
import { CMS_BASE_URL } from '../common/constants';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';

const Sponsor = ({
  title,
  logo: { url: logoUrl = '', hash: name = '', ext: specifier = ''},
  type,
  url,
  description,
}) => {
  return (
    <div>
      <a href={url} target="_blank" className={`sponsor ${type.toLowerCase()}`}>
        <img src={'/' + name + specifier} />
      </a>
      {type === 'Platinum' ? (
        <>
          <h3>{title}</h3>
          <h4>{description}</h4>
        </>
      ) : null}
      <style jsx>{`
        h3,
        h4 {
          width: 500px;
          max-width: calc(100vw - 1.5em);
          margin: auto;
        }

        .sponsor {
          margin: 0 50px 25px;
          display: blocK;
        }

        @media (max-width: 640px) {
          .sponsor {
            margin: 0;
          }
        }

        img {
          width: 140px;
          object-fit: contain;
        }
        .platinum img {
          width: 500px;
          height: 400px;
          max-width: 100vw;
        }
        .gold img {
          width: 400px;
          max-width: 100vw;
        }
        .silver img {
          width: 200px;
          max-width: 100vw;
        }
      `}</style>
    </div>
  );
};

const Page = ({ sponsors }) => {
  const router = useRouter();

  return (
    <Layout
      url="http://www.shifthyperloop.com/partners"
      title="Shift Hyperloop | Sponsors"
      description="Meet our amazing partners. Their support is what's making it possible to do what we love."
    >
      <TopImage
        image="/signering_bw_logo.jpg"
        title="Partners"
        text="Meet our amazing partners. Their support is what's making it possible to do what we love."
      />
      <div className="info-container">
        <div className="sponsor-information">
          <h3 className="quote">
            "Thank you all contributors for your patience, and willingness to
            help!"
          </h3>
          <hr />
          <h4 className="partner-info">
            The partners are everything for us, that is why we give them all
            this attention. If you are interested in being a partner, please{' '}
            <a className="contact" href="/contact">
              contact us
            </a>
            . Thank you to all the professors and advisors that have guided us
            and helped us stay on the right path. In addition to our partners,
            we would also like to thank our fellow teams for providing support
            and answering our questions, especially in the starting phases.
            <h4>
              Also, we would like to extend our gratitude to the SpaceX team for
              hosting the competition and inspiring young souls all around the
              world to extend the grasp of technology. Thank you all
              contributors for your patience, and willingness to help!
            </h4>
          </h4>
        </div>
      </div>
      <section className="page-container">
        <h2 className="platinum sponsors">
          <span>PLATINUM</span>
        </h2>
        <div className="sponsor-list">
          {sponsors
            .filter(sponsor => sponsor.type === 'Platinum')
            .map(sponsor => (
              <Sponsor key={sponsor.title} {...sponsor} />
            ))}
        </div>
        <h2 className="gold sponsors">
          <span>GOLD</span>
        </h2>
        <div className="sponsor-list">
          {sponsors
            .filter(sponsor => sponsor.type === 'Gold')
            .map(sponsor => (
              <Sponsor key={sponsor.title} {...sponsor} />
            ))}
        </div>
        <h2 className="silver sponsors">
          <span>SILVER</span>
        </h2>
        <div className="sponsor-list">
          {sponsors
            .filter(sponsor => sponsor.type === 'Silver')
            .map(sponsor => (
              <Sponsor key={sponsor.title} {...sponsor} />
            ))}
        </div>
        <h2 className="bronze sponsors">
          <span>BRONZE</span>
        </h2>
        <div className="sponsor-list">
          {sponsors
            .filter(sponsor => sponsor.type === 'Bronze')
            .map(sponsor => (
              <Sponsor key={sponsor.title} {...sponsor} />
            ))}
        </div>
      </section>

      <style jsx>{`
        body {
          background-image: linear-gradient(45deg, #01020b, #020610);
          background-repeat: no-repeat;
          background-size: cover;
          background-size: 9px 48px;
          text-align: center;
        }
        h1 {
          font-size: 50px;
        }
        h3 {
          text-align: center;
        }
        .contact {
          color: #0080c9;
          text-decoration: none;
        }
        .info-container {
          background-color: #fff2;
          box-shadow: 1px 0.3px 10px #000;
          box-shadow: 1px 0.5px 0px #000;
        }
        .sponsor-information {
          max-width: 1200px;
          margin: auto;
          display: flex;
          flex-direction: row;
        }
        .sponsor-image {
          background-image: url('/signering_bw_logo.jpg');
          background-attachment: fixed;
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
        }
        .sponsor-image > * {
          z-index: 1;
        }
        .sponsor-image::after {
          content: '';
          backdrop-filter: brightness(0.7);
          z-index: 0;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .quote {
          width: 30%;
          margin: 0 2.5%;
          color: #0080c9;
          text-align: center;
          margin: auto;
        }
        .partner-info {
          width: 60%;
          margin: 30px 2.5% 30px;
        }

        div {
          position: center;
        }
        .sponsor-list {
          display: flex;
          flex-flow: row wrap;
          justify-content: center;
          align-items: center;
        }

        .sponsors:not(:first-of-type) {
          margin-top: 0;
        }
        .sponsors.platinum {
          color: #ddd;
          font-size: 3.2rem;
        }

        .sponsor-image {
          width: 100%;
        }

        .sponsors.gold {
          color: #da4;
          margin-top: 50px;
          font-size: 3.2rem;
        }

        .sponsors.silver {
          color: silver;
          font-size: 3.2rem;
        }

        .sponsors.bronze {
          color: #b08d57;
          font-size: 3.2rem;
        }

        .sponsors {
          line-height: 0.5;
          text-align: center;
          font: 1em Georgia, Serif;
        }
        .sponsors span {
          display: inline-block;
          display: flex;
          align-items: center;
        }
        .sponsors span:before,
        .sponsors span:after {
          content: '';
          flex: 1 0 auto;
          height: 5px;
          margin: 0 15px;
          border-bottom: 1px solid white;
          border-top: 1px solid white;
        }
        .sponsors span:before {
        }
        .sponsors span:after {
        }

        .platinum.sponsor + div {
          display: flex;
          align-items: center;
          width: 50%;
        }
        @media (max-width: 640px) {
          .sponsor-information {
            flex-direction: column;
            padding: 32px 1em 0;
            width: 100%;
            box-sizing: border-box;
            text-align: justify;
          }
          hr {
            display: none;
          }
          .quote {
            width: 100%;
          }
          .partner-info {
            margin: 20px 0;
            width: 100%;
          }
        }
      `}</style>
    </Layout>
  );
};

Page.getInitialProps = async function() {
  const res = await fetch('http://shifthyperloop01.it.ntnu.no:1337' + '/sponsors');
  const data = await res.json();

  return {
    sponsors: data.map(sponsor => {
      return {
        title: sponsor.Title,
        logo: sponsor.Logo,
        type: sponsor.Type,
        url: sponsor.Link,
        description: sponsor.Description,
      };
    }),
  };
};

export default Page;
