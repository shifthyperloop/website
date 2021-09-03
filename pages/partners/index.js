import { useRouter } from 'next/router';
import Layout from '../../components/Layout/Layout';
import TopImage from '../../components/TopImage/TopImage';
import { CMS_BASE_URL } from '../../common/constants';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import styles from './PartnersPage.module.css';

const Sponsor = ({ title, logo, type, url, description }) => {
  return (
    <div>
      <a href={url} target="_blank" className={`sponsor ${type.toLowerCase()}`}>
        <img src={CMS_BASE_URL + logo} />
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
          margin-top: 30px;
        }
        .platinum img:nth-of-type(3) {
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

const PartnersPage = ({ sponsors }) => {
  const router = useRouter();

  return (
    <Layout
      url="http://www.shifthyperloop.com/partners"
      title="Shift Hyperloop | Sponsors"
      description="Meet our amazing partners. Their support is what's making it possible to do what we love."
    >
      <TopImage
        image="/images/partners/topImage.jpg"
        title="Partners"
        text="Meet our amazing partners. Their support is what's making it possible to do what we love."
      />
      <div className={styles.infoContainer}>
        <div className={styles.sponsorInformation}>
          <h3 className={styles.quote}>
            "Thank you all contributors for your patience, and willingness to
            help!"
          </h3>
          <hr />
          <h4 className={styles.partnerInfo}>
            The partners are everything for us, that is why we give them all
            this attention. If you are interested in being a partner, please{' '}
            <a className={styles.contact} href="/contact">
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
      <section className={styles.pageContainer} style={{'--width': '1200px'}}>
        <h2 className={`${styles.platinum} ${styles.sponsors}`}>
          <span>PLATINUM</span>
        </h2>
        <div className={styles.sponsorList}>
          {sponsors
            .filter((sponsor) => sponsor.type === 'Platinum')
            .map((sponsor) => (
              <Sponsor key={sponsor.title} {...sponsor} />
            ))}
        </div>
        <h2 className={`${styles.gold} ${styles.sponsors}`}>
          <span>GOLD</span>
        </h2>
        <div className={styles.sponsorList}>
          {sponsors
            .filter((sponsor) => sponsor.type === 'Gold')
            .map((sponsor) => (
              <Sponsor key={sponsor.title} {...sponsor} />
            ))}
        </div>
        <h2 className={`${styles.silver} ${styles.sponsors}`}>
          <span>SILVER</span>
        </h2>
        <div className={styles.sponsorList}>
          {sponsors
            .filter((sponsor) => sponsor.type === 'Silver')
            .map((sponsor) => (
              <Sponsor key={sponsor.title} {...sponsor} />
            ))}
        </div>
        <h2 className={`${styles.bronze} ${styles.sponsors}`}>
          <span>BRONZE</span>
        </h2>
        <div className={styles.sponsorList}>
          {sponsors
            .filter((sponsor) => sponsor.type === 'Bronze')
            .map((sponsor) => (
              <Sponsor key={sponsor.title} {...sponsor} />
            ))}
        </div>
      </section>
    </Layout>
  );
};

PartnersPage.getInitialProps = async function () {
  const res = await fetch(CMS_BASE_URL + '/sponsors');
  const data = await res.json();

  return {
    sponsors: data.map((sponsor) => {
      return {
        title: sponsor.Title,
        logo: sponsor.Logo.url,
        type: sponsor.Type,
        url: sponsor.Link,
        description: sponsor.Description,
      };
    }),
  };
};

export default PartnersPage;
