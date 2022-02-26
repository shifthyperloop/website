import { useRouter } from 'next/router';
import Layout from '../../components/Layout/Layout';
import TopImage from '../../components/TopImage/TopImage';
import { CMS_BASE_URL } from '../../common/constants';
import fetch from 'isomorphic-unfetch';
import styles from './PartnersPage.module.css';
import Sponsor from '../../components/page/partners/Sponsor/Sponsor';
import PageTop from '../../components/PageTop/PageTop';

const PartnersPage = ({ sponsors }) => {
  const router = useRouter();

  return (
    <Layout
      url="http://www.shifthyperloop.com/partners"
      title="Shift Hyperloop | Sponsors"
      description="Meet our amazing sponsors. Their support is what's making it possible to do what we love."
    >
      <TopImage image="/images/wurth-deal.jpg">
        <PageTop
          title="Sponsors"
          description="Meet our amazing sponsors. Their support is what's making it possible to do what we love."
        />
      </TopImage>
      <section className={styles.pageContainer} style={{ '--width': '1200px' }}>
        <h2 className={`${styles.platinum} ${styles.sponsors}`}>
          <span>PLATINUM</span>
        </h2>
        <div className={styles.sponsorList}>
          {sponsors
            .filter((sponsor) => sponsor.tier === 'Platinum')
            .map((sponsor) => (
              <Sponsor key={sponsor.title} {...sponsor} />
            ))}
        </div>
        <h2 className={`${styles.gold} ${styles.sponsors}`}>
          <span>GOLD</span>
        </h2>
        <div className={styles.sponsorList}>
          {sponsors
            .filter((sponsor) => sponsor.tier === 'Gold')
            .map((sponsor) => (
              <Sponsor key={sponsor.title} {...sponsor} />
            ))}
        </div>
        <h2 className={`${styles.silver} ${styles.sponsors}`}>
          <span>SILVER</span>
        </h2>
        <div className={styles.sponsorList}>
          {sponsors
            .filter((sponsor) => sponsor.tier === 'Silver')
            .map((sponsor) => (
              <Sponsor key={sponsor.title} {...sponsor} />
            ))}
        </div>
        <h2 className={`${styles.bronze} ${styles.sponsors}`}>
          <span>BRONZE</span>
        </h2>
        <div className={styles.sponsorList}>
          {sponsors
            .filter((sponsor) => sponsor.tier === 'Bronze')
            .map((sponsor) => (
              <Sponsor key={sponsor.title} {...sponsor} />
            ))}
        </div>
      </section>
      <div className={styles.infoContainer}>
        <div className={styles.sponsorAd}>
          <h2 style={{ color: '#1670b8' }}>Want to contribute to our work?</h2>
          <h4 className={styles.partnerInfo}>
            The sponsors are everything for us, that is why we give them all
            this attention. If you are interested in being a sponsor, please{' '}
            <a className={styles.contact} href="/contact">
              contact us
            </a>
            . Thank you to all the professors and advisors that have guided us
            and helped us stay on the right path. In addition to our sponsors,
            we would also like to thank our fellow teams for providing support
            and answering our questions, especially in the starting phases.
          </h4>
          <div className={styles.imageContainer}>
            <img
              className={styles.image}
              src={'/images/logo-dark-text.png'}
            ></img>
          </div>
        </div>
      </div>
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
        tier: sponsor.Tier,
        url: sponsor.Link,
        description: sponsor.Description,
      };
    }),
  };
};

export default PartnersPage;
