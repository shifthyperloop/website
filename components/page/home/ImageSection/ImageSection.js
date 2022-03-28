import styles from './ImageSection.module.css';
import Image from 'next/image';

const ImageSection = (props) => {
  const { src, alt, imageRight, link } = props;
  return (
    <div
      className={`${styles.container} ${imageRight ? styles.imageRight : ''}`}
    >
      <div className={styles.half}>
        <Image src={src} alt={alt} layout="fill" objectFit="cover" />
      </div>
      <div className={styles.half}>
        <div className={styles.content}>{props.children}</div>
      </div>
    </a>
  );
};

export default ImageSection;
