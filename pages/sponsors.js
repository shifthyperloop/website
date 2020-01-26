import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { CMS_BASE_URL } from '../common/constants';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';

const Sponsor = ({
  title,
  logo: { url: logoUrl = '' },
  type,
  url,
  description,
}) => {
  return (
    <div className="sponsor-list">
      <a href={url} target="_blank" className={`sponsor ${type.toLowerCase()}`}>
        <img src={CMS_BASE_URL + logoUrl} />
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
          margin: auto;
        }

        .sponsor {
          margin: 0 50px 25px;
          display: blocK;
        }

        img {
          width: 140px;
        }
        .platinum img {
          width: 500px;
        }
        .gold img {
          width: 400px;
        }
        .silver img {
          width: 200px;
        }
      `}</style>
    </div>
  );
};

const Page = ({ sponsors }) => {
  const router = useRouter();

  return (
    <Layout
      url="https://www.shifthyperloop.com/sponsors"
      title="Shift Hyperloop | Sponsors"
      description="Meet our amazing partners. Their support is what's making it possible to do what we love."
    >
      <div className="image-container">
        <img
          className="sponsor-image"
          src="https://image.shutterstock.com/image-vector/crowdfunding-vector-illustration-startup-investment-600w-1271931493.jpg"
          style={{ objectPosition: 'top', objectFit: 'cover' }}
        />
        <h1 className="title">Sponsors</h1>
        <h3 className="sponsor-description">
          Meet our amazing partners. Their support is what's making it possible
          to do what we love.
        </h3>
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
        .image-container {
          position: relative;
          text-align: center;
          color: white;
          width: 100%;
          height: 800px;
          display: inline-flex;
        }
        .image-container::before {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
        }
        .title {
          position: absolute;
          font: 5em Georgia, Serif;
          bottom: calc(20% - 10px);
          left: 50%;
          transform: translate(-50%, -50%);
          text-shadow: 2px 2px #000;
          overflow: hidden;
          white-space: nowrap;
        }

        .sponsor-description {
          position: absolute;
          font: 2em Georgia, Serif;
          max-width: 100%;
          bottom: calc(4% - 10px);
          left: 50%;
          transform: translate(-50%, -50%);
          text-shadow: 2px 2px #000;
          overflow: hidden;
          white-space: nowrap;
        }

        div {
          position: center;
        }
        .sponsor-list {
          display: flex;
          flex-flow: row wrap;
          justify-content: center;
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
          width: 600px;
        }
      `}</style>
    </Layout>
  );
};

Page.getInitialProps = async function() {
  const res = await fetch('https://cms.shifthyperloop.com/sponsors');
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
