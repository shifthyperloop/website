import { CMS_BASE_URL } from '../../../../common/constants';
import { FiMail } from 'react-icons/fi';
import Image from 'next/image';
import styles from './Member.module.css';

const Member = ({ name, url, title, email, group, center = true }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {typeof url === 'string' ? (
          <Image
            src={CMS_BASE_URL + url}
            alt={name}
            height="200"
            width="200"
            objectFit="cover"
            objectPosition={center ? 'center' : 'top'}
            priority={true}
          />
        ) : null}
        <a
          href={''}
          className={styles.email}
          onMouseOver={(e) => (e.target.href = 'mailto:' + email)}
        >
          <FiMail size={35} className="mail-symbol" />
        </a>
      </div>

      <h3 className={styles.name}>{name}</h3>
      <h4 className={styles.title}>{title}</h4>
    </div>
  );
};

export default Member;
