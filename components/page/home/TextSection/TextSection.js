import styles from './TextSection.module.css';
import Link from 'next/link';

const TextSection = (props) => {
  const { title, text, moreUrl } = props;
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
      {moreUrl && (
        <Link href={moreUrl}>
          <a className={styles.more}>Read more</a>
        </Link>
      )}
    </div>
  );
};

export default TextSection;
