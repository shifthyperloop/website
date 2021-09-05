import Link from 'next/link';
import Image from 'next/image';
import { CMS_BASE_URL } from '../../../../common/constants';
import styles from './Post.module.css';

const Post = ({ title, pid, picture, description }) => {
  return (
    <>
      <Link href={'/post/' + pid}>
        <a className={styles.post}>
          <Image
            src={CMS_BASE_URL + picture}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
          <div className={styles.postText}>
            <h2 className={styles.postTitle}>{title}</h2>
            <p className={styles.postDescription}>
              {description}
              <br />
              <br />
            </p>
          </div>
        </a>
      </Link>
    </>
  );
};

export default Post;