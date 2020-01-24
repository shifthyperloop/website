import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { CMS_BASE_URL } from '../common/constants';
import { useState, useEffect } from 'react';

const Sponsor = ({
  title,
  logo: { url: logoUrl = '' },
  type,
  url,
  description,
}) => {
  return (
    <div>
      {type === 'Platinum' ? (
        <>
          <a href={url} className="sponsor-text">
            <img src={CMS_BASE_URL + logoUrl} className="sponsor-2" />
          </a>
          <h3>{title}</h3> <h4>{description}</h4>
        </>
      ) : null}
      {type === 'Gold' ? (
        <>
          <a href={url} className="sponsor-3">
            <img src={CMS_BASE_URL + logoUrl} className="sponsor-3" />
          </a>
        </>
      ) : null}
      {type === 'Silver' ? (
        <>
          <a href={url} className="sponsor-4">
            <img src={CMS_BASE_URL + logoUrl} className="sponsor-4" />
          </a>
        </>
      ) : null}
      {type === 'Bronze' ? (
        <>
          <a href={url} className="sponsor-5">
            <img src={CMS_BASE_URL + logoUrl} className="sponsor-5" />
          </a>
        </>
      ) : null}
      <style jsx>{`
        h3,
        h4 {
          width: 500px;
          display: flex;
          flex-direction: row;
          justify-content: center;
        }

        .sponsor-2 {
          width: 500px;
          padding: 50px;
        }
        .sponsor-3 {
          width: 400px;
          padding-left: 50px;
        }
        .sponsor-4 {
          width: 200px;
          padding: 50px;
        }
        .sponsor-5 {
          width: 140px;
          padding: 50px;
        }
      `}</style>
    </div>
  );
};

const Page = ({ sponsors }) => {
  const router = useRouter();

  return (
    <Layout>
      <section className="page-container">
        <h1 className="title">Sponsors</h1>
        <h3 className="sponsor-description">
          Meet our amazing partners. Their support is what's making it possible
          to do what we love.
        </h3>
        <h2 className="platinum sponsors">
          <span>PLATINUM</span>
        </h2>
        <div className="sponsor-2">
          {sponsors
            .filter(sponsor => sponsor.type === 'Platinum')
            .map(sponsor => (
              <Sponsor {...sponsor} />
            ))}
        </div>
        <h2 className="gold sponsors">
          <span>GOLD</span>
        </h2>
        <div className="sponsor-3">
          {sponsors
            .filter(sponsor => sponsor.type === 'Gold')
            .map(sponsor => (
              <Sponsor {...sponsor} />
            ))}
        </div>
        <h2 className="silver sponsors">
          <span>SILVER</span>
        </h2>
        <div className="sponsor-4">
          {sponsors
            .filter(sponsor => sponsor.type === 'Silver')
            .map(sponsor => (
              <Sponsor {...sponsor} />
            ))}
        </div>
        <h2 className="bronze sponsors">
          <span>BRONZE</span>
        </h2>
        <div className="sponsor-5">
          {sponsors
            .filter(sponsor => sponsor.type === 'Bronze')
            .map(sponsor => (
              <Sponsor {...sponsor} />
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

        div {
          position: center;
        }
        .sponsor-3,
        .sponsor-4,
        .sponsor-5 {
          display: flex;
          flex-direction: row;
        }
        .team-photo {
          max-width: 100%;
        }
        .platinum.sponsors {
          color: #e5e4e2;
          font-size: 3.2rem;
        }

        .gold.sponsors {
          color: gold;
          font-size: 3.2rem;
        }

        .silver.sponsors {
          color: silver;
          font-size: 3.2rem;
        }

        .bronze.sponsors {
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
