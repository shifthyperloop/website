import styles from './ImageSection.module.css';

const ImageSection = (props) => {
  const { src, alt, imageRight } = props;
  return (
    <div
      className={`${styles.container} ${imageRight ? styles.imageRight : ''}`}
    >
      <div className={styles.half}>
        <img src={src} alt={alt} />
      </div>
      <div className={styles.half}>
        <div className={styles.content}>{props.children}</div>
      </div>
    </div>
  );
};

export default ImageSection;
