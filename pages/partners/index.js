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
      description="Meet our amazing partners. Their support is what's making it possible to do what we love."
    >
      <TopImage image="/images/partners/topImage.jpg">
        <PageTop
          title="Partners"
          description="Meet our amazing partners. Their support is what's making it possible to do what we love."
        />
      </TopImage>
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
