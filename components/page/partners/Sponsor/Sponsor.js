import { CMS_BASE_URL } from '../../../../common/constants';
import styles from './Sponsor.module.css';

const Sponsor = ({ title, logo, tier, url, description }) => {
  return (
    <div>
      <a href={url} target="_blank" className={`${styles.sponsor} ${styles[tier.toLowerCase()]}`}>
        <img className={styles.image} src={CMS_BASE_URL + logo} />
      </a>
      {tier === 'Platinum' ? (
        <>
          <h3 className={styles.title}>{title}</h3>
          <h4 className={styles.description}>{description}</h4>
        </>
      ) : null}
    </div>
  );
};

export default Sponsor;